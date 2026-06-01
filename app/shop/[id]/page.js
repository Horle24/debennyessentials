'use client';
import { useState } from 'react';
import Link from 'next/link';
import { shopItems } from '@/data';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

function formatPrice(n) {
  return '₦' + n.toLocaleString('en-NG');
}

// Generate gallery views from a single image
function getGallery(image) {
  const base = image.split('?')[0];
  return [
    { src: `${base}?w=800&q=90`, label: 'Front View' },
    { src: `${base}?w=800&q=90&crop=entropy`, label: 'Back View' },
    { src: `${base}?w=800&q=90&crop=faces`, label: 'Detail Shot' },
    { src: null, label: 'Style Video', type: 'video' },
  ];
}

export default function ProductPage({ params }) {
  const item = shopItems.find((i) => i.id === params.id);
  const { addItem, setIsOpen } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  if (!item) {
    return (
      <div style={{ padding: '200px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', color: 'var(--text-primary)' }}>
          Product Not Found
        </h1>
        <Link href="/shop" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  const gallery = getGallery(item.image);
  const related = shopItems.filter((i) => i.id !== item.id && i.category === item.category).slice(0, 3);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addItem(item, selectedSize, selectedColor || item.colors[0]);
    setAdded(true);
    setTimeout(() => { setAdded(false); setIsOpen(true); }, 600);
  };

  return (
    <div>
      <section className={styles.product}>
        <div className="container">
          <div className={styles.grid}>

            {/* ── Left: Gallery ─────────────────────── */}
            <div className={styles.imgCol}>
              {/* Main image */}
              <div className={styles.mainImgWrap}>
                {gallery[activeImg].type === 'video' ? (
                  <div className={styles.videoSlot}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="52" height="52">
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
                    </svg>
                    <p>Style Video</p>
                    <span>Coming soon — follow us on WhatsApp for clips</span>
                  </div>
                ) : (
                  <img
                    src={gallery[activeImg].src}
                    alt={`${item.name} — ${gallery[activeImg].label}`}
                    className={styles.mainImg}
                  />
                )}
                {item.badge && <div className={styles.badge}>{item.badge}</div>}
                <div className={styles.viewLabel}>{gallery[activeImg].label}</div>
              </div>

              {/* Thumbnails */}
              <div className={styles.thumbs}>
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={g.label}
                  >
                    {g.type === 'video' ? (
                      <div className={styles.thumbVideo}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                          <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
                        </svg>
                      </div>
                    ) : (
                      <img src={g.src} alt={g.label} className={styles.thumbImg} />
                    )}
                    <span className={styles.thumbLabel}>{g.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Right: Info ────────────────────────── */}
            <div className={styles.infoCol}>
              <p className={styles.breadcrumb}>
                <Link href="/shop">Shop</Link> / <span>{item.name}</span>
              </p>
              <p className={styles.cat}>{item.category} — {item.type}</p>
              <h1 className={styles.title}>{item.name}</h1>
              <p className={styles.price}>{formatPrice(item.price)}</p>

              <div className={styles.divider} />
              <p className={styles.desc}>{item.description}</p>
              <div className={styles.divider} />

              {/* Size */}
              <div className={styles.optGroup}>
                <p className={`${styles.optLabel} ${sizeError ? styles.optLabelError : ''}`}>
                  Select Size {sizeError && <span className={styles.sizeError}>— Please choose a size</span>}
                </p>
                <div className={styles.opts}>
                  {item.sizes.map((s) => (
                    <button
                      key={s}
                      className={`${styles.opt} ${selectedSize === s ? styles.optActive : ''}`}
                      onClick={() => { setSelectedSize(s); setSizeError(false); }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colour */}
              <div className={styles.optGroup}>
                <p className={styles.optLabel}>
                  Select Colour {selectedColor && <span className={styles.optChosen}>— {selectedColor}</span>}
                </p>
                <div className={styles.opts}>
                  {item.colors.map((c) => (
                    <button
                      key={c}
                      className={`${styles.opt} ${selectedColor === c ? styles.optActive : ''}`}
                      onClick={() => setSelectedColor(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.divider} />

              {/* Add to bag */}
              <button
                className={`${styles.addBtn} ${added ? styles.addBtnDone : ''}`}
                onClick={handleAddToCart}
                disabled={added}
              >
                {added ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Added to Bag!
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                    Add to Bag — {formatPrice(item.price)}
                  </>
                )}
              </button>

              <p className={styles.note}>
                Your bag is sent directly to our team on WhatsApp at checkout.
              </p>

              {/* Delivery trust */}
              <div className={styles.trust}>
                {[
                  ['🚚', 'Nationwide & International Delivery'],
                  ['📦', 'Premium branded packaging'],
                  ['✂️', 'Quality-checked before dispatch'],
                ].map(([icon, text]) => (
                  <div key={text} className={styles.trustItem}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <div className={styles.relatedHead}>
              <p className={styles.relatedEyebrow}>You May Also Like</p>
              <h2 className={styles.relatedTitle}>Related Pieces</h2>
              <div className="gold-line" />
            </div>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.id} href={`/shop/${r.id}`} className={styles.relatedCard}>
                  <div className={styles.relatedImgWrap}>
                    <img src={r.image} alt={r.name} className={styles.relatedImg} />
                  </div>
                  <div className={styles.relatedInfo}>
                    <p className={styles.relatedCat}>{r.category}</p>
                    <h4 className={styles.relatedName}>{r.name}</h4>
                    <p className={styles.relatedPrice}>{formatPrice(r.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
