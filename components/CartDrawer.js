'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';

function formatPrice(n) {
  return '₦' + n.toLocaleString('en-NG');
}

const DELIVERY_OPTIONS = [
  { id: 'pickup', label: 'Pickup — Auchi, Edo State', fee: 0 },
  { id: 'local', label: 'Within Edo State', fee: 5000, note: 'Fee quoted on WhatsApp' },
  { id: 'nationwide', label: 'Nationwide (Other States)', fee: 10000, note: 'Fee quoted on WhatsApp' },
  { id: 'international', label: 'International Shipping', fee: 0, note: 'Fee quoted on WhatsApp' },
];

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, totalPrice, clearCart } = useCart();

  const [view, setView] = useState('bag');
  const [delivery, setDelivery] = useState(DELIVERY_OPTIONS[0]);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', state: '', note: '',
  });
  const [errors, setErrors] = useState({});

  const deliveryFee = delivery.fee;
  const grandTotal = totalPrice + deliveryFee;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (delivery.id !== 'pickup' && !form.address.trim()) e.address = 'Delivery address is required';
    if (delivery.id !== 'pickup' && !form.state.trim()) e.state = 'State is required';
    return e;
  };

  const buildWhatsAppMessage = () => {
    const lines = items.map(
      (i) => `  • ${i.product.name} | Size: ${i.size} | Colour: ${i.color} | Qty: ${i.qty} | ${formatPrice(i.product.price * i.qty)}`
    );
    const deliveryLine = delivery.id === 'international'
      ? 'International (fee to be quoted)'
      : delivery.fee === 0
      ? `${delivery.label} (Free)`
      : `${delivery.label} — ${formatPrice(delivery.fee)}`;

    return (
      `Hello Debenny Essentials! 🛍️ I'd like to place an order.\n\n` +
      `👤 *Customer Details*\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      (form.email ? `Email: ${form.email}\n` : '') +
      (form.address ? `Address: ${form.address}, ${form.state}\n` : '') +
      `\n🛒 *Order Summary*\n` +
      lines.join('\n') +
      `\n\n📦 *Delivery*: ${deliveryLine}` +
      `\n💰 *Subtotal*: ${formatPrice(totalPrice)}` +
      (deliveryFee > 0 ? `\n🚚 *Delivery Fee*: ${formatPrice(deliveryFee)}` : '') +
      (delivery.id !== 'international' ? `\n✅ *Grand Total*: ${formatPrice(grandTotal)}` : '\n✅ *Total*: To be confirmed') +
      (form.note ? `\n\n📝 *Note*: ${form.note}` : '') +
      `\n\nPlease confirm availability and share payment details. Thank you!`
    );
  };

  const handleCheckout = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    window.open(`https://wa.me/2349127349950?text=${encodeURIComponent(buildWhatsAppMessage())}`, '_blank');
    setIsOpen(false);
    setView('bag');
  };

  const handleClose = () => { setIsOpen(false); setView('bag'); };

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={handleClose} />}

      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>

        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            {view === 'form' && (
              <button className={styles.backBtn} onClick={() => setView('bag')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                  <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>
            )}
            <div>
              <p className={styles.headerEyebrow}>
                {view === 'bag' ? 'Your Selection' : 'Order Details'}
              </p>
              <h2 className={styles.headerTitle}>
                {view === 'bag' ? 'Shopping Bag' : 'Complete Your Order'}
              </h2>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* STEP INDICATOR */}
        {items.length > 0 && (
          <div className={styles.steps}>
            <div className={`${styles.step} ${view === 'bag' ? styles.stepActive : styles.stepDone}`}>
              <span className={styles.stepNum}>1</span>
              <span className={styles.stepLabel}>Your Bag</span>
            </div>
            <div className={styles.stepLine} />
            <div className={`${styles.step} ${view === 'form' ? styles.stepActive : ''}`}>
              <span className={styles.stepNum}>2</span>
              <span className={styles.stepLabel}>Your Details</span>
            </div>
            <div className={styles.stepLine} />
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <span className={styles.stepLabel}>WhatsApp</span>
            </div>
          </div>
        )}

        {/* VIEW 1 — BAG */}
        {view === 'bag' && (
          <>
            {items.length === 0 ? (
              <div className={styles.empty}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="52" height="52">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <p className={styles.emptyTitle}>Your bag is empty</p>
                <p className={styles.emptyText}>Add pieces from the shop to get started.</p>
                <button className={styles.continueShopping} onClick={handleClose}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className={styles.items}>
                  {items.map((item) => (
                    <div key={item.key} className={styles.item}>
                      <div className={styles.itemImg}>
                        <img src={item.product.image} alt={item.product.name} />
                      </div>
                      <div className={styles.itemInfo}>
                        <p className={styles.itemCat}>{item.product.category}</p>
                        <h4 className={styles.itemName}>{item.product.name}</h4>
                        <p className={styles.itemMeta}>{item.size} · {item.color}</p>
                        <p className={styles.itemPrice}>{formatPrice(item.product.price)}</p>
                        <div className={styles.itemActions}>
                          <div className={styles.qtyControl}>
                            <button onClick={() => updateQty(item.key, item.qty - 1)}>−</button>
                            <span>{item.qty}</span>
                            <button onClick={() => updateQty(item.key, item.qty + 1)}>+</button>
                          </div>
                          <button className={styles.removeBtn} onClick={() => removeItem(item.key)} aria-label="Remove">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6l-1 14H6L5 6"/>
                              <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.footer}>
                  <div className={styles.summaryBox}>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>
                        {items.reduce((a, i) => a + i.qty, 0)} item{items.reduce((a, i) => a + i.qty, 0) !== 1 ? 's' : ''}
                      </span>
                      <span className={styles.summaryVal}>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Delivery</span>
                      <span className={styles.summaryValMuted}>Calculated next step</span>
                    </div>
                    <div className={styles.summaryDivider} />
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryTotal}>Subtotal</span>
                      <span className={styles.summaryTotalVal}>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  <button className={styles.proceedBtn} onClick={() => setView('form')}>
                    Proceed to Order Details
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className={styles.clearBtn} onClick={clearCart}>Clear Bag</button>
                </div>
              </>
            )}
          </>
        )}

        {/* VIEW 2 — ORDER FORM */}
        {view === 'form' && (
          <>
            <div className={styles.formScroll}>

              {/* Mini order summary */}
              <div className={styles.miniSummary}>
                {items.map((item) => (
                  <div key={item.key} className={styles.miniItem}>
                    <img src={item.product.image} alt={item.product.name} className={styles.miniImg} />
                    <div className={styles.miniInfo}>
                      <p className={styles.miniName}>{item.product.name}</p>
                      <p className={styles.miniMeta}>{item.size} · {item.color} · Qty {item.qty}</p>
                    </div>
                    <p className={styles.miniPrice}>{formatPrice(item.product.price * item.qty)}</p>
                  </div>
                ))}
              </div>

              {/* Delivery selector */}
              <div className={styles.formSection}>
                <p className={styles.formSectionTitle}>Delivery Option</p>
                <div className={styles.deliveryOpts}>
                  {DELIVERY_OPTIONS.map((opt) => (
                    <label key={opt.id} className={`${styles.deliveryOpt} ${delivery.id === opt.id ? styles.deliveryOptActive : ''}`}>
                      <input
                        type="radio"
                        name="delivery"
                        value={opt.id}
                        checked={delivery.id === opt.id}
                        onChange={() => setDelivery(opt)}
                        className={styles.radioHidden}
                      />
                      <div className={styles.radioCircle}>
                        {delivery.id === opt.id && <div className={styles.radioDot} />}
                      </div>
                      <div className={styles.deliveryOptText}>
                        <span className={styles.deliveryOptLabel}>{opt.label}</span>
                        <span className={styles.deliveryOptFee}>
                          {opt.id === 'international' ? 'Quoted on WhatsApp' : opt.fee === 0 ? 'Free' : formatPrice(opt.fee)}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal details */}
              <div className={styles.formSection}>
                <p className={styles.formSectionTitle}>Your Details</p>
                <div className={styles.fields}>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Adaeze Okonkwo"
                      className={`${styles.fieldInput} ${errors.name ? styles.fieldInputError : ''}`}
                    />
                    {errors.name && <p className={styles.fieldError}>{errors.name}</p>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>WhatsApp / Phone *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 08012345678"
                      className={`${styles.fieldInput} ${errors.phone ? styles.fieldInputError : ''}`}
                    />
                    {errors.phone && <p className={styles.fieldError}>{errors.phone}</p>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                      Email Address <span className={styles.optional}>(optional)</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. adaeze@email.com"
                      className={styles.fieldInput}
                    />
                  </div>

                  {delivery.id !== 'pickup' && (
                    <>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel}>Delivery Address *</label>
                        <input
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          placeholder="House number, street, area"
                          className={`${styles.fieldInput} ${errors.address ? styles.fieldInputError : ''}`}
                        />
                        {errors.address && <p className={styles.fieldError}>{errors.address}</p>}
                      </div>

                      <div className={styles.field}>
                        <label className={styles.fieldLabel}>State / Country *</label>
                        <input
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          placeholder="e.g. Lagos State"
                          className={`${styles.fieldInput} ${errors.state ? styles.fieldInputError : ''}`}
                        />
                        {errors.state && <p className={styles.fieldError}>{errors.state}</p>}
                      </div>
                    </>
                  )}

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                      Additional Note <span className={styles.optional}>(optional)</span>
                    </label>
                    <textarea
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                      placeholder="Special request, colour preference, occasion, etc."
                      rows={3}
                      className={styles.fieldTextarea}
                    />
                  </div>
                </div>
              </div>

              {/* Price breakdown */}
              <div className={styles.priceBreakdown}>
                <p className={styles.formSectionTitle}>Price Summary</p>
                <div className={styles.breakdownRows}>
                  {items.map((item) => (
                    <div key={item.key} className={styles.breakdownRow}>
                      <span className={styles.breakdownItem}>
                        {item.product.name} <span className={styles.breakdownQty}>× {item.qty}</span>
                      </span>
                      <span className={styles.breakdownVal}>{formatPrice(item.product.price * item.qty)}</span>
                    </div>
                  ))}
                  <div className={styles.breakdownDivider} />
                  <div className={styles.breakdownRow}>
                    <span className={styles.breakdownItem}>Delivery</span>
                    <span className={styles.breakdownVal}>
                      {delivery.id === 'international' ? 'TBD' : delivery.fee === 0 ? 'Free' : formatPrice(delivery.fee)}
                    </span>
                  </div>
                  <div className={styles.breakdownTotal}>
                    <span>Grand Total</span>
                    <span className={styles.breakdownTotalVal}>
                      {delivery.id === 'international'
                        ? `${formatPrice(totalPrice)} + delivery`
                        : formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form footer */}
            <div className={styles.footer}>
              <button className={styles.checkoutBtn} onClick={handleCheckout}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Order via WhatsApp
              </button>
              <p className={styles.checkoutNote}>
                Opens WhatsApp with your full order pre-filled. We'll confirm within 2 hours.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}