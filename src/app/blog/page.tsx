import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Travel Tips & Cab Guide | Jamshedpur Taxi Blog | Shivansh Tour & Travel',
  description:
    'Travel tips, cab fare guides, route information, and local travel advice for Jamshedpur, Ranchi, Kolkata and more. Expert advice from Shivansh Tour & Travel.',
  keywords: [
    'Jamshedpur travel tips',
    'cab fare Jamshedpur to Ranchi',
    'outstation taxi guide Jamshedpur',
    'best time to travel Jamshedpur',
    'Jamshedpur taxi booking tips',
    'Puri trip from Jamshedpur',
    'Deoghar pilgrimage cab guide',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  openGraph: {
    title: 'Travel Tips & Cab Guide | Shivansh Tour & Travel Blog',
    description: 'Travel tips, route guides, and cab fare information for trips from Jamshedpur.',
    url: `${SITE_CONFIG.url}/blog`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const blogPosts = [
  {
    slug: 'jamshedpur-to-ranchi-cab-guide',
    title: 'Jamshedpur to Ranchi Cab Guide: Fare, Route & Tips (2025)',
    excerpt: 'Complete guide — distance (~135 km), best route via NH33, fare for Sedan/SUV/Innova, and tips for Birsa Munda Airport transfers.',
    category: 'Route Guide',
    categoryColor: '#1a73e8',
    readTime: '4 min read',
    icon: '🛣️',
    distance: '~135 km',
    time: '2.5–3.5 hrs',
    tags: ['Ranchi', 'Route', 'Fare', 'Airport'],
  },
  {
    slug: 'jamshedpur-to-kolkata-cab-guide',
    title: 'Jamshedpur to Kolkata Cab: NH16 Route, Fare & Travel Tips',
    excerpt: 'The most popular long-distance route. ~270 km via Kharagpur on NH16. Best vehicle choice, fare, fuel stop tips, and overnight travel advice.',
    category: 'Route Guide',
    categoryColor: '#1a73e8',
    readTime: '6 min read',
    icon: '🌆',
    distance: '~270 km',
    time: '5.5–7 hrs',
    tags: ['Kolkata', 'Route', 'Outstation'],
  },
  {
    slug: 'deoghar-pilgrimage-cab-jamshedpur',
    title: 'Deoghar Pilgrimage Cab from Jamshedpur: Baidyanath Dham Guide',
    excerpt: 'Going to Baidyanath Dham? Book a cab from Jamshedpur (~220 km). Route, darshan timings, Sawan booking tips and cab fare inside.',
    category: 'Pilgrimage',
    categoryColor: '#7e1a1a',
    readTime: '5 min read',
    icon: '🛕',
    distance: '~220 km',
    time: '4.5–5.5 hrs',
    tags: ['Deoghar', 'Pilgrimage', 'Baidyanath'],
  },
  {
    slug: 'jamshedpur-to-puri-tempo-traveller',
    title: 'Jamshedpur to Puri by Tempo Traveller: Group Tour Guide',
    excerpt: 'Planning a family or group trip to Puri? Our Tempo Traveller (12–17 seats) is perfect. Distance, route, overnight stop at Bhubaneswar, and cost.',
    category: 'Group Travel',
    categoryColor: '#e65100',
    readTime: '5 min read',
    icon: '🏖️',
    distance: '~440 km',
    time: '8–10 hrs',
    tags: ['Puri', 'Tempo Traveller', 'Odisha'],
  },
  {
    slug: 'tatanagar-railway-station-taxi-guide',
    title: 'Taxi & Cab at Tatanagar Railway Station — Complete Guide',
    excerpt: 'Need a cab from Tatanagar Station (TATA)? Fixed fare, driver with name board, WhatsApp confirmation. How to pre-book in 3 steps.',
    category: 'Station Pickup',
    categoryColor: '#2e7d32',
    readTime: '3 min read',
    icon: '🚉',
    distance: 'Local',
    time: 'As needed',
    tags: ['Tatanagar', 'Pickup', 'Booking'],
  },
  {
    slug: 'innova-crysta-hire-jamshedpur',
    title: 'Innova Crysta Hire in Jamshedpur: When to Choose SUV Over Sedan',
    excerpt: 'Sedan or Innova Crysta? For groups of 5–7, long routes, or premium comfort — Innova Crysta is the right choice. Fare comparison inside.',
    category: 'Vehicle Guide',
    categoryColor: '#6a1b9a',
    readTime: '4 min read',
    icon: '🚙',
    distance: '—',
    time: '7 seats',
    tags: ['Innova', 'Crysta', 'SUV'],
  },
];

const stats = [
  { icon: '📖', value: '6', label: 'Expert Guides' },
  { icon: '🗺️', value: '5+', label: 'Routes Covered' },
  { icon: '🏙️', value: 'Jamshedpur', label: 'Based In' },
  { icon: '⭐', value: '500+', label: 'Happy Trips' },
];

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{ background: 'var(--gradient-navy)', padding: '64px 0 0', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="blog-hero-heading"
      >
        {/* Decorative circles */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '0', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,58,117,0.6) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: '24px', padding: '6px 18px', marginBottom: '24px' }}>
            <span style={{ fontSize: '16px' }}>✍️</span>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
              Travel Knowledge Hub
            </span>
          </div>

          <h1 id="blog-hero-heading" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)', fontWeight: 800, color: 'white', marginBottom: '18px', lineHeight: 1.15 }}>
            Jamshedpur Travel Tips &amp;{' '}
            <span style={{ color: 'var(--color-gold)' }}>Cab Guides</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '17px', maxWidth: '580px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Route guides, cab fares, booking tips and local travel advice — written by your trusted Jamshedpur taxi service.
          </p>

          {/* Quick stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '0' }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', marginBottom: '2px' }}>{s.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-gold)' }}>{s.value}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom wave */}
          <div style={{ height: '48px', marginTop: '40px', position: 'relative' }}>
            <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: '-24px', right: '-24px', width: 'calc(100% + 48px)', height: '48px' }} aria-hidden="true">
              <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#f8f9fb" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── CARDS GRID ────────────────────────────────────────────────── */}
      <section
        style={{ background: '#f8f9fb', paddingTop: '48px', paddingBottom: '72px' }}
        aria-labelledby="blog-list-heading"
      >
        <div className="container">
          <h2 id="blog-list-heading" className="sr-only">Travel Articles &amp; Guides</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {blogPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
                aria-label={post.title}
              >
                <article style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: '1px solid var(--color-gray-100)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  {/* Card header */}
                  <div style={{ background: 'var(--gradient-navy)', padding: '24px 24px 16px', position: 'relative' }}>
                    {/* Featured badge for first post */}
                    {idx === 0 && (
                      <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'var(--color-gold)', color: '#0a1628', fontSize: '10px', fontWeight: 800, padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Popular
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ fontSize: '40px', lineHeight: 1 }} aria-hidden="true">{post.icon}</div>
                      <div>
                        <div style={{
                          fontSize: '10px', fontWeight: 700, letterSpacing: '0.09em',
                          textTransform: 'uppercase', color: post.categoryColor,
                          background: `${post.categoryColor}1a`,
                          border: `1px solid ${post.categoryColor}35`,
                          padding: '2px 10px', borderRadius: '20px',
                          display: 'inline-block', marginBottom: '6px'
                        }}>
                          {post.category}
                        </div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Distance + time pills */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '12px' }}>
                        📍 {post.distance}
                      </span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '12px' }}>
                        ⏱ {post.time}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '10px', lineHeight: 1.45 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: '13px', color: 'var(--color-gray-500)', lineHeight: 1.75, flex: 1 }}>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px' }}>
                      {post.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '11px', background: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)', color: 'var(--color-navy)', padding: '2px 9px', borderRadius: '20px', fontWeight: 600 }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA row */}
                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold-dark)' }}>
                        Read Full Guide →
                      </span>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gradient-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: '56px', background: 'var(--gradient-navy)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', boxShadow: '0 8px 32px rgba(10,22,40,0.2)' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🚕</div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
              Need Help Planning Your Trip from Jamshedpur?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.7 }}>
              Talk to us directly — we confirm cab availability and exact fare on WhatsApp instantly.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Shivansh%2C%20I%20need%20travel%20advice%20for%20my%20trip%20from%20Jamshedpur.`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                id="blog-whatsapp-cta"
              >
                💬 Ask on WhatsApp
              </a>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-secondary" id="blog-call-cta">
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
