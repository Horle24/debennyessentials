'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { shopItems } from '@/data';
import { useCart } from '@/context/CartContext';
import QuickView from '@/components/QuickView';

function formatPrice(n) {
  return '₦' + n.toLocaleString('en-NG');
}

function ProductCard({ item, onQuickView }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(item, item.sizes[0], item.colors[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className={styles.card}>
      {/* Image */}
      <div className={styles.imgWrap}>
        <Link href={`/shop/${item.id}`}>
          <img src={item.image} alt={item.name} className={styles.img} />
        </Link>
        {item.badge && <div className={styles.badge}>{item.badge}</div>}

        {/* Hover actions */}
        <div className={styles.hoverActions}>
          <button
            className={styles.quickViewBtn}
            onClick={() => onQuickView(item)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Quick View
          </button>
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <p className={styles.cat}>{item.category} · {item.type}</p>
        <Link href={`/shop/${item.id}`}>
          <h3 className={styles.name}>{item.name}</h3>
        </Link>
        <p className={styles.price}>{formatPrice(item.price)}</p>

        {/* Sizes strip */}
        <div className={styles.sizes}>
          {item.sizes.slice(0, 5).map((s) => (
            <span key={s} className={styles.size}>{s}</span>
          ))}
          {item.sizes.length > 5 && (
            <span className={styles.sizeMore}>+{item.sizes.length - 5}</span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          className={`${styles.addBtn} ${added ? styles.addBtnDone : ''}`}
          onClick={handleAdd}
          disabled={added}
        >
          {added ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Added!
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Add to Bag
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', "Women's", "Kids'"];
  const filtered = activeFilter === 'All'
    ? shopItems
    : shopItems.filter((i) => i.category.toLowerCase().includes(activeFilter.replace("'", '').toLowerCase()));

  return (
    <div>
      <div className="page-header">
        <p className="page-header-eyebrow">Ready to Wear</p>
        <h1>The Shop</h1>
        <p>Premium pieces crafted and ready to ship. Add to your bag — checkout via WhatsApp.</p>
      </div>

      {/* Trust badges */}
      <section className={styles.badges}>
        <div className="container">
          <div className={styles.badgeGrid}>
            {[
              { icon: '🔒', title: 'Secure Ordering', desc: 'Confirmed personally via WhatsApp' },
              { icon: '🚚', title: 'Nationwide Delivery', desc: 'All 36 states + international' },
              { icon: '✂️', title: 'Quality Checked', desc: 'Every piece inspected before dispatch' },
              { icon: '💬', title: 'Personal Service', desc: 'Real person, real conversation' },
            ].map((b, i) => (
              <div key={i} className={styles.badgeItem}>
                <span className={styles.badgeIcon}>{b.icon}</span>
                <div>
                  <h4 className={styles.badgeTitle}>{b.title}</h4>
                  <p className={styles.badgeDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filterInner}>
            <div className={styles.filterTabs}>
              {filters.map((f) => (
                <button
                  key={f}
                  className={`${styles.filterTab} ${activeFilter === f ? styles.filterTabActive : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <p className={styles.filterCount}>{filtered.length} pieces</p>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <section className={styles.products}>
        <div className="container">
          <div className={styles.grid}>
            {filtered.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onQuickView={setQuickViewItem}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className={styles.howTo}>
        <div className="container">
          <div className={styles.howToGrid}>
            <div className={styles.howToText}>
              <p className={styles.howToEyebrow}>Simple Process</p>
              <h2 className={styles.howToTitle}>How to Place Your Order</h2>
              <div className={styles.steps}>
                {[
                  { n: '01', t: 'Browse & Add to Bag', d: 'Pick your pieces and add them to your shopping bag.' },
                  { n: '02', t: 'Checkout via WhatsApp', d: 'Your full order is sent as a message to our team.' },
                  { n: '03', t: 'We Confirm Everything', d: 'Size, colour, price and delivery — all confirmed personally.' },
                  { n: '04', t: 'Receive Your Piece', d: 'Premium packaged and delivered to you nationwide or internationally.' },
                ].map((s) => (
                  <div key={s.n} className={styles.step}>
                    <span className={styles.stepNum}>{s.n}</span>
                    <div>
                      <h4 className={styles.stepTitle}>{s.t}</h4>
                      <p className={styles.stepDesc}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.howToImg}>
              <img
                src="/logo.png"
                alt="Premium packaging Debenny Essentials"
                width={500}
                height={300}
                className={styles.howToImgEl}
              />
            </div>
          </div>
        </div>
      </section>

      {/* QuickView Modal */}
      {quickViewItem && (
        <QuickView
          product={quickViewItem}
          onClose={() => setQuickViewItem(null)}
        />
      )}
    </div>
  );
}
