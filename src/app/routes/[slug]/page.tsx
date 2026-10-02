// src/app/routes/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';
import { getRouteBySlug, getIndexedRoutes } from '@/data/routes';
import { getCityById } from '@/data/cities';
import { vehicles } from '@/data/vehicles';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import FareCalculator from '@/components/ui/FareCalculator';
import BookingWidget from '@/components/ui/BookingWidget';
import FAQSchema from '@/components/schema/FAQSchema';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import HeroSlider from '@/components/ui/HeroSlider';
import MapEmbed from '@/components/ui/MapEmbed';

// Static params for build
export async function generateStaticParams() {
  return getIndexedRoutes().map((r) => ({ slug: r.slug }));
}

// Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route || !route.index) {
    return {
      title: 'Route Not Found',
      robots: { index: false, follow: false },
    };
  }
  return {
    title: route.seoTitle,
    description: route.seoDescription,
    alternates: { canonical: `${SITE_CONFIG.url}/routes/${route.slug}` },
    openGraph: {
      title: route.seoTitle,
      description: route.seoDescription,
      url: `${SITE_CONFIG.url}/routes/${route.slug}`,
    },
    robots: route.index ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route || !route.index) {
    notFound();
  }

  const originCity = getCityById(route.origin);
  const destCity = getCityById(route.destination);

  const breadcrumbItems = [
    { label: 'Routes', href: '/routes' },
    { label: `${route.originName} to ${route.destinationName}` },
  ];

  const relatedRoutes = route.relatedRouteIds
    .map((id) => getRouteBySlug(id) || getIndexedRoutes().find((r) => r.id === id))
    .filter(Boolean);

  const bookingMsg = `Hello Shivansh Tour & Travel,

I want to book a cab for the following route:

Pickup: ${route.originName}
Drop: ${route.destinationName}
Distance: ~${route.approxDistanceKm} km

Could you please share available vehicles and fare? Thank you!`;

  return (
    <>
      <FAQSchema faqs={route.faqs} />

      {/* Hero */}
      <section
        style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}
        aria-labelledby="route-title"
      >
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} dark />
          <div style={{ maxWidth: '760px', marginTop: '16px' }}>
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
              Outstation Cab Route
            </div>
            <h1
              id="route-title"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              {route.originName} to {route.destinationName} Cab
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              {route.routeDescription.slice(0, 220)}...
            </p>

            {/* Quick facts */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
              {[
                { icon: '📍', label: 'Distance', value: `~${route.approxDistanceKm} km (approx)` },
                { icon: '⏱️', label: 'Duration', value: `~${route.approxDurationHours} hours (approx)` },
                { icon: '🔄', label: 'Options', value: 'One Way & Round Trip' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ fontSize: '20px' }} aria-hidden="true">{fact.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{fact.label}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'white', marginTop: '2px' }}>{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href={getWhatsAppLink(bookingMsg)}
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                id="route-hero-whatsapp"
              >
                💬 Book This Route
              </a>
              <a
                href={getCallLink()}
                className="btn btn-secondary btn-lg"
                id="route-hero-call"
              >
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

            {/* Route details */}
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                About the {route.originName}–{route.destinationName} Route
              </h2>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, marginBottom: '20px', fontSize: '15px' }}>
                {route.routeDescription}
              </p>

              {/* Route highlights */}
              {route.routeHighlights.length > 0 && (
                <>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                    Route Highlights
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {route.routeHighlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          display: 'flex',
                          gap: '8px',
                          fontSize: '14px',
                          color: 'var(--color-gray-700)',
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Travel tips */}
              {route.travelTips.length > 0 && (
                <>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                    Travel Tips
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {route.travelTips.map((tip) => (
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
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ flexShrink: 0 }}>💡</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Airport/Railway relevance */}
              {(route.airportRelevance || route.railwayRelevance) && (
                <div style={{ marginBottom: '24px' }}>
                  {route.airportRelevance && (
                    <div
                      style={{
                        background: 'rgba(29,58,117,0.06)',
                        border: '1px solid rgba(29,58,117,0.15)',
                        borderRadius: '10px',
                        padding: '14px',
                        fontSize: '14px',
                        color: 'var(--color-navy)',
                        marginBottom: '10px',
                        display: 'flex',
                        gap: '10px',
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>✈️</span>
                      <span>{route.airportRelevance}</span>
                    </div>
                  )}
                  {route.railwayRelevance && (
                    <div
                      style={{
                        background: 'rgba(29,58,117,0.06)',
                        border: '1px solid rgba(29,58,117,0.15)',
                        borderRadius: '10px',
                        padding: '14px',
                        fontSize: '14px',
                        color: 'var(--color-navy)',
                        display: 'flex',
                        gap: '10px',
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>🚂</span>
                      <span>{route.railwayRelevance}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Vehicle options */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Available Vehicles for This Route
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {vehicles
                  .filter((v) => route.recommendedVehicles.includes(v.id))
                  .map((vehicle) => (
                    <div
                      key={vehicle.id}
                      style={{
                        background: 'white',
                        borderRadius: '14px',
                        border: '1.5px solid var(--color-gray-200)',
                        overflow: 'hidden',
                        transition: 'all 250ms',
                      }}
                    >
                      {/* Vehicle image */}
                      <div
                        style={{
                          position: 'relative',
                          background: 'var(--gradient-navy)',
                          height: '120px',
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
                            width={200}
                            height={120}
                            style={{
                              objectFit: 'contain',
                              width: '100%',
                              height: '100%',
                              padding: '10px 14px',
                              filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.4))',
                            }}
                          />
                        ) : (
                          <div style={{ fontSize: '44px' }} aria-hidden="true">{vehicle.icon}</div>
                        )}
                      </div>
                      {/* Card info */}
                      <div style={{ padding: '12px 14px 16px', textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '3px' }}>{vehicle.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-gray-500)', marginBottom: '4px' }}>Up to {vehicle.passengerCapacity} passengers</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-gray-400)' }}>{vehicle.examples[0]}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Fare calculator */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Estimate Fare: {route.originName} to {route.destinationName}
              </h2>
              <FareCalculator
                defaultDistanceKm={route.approxDistanceKm}
                defaultIsRoundTrip={false}
              />
            </div>

            {/* Route directions map */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                🗺️ Route Map: {route.originName} → {route.destinationName}
              </h2>
              <MapEmbed
                origin={`${route.originName}, ${route.originState === 'jharkhand' ? 'Jharkhand' : route.originState === 'west-bengal' ? 'West Bengal' : route.originState === 'odisha' ? 'Odisha' : 'Bihar'}, India`}
                destination={`${route.destinationName}, ${route.destinationState === 'jharkhand' ? 'Jharkhand' : route.destinationState === 'west-bengal' ? 'West Bengal' : route.destinationState === 'odisha' ? 'Odisha' : 'Bihar'}, India`}
                label={route.originName + ' to ' + route.destinationName + ' route map'}
                height={420}
              />
            </div>

            {/* Booking widget */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                Book {route.originName} to {route.destinationName} Cab
              </h2>
              <BookingWidget
                defaultPickup={route.originName}
                defaultDrop={route.destinationName}
                title={`Book ${route.originName} to ${route.destinationName} Cab`}
              />
            </div>

            {/* Related routes */}
            {relatedRoutes.length > 0 && (
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                  Related Routes
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
                  {relatedRoutes.map((r) => r && (
                    <Link
                      key={r.id}
                      href={`/routes/${r.slug}`}
                      className="route-card"
                    >
                      <div className="route-card-header">
                        <span aria-hidden="true">🚕</span>
                        <span>{r.originName} → {r.destinationName}</span>
                      </div>
                      <div className="route-card-meta">
                        <span>~{r.approxDistanceKm} km</span>
                        <span>·</span>
                        <span>~{r.approxDurationHours} hrs</span>
                      </div>
                      <div className="route-card-cta">View route →</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* City links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {originCity && (
                <Link
                  href={`/cities/${originCity.state}/${originCity.slug}`}
                  className="btn btn-outline"
                >
                  Taxi in {originCity.name} →
                </Link>
              )}
              {destCity && (
                <Link
                  href={`/cities/${destCity.state}/${destCity.slug}`}
                  className="btn btn-outline"
                >
                  Taxi in {destCity.name} →
                </Link>
              )}
              <Link href="/outstation-taxi" className="btn btn-outline">
                All Outstation Routes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {route.faqs.length > 0 && (
        <FAQSection
          faqs={route.faqs}
          title={`${route.originName} to ${route.destinationName} Cab — FAQ`}
        />
      )}

      {/* Final CTA */}
      <section
        style={{ background: 'var(--gradient-navy)', padding: '48px 0', textAlign: 'center' }}
        aria-labelledby="route-cta-heading"
      >
        <div className="container">
          <h2
            style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '12px' }}
            id="route-cta-heading"
          >
            Book {route.originName} to {route.destinationName} Cab
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 24px', fontSize: '15px' }}>
            Call or WhatsApp us to confirm your booking and get an accurate fare quote.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <a
              href={getWhatsAppLink(bookingMsg)}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              id="route-footer-whatsapp"
            >
              💬 Book on WhatsApp
            </a>
            <a
              href={getCallLink()}
              className="btn btn-secondary btn-lg"
              id="route-footer-call"
            >
              📞 {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
