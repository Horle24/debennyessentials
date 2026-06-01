import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoTop}>Debenny</span>
            <span className={styles.logoSub}>Essentials</span>
          </div>
          <p className={styles.tagline}>
            Where elegance meets craftsmanship. Every stitch tells a story of luxury,
            passion, and feminine power.
          </p>
          <div className={styles.social}>
            <a
              href={`https://wa.me/2349127349950`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              WhatsApp
            </a>
            <span className={styles.dot}>·</span>
            <span className={styles.socialLink} style={{ opacity: 0.4, cursor: 'not-allowed' }}>
              Instagram (Coming Soon)
            </span>
          </div>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Collections</h4>
            <Link href="/collections/women" className={styles.link}>Women's Fashion</Link>
            <Link href="/collections/kids" className={styles.link}>Kids' Fashion</Link>
            <Link href="/styles" className={styles.link}>Style Gallery</Link>
            <Link href="/shop" className={styles.link}>Ready to Wear</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Information</h4>
            <Link href="/about" className={styles.link}>About Debenny</Link>
            <Link href="/contact" className={styles.link}>Contact Us</Link>
            <Link href="/contact" className={styles.link}>Custom Orders</Link>
            <Link href="/contact" className={styles.link}>Delivery Info</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Contact</h4>
            <a
              href="https://wa.me/2349127349950"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              +234 912 734 9950
            </a>
            <p className={styles.address}>
              Igberoad, Opposite Eco Bank<br />
              Auchi, Edo State, Nigeria
            </p>
            <p className={styles.delivery}>
              🌍 Nationwide & International Delivery
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Debenny Essentials. All rights reserved.
          </p>
          <p className={styles.made}>
            Crafted with love in Auchi, Edo State, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
