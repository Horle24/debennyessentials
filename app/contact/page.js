'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', type: 'custom', details: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const message = `Hello Debenny Essentials! My name is ${form.name}.\n\nOrder type: ${form.type === 'custom' ? 'Custom Order' : 'Ready to Wear'}\n\nDetails: ${form.details}\n\nPhone: ${form.phone}\n\nPlease get back to me. Thank you!`;
    window.open(`https://wa.me/2349127349950?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div>
      <div className="page-header">
        <p className="page-header-eyebrow">Get in Touch</p>
        <h1>Contact & Custom Orders</h1>
        <p>Describe your dream piece and we'll bring it to life. We respond to every enquiry personally.</p>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left — Info */}
            <div className={styles.info}>
              <p className={styles.eyebrow}>Reach Us</p>
              <h2 className={styles.h2}>Let's Create<br /><em>Something Beautiful</em></h2>
              <div className={styles.goldLine} />

              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div>
                    <p className={styles.contactLabel}>Our Atelier</p>
                    <p className={styles.contactValue}>
                      Igberoad, Opposite Eco Bank<br />
                      Auchi, Edo State, Nigeria
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📱</div>
                  <div>
                    <p className={styles.contactLabel}>WhatsApp (Preferred)</p>
                    <a
                      href="https://wa.me/2349127349950"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      +234 912 734 9950
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>🚚</div>
                  <div>
                    <p className={styles.contactLabel}>Delivery Coverage</p>
                    <p className={styles.contactValue}>
                      All 36 states in Nigeria<br />
                      International shipping available
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>⏰</div>
                  <div>
                    <p className={styles.contactLabel}>Response Time</p>
                    <p className={styles.contactValue}>
                      We respond to all WhatsApp<br />
                      enquiries within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WA button */}
              <a
                href="https://wa.me/2349127349950?text=Hello%20Debenny%20Essentials%2C%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directBtn}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Open WhatsApp Directly
              </a>
            </div>

            {/* Right — Order Form */}
            <div className={styles.formWrap}>
              <div className={styles.formHeader}>
                <p className={styles.formEyebrow}>Quick Order Form</p>
                <h3 className={styles.formTitle}>Tell Us Your Vision</h3>
                <p className={styles.formSubtitle}>Fill in your details and we'll open WhatsApp with a pre-filled message for you.</p>
              </div>

              <div className={styles.form}>
                <div className={styles.field}>
                  <label className={styles.label}>Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Adaeze Okonkwo"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 08012345678"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Order Type *</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="custom">Custom Sewing Order</option>
                    <option value="rtw">Ready to Wear</option>
                    <option value="both">Both Custom & Ready to Wear</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Describe Your Order *</label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe the style, colour, occasion, your measurements, delivery location, and any other details..."
                    className={styles.textarea}
                  />
                </div>

                <button
                  onClick={handleWhatsApp}
                  disabled={!form.name || !form.details}
                  className={styles.submitBtn}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </button>
                <p className={styles.formNote}>
                  This will open WhatsApp with your details pre-filled. No data is stored on this site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHead}>
            <p className={styles.eyebrow}>How It Works</p>
            <h2 className={styles.h2}>Our Custom Order Process</h2>
            <div className="gold-line" />
          </div>
          <div className={styles.processGrid}>
            {[
              { n: '01', t: 'Send Your Request', d: 'Share your vision, occasion, preferred colours, and fabric preferences on WhatsApp.' },
              { n: '02', t: 'Consultation', d: 'Our designer will discuss details with you, offer suggestions, and provide a price quote.' },
              { n: '03', t: 'Measurements', d: 'Provide your measurements or visit our atelier in Auchi for a fitting session.' },
              { n: '04', t: 'Creation', d: 'We craft your piece with premium fabrics and precision stitching in our Auchi workshop.' },
              { n: '05', t: 'Quality Check', d: 'Every garment undergoes thorough quality inspection before packaging.' },
              { n: '06', t: 'Delivery', d: 'Your piece is packaged beautifully and delivered to you nationwide or internationally.' },
            ].map((step) => (
              <div key={step.n} className={styles.processCard}>
                <span className={styles.processNum}>{step.n}</span>
                <h4 className={styles.processTitle}>{step.t}</h4>
                <p className={styles.processDesc}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
