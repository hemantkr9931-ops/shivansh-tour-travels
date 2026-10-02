// src/app/contact/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG, getCallLink, getWhatsAppLink, getEmailLink } from '@/lib/config';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BookingWidget from '@/components/ui/BookingWidget';
import HeroSlider from '@/components/ui/HeroSlider';
import MapEmbed from '@/components/ui/MapEmbed';

export const metadata: Metadata = {
  title: 'Contact Shivansh Tour & Travel | Book Cab in Jamshedpur | +91 7061767617',
  description:
    'Contact Shivansh Tour & Travel for cab booking and taxi enquiries in Jamshedpur. Call +91 7061767617, WhatsApp, or email us. Based in Sonari, Jamshedpur, Jharkhand.',
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={[{ label: 'Contact Us' }]} dark />
          <div style={{ marginTop: '16px', maxWidth: '600px' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '16px' }}>
              Contact Shivansh Tour & Travel
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7 }}>
              To book a cab or enquire about our taxi services, call, WhatsApp, or use the booking form below. We will respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact + Booking */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>

            {/* Quick contact options */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Quick Contact
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {[
                  {
                    icon: '📞',
                    title: 'Call Us',
                    value: SITE_CONFIG.phone,
                    desc: 'Speak directly with us',
                    href: getCallLink(),
                    cta: 'Call Now',
                    style: { background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: 'white' },
                    btnId: 'contact-call-card',
                  },
                  {
                    icon: '💬',
                    title: 'WhatsApp',
                    value: SITE_CONFIG.phone,
                    desc: 'Book via WhatsApp message',
                    href: getWhatsAppLink('Hello Shivansh Tour & Travel, I would like to enquire about a cab booking.'),
                    cta: 'WhatsApp Us',
                    style: { background: 'linear-gradient(135deg, #25d366, #1ba852)', color: 'white' },
                    external: true,
                    btnId: 'contact-whatsapp-card',
                  },
                  {
                    icon: '✉️',
                    title: 'Email',
                    value: SITE_CONFIG.email,
                    desc: 'Send us an email',
                    href: getEmailLink('Cab Booking Enquiry'),
                    cta: 'Send Email',
                    style: { background: 'var(--gradient-navy)', color: 'white' },
                    btnId: 'contact-email-card',
                  },
                ].map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    id={method.btnId}
                    style={{
                      ...method.style,
                      borderRadius: '16px',
                      padding: '24px',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      transition: 'all 250ms',
                      boxShadow: 'var(--shadow-md)',
                    }}
                    aria-label={`${method.title}: ${method.value}`}
                  >
                    <div style={{ fontSize: '32px' }} aria-hidden="true">{method.icon}</div>
                    <div style={{ fontWeight: 800, fontSize: '16px' }}>{method.title}</div>
                    <div style={{ fontSize: '14px', opacity: 0.85 }}>{method.value}</div>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>{method.desc}</div>
                    <div
                      style={{
                        marginTop: '12px',
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '8px',
                        padding: '8px 14px',
                        fontSize: '13px',
                        fontWeight: 700,
                        display: 'inline-block',
                        alignSelf: 'flex-start',
                      }}
                    >
                      {method.cta} →
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business info */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Our Details
              </h2>
              <div
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid var(--color-gray-200)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {[
                    {
                      icon: '🏢',
                      label: 'Business Name',
                      value: SITE_CONFIG.name,
                    },
                    {
                      icon: '📍',
                      label: 'Location',
                      value: SITE_CONFIG.addressFormatted,
                      isAddress: true,
                    },
                    {
                      icon: '📞',
                      label: 'Phone',
                      value: SITE_CONFIG.phone,
                      href: getCallLink(),
                    },
                    {
                      icon: '✉️',
                      label: 'Email',
                      value: SITE_CONFIG.email,
                      href: getEmailLink(),
                    },
                    {
                      icon: '🗺️',
                      label: 'Service Areas',
                      value: 'Jharkhand · West Bengal · Odisha · Bihar',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        paddingBottom: '16px',
                        borderBottom: '1px solid var(--color-gray-100)',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          background: 'var(--color-gray-50)',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gray-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-navy)', textDecoration: 'none' }}
                          >
                            {item.value}
                          </a>
                        ) : item.isAddress ? (
                          <address
                            style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-navy)', fontStyle: 'normal', lineHeight: 1.5 }}
                          >
                            {item.value}
                          </address>
                        ) : (
                          <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-navy)' }}>
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div style={{ marginTop: '20px' }}>
                <MapEmbed
                  query={SITE_CONFIG.mapQuery}
                  label="Shivansh Tour & Travel — Sonari, Jamshedpur"
                  height={320}
                />
              </div>
            </div>

            {/* Booking form */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Cab Booking Enquiry Form
              </h2>
              <BookingWidget title="Send Booking Enquiry" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
