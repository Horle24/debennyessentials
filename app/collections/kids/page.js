import styles from './page.module.css';
import { kidsCategories } from '@/data';

export const metadata = {
  title: "Kids' Collection | Debenny Essentials",
  description: "Adorable and premium kids' fashion for baby girls and girls 2–12.",
};

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const kidsItems = [
  { img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80', title: 'Little Princess Gown', cat: 'Girls — Party Wear', wa: "Hi Debenny! I love the Little Princess Gown. How much will it cost for sewing and delivery?" },
  { img: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&q=80', title: 'Flower Girl Midi', cat: 'Baby Girl', wa: "Hi Debenny! I love the Flower Girl Midi. How much will it cost for sewing and delivery?" },
  { img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80', title: 'Girls Party Set', cat: 'Girls — Casual', wa: "Hi Debenny! I love the Girls Party Set. How much will it cost for sewing and delivery?" },
  { img: 'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&q=80', title: 'Ruffle Sundress', cat: 'Baby Girl', wa: "Hi Debenny! I love the Ruffle Sundress. How much will it cost for sewing and delivery?" },
  { img: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=600&q=80', title: 'Ankara Celebration Set', cat: 'Girls — Celebration', wa: "Hi Debenny! I love the Ankara Celebration Set. How much will it cost for sewing and delivery?" },
  { img: 'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=600&q=80', title: 'Mini Corset Dress', cat: 'Girls — Party', wa: "Hi Debenny! I love the Mini Corset Dress. How much will it cost for sewing and delivery?" },
  { img: 'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=600&q=80', title: 'Baby Tutu Set', cat: 'Baby Girl', wa: "Hi Debenny! I love the Baby Tutu Set. How much will it cost for sewing and delivery?" },
  { img: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?w=600&q=80', title: 'Eid Celebration Gown', cat: 'Girls — Celebration', wa: "Hi Debenny! I love the Eid Celebration Gown. How much will it cost for sewing and delivery?" },
];

export default function KidsCollectionPage() {
  return (
    <div>
      <div className="page-header">
        <p className="page-header-eyebrow">Kids' Department</p>
        <h1>Kids' Fashion</h1>
        <p>Because little queens deserve to shine. Adorable, premium pieces for your children.</p>
      </div>

      <section className={styles.cats}>
        <div className="container">
          <div className={styles.catsGrid}>
            {kidsCategories.map((cat) => (
              <div key={cat.id} className={styles.catChip}>
                <h4 className={styles.catTitle}>{cat.label}</h4>
                <p className={styles.catSubs}>{cat.sub.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.items}>
        <div className="container">
          <div className={styles.grid}>
            {kidsItems.map((item, i) => (
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
                      {WA_ICON}
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
