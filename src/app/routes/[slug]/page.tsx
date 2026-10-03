// src/app/routes/[slug]/page.tsx
// Rebuilt for maximum SEO — beats jamshedpurtoranchicab.com and other local competitors
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';
import { getRouteBySlug, getIndexedRoutes } from '@/data/routes';
import { getCityById } from '@/data/cities';
import { vehicles } from '@/data/vehicles';
import { calculateEstimatedFare } from '@/data/fares';
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
    keywords: [
      `${route.originName} to ${route.destinationName} cab`,
      `${route.originName} to ${route.destinationName} taxi`,
      `cab from ${route.originName} to ${route.destinationName}`,
      `taxi from ${route.originName} to ${route.destinationName}`,
      `${route.originName} to ${route.destinationName} one way cab`,
      `${route.originName} to ${route.destinationName} taxi fare`,
      `${route.originName} taxi service`,
      `book cab ${route.originName} to ${route.destinationName}`,
      route.primaryKeyword,
    ],
    alternates: { canonical: `${SITE_CONFIG.url}/routes/${route.slug}` },
    openGraph: {
      title: route.seoTitle,
      description: route.seoDescription,
      url: `${SITE_CONFIG.url}/routes/${route.slug}`,
      type: 'website',
      siteName: SITE_CONFIG.name,
      locale: 'en_IN',
    },
    robots: route.index ? { index: true, follow: true } : { index: false, follow: true },
  };
}

// Article schema for this route
function ArticleSchema({ route }: { route: ReturnType<typeof getRouteBySlug> }) {
  if (!route) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: route.seoTitle,
    description: route.seoDescription,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/favicon-512x512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/routes/${route.slug}`,
    },
    about: {
      '@type': 'TravelAction',
      fromLocation: {
        '@type': 'Place',
        name: route.originName,
        address: { '@type': 'PostalAddress', addressCountry: 'IN' },
      },
      toLocation: {
        '@type': 'Place',
        name: route.destinationName,
        address: { '@type': 'PostalAddress', addressCountry: 'IN' },
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service schema for this route
function ServiceSchema({ route }: { route: ReturnType<typeof getRouteBySlug> }) {
  if (!route) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${route.originName} to ${route.destinationName} Cab Service`,
    description: route.routeDescription.slice(0, 300),
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      url: SITE_CONFIG.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: route.originName },
      { '@type': 'City', name: route.destinationName },
    ],
    serviceType: 'Taxi / Cab Service',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: `One-way and round-trip cab from ${route.originName} to ${route.destinationName}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Routes', url: `${SITE_CONFIG.url}/routes` },
    { name: `${route.originName} to ${route.destinationName} Cab`, url: `${SITE_CONFIG.url}/routes/${route.slug}` },
  ];

  // Breadcrumb for the Breadcrumbs UI component (uses label/href)
  const breadcrumbUIItems = [
    { label: 'Home', href: '/' },
    { label: 'Routes', href: '/routes' },
    { label: `${route.originName} to ${route.destinationName}` },
  ];

  const relatedRoutes = route.relatedRouteIds
    .map((id) => getRouteBySlug(id) || getIndexedRoutes().find((r) => r.id === id))
    .filter(Boolean);

  const bookingMsg = `Hello Shivansh Tour & Travel,

I want to book a cab:
Route: ${route.originName} to ${route.destinationName}
Distance: ~${route.approxDistanceKm} km

