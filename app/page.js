import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { testimonials, lookbookImages } from '@/data';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroBg}>
          <img
            src="https://i.pinimg.com/736x/2e/bf/9e/2ebf9e66e06874bcfc37ce5c09823f60.jpg"
            alt="Debenny Essentials Hero"
            className={styles.heroBgImg}
          />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Luxury Fashion · Auchi, Edo State</p>
          <h1 className={styles.heroTitle}>
            Dressed in<br />
            <em>Elegance,</em><br />
            Born to Reign
          </h1>
          <p className={styles.heroSub}>
            Bespoke women's & children's fashion crafted with the finest fabrics.
            From custom gowns to ready-to-wear — every piece is a masterwork.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/collections" className="btn-primary">
              Explore Collections
            </Link>
            <Link href="/styles" className="btn-outline">
              View Styles
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.heroScrollLine} />
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────── */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {['Women\'s Fashion', '·', 'Kids\' Fashion', '·', 'Custom Orders', '·', 'Ready to Wear', '·', 'Gowns', '·', 'Corsets', '·', 'Maxi Dresses', '·', 'Nationwide Delivery', '·'].concat(
            ['Women\'s Fashion', '·', 'Kids\' Fashion', '·', 'Custom Orders', '·', 'Ready to Wear', '·', 'Gowns', '·', 'Corsets', '·', 'Maxi Dresses', '·', 'Nationwide Delivery', '·']
          ).map((item, i) => (
            <span key={i} className={item === '·' ? styles.marqueeDiv : styles.marqueeItem}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT STRIP ──────────────────────────────────────── */}
      <section className={styles.aboutStrip}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImgWrap}>
              <img
                src="https://i.pinimg.com/736x/9d/d2/32/9dd23249f063b6f93b669911fc2486e9.jpg"
                alt="Debenny Essentials Craftsmanship"
                className={styles.aboutImg}
              />
              <div className={styles.aboutImgAccent} />
            </div>
            <div className={styles.aboutText}>
              <p className={styles.eyebrow}>Our Story</p>
              <h2 className={styles.h2}>
                The Art of<br /><em>Dressed Perfection</em>
              </h2>
              <div className={styles.goldLine} />
              <p className={styles.body}>
                Debenny Essentials was born from a singular vision — to make every woman
                and child feel like royalty. Rooted in Auchi, Edo State, we blend African
                heritage with contemporary luxury to create pieces that transcend trends.
              </p>
              <p className={styles.body}>
                From custom couture gowns to immaculate ready-to-wear, our atelier is
                where dreams are stitched into reality. We deliver to every corner of
                Nigeria and beyond.
              </p>
              <Link href="/about" className="btn-outline" style={{ marginTop: '32px' }}>
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ──────────────────────────────────────── */}
      <section className={`${styles.departments} section-pad`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Collections</p>
            <h2 className={styles.h2}>Shop by Department</h2>
            <div className="gold-line" />
          </div>
          <div className={styles.deptGrid}>
            <Link href="/collections/women" className={styles.deptCard}>
              <img
                src="https://i.pinimg.com/736x/f6/4f/d2/f64fd2ff65940bc8ac4fabc1d8d5af3e.jpg"
                alt="Women's Fashion"
                className={styles.deptImg}
              />
              <div className={styles.deptOverlay} />
              <div className={styles.deptContent}>
                <p className={styles.deptSub}>Department</p>
                <h3 className={styles.deptTitle}>Women's Fashion</h3>
                <p className={styles.deptDesc}>Gowns · Dresses · Tops · Intimates</p>
                <span className={styles.deptCta}>Explore →</span>
              </div>
            </Link>
            <Link href="/collections/kids" className={styles.deptCard}>
              <img
                src="https://i.pinimg.com/736x/31/6a/31/316a31f558708ad3ca74c0fd82074791.jpg"
                alt="Kids' Fashion"
                className={styles.deptImg}
              />
              <div className={styles.deptOverlay} />
              <div className={styles.deptContent}>
                <p className={styles.deptSub}>Department</p>
                <h3 className={styles.deptTitle}>Kids' Fashion</h3>
                <p className={styles.deptDesc}>Baby Girl · Girls 2–12 · Party Wear</p>
                <span className={styles.deptCta}>Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED STYLES ──────────────────────────────────── */}
      <section className={`${styles.featured} section-pad`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Curated for You</p>
            <h2 className={styles.h2}>Featured Styles</h2>
            <div className="gold-line" />
          </div>
          <div className={styles.featuredGrid}>
            {[
              {
                img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
                title: 'Blush Corset Top',
                cat: 'Women — Tops',
              },
              {
                img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
                title: 'Pearl Midi Dress',
                cat: 'Women — Midi',
              },
              {
                img: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&q=80',
                title: 'Flower Girl Midi',
                cat: 'Kids — Baby Girl',
              },
              {
                img: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=600&q=80',
                title: 'Velvet Evening Gown',
                cat: 'Women — Gowns',
              },
            ].map((item, i) => (
              <div key={i} className={styles.featuredCard}>
                <div className={styles.featuredImgWrap}>
                  <img src={item.img} alt={item.title} className={styles.featuredImg} />
                  <div className={styles.featuredImgHover}>
                    <Link
                      href={`https://wa.me/2349127349950?text=${encodeURIComponent(`Hello! I love the ${item.title} style. How much will it cost for sewing and delivery?`)}`}
                      target="_blank"
                      className={styles.featuredHoverBtn}
                    >
                      Enquire on WhatsApp
                    </Link>
                  </div>
                </div>
                <div className={styles.featuredInfo}>
                  <p className={styles.featuredCat}>{item.cat}</p>
                  <h4 className={styles.featuredTitle}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/styles" className="btn-primary">View All Styles</Link>
          </div>
        </div>
      </section>

      {/* ── LOOKBOOK ──────────────────────────────────────────── */}
      <section className={`${styles.lookbook} section-pad`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Visual Diary</p>
            <h2 className={styles.h2}>Lookbook</h2>
            <div className="gold-line" />
          </div>
        </div>
        <div className={styles.lookbookGrid}>
          {lookbookImages.slice(0, 6).map((img) => (
            <div
              key={img.id}
              className={`${styles.lookbookItem} ${img.span === 'large' ? styles.lookbookLarge : ''}`}
            >
              <img src={img.src} alt={img.alt} className={styles.lookbookImg} />
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { num: '500+', label: 'Happy Clients' },
              { num: '1000+', label: 'Pieces Created' },
              { num: '5+', label: 'Years of Excellence' },
              { num: '🌍', label: 'Worldwide Delivery' },
            ].map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className={`${styles.testimonials} section-pad`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Client Love</p>
            <h2 className={styles.h2}>What They Say</h2>
            <div className="gold-line" />
          </div>
          <div className={styles.testiGrid}>
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className={styles.testiCard}>
                <div className={styles.testiStars}>
                  {'★'.repeat(t.rating)}
                </div>
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

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerBg}>
          <img
            src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1600&q=85"
            alt="Custom Order"
            className={styles.ctaBannerImg}
          />
        </div>
        <div className={styles.ctaBannerOverlay} />
        <div className={styles.ctaBannerContent}>
          <p className={styles.eyebrow}>Bespoke Service</p>
          <h2 className={styles.ctaBannerTitle}>Your Dream Outfit Awaits</h2>
          <p className={styles.ctaBannerSub}>
            Reach us on WhatsApp to place your custom order. We design and deliver nationwide & internationally.
          </p>
          <a
            href="https://wa.me/2349127349950?text=Hello%20Debenny%20Essentials%2C%20I%20would%20like%20to%20place%20a%20custom%20order."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBannerBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
