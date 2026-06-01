import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Cart & Checkout | Debenny Essentials',
  description: 'Complete your order via WhatsApp. Fast, secure, personal service.',
};

export default function CartPage() {
  return (
    <div>
      <div className="page-header">
        <p className="page-header-eyebrow">Checkout</p>
        <h1>Your Order</h1>
        <p>We process all orders personally via WhatsApp for a secure and seamless experience.</p>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left — how it works */}
            <div className={styles.howItWorks}>
              <p className={styles.eyebrow}>Our Checkout Process</p>
              <h2 className={styles.h2}>Simple. Personal.<br /><em>Secure.</em></h2>
              <div className={styles.goldLine} />
              <p className={styles.desc}>
                At Debenny Essentials, every order is handled personally by our team. We don't use automated payment gateways — instead, we confirm your order, agree on all details, and share payment information directly on WhatsApp.
              </p>
              <p className={styles.desc}>
                This means you always speak to a real person, and your order is never lost in a system. It's luxury service, the way it should be.
              </p>

              <div className={styles.steps}>
                {[
                  { n: '01', t: 'Browse & Choose', d: 'Select any item from our Shop or Styles gallery.' },
                  { n: '02', t: 'WhatsApp Us', d: 'Tap "Order via WhatsApp" on any product page.' },
                  { n: '03', t: 'We Confirm', d: 'Our team confirms availability, size, colour, and price within 2 hours.' },
                  { n: '04', t: 'Pay & Receive', d: 'Make payment and receive your item with premium packaging.' },
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

            {/* Right — action box */}
            <div className={styles.actionBox}>
              <div className={styles.actionHeader}>
                <p className={styles.actionEyebrow}>Ready to Order?</p>
                <h3 className={styles.actionTitle}>Start Your Order on WhatsApp</h3>
              </div>

              <div className={styles.actionBody}>
                <div className={styles.trustItems}>
                  {[
                    { icon: '🔒', t: 'Secure & Personal', d: 'Direct communication, no data stored' },
                    { icon: '⚡', t: 'Fast Response', d: 'We reply within 2 hours on WhatsApp' },
                    { icon: '🚚', t: 'Fast Delivery', d: 'Nationwide & international shipping' },
                    { icon: '✨', t: 'Premium Packaging', d: 'Every order arrives beautifully packaged' },
                  ].map((item, i) => (
                    <div key={i} className={styles.trustItem}>
                      <span className={styles.trustIcon}>{item.icon}</span>
                      <div>
                        <p className={styles.trustTitle}>{item.t}</p>
                        <p className={styles.trustDesc}>{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.actionDivider} />

                <a
                  href="https://wa.me/2349127349950?text=Hello%20Debenny%20Essentials!%20I%20would%20like%20to%20place%20an%20order.%20Please%20assist%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waBtn}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Place Order on WhatsApp
                </a>

                <p className={styles.orText}>— or browse first —</p>

                <div className={styles.browseLinks}>
                  <Link href="/shop" className={styles.browseLink}>Ready to Wear Shop</Link>
                  <Link href="/styles" className={styles.browseLink}>Style Gallery</Link>
                  <Link href="/collections" className={styles.browseLink}>Collections</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
