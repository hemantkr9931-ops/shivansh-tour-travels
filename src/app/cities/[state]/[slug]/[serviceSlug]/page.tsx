// src/app/cities/[state]/[slug]/[serviceSlug]/page.tsx
// City-specific service page — e.g. /cities/jharkhand/ranchi/local-taxi
// Provides city-context: city name in headings, pre-filled booking, city routes

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';
import { getCityBySlug, getIndexedCities } from '@/data/cities';
import { getServiceBySlug, getAllServices } from '@/data/services';
import { vehicles } from '@/data/vehicles';
import { getRoutesForCity } from '@/data/routes';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import BookingWidget from '@/components/ui/BookingWidget';
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

// Generate all city × service combinations
export async function generateStaticParams() {
  const cities = getIndexedCities();
  const params: { state: string; slug: string; serviceSlug: string }[] = [];
  cities.forEach((city) => {
    city.services.forEach((serviceId) => {
      if (SERVICE_SLUGS.includes(serviceId)) {
        params.push({ state: city.state, slug: city.slug, serviceSlug: serviceId });
      }
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; slug: string; serviceSlug: string }>;
}): Promise<Metadata> {
  const { slug, serviceSlug } = await params;
  const city = getCityBySlug(slug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service || !city.index) {
    return { title: 'Not Found', robots: { index: false, follow: false } };
  }

  const title = `${service.name} in ${city.name} | ${city.stateName} | Shivansh Tour & Travels`;
  const description = `Book reliable ${service.name.toLowerCase()} in ${city.name}, ${city.stateName}. AC vehicles, experienced drivers, transparent fares. Call +91 7061767617.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/cities/${city.state}/${city.slug}/${serviceSlug}`,
    },
    openGraph: { title, description },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ state: string; slug: string; serviceSlug: string }>;
}) {
  const { slug, state, serviceSlug } = await params;

  const city = getCityBySlug(slug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !city.index || city.state !== state || !service) {
    notFound();
  }

  // Routes involving this city relevant to this service
  const cityRoutes = getRoutesForCity(city.id)
    .filter((r) => r.services.includes(service.id))
    .slice(0, 6);

  const allCityRoutes = getRoutesForCity(city.id).slice(0, 8);

  const relatedServices = getAllServices()
    .filter((s) => city.services.includes(s.id) && s.id !== service.id)
    .slice(0, 5);

  const bookingMsg = `Hello Shivansh Tour & Travels! 🙏\n\nI need *${service.name}* in/from *${city.name}*.\n\nCould you please share vehicle options and fare? Thank you!`;

  const breadcrumbItems = [
    { label: 'Cities', href: '/cities' },
    { label: city.stateName, href: `/cities/${city.state}` },
    { label: city.name, href: `/cities/${city.state}/${city.slug}` },
    { label: service.name },
  ];

  // City-specific FAQ for this service
  const cityServiceFaqs = [
    {
      question: `Is ${service.name} available in ${city.name}?`,
      answer: `Yes, Shivansh Tour & Travels provides ${service.name.toLowerCase()} in ${city.name} and surrounding areas. We operate 24/7 with AC Sedans, SUVs, and Tempo Travellers. Call +91 7061767617 to book.`,
    },
    {
      question: `How do I book a ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `Simply WhatsApp or call us at +91 7061767617. Share your pickup location in ${city.name}, destination, date and time. We confirm vehicle and fare instantly.`,
    },
    {
      question: `What vehicles are available for ${service.name} in ${city.name}?`,
      answer: `We offer Sedan (Swift Dzire, Honda Amaze), MUV (Ertiga, Marazzo), SUV (Innova, Scorpio), Premium SUV (Innova Crysta), and Tempo Traveller (12–17 seats) for ${service.name.toLowerCase()} in ${city.name}.`,
    },
    {
      question: `Do you provide 24/7 ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `Yes, we are available 24 hours a day, 7 days a week for ${service.name.toLowerCase()} in ${city.name}. Early morning and late night pickups are available.`,
    },
    ...(city.faqs.slice(0, 2)),
    ...(service.faqs.slice(0, 2)),
  ];

  return (
    <>
      <FAQSchema faqs={cityServiceFaqs} />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} dark />
          <div style={{ marginTop: '16px', maxWidth: '660px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.3)',
              borderRadius: '999px', padding: '4px 14px',
              fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px',
            }}>
              <span aria-hidden="true">{service.icon}</span>
              {service.name} — {city.name}
            </div>
            <h1 style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800,
              color: 'white', lineHeight: 1.1, marginBottom: '16px',
            }}>
              {service.name} in {city.name}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              Reliable, affordable {service.name.toLowerCase()} in {city.name}, {city.stateName}.
              AC vehicles, professional drivers, 24/7 availability. No hidden charges.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href={getWhatsAppLink(bookingMsg)}
                className="btn btn-primary btn-lg"
                target="_blank" rel="noopener noreferrer"
                id={`city-service-hero-wa-${city.id}-${service.id}`}
              >
                💬 Book {service.name} in {city.name}
              </a>
              <a href={getCallLink()} className="btn btn-secondary btn-lg"
                id={`city-service-hero-call-${city.id}-${service.id}`}>
                📞 {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: '32px', alignItems: 'start' }}>

            {/* Left: content */}
            <div>
              {/* Service description for this city */}
              <div style={{ marginBottom: '36px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                  {service.name} in {city.name} — How It Works
                </h2>
                <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, fontSize: '15px', marginBottom: '16px' }}>
                  {service.description}
                </p>
                <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, fontSize: '15px' }}>
                  {city.intro}
                </p>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '14px' }}>
                  What&apos;s Included
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {service.features.map((feature) => (
                    <li key={feature} style={{
                      display: 'flex', gap: '10px', fontSize: '14px',
                      color: 'var(--color-gray-700)', background: 'white',
                      padding: '10px 14px', borderRadius: '8px',
                      border: '1px solid var(--color-gray-100)', alignItems: 'flex-start',
                    }}>
                      <span style={{ color: 'var(--color-green)', flexShrink: 0 }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pickup areas in this city */}
              {city.pickupAreas.length > 0 && (
                <div style={{ marginBottom: '36px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>
                    Pickup Areas in {city.name}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {city.pickupAreas.map((area) => (
                      <span key={area} style={{
                        background: 'white', border: '1px solid var(--color-gray-200)',
                        borderRadius: '999px', padding: '5px 14px',
                        fontSize: '13px', color: 'var(--color-gray-700)', fontWeight: 500,
                      }}>
                        📍 {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Vehicles */}
              <div style={{ marginBottom: '36px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                  Vehicles for {service.name} in {city.name}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
                  {vehicles.map((vehicle) => (
                    <div key={vehicle.id} style={{
                      background: 'white', borderRadius: '14px',
                      border: '1.5px solid var(--color-gray-200)',
                      overflow: 'hidden', textAlign: 'center',
                    }}>
                      <div style={{
                        position: 'relative', background: 'var(--gradient-navy)',
                        height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {vehicle.image ? (
                          <Image src={vehicle.image} alt={vehicle.name} width={160} height={100}
                            style={{ objectFit: 'contain', width: '100%', height: '100%', padding: '8px 10px',
                              filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.4))' }} />
                        ) : (
                          <div style={{ fontSize: '36px' }} aria-hidden="true">{vehicle.icon}</div>
                        )}
                      </div>
                      <div style={{ padding: '10px 12px 12px' }}>
                        <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '13px', marginBottom: '2px' }}>{vehicle.name}</div>
                        <div style={{ fontSize: '11px', color: 'var(--color-gray-500)' }}>Up to {vehicle.passengerCapacity} pax</div>
                        <div style={{ fontSize: '10px', color: 'var(--color-gray-400)', marginTop: '2px' }}>{vehicle.examples[0]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Routes from this city for this service */}
              {(cityRoutes.length > 0 || allCityRoutes.length > 0) && (
                <div style={{ marginBottom: '36px' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
                    Popular Routes from {city.name}
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '12px' }}>
                    {(cityRoutes.length > 0 ? cityRoutes : allCityRoutes).map((route) => (
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
                        <div className="route-card-cta">View fare & details →</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related services for this city */}
              {relatedServices.length > 0 && (
                <div style={{ marginBottom: '36px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '14px' }}>
                    Other Services in {city.name}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {relatedServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/cities/${city.state}/${city.slug}/${s.slug}`}
                        className="btn btn-outline"
                      >
                        {s.icon} {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Booking widget */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <BookingWidget
                title={`Book ${service.name} in ${city.name}`}
                defaultPickup={city.name}
              />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={cityServiceFaqs}
        title={`${service.name} in ${city.name} — FAQs`}
      />

      {/* CTA */}
      <section style={{ background: 'var(--gradient-navy)', padding: '48px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '12px' }}>
            Ready to Book {service.name} in {city.name}?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 24px', fontSize: '15px' }}>
            Call or WhatsApp to confirm availability and get exact fare for {city.name}.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <a href={getWhatsAppLink(bookingMsg)} className="btn btn-primary btn-lg"
              target="_blank" rel="noopener noreferrer"
              id={`city-service-cta-wa-${city.id}-${service.id}`}>
              💬 Book on WhatsApp
            </a>
            <a href={getCallLink()} className="btn btn-secondary btn-lg"
              id={`city-service-cta-call-${city.id}-${service.id}`}>
              📞 {SITE_CONFIG.phone}
            </a>
          </div>
          {/* Back to city */}
          <div style={{ marginTop: '20px' }}>
            <Link href={`/cities/${city.state}/${city.slug}`}
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'underline' }}>
              ← Back to {city.name} Taxi Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
