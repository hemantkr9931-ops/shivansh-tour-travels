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
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
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
    excerpt:
      'Complete guide for Jamshedpur to Ranchi cab booking — distance (~135 km), estimated time, best route via NH33, fare for Sedan/SUV/Innova, and tips for airport transfers.',
    category: 'Route Guide',
    categoryColor: '#1a73e8',
    readTime: '4 min read',
    icon: '🛣️',
    tags: ['Ranchi', 'Route', 'Fare'],
  },
  {
    slug: 'jamshedpur-to-puri-tempo-traveller',
    title: 'Jamshedpur to Puri by Tempo Traveller: Group Tour Guide',
    excerpt:
      'Planning a family or group trip to Puri from Jamshedpur? Our Tempo Traveller (12-17 seats) is perfect. Covers distance, route via Bhubaneswar, overnight stops, and estimated cost.',
    category: 'Group Travel',
    categoryColor: '#e65100',
    readTime: '5 min read',
    icon: '🏖️',
    tags: ['Puri', 'Tempo Traveller', 'Odisha'],
  },
  {
    slug: 'deoghar-pilgrimage-cab-jamshedpur',
    title: 'Deoghar Pilgrimage Cab from Jamshedpur: Baidyanath Dham Guide',
    excerpt:
      'Going to Baidyanath Dham, Deoghar? Book a cab from Jamshedpur (~220 km). Learn about the best route, approximate travel time, darshan timings, and cab fare for your pilgrimage.',
    category: 'Pilgrimage',
    categoryColor: '#7e1a1a',
    readTime: '5 min read',
    icon: '🛕',
    tags: ['Deoghar', 'Pilgrimage', 'Baidyanath'],
  },
  {
    slug: 'tatanagar-railway-station-taxi-guide',
    title: 'Taxi & Cab at Tatanagar Railway Station — Complete Guide',
    excerpt:
      'Need a cab from Tatanagar Railway Station? Shivansh Tour & Travel provides pre-booked taxi pickups. No haggling, fixed fare, driver with name board at arrival. How to book.',
    category: 'Station Pickup',
    categoryColor: '#2e7d32',
    readTime: '3 min read',
    icon: '🚉',
    tags: ['Tatanagar Station', 'Pickup', 'Booking'],
  },
  {
    slug: 'jamshedpur-to-kolkata-cab-guide',
    title: 'Jamshedpur to Kolkata Cab: NH16 Route, Fare & Travel Tips',
    excerpt:
      'The most popular long-distance route from Jamshedpur. ~270 km via Kharagpur on NH16. Best vehicle choice (Innova vs Sedan), fare, fuel stop tips, and safe overnight travel advice.',
    category: 'Route Guide',
    categoryColor: '#1a73e8',
    readTime: '6 min read',
    icon: '🌆',
    tags: ['Kolkata', 'Route', 'Outstation'],
  },
  {
    slug: 'innova-crysta-hire-jamshedpur',
    title: 'Innova Crysta Hire in Jamshedpur: When to Choose SUV Over Sedan',
    excerpt:
      'Wondering whether to book a Sedan or Innova Crysta? For groups of 5-7, long routes (Ranchi, Kolkata, Puri), or premium comfort — Innova Crysta is the right choice. Read this guide.',
    category: 'Vehicle Guide',
    categoryColor: '#6a1b9a',
    readTime: '4 min read',
    icon: '🚙',
    tags: ['Innova', 'Crysta', 'SUV'],
  },
];

export default function BlogPage() {
  return (
    <>
      <section
        style={{ background: 'var(--gradient-navy)', padding: '72px 0 48px' }}
        aria-labelledby="blog-hero-heading"
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ display: 'inline-block', marginBottom: '16px' }}>
            Travel Knowledge Hub
          </div>
          <h1
            id="blog-hero-heading"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            Jamshedpur Travel Tips &amp;{' '}
            <span style={{ color: 'var(--color-gold)' }}>Cab Guides</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '18px',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Route guides, fare information, booking tips and local travel advice from Shivansh Tour &amp; Travel, Jamshedpur.
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{ background: 'var(--color-gray-50)' }}
        aria-labelledby="blog-list-heading"
      >
        <div className="container">
          <h2 id="blog-list-heading" className="sr-only">
            Travel Articles &amp; Guides
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
                aria-label={post.title}
              >
                <article
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    border: '1px solid var(--color-gray-100)',
                    transition: 'transform 0.22s, box-shadow 0.22s',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      background: 'var(--gradient-navy)',
                      padding: '28px 24px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div style={{ fontSize: '36px' }} aria-hidden="true">
                      {post.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: post.categoryColor,
                          background: `${post.categoryColor}18`,
                          border: `1px solid ${post.categoryColor}30`,
                          padding: '2px 10px',
                          borderRadius: '20px',
                          display: 'inline-block',
                          marginBottom: '4px',
                        }}
                      >
                        {post.category}
                      </div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--color-navy)',
                        marginBottom: '10px',
                        lineHeight: 1.4,
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--color-gray-500)',
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px' }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '11px',
                            background: 'var(--color-gray-100)',
                            color: 'var(--color-navy)',
                            padding: '3px 10px',
                            borderRadius: '20px',
                            fontWeight: 600,
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        marginTop: '16px',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: 'var(--color-gold-dark)',
                      }}
                    >
                      Read Guide →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontSize: '16px', color: 'var(--color-gray-700)', marginBottom: '20px' }}>
              Need help planning your trip from Jamshedpur?
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Shivansh%2C%20I%20need%20travel%20advice%20for%20my%20trip.`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                id="blog-whatsapp-cta"
              >
                💬 Ask on WhatsApp
              </a>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-navy" id="blog-call-cta">
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
