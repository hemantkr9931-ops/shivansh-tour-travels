// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, getCallLink, getWhatsAppLink, getEmailLink } from '@/lib/config';

const popularRoutes = [
  { label: 'Jamshedpur to Ranchi', href: '/routes/jamshedpur-to-ranchi' },
  { label: 'Jamshedpur to Kolkata', href: '/routes/jamshedpur-to-kolkata' },
  { label: 'Jamshedpur to Dhanbad', href: '/routes/jamshedpur-to-dhanbad' },
  { label: 'Jamshedpur to Bokaro', href: '/routes/jamshedpur-to-bokaro' },
  { label: 'Jamshedpur to Deoghar', href: '/routes/jamshedpur-to-deoghar' },
  { label: 'Jamshedpur to Bhubaneswar', href: '/routes/jamshedpur-to-bhubaneswar' },
  { label: 'Jamshedpur to Puri', href: '/routes/jamshedpur-to-puri' },
];

const services = [
  { label: 'Local Taxi Service', href: '/local-taxi' },
  { label: 'Outstation Taxi', href: '/outstation-taxi' },
  { label: 'One-Way Taxi', href: '/one-way-taxi' },
  { label: 'Round Trip Taxi', href: '/round-trip-taxi' },
  { label: 'Airport Transfer', href: '/airport-taxi' },
  { label: 'Corporate Travel', href: '/corporate-travel' },
  { label: 'Wedding Car Rental', href: '/wedding-car-rental' },
  { label: 'Tempo Traveller', href: '/tempo-traveller' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Fleet', href: '/fleet' },
  { label: 'Fare Calculator', href: '/fare-calculator' },
  { label: 'All Routes', href: '/routes' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cancellation Policy', href: '/refund-cancellation-policy' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <Image
                src="/shivansh tour & travel logo.jpeg"
                alt="Shivansh Tour & Travel logo"
                width={56}
                height={56}
                style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid rgba(245,166,35,0.4)' }}
              />
              <div>
                <div className="footer-brand-name">{SITE_CONFIG.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Jamshedpur, Jharkhand
                </div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Reliable taxi and cab service from Jamshedpur — covering local travel, airport transfers, outstation trips, and corporate transportation across Jharkhand, West Bengal, Odisha, and Bihar.
            </p>
            <div>
              <div className="footer-contact-item">
                <span>📞</span>
                <div>
                  <a href={getCallLink()} aria-label={`Call ${SITE_CONFIG.phone}`}>
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span>💬</span>
                <div>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp us"
                  >
                    WhatsApp: {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <div>
                  <a href={getEmailLink()}>
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span>📍</span>
                <address style={{ fontStyle: 'normal', lineHeight: 1.5 }}>
                  {SITE_CONFIG.addressFormatted}
                </address>
              </div>
              {/* Google Business & Reviews */}
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href={SITE_CONFIG.gmb.shareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.08)', borderRadius: '8px',
                    padding: '8px 12px', textDecoration: 'none', transition: 'background 0.15s',
                    color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 500,
                  }}
                  aria-label="View our Google Business Profile"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google Business Profile
                </a>
                <a
                  href={SITE_CONFIG.gmb.shareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-gmb-review-btn"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.35)',
                    borderRadius: '8px', padding: '8px 12px', textDecoration: 'none',
                    color: 'var(--color-gold)', fontSize: '13px', fontWeight: 600,
                  }}
                  aria-label="Write a Google review"
                >
                  ⭐ Write a Google Review
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="footer-heading">Our Services</h2>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h2 className="footer-heading">Popular Routes</h2>
            <ul className="footer-links">
              {popularRoutes.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="footer-heading">Company</h2>
            <ul className="footer-links">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-row">
            <p className="footer-copyright">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="footer-dev-credit">
              Developed by{' '}
              <a
                href="https://basant.me"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dev-link"
                aria-label="Developer portfolio — Basant Kumar"
              >
                Basant Kumar
              </a>
            </p>
          </div>
          <nav className="footer-legal" aria-label="Legal links">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/refund-cancellation-policy">Cancellation</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
