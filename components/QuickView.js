'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './QuickView.module.css';

function formatPrice(n) {
  return '₦' + n.toLocaleString('en-NG');
}

// Generate gallery images from a seed image (front, back, detail, lifestyle)
function getGallery(image) {
  // Use Unsplash's different crop params to simulate front/back/detail shots
  const base = image.split('?')[0];
  return [
    { type: 'image', src: `${base}?w=700&q=85`, label: 'Front View' },
    { type: 'image', src: `${base}?w=700&q=85&crop=entropy`, label: 'Back View' },
    { type: 'image', src: `${base}?w=700&q=85&crop=faces`, label: 'Detail Shot' },
    { type: 'video', src: null, label: 'Style Video' },
  ];
}

export default function QuickView({ product, onClose }) {
  const { addItem } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const [added, setAdded] = useState(false);

  const gallery = getGallery(product.image);

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
          </svg>
        </button>

        <div className={styles.grid}>
          {/* ── Left: Gallery ─────────────────────────── */}
          <div className={styles.gallery}>
            {/* Main viewer */}
            <div className={styles.mainViewer}>
              {gallery[activeImg].type === 'video' ? (
                <div className={styles.videoSlot}>
                  <div className={styles.videoPlaceholder}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="48" height="48">
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
                    </svg>
                    <p>Style Video</p>
                    <span>Upload via WhatsApp or your media library</span>
                  </div>
                </div>
              ) : (
                <img
                  src={gallery[activeImg].src}
                  alt={`${product.name} — ${gallery[activeImg].label}`}
                  className={styles.mainImg}
                />
              )}
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
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

          {/* ── Right: Info ────────────────────────────── */}
          <div className={styles.info}>
            {product.badge && (
              <span className={styles.badge}>{product.badge}</span>
            )}
            <p className={styles.cat}>{product.category} — {product.type}</p>
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.price}>{formatPrice(product.price)}</p>

            <div className={styles.divider} />

            <p className={styles.desc}>{product.description}</p>

            <div className={styles.divider} />

            {/* Size selector */}
            <div className={styles.optGroup}>
              <p className={styles.optLabel}>
                Size <span className={styles.optSelected}>— {selectedSize}</span>
              </p>
              <div className={styles.opts}>
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={`${styles.opt} ${selectedSize === s ? styles.optActive : ''}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Colour selector */}
            <div className={styles.optGroup}>
              <p className={styles.optLabel}>
                Colour <span className={styles.optSelected}>— {selectedColor}</span>
              </p>
              <div className={styles.opts}>
                {product.colors.map((c) => (
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

            {/* Add to Cart */}
            <button
              className={`${styles.addBtn} ${added ? styles.addBtnSuccess : ''}`}
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Added to Bag!
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                  </svg>
                  Add to Bag
                </>
              )}
            </button>

            {/* Delivery trust strip */}
            <div className={styles.trust}>
              <div className={styles.trustItem}>
                <span>🚚</span><span>Nationwide & International Delivery</span>
              </div>
              <div className={styles.trustItem}>
                <span>📦</span><span>Premium branded packaging</span>
              </div>
              <div className={styles.trustItem}>
                <span>✂️</span><span>Quality-checked before dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