Please share vehicle options and fare. Thank you!`;

  // Vehicle fare data for price table
  const sedanData = calculateEstimatedFare('sedan', route.approxDistanceKm, false);
  const muvData   = calculateEstimatedFare('muv',   route.approxDistanceKm, false);
  const suvData   = calculateEstimatedFare('suv',   route.approxDistanceKm, false);

  const fareRows = [
    { vehicle: 'Sedan (Swift Dzire / Etios)', type: 'sedan', capacity: 4, icon: '🚗',
      oneWay: sedanData?.estimatedFare || Math.round(route.approxDistanceKm * 12),
      roundTrip: (sedanData?.estimatedFare || Math.round(route.approxDistanceKm * 12)) * 1.85 },
    { vehicle: 'MUV (Ertiga / Maruti XL6)',   type: 'muv',   capacity: 6, icon: '🚐',
      oneWay: muvData?.estimatedFare   || Math.round(route.approxDistanceKm * 14),
      roundTrip: (muvData?.estimatedFare || Math.round(route.approxDistanceKm * 14)) * 1.85 },
    { vehicle: 'SUV / Innova Crysta',          type: 'suv',   capacity: 7, icon: '🚙',
      oneWay: suvData?.estimatedFare   || Math.round(route.approxDistanceKm * 18),
      roundTrip: (suvData?.estimatedFare || Math.round(route.approxDistanceKm * 18)) * 1.85 },
  ];

  return (
    <>
      {/* Schema Markup */}
      <FAQSchema faqs={route.faqs} />
      <ArticleSchema route={route} />
      <ServiceSchema route={route} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* HERO SECTION */}
      <section
        style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 56px' }}
        aria-labelledby="route-title"
      >
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbUIItems} dark />
          <div style={{ maxWidth: '800px', marginTop: '16px' }}>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(245,166,35,0.15)',
                border: '1px solid rgba(245,166,35,0.35)',
                borderRadius: '999px',
                padding: '4px 14px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '14px',
              }}
            >
              ⭐ Trusted Outstation Cab Service
            </div>

            {/* H1 — exact keyword at start */}
            <h1
              id="route-title"
              style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '12px',
              }}
            >
              {route.originName} to {route.destinationName} Cab Service
            </h1>

            {/* Sub-headline with more keywords */}
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px', textTransform: 'uppercase' }}>
              {route.originName} ({route.originName === 'Jamshedpur' ? 'Tata Nagar · Tatanagar' : route.originName}) &nbsp;→&nbsp; {route.destinationName} | One-Way &amp; Round-Trip Taxi
            </p>

            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px', maxWidth: '700px' }}>
              {route.routeDescription.slice(0, 250)}...
            </p>

            {/* Quick facts row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '24px' }}>
              {[
                { icon: '📍', label: 'Distance', value: `~${route.approxDistanceKm} km` },
                { icon: '⏱️', label: 'Duration', value: `~${route.approxDurationHours} hours` },
                { icon: '💰', label: 'Fare from', value: `₹${fareRows[0].oneWay.toLocaleString('en-IN')}` },
                { icon: '🔄', label: 'Trip Options', value: 'One Way · Round Trip' },
                { icon: '🚗', label: 'Vehicles', value: 'Sedan · MUV · Innova' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ fontSize: '18px' }} aria-hidden="true">{fact.icon}</span>
                  <div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{fact.label}</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginTop: '1px' }}>{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href={getWhatsAppLink(bookingMsg)}
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                id="route-hero-whatsapp"
              >
                💬 Book This Route on WhatsApp
              </a>
              <a
                href={getCallLink()}
                className="btn btn-secondary btn-lg"
                id="route-hero-call"
              >
                📞 Call Now: {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FARE TABLE — Competitor Killer: visible price table above fold */}
      <section
        style={{ background: 'white', borderBottom: '1px solid var(--color-gray-100)', padding: '40px 0' }}
        aria-labelledby="fare-table-heading"
      >
        <div className="container">
          <h2
            id="fare-table-heading"
            style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '6px' }}
          >
            {route.originName} to {route.destinationName} Cab Fare
          </h2>
          <p style={{ color: 'var(--color-gray-500)', fontSize: '14px', marginBottom: '20px' }}>
            Fixed fares — no hidden charges. Toll extra at actual. Prices approximate.
          </p>

          {/* Price table */}
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--color-gray-200)',
              }}
              aria-label={`Cab fare from ${route.originName} to ${route.destinationName}`}
            >
              <thead>
                <tr style={{ background: 'var(--gradient-navy)', color: 'white' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Vehicle</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700 }}>Capacity</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 700 }}>One-Way Fare</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 700 }}>Round-Trip (est.)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700 }}>Book</th>
                </tr>
              </thead>
              <tbody>
                {fareRows.map((row, i) => (
                  <tr
                    key={row.vehicle}
                    style={{
                      background: i % 2 === 0 ? 'white' : '#f9fafb',
                      borderBottom: '1px solid var(--color-gray-100)',
                    }}
                  >
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--color-navy)' }}>
                      <span aria-hidden="true">{row.icon} </span>{row.vehicle}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', color: 'var(--color-gray-600)' }}>
                      Up to {row.capacity} passengers
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'right', fontWeight: 800, color: 'var(--color-navy)', fontSize: '16px' }}>
                      ₹{Math.round(row.oneWay).toLocaleString('en-IN')}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'right', color: 'var(--color-gray-600)' }}>
                      ₹{Math.round(row.roundTrip).toLocaleString('en-IN')}*
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                      <a
                        href={getWhatsAppLink(`Hello Shivansh Tour & Travel,\nI want to book a ${row.vehicle} from ${route.originName} to ${route.destinationName}.\nPlease confirm availability and fare.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          background: '#25D366',
                          color: 'white',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textDecoration: 'none',
                        }}
                        id={`route-fare-book-${row.type}`}
                      >
                        Book →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '12px', color: 'var(--color-gray-400)', marginTop: '10px' }}>
            * Round-trip fare varies based on wait time in {route.destinationName}. Toll charges (₹{route.approxDistanceKm < 200 ? '150–250' : '250–450'}) extra. Call {SITE_CONFIG.phone} for confirmed fare.
          </p>

          {/* Included / Excluded */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '24px' }}>
            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '10px',
                padding: '16px 20px',
              }}
            >
              <div style={{ fontWeight: 700, color: '#166534', marginBottom: '10px', fontSize: '15px' }}>✅ Included in Fare</div>
              {['AC cab (clean &amp; comfortable)', 'Experienced local driver', 'Fuel charges', 'Driver allowance', 'Parking fees (en route)'].map((item) => (
                <div key={item} style={{ fontSize: '13px', color: '#166534', marginBottom: '4px' }}>• {item}</div>
              ))}
            </div>
            <div
              style={{
                background: '#fff7ed',
                border: '1px solid #fdba74',
                borderRadius: '10px',
                padding: '16px 20px',
              }}
            >
              <div style={{ fontWeight: 700, color: '#9a3412', marginBottom: '10px', fontSize: '15px' }}>⚠️ Extra Charges</div>
              {[`Highway toll (₹${route.approxDistanceKm < 200 ? '150–250' : '250–450'} est.)`, 'State border tax (if applicable)', 'Night charges after 11 PM (10%)', 'Extra km beyond agreed distance'].map((item) => (
                <div key={item} style={{ fontSize: '13px', color: '#9a3412', marginBottom: '4px' }}>• {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="section section-gray" aria-label="Route information">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>

            {/* Route description — full content */}
            <div style={{ maxWidth: '760px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '8px' }}>
                {route.originName} to {route.destinationName} Cab — About This Route
              </h2>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '13px', marginBottom: '16px' }}>
                {route.approxDistanceKm} km · ~{route.approxDurationHours} hours · via NH highway
              </p>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.85, marginBottom: '24px', fontSize: '15px' }}>
                {route.routeDescription}
              </p>

              {/* Route highlights */}
              {route.routeHighlights.length > 0 && (
                <>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                    Route Highlights: {route.originName} → {route.destinationName}
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                    {route.routeHighlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          fontSize: '14px',
                          color: 'var(--color-gray-700)',
                          lineHeight: 1.6,
                          background: 'white',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid var(--color-gray-100)',
                        }}
                      >
                        <span style={{ color: 'var(--color-gold)', flexShrink: 0, fontWeight: 700 }}>✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Why choose Shivansh — trust signals */}
              <div
                style={{
                  background: 'rgba(29,58,117,0.04)',
                  border: '1px solid rgba(29,58,117,0.12)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '28px',
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                  Why Book {route.originName} to {route.destinationName} Cab with Shivansh?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
                  {[
                    { icon: '✅', text: 'Fixed fare — no surge pricing' },
                    { icon: '🚗', text: 'Innova Crysta, Ertiga, Swift Dzire' },
                    { icon: '❄️', text: 'All AC vehicles, clean & sanitized' },
                    { icon: '👨‍✈️', text: 'Local, experienced drivers' },
                    { icon: '📞', text: '24/7 availability & booking' },
                    { icon: '🔒', text: 'Safe, punctual, reliable travel' },
                    { icon: '📍', text: 'Doorstep pickup anywhere in ' + route.originName },
                    { icon: '🏆', text: 'Rated top cab service in Jamshedpur' },
                  ].map((item) => (
                    <div
                      key={item.text}
                      style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'flex-start',
                        fontSize: '13px',
                        color: 'var(--color-gray-700)',
                      }}
                    >
                      <span style={{ flexShrink: 0 }}>{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Travel tips */}
              {route.travelTips.length > 0 && (
                <>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                    Travel Tips: {route.originName} to {route.destinationName}
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                    {route.travelTips.map((tip) => (
                      <li
                        key={tip}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          fontSize: '14px',
                          color: 'var(--color-gray-700)',
                          background: 'white',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid var(--color-gray-100)',
                          lineHeight: 1.6,
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
                <div style={{ marginBottom: '28px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                    Airport & Railway Cab Service
                  </h3>
                  {route.airportRelevance && (
                    <div
                      style={{
                        background: 'rgba(29,58,117,0.05)',
                        border: '1px solid rgba(29,58,117,0.15)',
                        borderRadius: '10px',
                        padding: '14px 16px',
                        fontSize: '14px',
                        color: 'var(--color-navy)',
                        marginBottom: '10px',
                        display: 'flex',
                        gap: '10px',
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>✈️</span>
                      <span>{route.airportRelevance}</span>
                    </div>
                  )}
                  {route.railwayRelevance && (
                    <div
                      style={{
                        background: 'rgba(29,58,117,0.05)',
                        border: '1px solid rgba(29,58,117,0.15)',
                        borderRadius: '10px',
                        padding: '14px 16px',
                        fontSize: '14px',
                        color: 'var(--color-navy)',
                        display: 'flex',
                        gap: '10px',
                        lineHeight: 1.6,
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
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '8px' }}>
                Vehicles Available: {route.originName} to {route.destinationName}
              </h2>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '14px', marginBottom: '20px' }}>
                All vehicles are AC, clean, commercially registered. Choose as per group size.
              </p>
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
                            alt={`${vehicle.name} for ${route.originName} to ${route.destinationName} cab`}
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
                      <div style={{ padding: '12px 14px 16px', textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '3px' }}>{vehicle.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-gray-500)', marginBottom: '4px' }}>Up to {vehicle.passengerCapacity} passengers</div>
                        <div style={{ fontSize: '11px', color: 'var(--color-gray-400)' }}>{vehicle.examples[0]}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Fare calculator */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '8px' }}>
                Fare Calculator: {route.originName} to {route.destinationName}
              </h2>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '14px', marginBottom: '20px' }}>
                Get an estimated fare based on distance and vehicle type.
              </p>
              <FareCalculator
                defaultDistanceKm={route.approxDistanceKm}
                defaultIsRoundTrip={false}
              />
            </div>

            {/* Route map */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                🗺️ Route Map: {route.originName} → {route.destinationName}
              </h2>
              <MapEmbed
                origin={`${route.originName}, ${route.originState === 'jharkhand' ? 'Jharkhand' : route.originState === 'west-bengal' ? 'West Bengal' : route.originState === 'odisha' ? 'Odisha' : 'Bihar'}, India`}
                destination={`${route.destinationName}, ${route.destinationState === 'jharkhand' ? 'Jharkhand' : route.destinationState === 'west-bengal' ? 'West Bengal' : route.destinationState === 'odisha' ? 'Odisha' : 'Bihar'}, India`}
                label={`${route.originName} to ${route.destinationName} cab route map — Shivansh Tour & Travel`}
                height={420}
              />
            </div>

            {/* Booking widget */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '8px' }}>
                Book {route.originName} to {route.destinationName} Cab
              </h2>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '14px', marginBottom: '20px' }}>
                Send your booking request via WhatsApp. We reply within minutes.
              </p>
              <BookingWidget
                defaultPickup={route.originName}
                defaultDrop={route.destinationName}
                title={`Book ${route.originName} to ${route.destinationName} Cab`}
              />
            </div>

            {/* Related routes */}
            {relatedRoutes.length > 0 && (
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '8px' }}>
                  Related Cab Routes from {route.originName}
                </h2>
                <p style={{ color: 'var(--color-gray-500)', fontSize: '14px', marginBottom: '16px' }}>
                  Explore more outstation cab services available from {route.originName} and nearby cities.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
                  {relatedRoutes.map((r) => r && (
                    <Link
                      key={r.id}
                      href={`/routes/${r.slug}`}
                      className="route-card"
                      title={`${r.originName} to ${r.destinationName} cab service`}
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
                      <div className="route-card-cta">View route &amp; fare →</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* City service links — internal linking for SEO */}
            <div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                Cab Services in {route.originName} &amp; {route.destinationName}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {originCity && (
                  <Link
                    href={`/cities/${originCity.state}/${originCity.slug}`}
                    className="btn btn-outline"
                    title={`Cab service in ${originCity.name}`}
                  >
                    Taxi in {originCity.name} →
                  </Link>
                )}
                {destCity && (
                  <Link
                    href={`/cities/${destCity.state}/${destCity.slug}`}
                    className="btn btn-outline"
                    title={`Cab service in ${destCity.name}`}
                  >
                    Taxi in {destCity.name} →
                  </Link>
                )}
                <Link href="/outstation-taxi" className="btn btn-outline">
                  All Outstation Routes →
                </Link>
                <Link href="/routes" className="btn btn-outline">
                  All Routes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {route.faqs.length > 0 && (
        <FAQSection
          faqs={route.faqs}
          title={`${route.originName} to ${route.destinationName} Cab — Frequently Asked Questions`}
        />
      )}

      {/* FINAL CTA */}
      <section
        style={{ background: 'var(--gradient-navy)', padding: '52px 0', textAlign: 'center' }}
        aria-labelledby="route-cta-heading"
      >
        <div className="container">
          <div style={{ marginBottom: '10px', fontSize: '28px' }}>🚕</div>
          <h2
            style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '10px' }}
            id="route-cta-heading"
          >
            Ready to Book {route.originName} to {route.destinationName} Cab?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 12px', fontSize: '15px' }}>
            Fixed fares, AC vehicles, experienced drivers. Book your {route.originName} to {route.destinationName} taxi now on WhatsApp or call us directly.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '24px' }}>
            Available 24/7 · One-Way &amp; Round-Trip · Innova Crysta, Ertiga, Swift Dzire
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
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
