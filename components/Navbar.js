'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/collections',
    label: 'Collections',
    sub: [
      { href: '/collections/women', label: "Women's" },
      { href: '/collections/kids', label: "Kids'" },
    ],
  },
  { href: '/styles', label: 'Styles' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoImgWrap}>
            <Image
              src="/logo.jpg"
              alt="Debenny Essentials Logo"
              width={52}
              height={52}
              className={styles.logoImg}
              priority
            />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTop}>Debenny</span>
            <span className={styles.logoSub}>Essentials</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={styles.navItem}
              onMouseEnter={() => link.sub && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
                {link.sub && <span className={styles.chevron}>›</span>}
              </Link>
              {link.sub && activeDropdown === link.href && (
                <div className={styles.dropdown}>
                  {link.sub.map((s) => (
                    <Link key={s.href} href={s.href} className={styles.dropdownLink}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className={styles.actions}>
          <Link
            href={`https://wa.me/2349127349950?text=${encodeURIComponent('Hello Debenny Essentials, I would like to place a custom order.')}`}
            target="_blank"
            className={styles.ctaBtn}
          >
            Custom Order
          </Link>

          {/* Cart icon */}
          <button
            className={styles.cartBtn}
            onClick={() => setIsOpen(true)}
            aria-label="Open shopping bag"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {totalItems > 0 && (
              <span className={styles.cartBadge}>{totalItems}</span>
            )}
          </button>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileBrand}>
          <Image src="/logo.jpg" alt="Debenny Essentials" width={40} height={40} className={styles.mobileLogo} />
          <span className={styles.mobileBrandName}>Debenny Essentials</span>
        </div>
        {navLinks.map((link) => (
          <div key={link.href}>
            <Link href={link.href} className={styles.mobileLink}>{link.label}</Link>
            {link.sub && (
              <div className={styles.mobileSub}>
                {link.sub.map((s) => (
                  <Link key={s.href} href={s.href} className={styles.mobileSubLink}>— {s.label}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button className={styles.mobileCartBtn} onClick={() => { setIsOpen(true); setMenuOpen(false); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          My Bag {totalItems > 0 && `(${totalItems})`}
        </button>
        <Link
          href={`https://wa.me/2349127349950?text=${encodeURIComponent('Hello Debenny Essentials, I would like to place a custom order.')}`}
          target="_blank"
          className={styles.mobileCtaBtn}
        >
          Custom Order via WhatsApp
        </Link>
      </div>
    </header>
  );
}
