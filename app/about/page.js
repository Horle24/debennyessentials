import styles from './page.module.css';
import { testimonials } from '@/data';

export const metadata = {
  title: 'About Us | Debenny Essentials',
  description: 'The story behind Debenny Essentials — luxury fashion for women and children, rooted in Auchi, Edo State.',
};

const values = [
  { icon: '✦', title: 'Premium Quality', desc: 'Every fabric is hand-selected. Every stitch is deliberate. We accept nothing less than perfection in everything we create.' },
  { icon: '✦', title: 'Bespoke Craftsmanship', desc: 'Each custom piece is designed around your body, your occasion, and your vision. No two Debenny pieces are exactly alike.' },
  { icon: '✦', title: 'Inclusive Elegance', desc: 'From newborn baby girls to power women, every size and age deserves to be draped in luxury.' },
  { icon: '✦', title: 'African Heritage', desc: 'Rooted in Edo State, we celebrate our heritage through fabric choices, silhouettes, and the spirit of every garment.' },
];

export default function AboutPage() {
  return (
    <div>
      <div className="page-header">
        <p className="page-header-eyebrow">Our Story</p>
        <h1>About Debenny Essentials</h1>
        <p>Where African heritage meets contemporary luxury fashion.</p>
      </div>

      {/* Story section */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImages}>
              <div className={styles.imgPrimary}>
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85"
                  alt="Debenny Essentials craftsmanship"
                  className={styles.img}
                />
              </div>
              <div className={styles.imgSecondary}>
                <img
                  src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=85"
                  alt="Debenny Essentials design"
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.storyText}>
              <p className={styles.eyebrow}>The Beginning</p>
              <h2 className={styles.h2}>Dressed in Passion,<br /><em>Built on Purpose</em></h2>
              <div className={styles.goldLine} />
              <p className={styles.body}>
                Debenny Essentials was born from a deep love for fashion and an unwavering belief that every woman — and every little girl — deserves to feel extraordinary. Founded in the heart of Auchi, Edo State, we started as a dream stitched into fabric, and grew into one of the most sought-after fashion labels in the region.
              </p>
              <p className={styles.body}>
                Our founder's vision was simple but powerful: create clothing that tells a story. From the first sketch to the final stitch, every Debenny piece is a celebration of femininity, elegance, and confidence. We believe fashion is not just what you wear — it is how you present yourself to the world.
              </p>
              <p className={styles.body}>
                Today, we serve hundreds of clients across Nigeria and internationally, delivering bespoke gowns, ready-to-wear collections, and children's fashion that consistently exceeds expectations. Our atelier in Auchi is where magic happens daily — fabric becomes art, and art becomes your wardrobe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesHead}>
            <p className={styles.eyebrow}>What We Stand For</p>
            <h2 className={styles.h2}>Our Core Values</h2>
            <div className="gold-line" />
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { num: '500+', label: 'Happy Clients' },
              { num: '1,000+', label: 'Pieces Created' },
              { num: '5+', label: 'Years of Excellence' },
              { num: '36', label: 'States Served' },
            ].map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.valuesHead}>
            <p className={styles.eyebrow}>Client Love</p>
            <h2 className={styles.h2}>What Our Clients Say</h2>
            <div className="gold-line" />
          </div>
          <div className={styles.testiGrid}>
            {testimonials.map((t) => (
              <div key={t.id} className={styles.testiCard}>
                <div className={styles.testiStars}>{'★'.repeat(t.rating)}</div>
                <p className={styles.testiText}>"{t.text}"</p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>{t.avatar}</div>
                  <div>
                    <p className={styles.testiName}>{t.name}</p>
                    <p className={styles.testiLoc}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className={styles.location}>
        <div className="container">
          <div className={styles.locationGrid}>
            <div className={styles.locationText}>
              <p className={styles.eyebrow}>Find Us</p>
              <h2 className={styles.h2}>Visit Our Atelier</h2>
              <div className={styles.goldLine} />
              <div className={styles.locationDetails}>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>📍</span>
                  <div>
                    <p className={styles.locationLabel}>Address</p>
                    <p className={styles.locationValue}>Igberoad, Opposite Eco Bank<br />Auchi, Edo State, Nigeria</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>📱</span>
                  <div>
                    <p className={styles.locationLabel}>WhatsApp</p>
                    <a
                      href="https://wa.me/2349127349950"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.locationLink}
                    >
                      +234 912 734 9950
                    </a>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>🌍</span>
                  <div>
                    <p className={styles.locationLabel}>Delivery</p>
                    <p className={styles.locationValue}>Nationwide across Nigeria<br />& International Shipping</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.locationImgWrap}>
              <img
                src="https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=700&q=85"
                alt="Debenny Essentials"
                className={styles.locationImg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
