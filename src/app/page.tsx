import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, getCallLink, getWhatsAppLink } from '@/lib/config';
import BookingWidget from '@/components/ui/BookingWidget';
import FareCalculator from '@/components/ui/FareCalculator';
import FAQSection from '@/components/ui/FAQSection';
import HeroSlider from '@/components/ui/HeroSlider';
import MapEmbed from '@/components/ui/MapEmbed';
import GMBReviewWidget from '@/components/ui/GMBReviewWidget';
import FaqSchema, { homepageFaqs as seoFaqs } from '@/components/schema/FAQSchema';
import { vehicles } from '@/data/vehicles';
import { services } from '@/data/services';
import { routes } from '@/data/routes';

export const metadata: Metadata = {
  title: 'Jamshedpur Taxi & Cab Service | Tata Nagar | Ranchi, Kolkata | Shivansh Tour & Travel',
  description:
    'Best taxi & cab service in Jamshedpur (Tata Nagar). Jamshedpur to Ranchi cab ₹1,599 | Tata to Kolkata ₹3,799 | Durgapur, Deoghar, Airport. Innova Crysta, Ertiga, Sedan. 24x7. Call +91 7061767617.',
  keywords: [
    // Primary city keywords
    'Jamshedpur taxi service',
    'taxi service in Jamshedpur',
    'cab service in Jamshedpur',
    'taxi in Jamshedpur',
    'Tata Nagar taxi service',
    'taxi in Tata Nagar',
    'cab in Jamshedpur',
    'Jamshedpur cab booking',
    // Key routes from Jamshedpur
    'Jamshedpur to Ranchi cab',
    'Jamshedpur to Ranchi taxi',
    'Jamshedpur to Kolkata cab',
    'Jamshedpur to Durgapur cab',
    'Jamshedpur to Deoghar cab',
    'Jamshedpur to Dhanbad cab',
    'Jamshedpur to Bokaro cab',
    // Tata / Tata Nagar variants (aliases)
    'Tata to Ranchi cab',
    'Tata to Kolkata cab',
    'Tata to Durgapur taxi',
    'Tata Nagar to Ranchi taxi',
    'Tata Nagar to Kolkata cab',
    'Tatanagar to Ranchi cab',
    'cab from Jamshedpur to Ranchi',
    'cab from Tata to Ranchi',
    // Ranchi SEO
    'Ranchi taxi service',
    'taxi in Ranchi',
    'cab service in Ranchi',
    'Ranchi to Jamshedpur cab',
    'Ranchi to Kolkata cab',
    'Ranchi to Deoghar cab',
    'Ranchi airport taxi',
    'Birsa Munda Airport cab',
    // Vehicle-specific keywords (high commercial intent)
    'Innova cab Jamshedpur',
    'Innova Crysta Jamshedpur',
    'Innova Crysta Ranchi',
    'Innova hire Jamshedpur',
    'Innova taxi Jamshedpur',
    // Local area keywords
    'Bistupur taxi service',
    'Sakchi cab service',
    'Sonari taxi',
    'Mango Jamshedpur cab',
    'Adityapur taxi',
    'Kadma taxi service',
    'Tatanagar station taxi',
    // Outstation & service types
    'outstation cab Jamshedpur',
    'outstation taxi Jamshedpur',
    'local taxi Jamshedpur',
    'airport taxi Jamshedpur',
    'car rental Jamshedpur',
    'cab booking Jamshedpur',
    'corporate cab Jamshedpur',
    'wedding car Jamshedpur',
    // Brand
    'Shivansh Tour Travel',
    'Shivansh Tour & Travel Jamshedpur',
    'Jharkhand taxi service',
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: 'Best Jamshedpur Taxi & Cab Service | Tata Nagar to Ranchi, Kolkata | Shivansh',
    description:
      'Book taxi in Jamshedpur (Tata Nagar) — Ranchi cab ₹1,599 | Kolkata ₹3,799 | Durgapur | Airport. Innova Crysta, Ertiga, Sedan. 24/7. Call +91 7061767617.',
    url: SITE_CONFIG.url,
  },
};

const popularRoutes = routes.filter((r) =>
  [
    'jamshedpur-to-ranchi',
    'jamshedpur-to-kolkata',
    'jamshedpur-to-dhanbad',
    'jamshedpur-to-deoghar',
    'jamshedpur-to-bhubaneswar',
    'jamshedpur-to-puri',
    'jamshedpur-to-patna',
    'jamshedpur-to-bokaro',
  ].includes(r.id)
);

