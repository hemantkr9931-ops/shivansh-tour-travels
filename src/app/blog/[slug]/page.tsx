import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';

type BlogPost = {
  title: string;
  description: string;
  content: string;
  icon: string;
  category: string;
  readTime: string;
  publishedDate: string;
};

const blogData: Record<string, BlogPost> = {
  'jamshedpur-to-ranchi-cab-guide': {
    title: 'Jamshedpur to Ranchi Cab Guide: Fare, Route & Tips (2025)',
    description:
      'Complete guide for Jamshedpur to Ranchi cab booking — distance (~135 km), estimated time, best route via NH33, fare for Sedan/SUV/Innova, and tips for airport transfers.',
    icon: '🛣️',
    category: 'Route Guide',
    readTime: '4 min read',
    publishedDate: '2025-09-15',
    content: `
Jamshedpur to Ranchi is one of the most popular outstation cab routes in Jharkhand. Whether you are going for the Birsa Munda Airport (IXR), a business meeting, or a family visit — this route is well-connected and comfortable with the right cab.

## Distance & Time

The road distance from Jamshedpur (Tata Nagar) to Ranchi is approximately 130 to 140 km via National Highway 33 (NH33). Travel time is typically 2.5 to 3.5 hours depending on traffic and the vehicle.

## Best Route: Via NH33

The most common and fastest route is:
- Jamshedpur → Baharagora → Kharsawan → Chakradharpur → Ranchi (via NH33/NH75)
- Alternatively via Adityapur → Seraikela → Chaibasa → Ranchi (slightly longer but scenic)

## Cab Fare (Indicative, One-Way)

| Vehicle Type | Approximate Fare |
|---|---|
| Sedan (Dzire, Amaze) | ₹1,499 – ₹1,799 |
| MUV (Ertiga, Innova) | ₹2,299 – ₹2,599 |
| Premium SUV (Innova Crysta) | ₹2,799 – ₹3,299 |
| Tempo Traveller (group) | ₹3,999 – ₹4,999 |

*Tolls, parking and state permit charges are extra. Call us for exact current fare.*

## Ranchi Airport Cab

If your destination is Birsa Munda Airport (IXR), Ranchi — Shivansh Tour & Travel is a reliable choice. We recommend booking the cab at least 2-3 hours before your flight departure from Jamshedpur.

## Tips for the Journey

1. **Book in advance** — especially during festival seasons (Chhath, Dussehra, Diwali) when demand is high.
2. **Early morning departure** — leave by 6-7 AM to avoid traffic near Adityapur and Kharsawan.
3. **Fuel stops** — there are good fuel stations and dhabas at Chakradharpur (about halfway).
4. **Share your flight info** — if heading to the airport, share your flight time so we can plan departure accordingly.

## Book Your Jamshedpur to Ranchi Cab
    `,
  },
  'jamshedpur-to-puri-tempo-traveller': {
    title: 'Jamshedpur to Puri by Tempo Traveller: Group Tour Guide',
    description:
      'Planning a family or group trip to Puri from Jamshedpur? Our Tempo Traveller (12-17 seats) is perfect. Covers distance, route, overnight stops, and cost.',
    icon: '🏖️',
    category: 'Group Travel',
    readTime: '5 min read',
    publishedDate: '2025-09-08',
    content: `
Puri — the divine coastal city of Lord Jagannath — is one of the most beloved destinations for families and pilgrim groups from Jamshedpur. A Tempo Traveller is the ideal vehicle for this journey.

## Why Tempo Traveller for Puri?

For groups of 10 to 17 people, a Tempo Traveller is significantly more economical than booking multiple cabs. It keeps the group together, allows for coordinated stops, and the per-person fare is much lower.

## Distance & Route

- **Distance:** ~430 to 450 km (Jamshedpur to Puri)
- **Route:** Jamshedpur → Balasore → Bhubaneswar → Puri (via NH16 and NH316)
- **Estimated Time:** 8 to 10 hours (with 1-2 rest stops)

## Estimated Fare (Tempo Traveller, One-Way)

| Seating | Approximate Fare |
|---|---|
| 12-seater AC Tempo | ₹12,000 – ₹14,000 |
| 17-seater AC Tempo | ₹14,000 – ₹17,000 |

*Fares are indicative. Final fare depends on exact dates, availability, and route. Toll charges extra.*

## Recommended Overnight Stop: Bhubaneswar

For a comfortable trip, many groups prefer:
- Depart Jamshedpur by 5:00 AM
- Reach Bhubaneswar by 1:00 PM (lunch & rest)
- Continue to Puri — arrive by 3:00 PM

This avoids night driving and gives your group time to freshen up before evening aarti at Jagannath Temple.

## Tips for Group Puri Trip

1. **Book 7-10 days in advance** during peak season (Rath Yatra, summer vacations)
2. **Carry water and snacks** — the highway has limited stops in Odisha
3. **Temple entry** — Jagannath Puri Temple does not allow non-Hindus inside the main temple
4. **Sea Beach** — Puri Beach is close to the temple. Evening is the best time for beach visit.

## Book Your Tempo Traveller to Puri
    `,
  },
  'deoghar-pilgrimage-cab-jamshedpur': {
    title: 'Deoghar Pilgrimage Cab from Jamshedpur: Baidyanath Dham Guide',
    description:
      'Going to Baidyanath Dham, Deoghar? Book a cab from Jamshedpur (~220 km). Learn about the route, travel time, darshan timings, and cab fare.',
    icon: '🛕',
    category: 'Pilgrimage',
    readTime: '5 min read',
    publishedDate: '2025-08-25',
    content: `
Baidyanath Dham (Vaidyanath Jyotirlinga) in Deoghar is one of the 12 Jyotirlingas of Lord Shiva — making it one of the most sacred pilgrimages for devotees across Jharkhand, Bihar, and West Bengal. From Jamshedpur, Deoghar is easily accessible by cab.

## Distance & Route

- **Distance:** ~215 to 225 km (Jamshedpur to Deoghar)
- **Route:** Jamshedpur → Dhanbad → Giridih → Deoghar (via NH32 and NH114)
- **Estimated Time:** 4.5 to 5.5 hours

## Cab Fare (One-Way, Indicative)

| Vehicle | Estimated Fare |
|---|---|
| Sedan (Dzire) | ₹2,799 – ₹3,199 |
| SUV/MUV (Ertiga/Innova) | ₹3,499 – ₹4,199 |
| Tempo Traveller (group) | ₹8,999 – ₹11,999 |

## Darshan Timings (Baidyanath Temple)

- **Morning:** 4:00 AM – 3:30 PM
- **Evening:** 6:00 PM – 9:00 PM
- Best time to arrive for darshan: Early morning (4-6 AM) to avoid long queues

## Sawan Month (Shravan)

During the holy month of Sawan (July-August), millions of Kanwariyas (devotees) carry holy water from Sultanganj (Bihar) on foot to Deoghar. During this period:
- Road traffic near Deoghar increases significantly
- Book your cab well in advance
- Plan to reach Deoghar the previous night

## Tips for Deoghar Pilgrimage Trip

1. **Pre-book your cab** — especially during Sawan, Maha Shivratri, and Navratri
2. **Start early** — leave Jamshedpur by 5:00 AM to reach Deoghar by 10:00-11:00 AM for morning darshan
3. **Book round trip or check return options** — many pilgrims do a same-day return
4. **Carry prasad items** — bel patra, dhatura, and gangajal are commonly offered

## Book Your Deoghar Pilgrimage Cab
    `,
  },
  'tatanagar-railway-station-taxi-guide': {
    title: 'Taxi & Cab at Tatanagar Railway Station — Complete Guide',
    description:
      'Need a cab from Tatanagar Railway Station? Shivansh Tour & Travel provides pre-booked taxi pickups. No haggling, fixed fare, driver with name board at arrival.',
    icon: '🚉',
    category: 'Station Pickup',
    readTime: '3 min read',
    publishedDate: '2025-08-18',
    content: `
Tatanagar Junction (station code: TATA) is the main railway station of Jamshedpur and one of the busiest stations in Jharkhand. If you are arriving by train and need a reliable cab — here is everything you need to know.

## Pre-Book vs On-Spot Taxi

**Pre-booked cab (recommended):**
- Fixed fare agreed in advance — no last-minute haggling
- Driver waits at the exit with your name board
- Clean, verified vehicle from Shivansh Tour & Travel
- WhatsApp confirmation before your arrival

**On-spot taxi:**
- Available outside station but fares can be negotiated (and sometimes inflated)
- Vehicle quality varies
- Less reliable for outstation destinations

## How to Pre-Book Your Tatanagar Station Pickup

1. **Contact us via WhatsApp** or call: +91 7061767617
2. Share your: Train name & number, PNR, arrival time, destination
3. We confirm the cab and fare
4. Your driver is at the station exit 15-20 minutes before your train arrives

## Local Destinations from Tatanagar Station

| Destination | Approx Fare |
|---|---|
| Bistupur (hotel area) | ₹150 – ₹250 |
| Sakchi Market | ₹200 – ₹300 |
| Sonari | ₹300 – ₹400 |
| Adityapur / Gamharia | ₹400 – ₹600 |
| Mango | ₹350 – ₹500 |

*Local fares are approximate. Outstation fares vary based on destination and vehicle.*

## Tips for Smooth Pickup

1. Share your train's live running status so we can track delays
2. Exit from the main station gate (Gate 1) for easiest pickup
3. Call us when your train arrives at Dhanbad or Chakradharpur — we will position the driver

## Book Your Station Pickup
    `,
  },
  'jamshedpur-to-kolkata-cab-guide': {
    title: 'Jamshedpur to Kolkata Cab: NH16 Route, Fare & Travel Tips',
    description:
      'The most popular long-distance route from Jamshedpur. ~270 km via Kharagpur. Best vehicle choice, fare, fuel stop tips, and overnight travel advice.',
    icon: '🌆',
    category: 'Route Guide',
    readTime: '6 min read',
    publishedDate: '2025-08-10',
    content: `
Jamshedpur to Kolkata is the most popular long-distance cab route from the Steel City. At approximately 270 km, it is a comfortable day-trip or overnight journey — depending on your preference.

## Distance & Route Options

**Primary Route (Via NH16 — Recommended):**
- Jamshedpur → Baharagora → Kharagpur → Kolaghat → Kolkata
- Distance: ~270 km | Time: 5.5 to 7 hours

**Alternate Route (Via Dhanbad-Asansol):**
- Jamshedpur → Dhanbad → Asansol → Durgapur → Kolkata
- Distance: ~300 km | Time: 6.5 to 8 hours (more urban traffic)

## Cab Fare (One-Way, Indicative)

| Vehicle | Estimated Fare |
|---|---|
| Sedan (Dzire, Honda Amaze) | ₹4,499 – ₹5,499 |
| MUV (Ertiga) | ₹5,199 – ₹5,999 |
| SUV (Innova Crysta) | ₹5,999 – ₹7,499 |
| Tempo Traveller | ₹10,999 – ₹13,999 |

## Key Stops Along the Way (NH16 Route)

1. **Baharagora (Jharkhand-Bengal border):** First toll plaza, fuel station, tea shops
2. **Kharagpur:** Good restaurants, IIT Kharagpur is here. ~4 hours from Jamshedpur.
3. **Kolaghat:** Bridge over Rupnarayan river — scenic. 1-1.5 hrs from Kolkata.
4. **Howrah Bridge:** Iconic entry into Kolkata

## Overnight vs Day Journey

- **Day journey:** Start 6:00-7:00 AM from Jamshedpur — reach Kolkata by 1:00-2:00 PM
- **Night journey:** Start 9:00-10:00 PM — reach early morning (5:00-6:00 AM). Less traffic but our experienced drivers handle this safely.

## Vehicle Recommendation

For 1-3 passengers: Sedan (most economical)
For 4-5 passengers: MUV (Ertiga) or Innova
For 5-7 passengers: Innova Crysta (most comfortable for this distance)
For 8+ passengers: Tempo Traveller

## Kolkata Drop Destinations

We drop at all Kolkata areas: Howrah, Park Street, Salt Lake, New Town, Esplanade, Kalighat, Dakshineswar, Belgharia, Dum Dum, and all other areas.

## Book Your Jamshedpur to Kolkata Cab
    `,
  },
  'innova-crysta-hire-jamshedpur': {
    title: 'Innova Crysta Hire in Jamshedpur: When to Choose SUV Over Sedan',
    description:
      'Wondering whether to book a Sedan or Innova Crysta? For groups of 5-7, long routes, or premium comfort — Innova Crysta is the right choice. Read this guide.',
    icon: '🚙',
    category: 'Vehicle Guide',
    readTime: '4 min read',
    publishedDate: '2025-07-30',
    content: `
The Toyota Innova Crysta is the most requested premium cab vehicle in Jamshedpur — and for good reason. It combines SUV comfort, generous luggage space, and reliability for both short local trips and long outstation journeys.

## When to Choose Innova Crysta

**Choose Innova Crysta when:**
- Your group has 5 to 7 passengers
- You are going on a long outstation trip (Kolkata, Puri, Ranchi, Deoghar)
- You have senior citizens or children who need more space and comfort
- You are travelling for a wedding or corporate event
- You have large luggage (multiple suitcases)

**Sedan (Dzire/Amaze) is fine when:**
- You are 1-4 passengers with minimal luggage
- It is a short local trip within Jamshedpur
- You want the most economical option

## Innova Crysta Specifications

- **Seating:** Up to 7 passengers comfortably
- **Luggage:** Large boot + roof carrier option available
- **AC:** Powerful dual-zone AC
- **Features:** Captain seats (2nd row), USB charging, spacious legroom

## Fare Comparison (Jamshedpur to Ranchi — One Way)

| Vehicle | Approx Fare | Per Person (6 passengers) |
|---|---|---|
| Sedan | ₹1,599 | ~₹267 each |
| Innova Crysta | ₹2,799 | ~₹467 each |
| Tempo Traveller | ₹3,999 | ~₹333 each (12 pax) |

For 6 passengers, Innova Crysta fare per person is still very reasonable vs booking 2 sedans.

## Popular Innova Crysta Routes from Jamshedpur

- Jamshedpur to Ranchi (Birsa Munda Airport)
- Jamshedpur to Kolkata (CCU / Howrah)
- Jamshedpur to Deoghar (Baidyanath Dham)
- Jamshedpur to Puri (Jagannath Temple)
- Jamshedpur to Bhubaneswar
- Local Jamshedpur wedding & event hire

## How to Book Innova Crysta in Jamshedpur

Contact Shivansh Tour & Travel via WhatsApp or call +91 7061767617. Share your:
- Pickup location and date/time
- Destination or trip requirement
- Number of passengers and luggage

We will confirm availability and share the exact fare for your Innova Crysta booking.

## Book Innova Crysta Now
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) return { title: 'Article Not Found' };
  return {
    title: `${post.title} | Shivansh Tour & Travel`,
    description: post.description,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let tableHeader: string[] = [];
  let inTable = false;

  const flushTable = () => {
    if (tableHeader.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--gradient-navy)' }}>
                {tableHeader.map((h, i) => (
                  <th key={i} style={{ padding: '10px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? 'white' : 'var(--color-gray-50)' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '10px 16px', borderTop: '1px solid var(--color-gray-100)', color: ci === 0 ? 'var(--color-navy)' : 'var(--color-gray-700)', fontWeight: ci === 0 ? 700 : 400 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    tableHeader = [];
    tableRows = [];
    inTable = false;
  };

  lines.forEach((line, i) => {
    if (line.startsWith('## ')) {
      if (inTable) flushTable();
      elements.push(
        <h2 key={i} style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-navy)', marginTop: '32px', marginBottom: '12px' }}>
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('| ') && line.includes('|')) {
      const cells = line.split('|').map(c => c.trim()).filter(c => c);
      if (!inTable && !cells.every(c => c.replace(/-/g, '').trim() === '')) {
        tableHeader = cells;
        inTable = true;
      } else if (!cells.every(c => c.replace(/-/g, '').trim() === '')) {
        tableRows.push(cells);
      }
    } else if (line.startsWith('- ') || line.startsWith('1. ') || /^\d+\. /.test(line)) {
      if (inTable) flushTable();
      elements.push(
        <li key={i} style={{ fontSize: '15px', color: 'var(--color-gray-700)', lineHeight: 1.7, marginBottom: '6px', marginLeft: '20px' }}>
          {line.replace(/^- |^\d+\. /, '')}
        </li>
      );
    } else if (line.trim() !== '') {
      if (inTable) flushTable();
      elements.push(
        <p key={i} style={{ fontSize: '15px', color: 'var(--color-gray-700)', lineHeight: 1.75, marginBottom: '16px' }}>
          {line}
        </p>
      );
    }
  });

  if (inTable) flushTable();
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--gradient-navy)', padding: '60px 0 40px' }} aria-labelledby="blog-post-title">
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
            ← Back to Travel Guides
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '40px' }}>{post.icon}</span>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.25)', padding: '3px 12px', borderRadius: '20px' }}>
              {post.category}
            </span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{post.readTime}</span>
          </div>
          <h1 id="blog-post-title" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'white', lineHeight: 1.25, marginBottom: '12px' }}>
            {post.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.6 }}>
            {post.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <article>
            {renderContent(post.content)}
          </article>

          {/* CTA */}
          <div style={{ background: 'var(--gradient-navy)', borderRadius: '20px', padding: '36px', marginTop: '48px', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
              Ready to Book Your Cab?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '15px' }}>
              Contact Shivansh Tour &amp; Travel, Jamshedpur — 24x7 available for booking.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={getWhatsAppLink('Hello Shivansh, I read your travel guide and want to book a cab. Please share options and fare.')}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                id="blog-post-whatsapp-cta"
              >
                💬 Book on WhatsApp
              </a>
              <a href={getCallLink()} className="btn btn-secondary" id="blog-post-call-cta">
                📞 {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* Back link */}
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-outline">
              ← View All Travel Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
