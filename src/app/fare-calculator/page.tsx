// src/app/fare-calculator/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FareCalculator from '@/components/ui/FareCalculator';
import { fareConfigs } from '@/data/fares';
import { vehicles } from '@/data/vehicles';
import HeroSlider from '@/components/ui/HeroSlider';

export const metadata: Metadata = {
  title: 'Cab Fare Calculator | Jamshedpur Taxi Fare Estimator | Shivansh Tour',
  description:
    'Estimate your cab fare from Jamshedpur using our fare calculator. Select vehicle type, distance, and trip type to get an estimated outstation or local taxi fare. Contact us for an exact quote.',
  alternates: { canonical: `${SITE_CONFIG.url}/fare-calculator` },
};

export default function FareCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={[{ label: 'Fare Calculator' }]} dark />
          <div style={{ marginTop: '16px', maxWidth: '600px' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '16px' }}>
              Jamshedpur Cab Fare Estimator
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7 }}>
              Use this tool to get an approximate fare estimate for your taxi booking. Select vehicle type, distance, and trip type. For an accurate quote, contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {/* Disclaimer banner */}
            <div
              style={{
                background: 'rgba(245,166,35,0.08)',
                border: '1.5px solid rgba(245,166,35,0.3)',
                borderRadius: '12px',
                padding: '16px 20px',
                marginBottom: '28px',
                fontSize: '13px',
                color: 'var(--color-gray-700)',
                display: 'flex',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '18px', flexShrink: 0 }}>⚠️</span>
              <div>
                <strong>Important:</strong> All fare estimates from this calculator are approximate only and are based on a base per-km rate. Actual fare depends on vehicle type, exact route, tolls, state permits, parking, driver allowance, and vehicle availability. Contact us for an accurate quote before booking.
              </div>
            </div>

            <FareCalculator />
          </div>
        </div>
      </section>

      {/* Rate table */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
              Approximate Base Rates by Vehicle Type
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-gray-500)', marginBottom: '20px', lineHeight: 1.6 }}>
              The table below shows approximate base per-km rates used by the estimator. These are indicative starting points and do not include tolls, parking, state permits, driver allowance, or any other applicable charges.
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '14px',
                }}
                aria-label="Approximate cab fare rates by vehicle type"
              >
                <thead>
                  <tr style={{ background: 'var(--gradient-navy)' }}>
                    {['Vehicle Type', 'Examples', 'Capacity', 'Approx Rate/km', 'Min Fare'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '12px 14px',
                          color: 'white',
                          fontWeight: 700,
                          textAlign: 'left',
                          fontSize: '12px',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fareConfigs.map((fare, i) => {
                    const vehicle = vehicles.find((v) => v.id === fare.vehicleId);
                    return (
                      <tr
                        key={fare.vehicleId}
                        style={{
                          background: i % 2 === 0 ? 'white' : 'var(--color-gray-50)',
                          borderBottom: '1px solid var(--color-gray-100)',
                        }}
                      >
                        <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--color-navy)' }}>
                          {fare.vehicleName}
                        </td>
                        <td style={{ padding: '12px 14px', color: 'var(--color-gray-500)' }}>
                          {vehicle?.examples.slice(0, 2).join(', ')}
                        </td>
                        <td style={{ padding: '12px 14px', color: 'var(--color-gray-700)' }}>
                          Up to {vehicle?.passengerCapacity || '—'}
                        </td>
                        <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--color-navy)' }}>
                          ₹{fare.baseRatePerKm}/km
                        </td>
                        <td style={{ padding: '12px 14px', color: 'var(--color-gray-700)' }}>
                          ₹{fare.minimumFare.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div
              style={{
                marginTop: '16px',
                padding: '14px 16px',
                background: 'var(--color-gray-50)',
                borderRadius: '10px',
                fontSize: '13px',
                color: 'var(--color-gray-500)',
                lineHeight: 1.6,
              }}
            >
              * Rates are approximate and may change without notice. Additional charges include tolls, state permits, parking, and driver allowance (for outstation/multi-day trips). Contact us for an accurate, up-to-date fare for your specific route.
            </div>
          </div>
        </div>
      </section>

      {/* Common route estimates */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '8px' }}>
              Example Fare Ranges for Popular Routes
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-gray-500)', marginBottom: '20px', lineHeight: 1.6 }}>
              The following are rough fare ranges for common routes from Jamshedpur. Actual fares will vary. Contact us to get a confirmed quote.
            </p>

            {[
              { route: 'Jamshedpur to Ranchi', km: '~135 km', sedan: '₹1,500–2,000', suv: '₹2,200–2,800' },
              { route: 'Jamshedpur to Dhanbad', km: '~130 km', sedan: '₹1,400–1,900', suv: '₹2,100–2,700' },
              { route: 'Jamshedpur to Kolkata', km: '~270 km', sedan: '₹3,000–3,800', suv: '₹4,200–5,200' },
              { route: 'Jamshedpur to Deoghar', km: '~225 km', sedan: '₹2,500–3,000', suv: '₹3,500–4,200' },
              { route: 'Jamshedpur to Bhubaneswar', km: '~320 km', sedan: '₹3,500–4,500', suv: '₹5,000–6,200' },
              { route: 'Jamshedpur to Puri', km: '~350 km', sedan: '₹3,800–4,800', suv: '₹5,500–6,800' },
              { route: 'Jamshedpur to Patna', km: '~430 km', sedan: '₹4,500–5,500', suv: '₹6,500–8,000' },
            ].map((item) => (
              <div
                key={item.route}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '14px 16px',
                  background: 'white',
                  borderRadius: '10px',
                  marginBottom: '8px',
                  border: '1px solid var(--color-gray-100)',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '15px' }}>
                    {item.route}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-gray-500)' }}>{item.km} one way</div>
                </div>
                <div style={{ display: 'flex', gap: '20px', textAlign: 'right' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-gray-500)', marginBottom: '2px' }}>Sedan</div>
                    <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '14px' }}>{item.sedan}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-gray-500)', marginBottom: '2px' }}>SUV</div>
                    <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '14px' }}>{item.suv}</div>
                  </div>
                </div>
              </div>
            ))}
            <p style={{ fontSize: '12px', color: 'var(--color-gray-500)', marginTop: '12px' }}>
              All fares are approximate estimates for one-way trips. Tolls, state permits, and driver allowance are extra. Call or WhatsApp for an accurate, current quote.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
