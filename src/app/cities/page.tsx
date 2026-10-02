// src/app/cities/page.tsx — Cities hub page listing all covered cities
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { getIndexedCities } from '@/data/cities';
import type { City } from '@/data/types';

export const metadata: Metadata = {
  title: 'Cities We Serve | Taxi & Cab Service | Shivansh Tour & Travels',
  description:
    'Shivansh Tour & Travels provides cab and taxi service across Jharkhand, West Bengal, Odisha, and Bihar. Browse all covered cities and book your cab today.',
  alternates: { canonical: `${SITE_CONFIG.url}/cities` },
};

const STATE_META: Record<string, { label: string; flag: string; color: string; bg: string }> = {
  jharkhand: { label: 'Jharkhand', flag: '🌿', color: '#166534', bg: '#f0fdf4' },
  'west-bengal': { label: 'West Bengal', flag: '🌸', color: '#831843', bg: '#fdf2f8' },
  odisha: { label: 'Odisha', flag: '🛕', color: '#7c2d12', bg: '#fff7ed' },
  bihar: { label: 'Bihar', flag: '🏛️', color: '#1e3a5f', bg: '#f0f4ff' },
};

export default function CitiesPage() {
  const allCities = getIndexedCities();

  // Group by state
  const byState: Record<string, City[]> = {};
  allCities.forEach((c) => {
    if (!byState[c.state]) byState[c.state] = [];
    byState[c.state].push(c);
  });

  const stateOrder = ['jharkhand', 'west-bengal', 'odisha', 'bihar'];

  return (
    <main style={{ minHeight: '70vh' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)',
        padding: '64px 0 48px',
        textAlign: 'center',
      }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '20px', background: 'rgba(255,193,7,0.15)', border: '1px solid rgba(255,193,7,0.3)', marginBottom: '16px' }}>
            <span style={{ color: '#ffc107', fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em' }}>SERVICE COVERAGE</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900, marginBottom: '16px', lineHeight: 1.15 }}>
            Cities We Serve
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            Shivansh Tour &amp; Travels operates across Jharkhand, West Bengal, Odisha &amp; Bihar.
            Click any city to see cab fares, routes, and local information.
          </p>
        </div>
      </section>

      {/* Cities by State */}
      <section style={{ padding: '56px 0', background: '#f8faff' }}>
        <div className="container">
          {stateOrder.map((stateKey) => {
            const stateCities = byState[stateKey];
            if (!stateCities || stateCities.length === 0) return null;
            const meta = STATE_META[stateKey] || { label: stateKey, flag: '📍', color: '#0a1628', bg: '#f0f4ff' };

            return (
              <div key={stateKey} style={{ marginBottom: '48px' }}>
                {/* State header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  marginBottom: '24px', paddingBottom: '16px',
                  borderBottom: `3px solid ${meta.color}20`,
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '14px',
                    background: meta.bg, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '24px',
                    border: `2px solid ${meta.color}20`,
                    flexShrink: 0,
                  }}>
                    {meta.flag}
                  </div>
                  <div>
                    <h2 style={{ color: meta.color, fontSize: '22px', fontWeight: 800, margin: 0 }}>
                      {meta.label}
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '13px', margin: 0, marginTop: '2px' }}>
                      {stateCities.length} {stateCities.length === 1 ? 'city' : 'cities'} covered
                    </p>
                  </div>
                </div>

                {/* City cards grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '14px',
                }}>
                  {stateCities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/cities/${city.state}/${city.slug}`}
                      className="city-hub-card"
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '16px', fontWeight: 800, color: '#0a1628', marginBottom: '4px' }}>
                            {city.name}
                          </div>
                          {city.region && (
                            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                              📍 {city.region}
                            </div>
                          )}
                          <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>
                            {city.description?.substring(0, 80)}...
                          </div>
                        </div>
                      </div>
                      <div style={{
                        marginTop: '14px', paddingTop: '12px',
                        borderTop: '1px solid #f1f5f9',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: meta.color }}>
                          View Cab Info →
                        </span>
                        {city.isDistrict && (
                          <span style={{
                            padding: '2px 8px', borderRadius: '10px',
                            background: meta.bg, color: meta.color,
                            fontSize: '10px', fontWeight: 700,
                          }}>
                            District
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '48px 0', background: 'linear-gradient(135deg, #0a1628, #1e3a5f)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '26px', fontWeight: 800, marginBottom: '12px' }}>
            Don&apos;t see your city?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '28px' }}>
            We serve many more cities. Call or WhatsApp us — we&apos;ll get you there.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/917061767617`} target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp">
              💬 WhatsApp Us
            </a>
            <a href="tel:+917061767617" className="btn btn-gold">
              📞 Call +91 7061767617
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
