// src/app/about/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG, getCallLink, getWhatsAppLink } from '@/lib/config';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import HeroSlider from '@/components/ui/HeroSlider';
import MapEmbed from '@/components/ui/MapEmbed';

export const metadata: Metadata = {
  title: 'About Shivansh Tour & Travels | Jamshedpur Cab Service',
  description:
    'Learn about Shivansh Tour & Travels — a reliable cab and taxi service based in Jamshedpur, Jharkhand. We provide local, outstation, airport, corporate, and wedding transportation.',
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

const teamValues = [
  {
    icon: '🚗',
    title: 'Reliable Service',
    desc: 'We show up on time, every time. Our drivers are experienced on the routes they cover.',
  },
  {
    icon: '💬',
    title: 'Clear Communication',
    desc: 'We share fare estimates upfront and communicate clearly about trip details before you book.',
  },
  {
    icon: '🏘️',
    title: 'Local Knowledge',
    desc: 'We are based in Sonari, Jamshedpur — we know the city, roads, and regional routes well.',
  },
  {
    icon: '🧳',
    title: 'Comfortable Vehicles',
    desc: 'Clean, well-maintained vehicles across Sedan, MUV, SUV, and Tempo Traveller categories.',
  },
  {
    icon: '📍',
    title: 'Door-to-Door Pickup',
    desc: 'We pick you up from your location — no depot, no queue.',
  },
  {
    icon: '🌐',
    title: 'Regional Coverage',
    desc: 'Jharkhand, West Bengal, Odisha, and Bihar — we know these routes from experience.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0' }}>
        <HeroSlider />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={[{ label: 'About Us' }]} dark />
          <div style={{ marginTop: '16px', maxWidth: '600px' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '16px' }}>
              About Shivansh Tour & Travels
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7 }}>
              A reliable cab and taxi service based in Jamshedpur, Jharkhand — providing local, outstation, airport, corporate, and wedding transportation across the region.
            </p>
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>

            {/* Business intro */}
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                Who We Are
              </h2>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
                Shivansh Tour & Travels is a taxi and cab service based in Sonari, Jamshedpur, Jharkhand. We operate local taxi service within Jamshedpur city and outstation cab service to destinations across Jharkhand, West Bengal, Odisha, and Bihar.
              </p>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
                We serve a variety of travel needs — from daily local trips and railway/airport transfers to multi-day outstation journeys, pilgrimages, corporate travel, wedding convoys, and group tours by Tempo Traveller. Our aim is to provide reliable, comfortable, and fairly priced transportation.
              </p>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
                Our drivers are experienced on the routes they cover and follow professional conduct. We communicate clearly about fares and trip details before you confirm a booking.
              </p>

              {/* Address block */}
              <div
                style={{
                  background: 'white',
                  border: '1px solid var(--color-gray-200)',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  display: 'flex',
                  gap: '14px',
                  marginBottom: '24px',
                }}
              >
                <div style={{ fontSize: '28px' }} aria-hidden="true">📍</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '4px', fontSize: '15px' }}>
                    {SITE_CONFIG.name}
                  </div>
                  <address
                    style={{ fontStyle: 'normal', fontSize: '14px', color: 'var(--color-gray-700)', lineHeight: 1.6 }}
                  >
                    {SITE_CONFIG.addressFormatted}
                  </address>
                  <div style={{ fontSize: '14px', marginTop: '8px' }}>
                    <a
                      href={`https://www.google.com/maps/search/${SITE_CONFIG.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-navy-600)', fontWeight: 600 }}
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Live embedded map */}
              <div style={{ marginBottom: '24px' }}>
                <MapEmbed
                  query={SITE_CONFIG.mapQuery}
                  label="Shivansh Tour & Travels — Sonari, Jamshedpur"
                  height={340}
                />
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href={getWhatsAppLink('Hello Shivansh Tour & Travels, I would like to book a cab. Please share details.')}
                  className="btn btn-whatsapp btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-whatsapp-cta"
                >
                  💬 Book a Cab
                </a>
                <a href={getCallLink()} className="btn btn-navy btn-lg" id="about-call-cta">
                  📞 {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Our values */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '24px' }}>
                What Drives Us
              </h2>
              <div className="grid-3">
                {teamValues.map((val) => (
                  <div
                    key={val.title}
                    style={{
                      background: 'white',
                      borderRadius: '14px',
                      padding: '24px',
                      border: '1px solid var(--color-gray-100)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ fontSize: '32px', marginBottom: '12px' }} aria-hidden="true">{val.icon}</div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '8px' }}>
                      {val.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-gray-500)', lineHeight: 1.6 }}>
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service areas */}
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
                Where We Operate
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                {[
                  { state: '🏔️ Jharkhand', note: 'Primary region — Jamshedpur home base', cities: 'Ranchi, Dhanbad, Bokaro, Deoghar, Hazaribagh, Chaibasa' },
                  { state: '🌊 West Bengal', note: 'Interstate routes', cities: 'Kolkata, Kharagpur, Purulia, Durgapur' },
                  { state: '🏖️ Odisha', note: 'Interstate routes', cities: 'Bhubaneswar, Puri, Rourkela, Cuttack' },
                  { state: '🌾 Bihar', note: 'Interstate routes', cities: 'Patna, Gaya, Bodh Gaya' },
                ].map((region) => (
                  <div
                    key={region.state}
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      padding: '18px',
                      border: '1px solid var(--color-gray-200)',
                    }}
                  >
                    <div style={{ fontWeight: 800, color: 'var(--color-navy)', marginBottom: '4px', fontSize: '15px' }}>
                      {region.state}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-gold-dark)', fontWeight: 600, marginBottom: '8px' }}>
                      {region.note}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--color-gray-500)' }}>
                      {region.cities}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '16px' }}>
                Explore Our Services
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  { label: 'Local Taxi', href: '/local-taxi' },
                  { label: 'Outstation Cab', href: '/outstation-taxi' },
                  { label: 'Airport Transfer', href: '/airport-taxi' },
                  { label: 'Corporate Travel', href: '/corporate-travel' },
                  { label: 'Wedding Transport', href: '/wedding-car-rental' },
                  { label: 'Tempo Traveller', href: '/tempo-traveller' },
                  { label: 'Our Fleet', href: '/fleet' },
                  { label: 'Fare Calculator', href: '/fare-calculator' },
                  { label: 'All Routes', href: '/routes' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="btn btn-outline btn-sm">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
