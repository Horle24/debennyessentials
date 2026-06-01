import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, order_type, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, message' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from('contact_enquiries')
      .insert([{ name, phone: phone || null, order_type: order_type || null, message }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 });
    }

    return NextResponse.json({ success: true, enquiry: data }, { status: 201 });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
