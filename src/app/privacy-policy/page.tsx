// src/app/privacy-policy/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG, getEmailLink } from '@/lib/config';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shivansh Tour & Travel',
  description: 'Privacy policy for Shivansh Tour & Travel website and cab booking service.',
  alternates: { canonical: `${SITE_CONFIG.url}/privacy-policy` },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section style={{ background: 'var(--gradient-navy)', padding: '40px 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} dark />
          <h1 style={{ marginTop: '16px', fontSize: '2rem', fontWeight: 800, color: 'white' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', marginTop: '6px' }}>
            Last updated: September 2025
          </p>
        </div>
      </section>
      <section className="section section-gray">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', lineHeight: 1.8, color: 'var(--color-gray-700)', fontSize: '15px' }}>
            <h2 style={{ color: 'var(--color-navy)', fontWeight: 800, marginBottom: '12px', fontSize: '18px' }}>1. Information We Collect</h2>
            <p style={{ marginBottom: '16px' }}>When you contact us via WhatsApp, phone call, email, or our booking form, we may collect: your name, phone number, email address, pickup/drop location, and travel date. We do not collect any payment card information through this website.</p>
            <h2 style={{ color: 'var(--color-navy)', fontWeight: 800, marginBottom: '12px', fontSize: '18px' }}>2. How We Use Your Information</h2>
            <p style={{ marginBottom: '16px' }}>We use your information solely to: confirm your cab booking, communicate trip details, and respond to your enquiries. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            <h2 style={{ color: 'var(--color-navy)', fontWeight: 800, marginBottom: '12px', fontSize: '18px' }}>3. WhatsApp Communication</h2>
            <p style={{ marginBottom: '16px' }}>When you send us a WhatsApp message, your message is subject to WhatsApp's own privacy policy. We use WhatsApp only for booking communication and do not store WhatsApp messages in any external database.</p>
            <h2 style={{ color: 'var(--color-navy)', fontWeight: 800, marginBottom: '12px', fontSize: '18px' }}>4. Cookies & Analytics</h2>
            <p style={{ marginBottom: '16px' }}>This website may use Google Analytics (if configured) to understand how visitors interact with our website. Analytics data is aggregated and anonymised. You can opt out of Google Analytics tracking by using a browser extension.</p>
            <h2 style={{ color: 'var(--color-navy)', fontWeight: 800, marginBottom: '12px', fontSize: '18px' }}>5. Data Retention</h2>
            <p style={{ marginBottom: '16px' }}>We retain booking and communication records for a reasonable period to manage our services. You may request deletion of your personal data by contacting us.</p>
            <h2 style={{ color: 'var(--color-navy)', fontWeight: 800, marginBottom: '12px', fontSize: '18px' }}>6. Contact</h2>
            <p>For privacy-related questions, contact us at: <a href={getEmailLink('Privacy Policy Enquiry')} style={{ color: 'var(--color-navy-600)', fontWeight: 600 }}>{SITE_CONFIG.email}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
