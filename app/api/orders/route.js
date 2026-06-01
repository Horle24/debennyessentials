import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      customer_name,
      customer_phone,
      order_type,
      item_name,
      item_id,
      item_price,
      size,
      color,
      details,
      delivery_address,
    } = body;

    // Validate required fields
    if (!customer_name || !customer_phone || !order_type) {
      return NextResponse.json(
        { error: 'Missing required fields: customer_name, customer_phone, order_type' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          customer_name,
          customer_phone,
          order_type,
          item_name: item_name || null,
          item_id: item_id || null,
          item_price: item_price || null,
          size: size || null,
          color: color || null,
          details: details || null,
          delivery_address: delivery_address || null,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save order' }, { status: 500 });
    }

    return NextResponse.json({ success: true, order: data }, { status: 201 });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
