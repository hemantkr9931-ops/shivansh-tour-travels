// src/app/routes/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { getIndexedRoutes } from '@/data/routes';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import HeroSlider from '@/components/ui/HeroSlider';

export const metadata: Metadata = {
  title: 'Outstation Cab Routes from Jamshedpur | Shivansh Tour & Travel',
  description:
    'Browse all outstation cab routes from Jamshedpur — to Ranchi, Kolkata, Dhanbad, Bokaro, Deoghar, Bhubaneswar, Puri, Patna and more. One-way and round-trip taxi.',
  alternates: { canonical: `${SITE_CONFIG.url}/routes` },
};

const routesByState: Record<string, ReturnType<typeof getIndexedRoutes>> = {};

getIndexedRoutes().forEach((route) => {
  const stateKey =
    route.originState === 'jharkhand' && route.destinationState === 'jharkhand'
      ? 'Jharkhand'
      : route.destinationState === 'west-bengal' || route.originState === 'west-bengal'
      ? 'West Bengal'
      : route.destinationState === 'odisha' || route.originState === 'odisha'
      ? 'Odisha'
      : 'Bihar';

  if (!routesByState[stateKey]) routesByState[stateKey] = [];
  routesByState[stateKey].push(route);
});

export default function RoutesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={[{ label: 'Routes' }]} dark />
          <div style={{ marginTop: '16px', maxWidth: '600px' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '16px' }}>
              Outstation Cab Routes from Jamshedpur
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7 }}>
              One-way and round-trip taxi service from Jamshedpur to major cities across Jharkhand, West Bengal, Odisha, and Bihar.
            </p>
          </div>
        </div>
      </section>

      {/* Routes by state */}
      <section className="section section-gray">
        <div className="container">
          {Object.entries(routesByState).map(([state, stateRoutes]) => (
            <div key={state} style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--color-gray-200)' }}>
                {state} Routes
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
                {stateRoutes.map((route) => (
                  <Link
                    key={route.id}
                    href={`/routes/${route.slug}`}
                    className="route-card"
                  >
                    <div className="route-card-header">
                      <span aria-hidden="true">🚕</span>
                      <span style={{ fontSize: '14px' }}>{route.originName} → {route.destinationName}</span>
                    </div>
                    <div className="route-card-meta">
                      <span>~{route.approxDistanceKm} km</span>
                      <span>·</span>
                      <span>~{route.approxDurationHours} hrs</span>
                    </div>
                    <div className="route-card-cta">View route details →</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
