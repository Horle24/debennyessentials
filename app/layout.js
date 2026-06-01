import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'Debenny Essentials | Luxury Fashion for Women & Children',
  description:
    "Premium fashion designing store specialising in women's and children's dresses, ready-to-wear, and bespoke sewing. Based in Auchi, Edo State — delivering nationwide and internationally.",
  keywords: 'Debenny Essentials, luxury fashion Nigeria, women dresses, kids fashion, Auchi fashion designer, ready to wear Nigeria',
  openGraph: {
    title: 'Debenny Essentials | Luxury Fashion',
    description: 'Where elegance meets craftsmanship',
    siteName: 'Debenny Essentials',
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