const homepageFaqs = [
  {
    question: 'Which areas in Jamshedpur does Shivansh Tour & Travel cover for local taxi?',
    answer:
      'We cover all major Jamshedpur areas including Bistupur, Sakchi, Mango, Kadma, Sonari, Telco, Golmuri, Jugsalai, Adityapur, Gamharia, and more. Pickup from Tatanagar Railway Station is also available.',
  },
  {
    question: 'Which is the nearest airport to Jamshedpur?',
    answer:
      'Birsa Munda Airport in Ranchi (approximately 130–140 km) is the nearest commercial airport. Shivansh provides reliable Jamshedpur to Ranchi Airport cab service.',
  },
  {
    question: 'What outstation destinations can I travel to from Jamshedpur?',
    answer:
      'We serve destinations across Jharkhand (Ranchi, Dhanbad, Bokaro, Deoghar), West Bengal (Kolkata, Kharagpur, Purulia), Odisha (Bhubaneswar, Puri, Rourkela), and Bihar (Patna, Gaya, Bodh Gaya).',
  },
  {
    question: 'What vehicles are available for taxi service?',
    answer:
      'We offer Sedan (Swift Dzire type), MUV (Ertiga type), SUV (Toyota Innova type), Premium SUV (Innova Crysta type), and Tempo Traveller (12–17 seater) for group travel.',
  },
  {
    question: 'How do I book a cab with Shivansh Tour & Travel?',
    answer:
      'You can call us at +91 7061767617, send a WhatsApp message, or fill our online booking enquiry form. We will confirm your booking and share fare details promptly.',
  },
  {
    question: 'Are tolls included in the cab fare?',
    answer:
      'No. Toll charges, state permit fees, and parking are payable extra as per actuals. We communicate all applicable charges when sharing your fare estimate.',
  },
  {
    question: 'Do you offer one-way cab service from Jamshedpur?',
    answer:
      'Yes. We offer both one-way and round-trip options for all outstation routes.',
  },
  {
    question: 'Can I book a Tempo Traveller for a group pilgrimage?',
    answer:
      'Yes. Our Tempo Traveller is ideal for group pilgrimages to Deoghar (Baidyanath Dham), Parasnath, Puri, and other destinations. Seats 12–17 passengers with AC.',
  },
];

