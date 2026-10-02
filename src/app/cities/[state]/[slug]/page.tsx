// src/app/cities/[state]/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';
import { getCityBySlug, getIndexedCities } from '@/data/cities';
import { getRoutesByOrigin, getRoutesByDestination } from '@/data/routes';
import { services } from '@/data/services';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import BookingWidget from '@/components/ui/BookingWidget';
import FareCalculator from '@/components/ui/FareCalculator';
import FAQSchema from '@/components/schema/FAQSchema';
import HeroSlider from '@/components/ui/HeroSlider';
import MapEmbed from '@/components/ui/MapEmbed';

export async function generateStaticParams() {
  return getIndexedCities().map((c) => ({ state: c.state, slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city || !city.index) return { title: 'Not Found', robots: { index: false, follow: false } };

  return {
    title: city.seoTitle,
    description: city.seoDescription,
    alternates: { canonical: `${SITE_CONFIG.url}/cities/${city.state}/${city.slug}` },
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      url: `${SITE_CONFIG.url}/cities/${city.state}/${city.slug}`,
    },
    robots: city.index ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { slug, state } = await params;
  const city = getCityBySlug(slug);

  if (!city || !city.index || city.state !== state) {
    notFound();
  }

  const outgoingRoutes = getRoutesByOrigin(city.id);
  const incomingRoutes = getRoutesByDestination(city.id);
  const cityServices = services.filter((s) => city.services.includes(s.id));

  const breadcrumbItems = [
    { label: 'Cities', href: '/cities' },
    { label: city.stateName, href: `/cities/${city.state}` },
    { label: city.name },
  ];

  const bookingMsg = `Hello Shivansh Tour & Travels,\n\nI need a taxi service in/for ${city.name}.\n\nCould you please share available options and fare? Thank you!`;

  return (
    <>
      <FAQSchema faqs={city.faqs} />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} dark />
          <div style={{ marginTop: '16px', maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
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
              Taxi Service — {city.stateName}
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
              Taxi Service in {city.name}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              {city.intro.slice(0, 220)}...
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href={getWhatsAppLink(bookingMsg)}
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                id={`city-hero-whatsapp-${city.id}`}
              >
                💬 Book Taxi in {city.name}
              </a>
              <a href={getCallLink()} className="btn btn-secondary btn-lg" id={`city-hero-call-${city.id}`}>
                📞 {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City overview */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>

            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                Cab & Taxi Service in {city.name}
              </h2>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
                {city.description}
              </p>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
                {city.intro}
              </p>

              {/* Pickup areas */}
              {city.pickupAreas.length > 0 && (
                <>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                    Pickup Areas in {city.name}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {city.pickupAreas.map((area) => (
                      <span
                        key={area}
                        style={{
                          background: 'white',
                          border: '1px solid var(--color-gray-200)',
                          borderRadius: '999px',
                          padding: '5px 14px',
                          fontSize: '13px',
                          color: 'var(--color-gray-700)',
                          fontWeight: 500,
                        }}
                      >
                        📍 {area}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* Railway / Airport */}
              {(city.railwayStation || city.airport) && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {city.railwayStation && (
                    <div
                      style={{
                        background: 'white',
                        border: '1px solid var(--color-gray-200)',
                        borderRadius: '10px',
                        padding: '14px',
                        display: 'flex',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--color-gray-700)',
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>🚂</span>
                      <span>{city.railwayStation}</span>
                    </div>
                  )}
                  {city.airport && (
                    <div
                      style={{
                        background: 'white',
                        border: '1px solid var(--color-gray-200)',
                        borderRadius: '10px',
                        padding: '14px',
                        display: 'flex',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--color-gray-700)',
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>✈️</span>
                      <span>{city.airport}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Travel tips */}
              {city.travelTips.length > 0 && (
                <>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                    Travel Tips for {city.name}
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {city.travelTips.map((tip) => (
                      <li
                        key={tip}
                        style={{
                          display: 'flex',
                          gap: '8px',
                          fontSize: '14px',
                          color: 'var(--color-gray-700)',
                          background: 'white',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid var(--color-gray-100)',
                        }}
                      >
                        <span>💡</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Services available */}
            {cityServices.length > 0 && (
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                  Taxi Services for {city.name}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
                  {cityServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/cities/${city.state}/${city.slug}/${service.slug}`}
                      className="service-card"
                      style={{ padding: '20px' }}
                    >
                      <div className="service-icon" aria-hidden="true">{service.icon}</div>
                      <div className="service-name" style={{ fontSize: '14px' }}>
                        {city.name} {service.name}
                      </div>
                      <div className="service-desc" style={{ fontSize: '13px' }}>
                        {service.shortDescription}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Outgoing routes */}
            {outgoingRoutes.length > 0 && (
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                  Popular Routes from {city.name}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
                  {outgoingRoutes.map((route) => (
                    <Link
                      key={route.id}
                      href={`/routes/${route.slug}`}
                      className="route-card"
                    >
                      <div className="route-card-header">
                        <span aria-hidden="true">🚕</span>
                        <span>{route.originName} → {route.destinationName}</span>
                      </div>
                      <div className="route-card-meta">
                        <span>~{route.approxDistanceKm} km</span>
                        <span>·</span>
                        <span>~{route.approxDurationHours} hrs</span>
                      </div>
                      <div className="route-card-cta">View route →</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Incoming routes */}
            {incomingRoutes.length > 0 && (
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                  Cabs to {city.name}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
                  {incomingRoutes.map((route) => (
                    <Link
                      key={route.id}
                      href={`/routes/${route.slug}`}
                      className="route-card"
                    >
                      <div className="route-card-header">
                        <span aria-hidden="true">🚕</span>
                        <span>{route.originName} → {route.destinationName}</span>
                      </div>
                      <div className="route-card-meta">
                        <span>~{route.approxDistanceKm} km</span>
                        <span>·</span>
                        <span>~{route.approxDurationHours} hrs</span>
                      </div>
                      <div className="route-card-cta">View route →</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby attractions */}
            {city.nearbyAttractions.length > 0 && (
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                  Nearby Attractions & Places
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {city.nearbyAttractions.map((attr) => (
                    <span
                      key={attr}
                      style={{
                        background: 'rgba(245,166,35,0.08)',
                        border: '1px solid rgba(245,166,35,0.2)',
                        borderRadius: '999px',
                        padding: '5px 14px',
                        fontSize: '13px',
                        color: 'var(--color-navy)',
                      }}
                    >
                      ⭐ {attr}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Fare calculator */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Estimate Fare from/to {city.name}
              </h2>
              <FareCalculator />
            </div>

            {/* Booking widget */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Book a Taxi in / for {city.name}
              </h2>
              <BookingWidget
                defaultPickup={city.name}
                title={`Book Taxi in ${city.name}`}
              />
            </div>

            {/* Map */}
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                {city.name} — Location Map
              </h2>
              <MapEmbed
                query={city.mapQuery}
                label={`${city.name}, ${city.stateName} — Taxi service by Shivansh Tour & Travels`}
                height={380}
                zoom={11}
              />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      {city.faqs.length > 0 && (
        <FAQSection
          faqs={city.faqs}
          title={`Taxi in ${city.name} — Frequently Asked Questions`}
        />
      )}

      {/* CTA */}
      <section style={{ background: 'var(--gradient-navy)', padding: '48px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '12px' }}>
            Book Taxi in {city.name}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 24px', fontSize: '15px' }}>
            Call or WhatsApp us to book your cab. We will confirm availability and fare promptly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <a
              href={getWhatsAppLink(bookingMsg)}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              id={`city-footer-whatsapp-${city.id}`}
            >
              💬 Book on WhatsApp
            </a>
            <a href={getCallLink()} className="btn btn-secondary btn-lg" id={`city-footer-call-${city.id}`}>
              📞 {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
