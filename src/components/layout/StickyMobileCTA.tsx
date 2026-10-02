'use client';
import { getCallLink, getWhatsAppLink, SITE_CONFIG } from '@/lib/config';

export default function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta" role="navigation" aria-label="Quick contact actions">
      <a
        href={getCallLink()}
        className="sticky-cta-btn sticky-cta-call"
        aria-label={`Call ${SITE_CONFIG.phone}`}
        id="sticky-call-btn"
      >
        <span style={{ fontSize: '20px' }} aria-hidden="true">📞</span>
        <span>Call</span>
      </a>
      <a
        href={getWhatsAppLink()}
        className="sticky-cta-btn sticky-cta-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        id="sticky-whatsapp-btn"
      >
        <span style={{ fontSize: '20px' }} aria-hidden="true">💬</span>
        <span>WhatsApp</span>
      </a>
      <a
        href="/contact"
        className="sticky-cta-btn sticky-cta-book"
        aria-label="Book a cab"
        id="sticky-book-btn"
      >
        <span style={{ fontSize: '20px' }} aria-hidden="true">🚕</span>
        <span>Book Now</span>
      </a>
    </div>
  );
}
