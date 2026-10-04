'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG, getCallLink, getWhatsAppLink } from '@/lib/config';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Local Taxi', href: '/local-taxi' },
      { label: 'Outstation Taxi', href: '/outstation-taxi' },
      { label: 'One-Way Taxi', href: '/one-way-taxi' },
      { label: 'Round Trip', href: '/round-trip-taxi' },
      { label: 'Airport Transfer', href: '/airport-taxi' },
      { label: 'Corporate Travel', href: '/corporate-travel' },
      { label: 'Wedding Car', href: '/wedding-car-rental' },
      { label: 'Tempo Traveller', href: '/tempo-traveller' },
    ],
  },
  {
    label: 'Cities',
    href: '/cities',
    dropdown: [
      { label: '📍 Jamshedpur', href: '/cities/jharkhand/jamshedpur' },
      { label: '🏛️ Ranchi', href: '/cities/jharkhand/ranchi' },
      { label: '⛏️ Dhanbad', href: '/cities/jharkhand/dhanbad' },
      { label: '🏗️ Bokaro', href: '/cities/jharkhand/bokaro' },
      { label: '🕉️ Deoghar', href: '/cities/jharkhand/deoghar' },
      { label: '🌄 Netarhat', href: '/cities/jharkhand/netarhat' },
      { label: '🌊 Giridih', href: '/cities/jharkhand/giridih' },
      { label: '🌆 Kolkata', href: '/cities/west-bengal/kolkata' },
      { label: '🏭 Durgapur', href: '/cities/west-bengal/durgapur' },
      { label: '🏛️ Bhubaneswar', href: '/cities/odisha/bhubaneswar' },
      { label: '🐚 Puri', href: '/cities/odisha/puri' },
      { label: '🏰 Patna', href: '/cities/bihar/patna' },
    ],
  },
  { label: 'Routes', href: '/routes' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Fare Calculator', href: '/fare-calculator' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={`header${scrolled ? ' header-scrolled' : ''}`} role="banner">
        <div className="container">
          <div className="header-inner">
            {/* Brand Logo */}
            <Link href="/" className="header-logo" aria-label={`${SITE_CONFIG.name} — Home`}>
              <Image
                src="/shivansh tour & travel logo.jpeg"
                alt="Shivansh Tour & Travel logo"
                width={52}
                height={52}
                priority
                style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div className="logo-text">
                <span className="logo-name">Shivansh</span>
                <span className="logo-sub">Tour & Travel</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="nav-desktop" role="navigation" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`nav-link${pathname === link.href ? ' text-gold' : ''}`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg style={{ marginLeft: 4, display: 'inline', width: 12, height: 12 }} viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                        <path d="M6 8L1 3h10L6 8z" />
                      </svg>
                    )}
                  </Link>
                  {link.dropdown && activeDropdown === link.label && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0 20px 40px -8px rgba(0,0,0,0.15)',
                        border: '1px solid #e2e6ee',
                        padding: '8px',
                        minWidth: '200px',
                        zIndex: 200,
                        marginTop: '8px',
                      }}
                      role="menu"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          style={{
                            display: 'block',
                            padding: '9px 14px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#1a202c',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            transition: 'all 150ms',
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.background = '#f8f9fb';
                            (e.target as HTMLElement).style.color = '#0a1628';
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.background = 'transparent';
                            (e.target as HTMLElement).style.color = '#1a202c';
                          }}
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="header-cta" role="group" aria-label="Contact actions">
              <a
                href={getWhatsAppLink()}
                className="header-cta-btn header-cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp us"
                id="header-whatsapp-cta"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={getCallLink()}
                className="header-cta-btn header-cta-call"
                aria-label={`Call ${SITE_CONFIG.phone}`}
                id="header-call-cta"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div
        id="mobile-nav"
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div
          className="mobile-nav-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <div className="header-logo">
              <Image
                src="/shivansh tour & travel logo.jpeg"
                alt="Shivansh Tour & Travel logo"
                width={44}
                height={44}
                style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div className="logo-text">
                <span className="logo-name">Shivansh</span>
                <span className="logo-sub">Tour & Travel</span>
              </div>
            </div>
            <button
              className="mobile-nav-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>
          <nav className="mobile-nav-body" aria-label="Mobile navigation">
            <Link href="/" className="mobile-nav-link">🏠 Home</Link>
            <div className="mobile-nav-section">Taxi Services</div>
            <Link href="/local-taxi" className="mobile-nav-link">🏙️ Local Taxi</Link>
            <Link href="/outstation-taxi" className="mobile-nav-link">🛣️ Outstation Taxi</Link>
            <Link href="/one-way-taxi" className="mobile-nav-link">➡️ One-Way Taxi</Link>
            <Link href="/round-trip-taxi" className="mobile-nav-link">🔄 Round Trip</Link>
            <Link href="/airport-taxi" className="mobile-nav-link">✈️ Airport Transfer</Link>
            <Link href="/corporate-travel" className="mobile-nav-link">👔 Corporate Travel</Link>
            <Link href="/wedding-car-rental" className="mobile-nav-link">💒 Wedding Car</Link>
            <Link href="/tempo-traveller" className="mobile-nav-link">🚌 Tempo Traveller</Link>
            <div className="mobile-nav-section">Cities We Serve</div>
            <Link href="/cities/jharkhand/jamshedpur" className="mobile-nav-link">📍 Jamshedpur</Link>
            <Link href="/cities/jharkhand/ranchi" className="mobile-nav-link">🏛️ Ranchi</Link>
            <Link href="/cities/jharkhand/dhanbad" className="mobile-nav-link">⛏️ Dhanbad</Link>
            <Link href="/cities/jharkhand/deoghar" className="mobile-nav-link">🕉️ Deoghar (Baidyanath)</Link>
            <Link href="/cities/jharkhand/netarhat" className="mobile-nav-link">🌄 Netarhat</Link>
            <Link href="/cities/jharkhand/giridih" className="mobile-nav-link">⛰️ Giridih (Parasnath)</Link>
            <Link href="/cities/west-bengal/kolkata" className="mobile-nav-link">🌆 Kolkata</Link>
            <Link href="/cities/west-bengal/durgapur" className="mobile-nav-link">🏭 Durgapur</Link>
            <Link href="/cities/odisha/bhubaneswar" className="mobile-nav-link">🏛️ Bhubaneswar</Link>
            <Link href="/cities/odisha/puri" className="mobile-nav-link">🐚 Puri (Jagannath)</Link>
            <Link href="/cities/bihar/patna" className="mobile-nav-link">🏰 Patna</Link>
            <div className="mobile-nav-section">Explore</div>
            <Link href="/routes" className="mobile-nav-link">🗺️ Popular Routes</Link>
            <Link href="/fleet" className="mobile-nav-link">🚗 Our Fleet</Link>
            <Link href="/fare-calculator" className="mobile-nav-link">🧮 Fare Calculator</Link>
            <Link href="/blog" className="mobile-nav-link">📖 Travel Guides &amp; Blog</Link>
            <Link href="/about" className="mobile-nav-link">ℹ️ About Us</Link>
            <Link href="/contact" className="mobile-nav-link">📞 Contact</Link>
          </nav>
          <div className="mobile-nav-footer">
            <a
              href={getWhatsAppLink()}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-nav-whatsapp"
            >
              💬 WhatsApp Us
            </a>
            <a
              href={getCallLink()}
              className="btn btn-call"
              id="mobile-nav-call"
            >
              📞 {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