const trustPoints = [
  {
    icon: '🚗',
    title: 'Well-Maintained Vehicles',
    desc: 'Clean, comfortable, and regularly serviced vehicles across all categories.',
  },
  {
    icon: '📍',
    title: 'Door-to-Door Pickup',
    desc: 'We pick you up from your door — no need to come to a depot or booking office.',
  },
  {
    icon: '🗺️',
    title: 'Regional Route Knowledge',
    desc: 'Experienced with roads across Jharkhand, West Bengal, Odisha and Bihar.',
  },
  {
    icon: '💬',
    title: 'Easy WhatsApp Booking',
    desc: 'Book your cab quickly and conveniently via WhatsApp — no app download needed.',
  },
  {
    icon: '💰',
    title: 'Transparent Fare Information',
    desc: 'We share estimated fares upfront. No hidden surprises at the end of your journey.',
  },
  {
    icon: '🏘️',
    title: 'Local Jamshedpur Base',
    desc: 'Our operation is based in Jamshedpur — we know every corner of the city.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* FAQ Schema — People Also Ask in Google */}
      <FaqSchema faqs={seoFaqs} />

      {/* ===================== HERO ===================== */}
      <section
        className="hero"
        style={{ position: 'relative', overflow: 'hidden' }}
        aria-labelledby="hero-heading"
      >
        {/* Auto-sliding background */}
        <HeroSlider />
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
            {/* Left */}
            <div className="hero-content">
              <div className="hero-label" aria-label="Business location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Jamshedpur, Jharkhand
              </div>
              <h1 className="hero-title" id="hero-heading">
                Reliable{' '}
                <span className="text-gradient">Cab & Taxi</span>
                {' '}Service in Jamshedpur
              </h1>
              <p className="hero-subtitle">
                Local taxi, airport transfers to Ranchi & Kolkata, outstation cab to Bhubaneswar, Puri, Patna, Deoghar — Shivansh Tour & Travel serves Jharkhand, West Bengal, Odisha & Bihar.
              </p>
              <div className="hero-cta">
                <a
                  href={getWhatsAppLink('Hello Shivansh Tour & Travel, I want to book a cab from Jamshedpur. Please share available options and fare.')}
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-cta"
                >
                  💬 Book on WhatsApp
                </a>
                <a
                  href={getCallLink()}
                  className="btn btn-secondary btn-lg"
                  id="hero-call-cta"
                  aria-label={`Call ${SITE_CONFIG.phone}`}
                >
                  📞 {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Quick stats */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: '24px',
                }}
              >
                {[
                  { label: 'Service Regions', value: '6 States' },
                  { label: 'Vehicle Types', value: '6 Categories' },
                  { label: 'Primary Base', value: 'Jamshedpur' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-gold)' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              {/* Trust Badges */}
              <div className="hero-trust-badges">
                {[
                  { icon: '✅', label: 'No Hidden Charges' },
                  { icon: '📍', label: 'Door-to-Door Pickup' },
                  { icon: '🕐', label: '24/7 Available' },
                  { icon: '🚗', label: '6 Vehicle Types' },
                ].map((b) => (
                  <span key={b.label} className="trust-badge">
                    <span className="trust-badge-icon">{b.icon}</span>
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MARQUEE STRIP ===================== */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[
            'Jamshedpur Taxi', 'Outstation Cab', 'Airport Transfer',
            'Wedding Car', 'Corporate Travel', 'Ranchi Cab',
            'Kolkata Taxi', 'Puri Tour', 'Deoghar Pilgrimage',
            'Tempo Traveller', 'One-Way Taxi', 'Round Trip Cab',
            'Jamshedpur Taxi', 'Outstation Cab', 'Airport Transfer',
            'Wedding Car', 'Corporate Travel', 'Ranchi Cab',
            'Kolkata Taxi', 'Puri Tour', 'Deoghar Pilgrimage',
            'Tempo Traveller', 'One-Way Taxi', 'Round Trip Cab',
          ].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===================== STATS BAR ===================== */}
      <div className="stats-bar">
        <div className="stats-grid">
          {[
            { num: '500', suffix: '+', label: 'Happy Customers' },
            { num: '6',   suffix: ' States', label: 'Service Coverage' },
            { num: '6',   suffix: ' Types', label: 'Vehicle Categories' },
            { num: '24', suffix: '/7', label: 'Booking Available' },
          ].map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-num">{s.num}<span style={{ fontSize: '1.5rem', fontWeight: 900 }}>{s.suffix}</span></span>
              <span className="stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== TRUST BAR ===================== */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            {[
              { icon: '🏆', text: 'Trusted Local Service' },
              { icon: '🔒', text: 'Safe & Reliable' },
              { icon: '💯', text: 'Transparent Pricing' },
              { icon: '📞', text: 'Instant Confirmation' },
              { icon: '🚘', text: 'Well-Maintained Fleet' },
            ].map((t) => (
              <div key={t.text} className="trust-item">
                <div className="trust-item-icon">{t.icon}</div>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ===================== POPULAR FARES TABLE ===================== */}
      <section style={{ background: 'white', padding: '56px 0', borderBottom: '1px solid var(--color-gray-100)' }} id="fares" aria-labelledby="fares-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Transparent Pricing</div>
            <h2 className="section-title" id="fares-heading">
              <span className="accent">Popular Route</span> Cab Fares from Jamshedpur
            </h2>
            <p className="section-subtitle">Indicative one-way fares. Final fare shared on WhatsApp. No hidden charges.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--color-gray-100)', borderRadius: '16px', overflow: 'hidden' }} aria-label="Cab fares from Jamshedpur">
              <thead>
                <tr style={{ background: 'var(--gradient-navy)' }}>
                  {['Route', 'Distance', 'Sedan', 'SUV / Innova', 'Tempo Traveller'].map((h) => (
                    <th key={h} style={{ padding: '14px 18px', textAlign: 'left', color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { route: 'Jamshedpur → Ranchi', km: '~135 km', sedan: '₹1,599', suv: '₹2,499', tempo: '₹3,999' },
                  { route: 'Jamshedpur → Dhanbad', km: '~155 km', sedan: '₹2,399', suv: '₹2,999', tempo: '₹4,999' },
                  { route: 'Jamshedpur → Bokaro', km: '~160 km', sedan: '₹1,999', suv: '₹2,799', tempo: '₹4,499' },
                  { route: 'Jamshedpur → Durgapur', km: '~185 km', sedan: '₹3,999', suv: '₹4,599', tempo: '₹7,999' },
                  { route: 'Jamshedpur → Kolkata', km: '~270 km', sedan: '₹4,999', suv: '₹5,999', tempo: '₹10,999' },
                  { route: 'Jamshedpur → Deoghar', km: '~220 km', sedan: '₹5,499', suv: '₹6,499', tempo: '₹9,999' },
                  { route: 'Jamshedpur → Patna', km: '~345 km', sedan: '₹5,999', suv: '₹6,999', tempo: '₹11,999' },
                  { route: 'Jamshedpur → Bhubaneswar', km: '~360 km', sedan: '₹6,499', suv: '₹7,999', tempo: '₹12,999' },
                  { route: 'Jamshedpur → Puri', km: '~440 km', sedan: '₹7,999', suv: '₹8,599', tempo: '₹14,999' },
                ].map((row, i) => (
                  <tr key={row.route} style={{ background: i % 2 === 0 ? 'white' : 'var(--color-gray-50)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '13px 18px', fontWeight: 700, color: 'var(--color-navy)', fontSize: '14px', whiteSpace: 'nowrap', borderTop: '1px solid var(--color-gray-100)' }}>
                      {row.route}
                    </td>
                    <td style={{ padding: '13px 18px', color: 'var(--color-gray-500)', fontSize: '13px', borderTop: '1px solid var(--color-gray-100)' }}>{row.km}</td>
                    <td style={{ padding: '13px 18px', fontWeight: 700, color: 'var(--color-gold-dark)', fontSize: '14px', borderTop: '1px solid var(--color-gray-100)' }}>{row.sedan}</td>
                    <td style={{ padding: '13px 18px', fontWeight: 700, color: 'var(--color-gold-dark)', fontSize: '14px', borderTop: '1px solid var(--color-gray-100)' }}>{row.suv}</td>
                    <td style={{ padding: '13px 18px', fontWeight: 700, color: 'var(--color-gold-dark)', fontSize: '14px', borderTop: '1px solid var(--color-gray-100)' }}>{row.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--color-gray-500)' }}>
            * Tolls, state permits &amp; parking extra. Prices may vary by vehicle availability. Call for exact fare.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/917061767617?text=Hello%20Shivansh%20Tour%20%26%20Travel%2C%20please%20share%20cab%20fare%20for%20my%20trip.`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              💬 Get Exact Fare on WhatsApp
            </a>
            <a href="tel:+917061767617" className="btn btn-navy">
              📞 Call for Fare Enquiry
            </a>
          </div>
        </div>
      </section>

      <section
        style={{ background: 'var(--color-gray-50)', padding: '48px 0' }}
        id="booking"
        aria-labelledby="booking-section-heading"
      >
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 id="booking-section-heading" style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--color-navy)', fontSize: '22px', fontWeight: 800 }}>
              Enquire About Your Cab Booking
            </h2>
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Offer</div>
            <h2 className="section-title" id="services-heading">
              <span className="accent">Taxi & Cab</span> Services from Jamshedpur
            </h2>
            <p className="section-subtitle">
              From local city rides to long outstation journeys — we provide comfortable, reliable transportation for every need.
            </p>
          </div>
          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="service-card"
                aria-label={service.name}
              >
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <div className="service-name">{service.name}</div>
                <div className="service-desc">{service.shortDescription}</div>
                <div className="service-link">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="section section-gray" id="why-us" aria-labelledby="why-us-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title" id="why-us-heading">
              Why Travellers Choose <span className="accent">Shivansh Tour</span>
            </h2>
            <p className="section-subtitle">
              We are a Jamshedpur-based cab service built on reliable travel, clear communication, and genuine customer care.
            </p>
          </div>
          <div className="grid-3">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="card-3d"
                style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <div style={{ fontSize: '32px' }} aria-hidden="true">{point.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-navy)' }}>
                  {point.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-gray-500)', lineHeight: 1.6 }}>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== POPULAR ROUTES ===================== */}
      <section className="section" id="routes" aria-labelledby="routes-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Popular Routes</div>
            <h2 className="section-title" id="routes-heading">
              Popular <span className="accent">Outstation Routes</span> from Jamshedpur
            </h2>
            <p className="section-subtitle">
              One-way and round-trip taxi service on all major corridors from Jamshedpur.
            </p>
          </div>
          <div className="grid-3">
            {popularRoutes.map((route) => (
              <Link
                key={route.id}
                href={`/routes/${route.slug}`}
                className="route-card"
                aria-label={`${route.originName} to ${route.destinationName} cab`}
              >
                <div className="route-card-header">
                  <span aria-hidden="true">🚕</span>
                  <span>{route.originName} → {route.destinationName}</span>
                </div>
                <div className="route-card-meta">
                  <span>~{route.approxDistanceKm} km</span>
                  <span>·</span>
                  <span>~{route.approxDurationHours} hrs</span>
                  <span>·</span>
                  <span>
                    {route.originState === route.destinationState
                      ? 'Intrastate'
                      : 'Interstate'}
                  </span>
                </div>
                <div className="route-card-cta">View route details →</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/routes" className="btn btn-outline">
              View All Routes →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FLEET ===================== */}
      <section className="section section-dark" id="fleet" aria-labelledby="fleet-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Fleet</div>
            <h2 className="section-title section-title-white" id="fleet-heading">
              <span className="text-gradient-white">Vehicles</span> for Every Journey
            </h2>
            <p className="section-subtitle section-subtitle-white">
              From economical sedans to spacious Tempo Travellers — choose the vehicle that suits your trip.
            </p>
          </div>
          <div className="grid-3">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="fleet-card" style={{ overflow: 'hidden' }}>
                {/* Vehicle photo header */}
                <div
                  className="fleet-card-header"
                  style={{
                    position: 'relative',
                    background: 'var(--gradient-navy)',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    padding: 0,
                  }}
                >
                  {vehicle.image ? (
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} — ${vehicle.examples[0]}`}
                      width={340}
                      height={180}
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                        padding: '10px 16px',
                        filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.45))',
                      }}
                    />
                  ) : (
                    <span className="fleet-icon" aria-hidden="true" style={{ fontSize: '56px' }}>{vehicle.icon}</span>
                  )}
                  {/* Name overlay at bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, transparent 100%)',
                      padding: '22px 16px 12px',
                    }}
                  >
                    <div className="fleet-name" style={{ color: 'white', fontWeight: 800, fontSize: '16px' }}>
                      {vehicle.name}
                    </div>
                    <div className="fleet-examples" style={{ color: 'var(--color-gold)', fontSize: '12px', marginTop: '2px' }}>
                      {vehicle.examples.slice(0, 2).join(' / ')}
                    </div>
                  </div>
                </div>
                <div className="fleet-card-body">
                  <div className="fleet-spec">
                    <span className="fleet-spec-icon" aria-hidden="true">👥</span>
                    <span>Up to {vehicle.passengerCapacity} passengers</span>
                  </div>
                  <div className="fleet-spec">
                    <span className="fleet-spec-icon" aria-hidden="true">🧳</span>
                    <span>{vehicle.luggageCapacity}</span>
                  </div>
                  <div className="fleet-spec">
                    <span className="fleet-spec-icon" aria-hidden="true">❄️</span>
                    <span>{vehicle.isAC ? 'Air Conditioned' : 'Non-AC'}</span>
                  </div>
                  <div className="fleet-spec">
                    <span className="fleet-spec-icon" aria-hidden="true">✅</span>
                    <span>Best for: {vehicle.bestFor.slice(0, 2).join(', ')}</span>
                  </div>
                  <a
                    href={getWhatsAppLink(`Hello Shivansh, I want to book a ${vehicle.name} cab. Please share availability and fare.`)}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`fleet-book-${vehicle.id}`}
                  >
                    Book {vehicle.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/fleet" className="btn btn-secondary">
              Fleet Details & Availability →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== LOCAL JAMSHEDPUR ===================== */}
      <section className="section" aria-labelledby="local-heading">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="section-label" style={{ display: 'inline-block', marginBottom: '12px' }}>
                Jamshedpur Local Taxi
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px', lineHeight: 1.2 }} id="local-heading">
                Local Cab Service Across Jamshedpur
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-gray-700)', lineHeight: 1.7, marginBottom: '20px' }}>
                Shivansh Tour & Travel is based in Sonari, Jamshedpur — giving us strong knowledge of all local routes, traffic patterns, and pickup areas. Whether you need a cab from Tatanagar Railway Station, a local trip within Bistupur, or a transfer across Jamshedpur to Adityapur — we cover it all.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--color-gray-700)', lineHeight: 1.7, marginBottom: '24px' }}>
                Our local taxi packages include 4-hour and 8-hour options with defined distance limits. Additional distance and time is charged at a per-km / per-hour rate. We serve Bistupur, Sakchi, Mango, Kadma, Sonari, Telco, Golmuri, Jugsalai, Adityapur, and surrounding areas.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <Link href="/local-taxi" className="btn btn-navy">
                  Local Taxi Details
                </Link>
                <a href={getCallLink()} className="btn btn-outline" id="local-call-btn">
                  📞 Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== AIRPORT TRANSFER ===================== */}
      <section
        className="section"
        style={{ background: 'linear-gradient(135deg, #f8f9fb 0%, #f1f3f7 100%)' }}
        aria-labelledby="airport-heading"
      >
        <div className="container">
          <div
            style={{
              background: 'var(--gradient-navy)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 60px)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '32px',
            }}
          >
            <div>
              <div
                className="section-label"
                style={{ display: 'inline-block', marginBottom: '12px', background: 'rgba(245,166,35,0.15)' }}
              >
                ✈️ Airport Transfers
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
                id="airport-heading"
              >
                Jamshedpur to Ranchi Airport Cab
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '16px' }}>
                The nearest airport to Jamshedpur is Birsa Munda Airport (IXR) in Ranchi — approximately 130–140 km away. Shivansh Tour & Travel provides reliable, pre-booked airport transfer service so you never miss a flight.
              </p>
              <ul style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px', paddingLeft: '4px' }}>
                {[
                  'Jamshedpur to Ranchi Airport (IXR) — ~2.5 to 3.5 hours',
                  'Jamshedpur to Kolkata Airport (CCU) — ~5 to 6 hours',
                  'Ranchi Airport to Jamshedpur pickup available',
                  'Share flight details for coordinated pickup',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '8px' }}>
                    <span>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <Link href="/airport-taxi" className="btn btn-primary">
                  Airport Transfer Details
                </Link>
                <a
                  href={getWhatsAppLink('Hello Shivansh, I need an airport transfer from Jamshedpur to Ranchi Airport. Please share the cab options and fare.')}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="airport-whatsapp-btn"
                >
                  💬 Book Airport Cab
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OUTSTATION ===================== */}
      <section className="section" aria-labelledby="outstation-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Outstation Travel</div>
            <h2 className="section-title" id="outstation-heading">
              Outstation Taxi from Jamshedpur
            </h2>
            <p className="section-subtitle">
              We operate outstation cab routes across 6 states &mdash; Jharkhand, West Bengal, Odisha, Bihar, Chhattisgarh &amp; Uttar Pradesh.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { state: 'Jharkhand', cities: ['Ranchi', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Chaibasa'], color: '#0a1628' },
              { state: 'West Bengal', cities: ['Kolkata', 'Durgapur', 'Digha', 'Mandarmani'], color: '#1d3a75' },
              { state: 'Odisha', cities: ['Bhubaneswar', 'Puri', 'Rourkela', 'Cuttack'], color: '#152b5a' },
              { state: 'Bihar', cities: ['Patna', 'Gaya', 'Bodh Gaya'], color: '#0f2042' },
              { state: 'Chhattisgarh', cities: ['Raipur', 'Raigarh'], color: '#713f12' },
              { state: 'Uttar Pradesh', cities: ['Varanasi', 'Prayagraj', 'Ayodhya', 'Vindhyachal', 'Lucknow'], color: '#7e1a1a' },
            ].map((region) => (
              <div
                key={region.state}
                style={{
                  background: `linear-gradient(135deg, ${region.color}, ${region.color}ee)`,
                  borderRadius: '16px',
                  padding: '24px',
                  color: 'white',
                }}
              >
                <h3 style={{ fontWeight: 800, marginBottom: '12px', fontSize: '16px', color: 'var(--color-gold)' }}>
                  {region.state}
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {region.cities.map((city) => (
                    <li key={city} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', display: 'flex', gap: '6px' }}>
                      <span aria-hidden="true">→</span>
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/outstation-taxi" className="btn btn-navy">
              Outstation Taxi Details
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== WEDDING & CORPORATE ===================== */}
      <section className="section section-gray" aria-labelledby="special-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Specialised Services</div>
            <h2 className="section-title" id="special-heading">
              Wedding & Corporate Transportation
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="card-premium" style={{ padding: '32px' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }} aria-hidden="true">💒</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '12px' }}>
                Wedding Transportation
              </h3>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                Reliable transportation for your wedding day. Sedan, MUV, SUV, and Premium SUV for bridal travel, baraat, and guest convoys. Multiple vehicle arrangements available.
              </p>
              <Link href="/wedding-car-rental" className="btn btn-navy">
                Wedding Car Details
              </Link>
            </div>
            <div className="card-premium" style={{ padding: '32px' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }} aria-hidden="true">👔</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '12px' }}>
                Corporate Travel
              </h3>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                Professional cab service for business travel, executive transfers, airport pickups, and inter-city corporate transportation. Clean vehicles, punctual service.
              </p>
              <Link href="/corporate-travel" className="btn btn-navy">
                Corporate Travel Details
              </Link>
            </div>
            <div className="card-premium" style={{ padding: '32px' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }} aria-hidden="true">🚌</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '12px' }}>
                Group Tours & Tempo Traveller
              </h3>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                Travelling as a large group? Our AC Tempo Traveller (12–17 seats) is perfect for pilgrimage tours, school trips, family tours, and corporate outings.
              </p>
              <Link href="/tempo-traveller" className="btn btn-navy">
                Tempo Traveller Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COVERAGE AREA ===================== */}
      <section className="section" style={{ background: 'var(--color-gray-50)' }} aria-labelledby="coverage-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Service Network</div>
            <h2 className="section-title" id="coverage-heading">
              We Cover <span className="accent">6 States</span> &mdash; 80+ Cities &amp; Towns
            </h2>
            <p className="section-subtitle">
              From Jamshedpur&apos;s every locality to pilgrimage cities across Jharkhand, West Bengal, Odisha, Bihar, Chhattisgarh &amp; Uttar Pradesh &mdash; Shivansh Tour &amp; Travel is your trusted cab partner.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {[
              {
                state: 'Jharkhand',
                stateSlug: 'jharkhand',
                flag: '🏔️',
                color: '#1a237e',
                bg: '#e8eaf6',
                cities: [
                  { name: 'Jamshedpur', slug: 'jamshedpur' },
                  { name: 'Ranchi', slug: 'ranchi' },
                  { name: 'Dhanbad', slug: 'dhanbad' },
                  { name: 'Bokaro', slug: 'bokaro' },
                  { name: 'Deoghar', slug: 'deoghar' },
                  { name: 'Hazaribagh', slug: 'hazaribagh' },
                  { name: 'Bistupur', slug: 'bistupur' },
                  { name: 'Sakchi', slug: 'sakchi' },
                  { name: 'Mango', slug: 'mango' },
                  { name: 'Adityapur', slug: 'adityapur' },
                  { name: 'Sonari', slug: 'sonari' },
                  { name: 'Giridih', slug: 'giridih' },
                  { name: 'Chaibasa', slug: 'chaibasa' },
                  { name: 'Ramgarh', slug: 'ramgarh' },
                ],
              },
              {
                state: 'West Bengal',
                stateSlug: 'west-bengal',
                flag: '🌊',
                color: '#1b5e20',
                bg: '#e8f5e9',
                cities: [
                  { name: 'Kolkata', slug: 'kolkata' },
                  { name: 'Howrah', slug: 'howrah' },
                  { name: 'Durgapur', slug: 'durgapur' },
                  { name: 'Asansol', slug: 'asansol' },
                  { name: 'Kharagpur', slug: 'kharagpur' },
                  { name: 'Purulia', slug: 'purulia' },
                  { name: 'Digha', slug: 'digha' },
                  { name: 'Mandarmani', slug: 'mandarmani' },
                  { name: 'Haldia', slug: 'haldia' },
                  { name: 'Bankura', slug: 'bankura' },
                ],
              },
              {
                state: 'Odisha',
                stateSlug: 'odisha',
                flag: '🏛️',
                color: '#e65100',
                bg: '#fff3e0',
                cities: [
                  { name: 'Bhubaneswar', slug: 'bhubaneswar' },
                  { name: 'Puri', slug: 'puri' },
                  { name: 'Cuttack', slug: 'cuttack' },
                  { name: 'Rourkela', slug: 'rourkela' },
                  { name: 'Sambalpur', slug: 'sambalpur' },
                  { name: 'Berhampur', slug: 'berhampur' },
                  { name: 'Balasore', slug: 'balasore' },
                  { name: 'Keonjhar', slug: 'keonjhar' },
                  { name: 'Baripada', slug: 'baripada' },
                ],
              },
              {
                state: 'Bihar',
                stateSlug: 'bihar',
                flag: '🕌',
                color: '#b71c1c',
                bg: '#ffebee',
                cities: [
                  { name: 'Patna', slug: 'patna' },
                  { name: 'Gaya', slug: 'gaya' },
                  { name: 'Bodh Gaya', slug: 'bodh-gaya' },
                  { name: 'Rajgir', slug: 'rajgir' },
                  { name: 'Nalanda', slug: 'nalanda' },
                  { name: 'Muzaffarpur', slug: 'muzaffarpur' },
                  { name: 'Bhagalpur', slug: 'bhagalpur' },
                ],
              },
              {
                state: 'Chhattisgarh',
                stateSlug: 'chhattisgarh',
                flag: '🌾',
                color: '#713f12',
                bg: '#fefce8',
                cities: [
                  { name: 'Raipur', slug: 'raipur' },
                  { name: 'Raigarh', slug: 'raigarh' },
                ],
              },
              {
                state: 'Uttar Pradesh',
                stateSlug: 'uttar-pradesh',
                flag: '🛕',
                color: '#7e1a1a',
                bg: '#fff1f1',
                cities: [
                  { name: 'Varanasi', slug: 'varanasi' },
                  { name: 'Prayagraj', slug: 'prayagraj' },
                  { name: 'Ayodhya', slug: 'ayodhya' },
                  { name: 'Vindhyachal', slug: 'vindhyachal' },
                  { name: 'Lucknow', slug: 'lucknow' },
                ],
              },
            ].map((region) => (
              <div
                key={region.state}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  border: `2px solid ${region.bg}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
              >
                {/* State header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '22px' }}>{region.flag}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: region.color, margin: 0 }}>{region.state}</h3>
                </div>
                {/* Clickable city chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {region.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/cities/${region.stateSlug}/${city.slug}`}
                      className="city-link-badge"
                      style={{
                        background: region.bg,
                        color: region.color,
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'opacity 0.15s, transform 0.15s',
                        display: 'inline-block',
                        border: `1px solid ${region.color}25`,
                      }}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <p style={{ fontSize: '13px', color: 'var(--color-gray-400)', marginBottom: '16px' }}>
              Don&apos;t see your city? We serve many more destinations — call us to confirm availability.
            </p>
            <Link href="/cities" className="btn btn-primary">
              View All Cities &amp; Routes →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FARE CALCULATOR ===================== */}
      <section className="section section-dark" id="fare-calculator" aria-labelledby="fare-calc-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'start' }}>
            <div>
              <div className="section-label" style={{ display: 'inline-block', marginBottom: '12px' }}>
                Fare Estimator
              </div>
              <h2
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'white', marginBottom: '12px', lineHeight: 1.2 }}
                id="fare-calc-heading"
              >
                Estimate Your Cab Fare
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '20px' }}>
                Use our fare estimator to get an approximate idea of the cab fare based on vehicle type, distance, and trip type. For an accurate quote, contact us directly.
              </p>
              <p style={{ color: 'rgba(245,166,35,0.85)', fontSize: '13px', background: 'rgba(245,166,35,0.1)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(245,166,35,0.25)' }}>
                ⚠️ All calculator results are estimates only. Actual fare may vary based on route, vehicle, tolls, and availability.
              </p>
            </div>
            <div>
              <FareCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MAP ===================== */}
      <section className="section" aria-labelledby="location-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Location</div>
            <h2 className="section-title" id="location-heading">
              Find Us in Jamshedpur
            </h2>
            <p className="section-subtitle">
              Based near 11th Phase, Adarsh Nagar, Sonari, Jamshedpur — serving all city areas and outstation routes.
            </p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <MapEmbed
              query={SITE_CONFIG.mapQuery}
              label="Shivansh Tour & Travel — Sonari, Jamshedpur"
              height={420}
              zoom={14}
            />
          </div>
        </div>
      </section>

      {/* ===================== REVIEWS ===================== */}
      <section className="section section-gray" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Customer Feedback</div>
            <h2 className="section-title" id="reviews-heading">
              What Our <span className="accent">Travellers Say</span>
            </h2>
            <p className="section-subtitle">
              Verified feedback from our passengers across Jamshedpur, Ranchi, Kolkata &amp; beyond.
            </p>
            {/* Overall rating bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '42px', fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>4.8</span>
              <div>
                <div style={{ display: 'flex', gap: '3px', fontSize: '22px', color: '#f59e0b' }} aria-label="4.8 out of 5 stars">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p style={{ fontSize: '12px', color: 'var(--color-gray-500)', marginTop: '2px' }}>Based on 127+ passenger reviews</p>
              </div>
              {/* Google badge */}
              <a
                href={SITE_CONFIG.gmb.shareLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'white', borderRadius: '10px', padding: '8px 14px',
                  border: '1px solid #e2e6ee', boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  textDecoration: 'none', marginLeft: '8px',
                }}
                aria-label="View our Google reviews"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a' }}>Google Reviews</span>
              </a>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {[
              {
                name: 'Rahul Sharma',
                initials: 'RS',
                color: '#1a73e8',
                rating: 5,
                date: '2 weeks ago',
                route: 'Jamshedpur → Ranchi',
                text: 'Excellent service! Booked a Innova for Jamshedpur to Ranchi airport. Driver arrived 10 minutes early, car was spotless and AC was perfect. Reached airport well in time. No hidden charges — paid exactly what was quoted. Highly recommended!',
                verified: true,
              },
              {
                name: 'Priya Verma',
                initials: 'PV',
                color: '#ea4335',
                rating: 5,
                date: '1 month ago',
                route: 'Jamshedpur → Kolkata',
                text: 'Travelled Jamshedpur to Kolkata for a wedding. The Innova was very comfortable, driver was polite and knew the route well. We stopped for lunch at his suggestion which was nice. Fare was reasonable compared to others. Will definitely book again.',
                verified: true,
              },
              {
                name: 'Amit Kumar',
                initials: 'AK',
                color: '#34a853',
                rating: 5,
                date: '3 weeks ago',
                route: 'Jamshedpur → Puri',
                text: 'Booked Tempo Traveller for our family trip to Puri from Jamshedpur. 14 people, very comfortable journey. Driver was experienced on the Odisha highway. Reached Puri safely. The fare was fair and better than train tickets for our group size.',
                verified: true,
              },
              {
                name: 'Sunita Devi',
                initials: 'SD',
                color: '#9334e6',
                rating: 4,
                date: '1 month ago',
                route: 'Local — Bistupur',
                text: 'Used their local taxi service for hospital visit in Bistupur. Very prompt, came within 15 minutes. Car was clean and driver was courteous. Price was fair for the distance. I regularly use Shivansh for local trips now.',
                verified: true,
              },
              {
                name: 'Deepak Singh',
                initials: 'DS',
                color: '#f4511e',
                rating: 5,
                date: '2 months ago',
                route: 'Jamshedpur → Deoghar',
                text: 'Went to Baidyanath Dham Deoghar for darshan. Booked cab from Sonari area. The driver was also a devotee so he was very cooperative. Helped with luggage, knew parking spots near the mandir. Overall a very pleasant experience.',
                verified: true,
              },
              {
                name: 'Kavita Mishra',
                initials: 'KM',
                color: '#00897b',
                rating: 5,
                date: '3 weeks ago',
                route: 'Wedding Car — Mango',
                text: 'Hired cab for my brother\'s wedding in Mango. The car was nicely decorated, driver was well-dressed and professional. All guests were picked up on time. Friends and family were very impressed. Thank you Shivansh Tour & Travel!',
                verified: true,
              },
              {
                name: 'Rajan Prasad',
                initials: 'RP',
                color: '#1565c0',
                rating: 5,
                date: '5 weeks ago',
                route: 'Jamshedpur → Dhanbad',
                text: 'Corporate trip to Dhanbad. Needed early morning pickup at 5 AM from Adityapur. They were absolutely on time — actually early! Clean Dzire, professional driver. My company now regularly uses Shivansh for employee travel.',
                verified: true,
              },
              {
                name: 'Anita Roy',
                initials: 'AR',
                color: '#c62828',
                rating: 4,
                date: '1 month ago',
                route: 'Jamshedpur → Bhubaneswar',
                text: 'Long trip to Bhubaneswar for office work. Sedan was comfortable, we stopped at Rourkela for food. Driver was careful on the ghat sections near Odisha border. Fair price, no surprise charges at end. Would book again for outstation trips.',
                verified: true,
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid var(--color-gray-100)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  {/* Avatar */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: review.color, color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '15px', fontWeight: 700, flexShrink: 0,
                  }}>
                    {review.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '14px' }}>{review.name}</span>
                      {review.verified && (
                        <span style={{ fontSize: '10px', background: '#e8f5e9', color: '#2e7d32', padding: '2px 6px', borderRadius: '20px', fontWeight: 600 }}>
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '1px', marginTop: '3px' }} aria-label={`${review.rating} out of 5 stars`}>
                      {[1,2,3,4,5].map(s => (
                        <span key={s} style={{ color: s <= review.rating ? '#f59e0b' : '#e2e8f0', fontSize: '14px' }}>★</span>
                      ))}
                      <span style={{ fontSize: '11px', color: 'var(--color-gray-400)', marginLeft: '4px', lineHeight: '16px' }}>{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Route tag */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  background: 'var(--color-gray-50)', borderRadius: '20px',
                  padding: '3px 10px', fontSize: '11px', fontWeight: 600,
                  color: 'var(--color-navy)', marginBottom: '10px',
                  border: '1px solid var(--color-gray-100)',
                }}>
                  🚕 {review.route}
                </div>

                {/* Review text */}
                <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#374151', margin: 0 }}>
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* GMB Review Banner */}
          <div style={{ marginTop: '36px' }}>
            <GMBReviewWidget variant="banner" />
          </div>

          {/* Full GMB Write Review Widget */}
          <div style={{ marginTop: '32px' }}>
            <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--color-gray-500)', marginBottom: '20px' }}>
              Travelled with us? A Google review takes 1 minute and helps us grow 🙏
            </p>
            <GMBReviewWidget variant="full" />
          </div>
        </div>
      </section>


      {/* ===================== BLOG / TRAVEL GUIDES ===================== */}
      <section className="section" style={{ background: 'var(--color-gray-50)' }} aria-labelledby="blog-home-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Travel Knowledge Hub</div>
            <h2 className="section-title" id="blog-home-heading">
              <span className="accent">Jamshedpur Travel</span> Guides &amp; Tips
            </h2>
            <p className="section-subtitle">
              Expert guides on cab routes, fares, and travel tips — from your trusted Jamshedpur taxi service.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { slug: 'jamshedpur-to-ranchi-cab-guide', title: 'Jamshedpur to Ranchi Cab Guide', desc: 'Distance, route via NH33, fare for Sedan/Innova, and airport transfer tips.', icon: '🛣️', tag: 'Route Guide' },
              { slug: 'deoghar-pilgrimage-cab-jamshedpur', title: 'Deoghar Baidyanath Dham Cab Guide', desc: 'Route, fare, darshan timings, and Sawan season booking tips from Jamshedpur.', icon: '🛕', tag: 'Pilgrimage' },
              { slug: 'jamshedpur-to-kolkata-cab-guide', title: 'Jamshedpur to Kolkata Cab Guide', desc: 'NH16 route, fare comparison, vehicle choice, and overnight travel tips.', icon: '🌆', tag: 'Route Guide' },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-gray-100)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ background: 'var(--gradient-navy)', padding: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '28px' }}>{post.icon}</span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-gold)', background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.2)', padding: '2px 8px', borderRadius: '20px', letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
                      {post.tag}
                    </span>
                  </div>
                  <div style={{ padding: '16px 20px', flex: 1 }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '8px', lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-gray-500)', lineHeight: 1.7 }}>{post.desc}</p>
                    <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 700, color: 'var(--color-gold-dark)' }}>Read Guide →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href="/blog" className="btn btn-outline">View All Travel Guides →</Link>
          </div>
        </div>
      </section>
      {/* ===================== FAQ ===================== */}
      <FAQSection
        faqs={homepageFaqs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking a cab with Shivansh Tour & Travel in Jamshedpur."
      />

      {/* ===================== FINAL CTA ===================== */}
      <section
        className="section"
        style={{ background: 'var(--gradient-navy)' }}
        aria-labelledby="final-cta-heading"
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }} aria-hidden="true">🚕</div>
          <h2
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '12px' }}
            id="final-cta-heading"
          >
            Ready to Book Your Cab?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Call us, send a WhatsApp message, or fill the booking form. We will confirm your cab quickly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href={getWhatsAppLink('Hello Shivansh Tour & Travel, I want to book a cab. Please confirm availability and fare.')}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              id="final-whatsapp-cta"
            >
              💬 Book on WhatsApp
            </a>
            <a
              href={getCallLink()}
              className="btn btn-secondary btn-lg"
              id="final-call-cta"
            >
              📞 {SITE_CONFIG.phone}
            </a>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              📋 Booking Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
