// src/app/fleet/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';
import { vehicles } from '@/data/vehicles';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import HeroSlider from '@/components/ui/HeroSlider';

export const metadata: Metadata = {
  title: 'Our Fleet | Sedan, SUV, MUV & Tempo Traveller in Jamshedpur | Shivansh Tour',
  description:
    'View vehicle fleet of Shivansh Tour & Travel — Sedan, MUV, SUV, Premium SUV, and Tempo Traveller for local taxi, outstation cab, and group travel from Jamshedpur.',
  alternates: { canonical: `${SITE_CONFIG.url}/fleet` },
};

export default function FleetPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={[{ label: 'Our Fleet' }]} dark />
          <div style={{ marginTop: '16px', maxWidth: '600px' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '16px' }}>
              Our Cab Fleet
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7 }}>
              Shivansh Tour & Travel offers a range of well-maintained vehicle categories to suit your travel needs — from economical sedans to spacious Tempo Travellers for group trips.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet grid */}
      <section className="section section-gray">
        <div className="container">
          <div className="grid-3">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-gray-100)',
                }}
              >
                {/* Vehicle image banner */}
                <div
                  style={{
                    position: 'relative',
                    background: 'var(--gradient-navy)',
                    padding: '0',
                    height: '200px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {vehicle.image ? (
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} — ${vehicle.examples[0]}`}
                      width={360}
                      height={200}
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%',
                        padding: '12px 16px',
                        filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.35))',
                      }}
                    />
                  ) : (
                    <div style={{ fontSize: '64px' }} aria-hidden="true">{vehicle.icon}</div>
                  )}
                  {/* Bottom gradient + name overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(10,22,40,0.92) 0%, transparent 100%)',
                      padding: '20px 16px 14px',
                    }}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
                      {vehicle.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-gold)', marginTop: '2px' }}>
                      {vehicle.examples[0]}
                      {vehicle.examples.length > 1 ? ` · ${vehicle.examples[1]}` : ''}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                    {[
                      { icon: '👥', label: 'Passengers', value: `Up to ${vehicle.passengerCapacity}` },
                      { icon: '🧳', label: 'Luggage', value: vehicle.luggageCapacity },
                      { icon: '❄️', label: 'Air Conditioning', value: vehicle.isAC ? 'Yes' : 'No' },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 12px',
                          background: 'var(--color-gray-50)',
                          borderRadius: '8px',
                          fontSize: '14px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gray-500)' }}>
                          <span aria-hidden="true">{spec.icon}</span>
                          <span>{spec.label}</span>
                        </div>
                        <div style={{ fontWeight: 600, color: 'var(--color-navy)' }}>{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gray-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Best For
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {vehicle.bestFor.map((use) => (
                        <span
                          key={use}
                          style={{
                            fontSize: '12px',
                            background: 'rgba(245,166,35,0.08)',
                            border: '1px solid rgba(245,166,35,0.2)',
                            borderRadius: '999px',
                            padding: '3px 10px',
                            color: 'var(--color-navy)',
                          }}
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {vehicle.features.length > 0 && (
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                      {vehicle.features.slice(0, 4).map((f) => (
                        <li
                          key={f}
                          style={{
                            fontSize: '13px',
                            color: 'var(--color-gray-700)',
                            display: 'flex',
                            gap: '6px',
                            alignItems: 'flex-start',
                          }}
                        >
                          <span style={{ color: 'var(--color-green)', flexShrink: 0 }}>✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={getWhatsAppLink(
                      `Hello Shivansh Tour & Travel, I want to book a ${vehicle.name}. Please share availability and fare.`
                    )}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`fleet-book-${vehicle.id}`}
                  >
                    💬 Book {vehicle.name}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Availability note */}
          <div
            style={{
              maxWidth: '600px',
              margin: '40px auto 0',
              background: 'rgba(245,166,35,0.08)',
              border: '1px solid rgba(245,166,35,0.2)',
              borderRadius: '12px',
              padding: '20px 24px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '14px', color: 'var(--color-gray-700)', lineHeight: 1.7 }}>
              <strong>Note:</strong> Vehicle availability depends on current bookings and scheduling. Contact us to confirm that your preferred vehicle is available for your travel date before making plans.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              <a href={getWhatsAppLink()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" id="fleet-whatsapp-enquiry">
                💬 Check Availability on WhatsApp
              </a>
              <a href={getCallLink()} className="btn btn-navy" id="fleet-call-enquiry">
                📞 {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gradient-navy)', padding: '48px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '12px' }}>
            Ready to Book?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 24px', fontSize: '15px' }}>
            Contact us to confirm vehicle availability and get a fare estimate for your route.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <a
              href={getWhatsAppLink()}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              id="fleet-footer-whatsapp"
            >
              💬 Book on WhatsApp
            </a>
            <a href={getCallLink()} className="btn btn-secondary btn-lg" id="fleet-footer-call">
              📞 {SITE_CONFIG.phone}
            </a>
            <Link href="/fare-calculator" className="btn btn-secondary btn-lg">
              🧮 Estimate Fare
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
