import pageStyles from './page.module.css';
import { styles as styleData } from '@/data';

export const metadata = {
  title: 'Styles Gallery | Debenny Essentials',
  description: 'Browse our curated style gallery. Enquire about any style directly on WhatsApp.',
};

const WA_ICON_SM = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const WA_ICON_LG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const filterTags = ['All', 'Women', 'Kids', 'Gowns', 'Midi', 'Mini', 'Tops', 'Jumpsuits'];

export default function StylesPage() {
  return (
    <div>
      <div className="page-header">
        <p className="page-header-eyebrow">Style Gallery</p>
        <h1>Our Signature Styles</h1>
        <p>Find a style you love? Tap the WhatsApp button and we'll send you pricing instantly.</p>
      </div>

      {/* Filter Tags */}
      <section className={pageStyles.filterSection}>
        <div className="container">
          <div className={pageStyles.filters}>
            {filterTags.map((f) => (
              <span key={f} className={pageStyles.filter}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Styles Grid */}
      <section className={pageStyles.gallery}>
        <div className="container">
          <div className={pageStyles.grid}>
            {styleData.map((style) => (
              <article key={style.id} className={pageStyles.card}>
                <div className={pageStyles.imgWrap}>
                  <img src={style.image} alt={style.title} className={pageStyles.img} />
                  <div className={pageStyles.imgOverlay}>
                    <div className={pageStyles.overlayContent}>
                      <p className={pageStyles.overlayDesc}>{style.description}</p>
                      <a
                        href={`https://wa.me/2349127349950?text=${encodeURIComponent(`I love this style — "${style.title}". How much will it cost for sewing and delivery?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={pageStyles.waBtn}
                      >
                        {WA_ICON_LG}
                        I love this style — Get Pricing
                      </a>
                    </div>
                  </div>
                </div>
                <div className={pageStyles.info}>
                  <div className={pageStyles.tags}>
                    {style.tags.map((tag) => (
                      <span key={tag} className={pageStyles.tag}>{tag}</span>
                    ))}
                  </div>
                  <h3 className={pageStyles.name}>{style.title}</h3>
                  <p className={pageStyles.cat}>{style.category}</p>
                  <a
                    href={`https://wa.me/2349127349950?text=${encodeURIComponent(`I love this style — "${style.title}". How much will it cost for sewing and delivery?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.waBtnBottom}
                  >
                    {WA_ICON_SM}
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={pageStyles.cta}>
        <div className="container">
          <div className={pageStyles.ctaInner}>
            <h2 className={pageStyles.ctaTitle}>Can't find what you're looking for?</h2>
            <p className={pageStyles.ctaText}>
              Describe your dream outfit to us and we'll design it from scratch. Our designers are ready.
            </p>
            <a
              href="https://wa.me/2349127349950?text=Hello%20Debenny%20Essentials%2C%20I%20have%20a%20custom%20design%20in%20mind."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {WA_ICON_LG}
              Custom Design Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
