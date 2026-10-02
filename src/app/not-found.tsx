// src/app/not-found.tsx
import Link from 'next/link';
import { getCallLink, getWhatsAppLink } from '@/lib/config';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 20px',
        background: 'var(--color-gray-50)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '480px' }}>
        <div style={{ fontSize: '80px', marginBottom: '16px' }} aria-hidden="true">🚕</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '12px' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--color-gray-500)', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
          The page you are looking for does not exist or has been moved. Use the links below to navigate.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
          <Link href="/" className="btn btn-navy">
            🏠 Back to Home
          </Link>
          <Link href="/routes" className="btn btn-outline">
            🗺️ Browse Routes
          </Link>
          <Link href="/contact" className="btn btn-outline">
            📞 Contact Us
          </Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href={getWhatsAppLink()}
            className="btn btn-whatsapp btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us
          </a>
          <a href={getCallLink()} className="btn btn-call btn-sm">
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
