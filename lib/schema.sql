-- ============================================================
-- Debenny Essentials — Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor after creating your project
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── ORDERS TABLE ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  order_type    TEXT NOT NULL CHECK (order_type IN ('custom', 'ready_to_wear', 'both')),
  item_name     TEXT,
  item_id       TEXT,
  item_price    NUMERIC(12, 2),
  size          TEXT,
  color         TEXT,
  details       TEXT,
  delivery_address TEXT,
  status        TEXT NOT NULL DEFAULT 'pending'
                CHECK (status IN ('pending', 'confirmed', 'in_progress', 'ready', 'dispatched', 'delivered', 'cancelled')),
  notes         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── CONTACT ENQUIRIES TABLE ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          TEXT NOT NULL,
  phone         TEXT NOT NULL,
  order_type    TEXT,
  message       TEXT NOT NULL,
  is_replied    BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── NEWSLETTER SUBSCRIBERS ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS subscribers (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email         TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── AUTO-UPDATE updated_at ────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ── ROW LEVEL SECURITY ────────────────────────────────────────────────────
-- Enable RLS on all tables
ALTER TABLE orders              ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_enquiries   ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers         ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to INSERT orders and enquiries (but not read others')
CREATE POLICY "Allow public to insert orders"
  ON orders FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public to insert enquiries"
  ON contact_enquiries FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public to insert subscribers"
  ON subscribers FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated (admin) users can read/update/delete
CREATE POLICY "Allow authenticated to read orders"
  ON orders FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated to update orders"
  ON orders FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated to read enquiries"
  ON contact_enquiries FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated to update enquiries"
  ON contact_enquiries FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated to read subscribers"
  ON subscribers FOR SELECT TO authenticated USING (true);

-- ── INDEXES ───────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_orders_status       ON orders (status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at   ON orders (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON contact_enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_replied    ON contact_enquiries (is_replied);
