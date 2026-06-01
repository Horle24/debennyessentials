import Link from 'next/link';
import styles from './page.module.css';
import { womenCategories } from '@/data';

export const metadata = {
  title: "Women's Collection | Debenny Essentials",
  description: "Luxury women's fashion — gowns, dresses, tops, corsets, jumpsuits and more.",
};

const womenItems = [
  { img: 'https://images.unsplash.com/photo-1566479179817-c0ae66cc04b3?w=600&q=80', title: 'Crimson Evening Gown', cat: 'Gowns', wa: 'Hi Debenny! I love the Crimson Evening Gown. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', title: 'Pearl Midi Dress', cat: 'Midi', wa: 'Hi Debenny! I love the Pearl Midi Dress. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', title: 'Blush Corset Top', cat: 'Tops / Corsets', wa: 'Hi Debenny! I love the Blush Corset Top. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&q=80', title: 'Maxi Kaftan Dress', cat: 'Maxi', wa: 'Hi Debenny! I love the Maxi Kaftan Dress. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80', title: 'Satin Slip Mini', cat: 'Mini', wa: 'Hi Debenny! I love the Satin Slip Mini. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', title: 'Power Jumpsuit', cat: 'Jumpsuits', wa: 'Hi Debenny! I love the Power Jumpsuit. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80', title: 'Ruched Bodycon Dress', cat: 'Midi', wa: 'Hi Debenny! I love the Ruched Bodycon Dress. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80', title: 'Ruffled Chiffon Blouse', cat: 'Tops / Blouses', wa: 'Hi Debenny! I love the Ruffled Chiffon Blouse. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=600&q=80', title: 'Velvet Evening Gown', cat: 'Gowns', wa: 'Hi Debenny! I love the Velvet Evening Gown. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80', title: 'Black Sequin Dress', cat: 'Mini', wa: 'Hi Debenny! I love the Black Sequin Dress. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=600&q=80', title: 'Ivory Lace Gown', cat: 'Gowns', wa: 'Hi Debenny! I love the Ivory Lace Gown. How much to sew and deliver?' },
  { img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', title: 'Flowy Midi Skirt Set', cat: 'Bottoms', wa: 'Hi Debenny! I love the Flowy Midi Skirt Set. How much to sew and deliver?' },
];

export default function WomenCollectionPage() {
  return (
    <div>
      <div className="page-header">
        <p className="page-header-eyebrow">Women's Department</p>
        <h1>Women's Fashion</h1>
        <p>From everyday elegance to extraordinary occasions — dressed for the woman you are.</p>
      </div>

      {/* Categories */}
      <section className={styles.cats}>
        <div className="container">
          <div className={styles.catsGrid}>
            {womenCategories.map((cat) => (
              <div key={cat.id} className={styles.catChip}>
                <h4 className={styles.catTitle}>{cat.label}</h4>
                <p className={styles.catSubs}>{cat.sub.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className={styles.items}>
        <div className="container">
          <div className={styles.grid}>
            {womenItems.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={item.img} alt={item.title} className={styles.img} />
                  <div className={styles.imgOverlay}>
                    <a
                      href={`https://wa.me/2349127349950?text=${encodeURIComponent(item.wa)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.waBtn}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Enquire via WhatsApp
                    </a>
                  </div>
                </div>
                <div className={styles.info}>
                  <p className={styles.catTag}>{item.cat}</p>
                  <h3 className={styles.name}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
