// src/app/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { getAllServices } from '@/data/services';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import HeroSlider from '@/components/ui/HeroSlider';

export const metadata: Metadata = {
  title: 'Cab Services | Local Taxi, Outstation, Airport Transfer | Shivansh Jamshedpur',
  description:
    'All cab and taxi services by Shivansh Tour & Travel — local taxi, outstation cab, one-way taxi, round trip, airport transfer, corporate travel, wedding cars, Tempo Traveller.',
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
};

export default function ServicesPage() {
  const allServices = getAllServices();
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={[{ label: 'Services' }]} dark />
          <div style={{ marginTop: '16px', maxWidth: '600px' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '16px' }}>
              All Taxi & Cab Services
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7 }}>
              From local Jamshedpur rides to outstation journeys, airport transfers, corporate travel, and group tours — explore all services offered by Shivansh Tour & Travel.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {allServices.map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="service-card"
              >
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <div className="service-name">{service.name}</div>
                <div className="service-desc">{service.shortDescription}</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} style={{ fontSize: '12px', color: 'var(--color-gray-500)', display: 'flex', gap: '5px' }}>
                      <span style={{ color: 'var(--color-green)' }}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-link">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
