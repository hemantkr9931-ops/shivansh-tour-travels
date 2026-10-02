// src/app/[serviceSlug]/page.tsx
// Dynamic service page handler for all service routes

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';
import { getServiceBySlug, getAllServices } from '@/data/services';
import { vehicles } from '@/data/vehicles';
import { routes } from '@/data/routes';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import BookingWidget from '@/components/ui/BookingWidget';
import FareCalculator from '@/components/ui/FareCalculator';
import FAQSchema from '@/components/schema/FAQSchema';
import HeroSlider from '@/components/ui/HeroSlider';

const SERVICE_SLUGS = [
  'local-taxi',
  'outstation-taxi',
  'one-way-taxi',
  'round-trip-taxi',
  'airport-taxi',
  'corporate-travel',
  'wedding-car-rental',
  'tempo-traveller',
];

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ serviceSlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return { title: 'Not Found', robots: { index: false, follow: false } };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `${SITE_CONFIG.url}/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${SITE_CONFIG.url}/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;

  if (!SERVICE_SLUGS.includes(serviceSlug)) {
    notFound();
  }

  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  const relatedServices = getAllServices().filter(
    (s) => service.relatedServices.includes(s.id) && s.id !== service.id
  );

  const relevantRoutes = routes
    .filter((r) => r.services.includes(service.id) && r.index)
    .slice(0, 6);

  const bookingMsg = `Hello Shivansh Tour & Travels,\n\nI want to book: ${service.name}\n\nCould you please share available vehicles and fare? Thank you!`;

  return (
    <>
      <FAQSchema faqs={service.faqs} />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
            dark
          />
          <div style={{ marginTop: '16px', maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(245,166,35,0.12)',
                border: '1px solid rgba(245,166,35,0.3)',
                borderRadius: '999px',
                padding: '4px 14px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '16px',
              }}
            >
              <span aria-hidden="true">{service.icon}</span>
              {service.name}
            </div>
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              {service.name} in Jamshedpur
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              {service.shortDescription}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href={getWhatsAppLink(bookingMsg)}
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                id={`service-hero-whatsapp-${service.id}`}
              >
                💬 Book {service.name}
              </a>
              <a href={getCallLink()} className="btn btn-secondary btn-lg" id={`service-hero-call-${service.id}`}>
                📞 Call to Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>

            {/* Description */}
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                About Our {service.name}
              </h2>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, fontSize: '15px', marginBottom: '24px' }}>
                {service.description}
              </p>

              {/* Features */}
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                What&apos;s Included
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      fontSize: '14px',
                      color: 'var(--color-gray-700)',
                      background: 'white',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--color-gray-100)',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: 'var(--color-green)', flexShrink: 0 }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vehicle options */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Available Vehicle Categories
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '14px' }}>
                {vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    style={{
                      background: 'white',
                      borderRadius: '14px',
                      border: '1.5px solid var(--color-gray-200)',
                      overflow: 'hidden',
                      textAlign: 'center',
                    }}
                  >
                    {/* Vehicle image */}
                    <div
                      style={{
                        position: 'relative',
                        background: 'var(--gradient-navy)',
                        height: '110px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      {vehicle.image ? (
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          width={180}
                          height={110}
                          style={{
                            objectFit: 'contain',
                            width: '100%',
                            height: '100%',
                            padding: '8px 10px',
                            filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.4))',
                          }}
                        />
                      ) : (
                        <div style={{ fontSize: '40px' }} aria-hidden="true">{vehicle.icon}</div>
                      )}
                    </div>
                    {/* Card info */}
                    <div style={{ padding: '10px 12px 14px' }}>
                      <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '14px', marginBottom: '3px' }}>{vehicle.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>Up to {vehicle.passengerCapacity} pax</div>
                      <div style={{ fontSize: '11px', color: 'var(--color-gray-400)', marginTop: '2px' }}>{vehicle.examples[0]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant routes */}
            {relevantRoutes.length > 0 && (
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                  Popular Routes for {service.name}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
                  {relevantRoutes.map((route) => (
                    <Link key={route.id} href={`/routes/${route.slug}`} className="route-card">
                      <div className="route-card-header">
                        <span aria-hidden="true">🚕</span>
                        <span>{route.originName} → {route.destinationName}</span>
                      </div>
                      <div className="route-card-meta">
                        <span>~{route.approxDistanceKm} km</span>
                        <span>·</span>
                        <span>~{route.approxDurationHours} hrs</span>
                      </div>
                      <div className="route-card-cta">View details →</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Fare calculator */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Estimate Your Fare
              </h2>
              <FareCalculator />
            </div>

            {/* Booking widget */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Book {service.name}
              </h2>
              <BookingWidget
                title={`Book ${service.name} from Jamshedpur`}
                defaultService={service.id}
              />
            </div>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '16px' }}>
                  Related Services
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {relatedServices.map((s) => (
                    <Link
                      key={s.id}
                      href={`/${s.slug}`}
                      className="btn btn-outline"
                    >
                      {s.icon} {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <FAQSection
          faqs={service.faqs}
          title={`${service.name} — Frequently Asked Questions`}
        />
      )}

      {/* CTA */}
      <section style={{ background: 'var(--gradient-navy)', padding: '48px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '12px' }}>
            Ready to Book?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 24px', fontSize: '15px' }}>
            Contact us to confirm vehicle availability and get an accurate fare for your trip.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <a
              href={getWhatsAppLink(bookingMsg)}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              id={`service-footer-whatsapp-${service.id}`}
            >
              💬 Book on WhatsApp
            </a>
            <a href={getCallLink()} className="btn btn-secondary btn-lg" id={`service-footer-call-${service.id}`}>
              📞 {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
