import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

type BlogPost = {
  title: string;
  description: string;
  content: string;
  icon: string;
  category: string;
  categoryColor: string;
  readTime: string;
  publishedDate: string;
  tags: string[];
};

const blogData: Record<string, BlogPost> = {
  'jamshedpur-to-ranchi-cab-guide': {
    title: 'Jamshedpur to Ranchi Cab Guide: Fare, Route & Tips (2025)',
    description:
      'Complete guide for Jamshedpur to Ranchi cab booking — distance (~135 km), estimated time, best route via NH33, fare for Sedan/SUV/Innova, and tips for airport transfers.',
    icon: '🛣️',
    category: 'Route Guide',
    categoryColor: '#1a73e8',
    readTime: '4 min read',
    publishedDate: '2025-09-15',
    tags: ['Ranchi', 'Route', 'Fare', 'Airport'],
    content: `INTRO:Jamshedpur to Ranchi is one of the most popular outstation cab routes in Jharkhand. Whether you are going for the Birsa Munda Airport (IXR), a business meeting, or a family visit — this route is well-connected and comfortable with the right cab.

## Distance & Time

The road distance from Jamshedpur (Tata Nagar) to Ranchi is approximately 130 to 140 km via National Highway 33 (NH33). Travel time is typically 2.5 to 3.5 hours depending on traffic and the vehicle.

STATS:🗺️|~135 km|⏱️|2.5–3.5 hrs|🛣️|Via NH33

## Best Route: Via NH33

The most common and fastest route is:
- Jamshedpur → Kharsawan → Chakradharpur → Ranchi (NH33/NH75) — fastest option
- Via Adityapur → Seraikela → Chaibasa → Ranchi — slightly longer but scenic

## Cab Fare (Indicative, One-Way)

| Vehicle Type | Approximate Fare |
|---|---|
| Sedan (Dzire, Amaze) | ₹1,499 – ₹1,799 |
| MUV (Ertiga, Innova) | ₹2,299 – ₹2,599 |
| Premium SUV (Innova Crysta) | ₹2,799 – ₹3,299 |
| Tempo Traveller (group) | ₹3,999 – ₹4,999 |

NOTE:Tolls, parking and state permit charges are extra. Final fare confirmed on WhatsApp before your trip.

## Ranchi Airport Cab

If your destination is Birsa Munda Airport (IXR), Ranchi — Shivansh Tour & Travel is a reliable choice. We recommend booking the cab at least 2–3 hours before your flight departure from Jamshedpur.

## Tips for the Journey

1. Book in advance — especially during festival seasons (Chhath, Dussehra, Diwali) when demand is high.
2. Early morning departure — leave by 6–7 AM to avoid traffic near Adityapur and Kharsawan.
3. Fuel stops — there are good fuel stations and dhabas at Chakradharpur (about halfway).
4. Share your flight info — if heading to the airport, share your flight time so we can plan departure accordingly.`,
  },
  'jamshedpur-to-puri-tempo-traveller': {
    title: 'Jamshedpur to Puri by Tempo Traveller: Group Tour Guide',
    description:
      'Planning a family or group trip to Puri from Jamshedpur? Our Tempo Traveller (12–17 seats) is perfect. Covers distance, route, overnight stops, and cost.',
    icon: '🏖️',
    category: 'Group Travel',
    categoryColor: '#e65100',
    readTime: '5 min read',
    publishedDate: '2025-09-08',
    tags: ['Puri', 'Tempo Traveller', 'Odisha', 'Group'],
    content: `INTRO:Puri — the divine coastal city of Lord Jagannath — is one of the most beloved destinations for families and pilgrim groups from Jamshedpur. A Tempo Traveller is the ideal vehicle for this journey.

STATS:🗺️|~440 km|⏱️|8–10 hrs|👥|12–17 seats

## Why Tempo Traveller for Puri?

For groups of 10 to 17 people, a Tempo Traveller is significantly more economical than booking multiple cabs. It keeps the group together, allows for coordinated stops, and the per-person fare is much lower.

## Distance & Route

- Distance: ~430 to 450 km (Jamshedpur to Puri)
- Route: Jamshedpur → Balasore → Bhubaneswar → Puri (via NH16 and NH316)
- Estimated Time: 8 to 10 hours (with 1–2 rest stops)

## Estimated Fare (Tempo Traveller, One-Way)

| Seating | Approximate Fare |
|---|---|
| 12-seater AC Tempo | ₹12,000 – ₹14,000 |
| 17-seater AC Tempo | ₹14,000 – ₹17,000 |

NOTE:Fares are indicative. Final fare depends on exact dates, availability, and route. Toll charges are extra.

## Recommended Plan: Overnight Stop at Bhubaneswar

For a comfortable trip, many groups prefer:
- Depart Jamshedpur by 5:00 AM
- Reach Bhubaneswar by 1:00 PM (lunch & rest)
- Continue to Puri — arrive by 3:00 PM

This avoids night driving and gives your group time to freshen up before evening aarti at Jagannath Temple.

## Tips for Group Puri Trip

1. Book 7–10 days in advance during peak season (Rath Yatra, summer vacations)
2. Carry water and snacks — the highway has limited stops in Odisha
3. Temple entry — Jagannath Puri Temple does not allow non-Hindus inside the main temple
4. Sea Beach — Puri Beach is close to the temple. Evening is the best time for a beach visit.`,
  },
  'deoghar-pilgrimage-cab-jamshedpur': {
    title: 'Deoghar Pilgrimage Cab from Jamshedpur: Baidyanath Dham Guide',
    description:
      'Going to Baidyanath Dham, Deoghar? Book a cab from Jamshedpur (~220 km). Learn about the route, travel time, darshan timings, and cab fare.',
    icon: '🛕',
    category: 'Pilgrimage',
    categoryColor: '#7e1a1a',
    readTime: '5 min read',
    publishedDate: '2025-08-25',
    tags: ['Deoghar', 'Pilgrimage', 'Baidyanath', 'Jyotirlinga'],
    content: `INTRO:Baidyanath Dham (Vaidyanath Jyotirlinga) in Deoghar is one of the 12 Jyotirlingas of Lord Shiva — making it one of the most sacred pilgrimages for devotees across Jharkhand, Bihar, and West Bengal. From Jamshedpur, Deoghar is easily accessible by cab.

STATS:🗺️|~220 km|⏱️|4.5–5.5 hrs|🛣️|Via NH32

## Distance & Route

- Distance: ~215 to 225 km (Jamshedpur to Deoghar)
- Route: Jamshedpur → Dhanbad → Giridih → Deoghar (via NH32 and NH114)
- Estimated Time: 4.5 to 5.5 hours

## Cab Fare (One-Way, Indicative)

| Vehicle | Estimated Fare |
|---|---|
| Sedan (Dzire) | ₹2,799 – ₹3,199 |
| SUV/MUV (Ertiga/Innova) | ₹3,499 – ₹4,199 |
| Tempo Traveller (group) | ₹8,999 – ₹11,999 |

## Darshan Timings (Baidyanath Temple)

- Morning: 4:00 AM – 3:30 PM
- Evening: 6:00 PM – 9:00 PM
- Best time to arrive for darshan: Early morning (4–6 AM) to avoid long queues

## Sawan Month (Shravan)

During the holy month of Sawan (July–August), millions of Kanwariyas (devotees) carry holy water from Sultanganj (Bihar) on foot to Deoghar. During this period:
- Road traffic near Deoghar increases significantly
- Book your cab well in advance
- Plan to reach Deoghar the previous night

## Tips for Deoghar Pilgrimage Trip

1. Pre-book your cab — especially during Sawan, Maha Shivratri, and Navratri
2. Start early — leave Jamshedpur by 5:00 AM to reach by 10:00–11:00 AM for morning darshan
3. Book round trip or check return options — many pilgrims do a same-day return
4. Carry prasad items — bel patra, dhatura, and gangajal are commonly offered`,
  },
  'tatanagar-railway-station-taxi-guide': {
    title: 'Taxi & Cab at Tatanagar Railway Station — Complete Guide',
    description:
      'Need a cab from Tatanagar Railway Station? Shivansh Tour & Travel provides pre-booked taxi pickups. No haggling, fixed fare, driver with name board at arrival.',
    icon: '🚉',
    category: 'Station Pickup',
    categoryColor: '#2e7d32',
    readTime: '3 min read',
    publishedDate: '2025-08-18',
    tags: ['Tatanagar Station', 'Pickup', 'Booking'],
    content: `INTRO:Tatanagar Junction (station code: TATA) is the main railway station of Jamshedpur and one of the busiest stations in Jharkhand. If you are arriving by train and need a reliable cab — here is everything you need to know.

## Pre-Book vs On-Spot Taxi

Pre-booked cab (recommended):
- Fixed fare agreed in advance — no last-minute haggling
- Driver waits at the exit with your name board
- Clean, verified vehicle from Shivansh Tour & Travel
- WhatsApp confirmation before your arrival

On-spot taxi:
- Available outside station but fares can be negotiated (and sometimes inflated)
- Vehicle quality varies
- Less reliable for outstation destinations

## How to Pre-Book Your Tatanagar Station Pickup

1. Contact us via WhatsApp or call: +91 7061767617
2. Share your: Train name & number, PNR, arrival time, destination
3. We confirm the cab and fare
4. Your driver is at the station exit 15–20 minutes before your train arrives

## Local Destinations from Tatanagar Station

| Destination | Approx Fare |
|---|---|
| Bistupur (hotel area) | ₹150 – ₹250 |
| Sakchi Market | ₹200 – ₹300 |
| Sonari | ₹300 – ₹400 |
| Adityapur / Gamharia | ₹400 – ₹600 |
| Mango | ₹350 – ₹500 |

NOTE:Local fares are approximate. Outstation fares vary based on destination and vehicle. Call us for exact fare.

## Tips for Smooth Pickup

1. Share your train's live running status so we can track delays
2. Exit from the main station gate (Gate 1) for easiest pickup
3. Call us when your train arrives at Dhanbad or Chakradharpur — we will position the driver`,
  },
  'jamshedpur-to-kolkata-cab-guide': {
    title: 'Jamshedpur to Kolkata Cab: NH16 Route, Fare & Travel Tips',
    description:
      'The most popular long-distance route from Jamshedpur. ~270 km via Kharagpur. Best vehicle choice, fare, fuel stop tips, and overnight travel advice.',
    icon: '🌆',
    category: 'Route Guide',
    categoryColor: '#1a73e8',
    readTime: '6 min read',
    publishedDate: '2025-08-10',
    tags: ['Kolkata', 'Route', 'Outstation', 'NH16'],
    content: `INTRO:Jamshedpur to Kolkata is the most popular long-distance cab route from the Steel City. At approximately 270 km, it is a comfortable day-trip or overnight journey — depending on your preference.

STATS:🗺️|~270 km|⏱️|5.5–7 hrs|🛣️|Via NH16

## Distance & Route Options

Primary Route (Via NH16 — Recommended):
- Jamshedpur → Baharagora → Kharagpur → Kolaghat → Kolkata
- Distance: ~270 km | Time: 5.5 to 7 hours

Alternate Route (Via Dhanbad–Asansol):
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

1. Baharagora (Jharkhand–Bengal border): First toll plaza, fuel station, tea shops
2. Kharagpur: Good restaurants, IIT Kharagpur is here. ~4 hours from Jamshedpur.
3. Kolaghat: Bridge over Rupnarayan river — scenic. 1–1.5 hrs from Kolkata.
4. Howrah Bridge: Iconic entry into Kolkata

## Overnight vs Day Journey

- Day journey: Start 6:00–7:00 AM from Jamshedpur — reach Kolkata by 1:00–2:00 PM
- Night journey: Start 9:00–10:00 PM — reach early morning (5:00–6:00 AM). Less traffic but our experienced drivers handle this safely.

## Vehicle Recommendation

- For 1–3 passengers: Sedan (most economical)
- For 4–5 passengers: MUV (Ertiga) or Innova
- For 5–7 passengers: Innova Crysta (most comfortable for this distance)
- For 8+ passengers: Tempo Traveller

## Kolkata Drop Destinations

We drop at all Kolkata areas: Howrah, Park Street, Salt Lake, New Town, Esplanade, Kalighat, Dakshineswar, Belgharia, Dum Dum, and all other areas.`,
  },
  'innova-crysta-hire-jamshedpur': {
    title: 'Innova Crysta Hire in Jamshedpur: When to Choose SUV Over Sedan',
    description:
      'Wondering whether to book a Sedan or Innova Crysta? For groups of 5–7, long routes, or premium comfort — Innova Crysta is the right choice. Read this guide.',
    icon: '🚙',
    category: 'Vehicle Guide',
    categoryColor: '#6a1b9a',
    readTime: '4 min read',
    publishedDate: '2025-07-30',
    tags: ['Innova', 'Crysta', 'SUV', 'Premium'],
    content: `INTRO:The Toyota Innova Crysta is the most requested premium cab vehicle in Jamshedpur — and for good reason. It combines SUV comfort, generous luggage space, and reliability for both short local trips and long outstation journeys.

## When to Choose Innova Crysta

Choose Innova Crysta when:
- Your group has 5 to 7 passengers
- You are going on a long outstation trip (Kolkata, Puri, Ranchi, Deoghar)
- You have senior citizens or children who need more space and comfort
- You are travelling for a wedding or corporate event
- You have large luggage (multiple suitcases)

Sedan (Dzire/Amaze) is fine when:
- You are 1–4 passengers with minimal luggage
- It is a short local trip within Jamshedpur
- You want the most economical option

## Innova Crysta Specifications

- Seating: Up to 7 passengers comfortably
- Luggage: Large boot + roof carrier option available
- AC: Powerful dual-zone AC
- Features: Captain seats (2nd row), USB charging, spacious legroom

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

We will confirm availability and share the exact fare for your Innova Crysta booking.`,
  },
};

// ─── RELATED POSTS ─────────────────────────────────────────────────────────────
const relatedPosts: Record<string, string[]> = {
  'jamshedpur-to-ranchi-cab-guide': ['jamshedpur-to-kolkata-cab-guide', 'innova-crysta-hire-jamshedpur', 'tatanagar-railway-station-taxi-guide'],
  'jamshedpur-to-puri-tempo-traveller': ['deoghar-pilgrimage-cab-jamshedpur', 'jamshedpur-to-kolkata-cab-guide', 'innova-crysta-hire-jamshedpur'],
  'deoghar-pilgrimage-cab-jamshedpur': ['jamshedpur-to-puri-tempo-traveller', 'jamshedpur-to-ranchi-cab-guide', 'innova-crysta-hire-jamshedpur'],
  'tatanagar-railway-station-taxi-guide': ['jamshedpur-to-ranchi-cab-guide', 'jamshedpur-to-kolkata-cab-guide', 'innova-crysta-hire-jamshedpur'],
  'jamshedpur-to-kolkata-cab-guide': ['jamshedpur-to-ranchi-cab-guide', 'jamshedpur-to-puri-tempo-traveller', 'innova-crysta-hire-jamshedpur'],
  'innova-crysta-hire-jamshedpur': ['jamshedpur-to-ranchi-cab-guide', 'jamshedpur-to-kolkata-cab-guide', 'deoghar-pilgrimage-cab-jamshedpur'],
};

// ─── TYPES ─────────────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

// ─── METADATA ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) return { title: 'Article Not Found' };
  return {
    title: `${post.title} | Shivansh Tour & Travel`,
    description: post.description,
    keywords: post.tags.concat(['Jamshedpur cab', 'taxi Jamshedpur', 'Shivansh Tour Travel']),
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

// ─── CONTENT RENDERER ──────────────────────────────────────────────────────────
function renderContent(content: string): React.ReactNode[] {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let tableHeader: string[] = [];
  let inTable = false;
  let listItems: React.ReactNode[] = [];
  let listType: 'ul' | 'ol' | null = null;

  // Bold + inline formatting
  const formatInline = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    if (parts.length === 1) return text;
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ fontWeight: 700, color: 'var(--color-navy)' }}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const flushTable = () => {
    if (tableHeader.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} style={{ overflowX: 'auto', marginBottom: '32px', borderRadius: '16px', border: '1px solid var(--color-gray-200)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '320px' }}>
            <thead>
              <tr style={{ background: 'var(--gradient-navy)' }}>
                {tableHeader.map((h, i) => (
                  <th key={i} style={{ padding: '14px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.92)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? 'white' : '#f8f9fb', transition: 'background 0.15s' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '12px 20px', borderTop: '1px solid var(--color-gray-100)', color: ci === 0 ? 'var(--color-navy)' : ci === row.length - 1 ? '#d4861a' : 'var(--color-gray-700)', fontWeight: ci === 0 ? 700 : ci === row.length - 1 ? 700 : 400, fontSize: '14px' }}>
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

  const flushList = () => {
    if (listItems.length > 0) {
      const Tag = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <Tag key={`list-${elements.length}`} style={{ marginBottom: '24px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {listItems}
        </Tag>
      );
      listItems = [];
      listType = null;
    }
  };

  lines.forEach((line, i) => {
    // INTRO paragraph special marker
    if (line.startsWith('INTRO:')) {
      if (inTable) flushTable();
      flushList();
      elements.push(
        <p key={i} style={{ fontSize: '17px', color: 'var(--color-gray-700)', lineHeight: 1.8, marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid var(--color-gray-100)', fontStyle: 'normal' }}>
          {line.replace('INTRO:', '')}
        </p>
      );
    }
    // STATS bar
    else if (line.startsWith('STATS:')) {
      if (inTable) flushTable();
      flushList();
      const parts = line.replace('STATS:', '').split('|');
      const stats: { icon: string; value: string }[] = [];
      for (let j = 0; j < parts.length; j += 2) {
        if (parts[j + 1]) stats.push({ icon: parts[j], value: parts[j + 1] });
      }
      elements.push(
        <div key={i} className="blog-stats-bar">
          {stats.map((s, si) => (
            <div key={si} className="blog-stat-pill">
              <span style={{ fontSize: '22px' }}>{s.icon}</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1.2 }}>{s.value}</span>
            </div>
          ))}
        </div>
      );
    }
    // NOTE / info box (replaces * italic *)
    else if (line.startsWith('NOTE:')) {
      if (inTable) flushTable();
      flushList();
      elements.push(
        <div key={i} style={{ background: 'linear-gradient(135deg, #fff8e7, #fef3c7)', border: '1px solid #f5a62340', borderLeft: '4px solid var(--color-gold)', borderRadius: '10px', padding: '14px 18px', marginBottom: '24px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>ℹ️</span>
          <p style={{ fontSize: '13px', color: '#92400e', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
            {line.replace('NOTE:', '')}
          </p>
        </div>
      );
    }
    // H2 headings
    else if (line.startsWith('## ')) {
      if (inTable) flushTable();
      flushList();
      const title = line.replace('## ', '');
      elements.push(
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '40px', marginBottom: '16px' }}>
          <div style={{ width: '4px', height: '28px', background: 'var(--gradient-gold)', borderRadius: '4px', flexShrink: 0 }} />
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-navy)', margin: 0, lineHeight: 1.3 }}>
            {title}
          </h2>
        </div>
      );
    }
    // Table rows
    else if (line.startsWith('| ') && line.includes('|')) {
      flushList();
      const cells = line.split('|').map(c => c.trim()).filter(c => c);
      if (!inTable && !cells.every(c => c.replace(/-/g, '').trim() === '')) {
        tableHeader = cells;
        inTable = true;
      } else if (!cells.every(c => c.replace(/-/g, '').trim() === '')) {
        tableRows.push(cells);
      }
    }
    // Ordered list items
    else if (/^\d+\. /.test(line)) {
      if (inTable) flushTable();
      if (listType !== 'ol') { flushList(); listType = 'ol'; }
      const text = line.replace(/^\d+\. /, '');
      listItems.push(
        <li key={i} style={{ fontSize: '15px', color: 'var(--color-gray-700)', lineHeight: 1.7, paddingLeft: '4px' }}>
          {formatInline(text)}
        </li>
      );
    }
    // Unordered list items
    else if (line.startsWith('- ')) {
      if (inTable) flushTable();
      if (listType !== 'ul') { flushList(); listType = 'ul'; }
      const text = line.replace(/^- /, '');
      listItems.push(
        <li key={i} style={{ fontSize: '15px', color: 'var(--color-gray-700)', lineHeight: 1.7, paddingLeft: '4px', listStyleType: 'none', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 900, flexShrink: 0, marginTop: '2px' }}>›</span>
          <span>{formatInline(text)}</span>
        </li>
      );
    }
    // Empty line — flush pending blocks
    else if (line.trim() === '') {
      if (inTable) flushTable();
      flushList();
    }
    // Regular paragraph
    else {
      if (inTable) flushTable();
      flushList();
      elements.push(
        <p key={i} style={{ fontSize: '15px', color: 'var(--color-gray-700)', lineHeight: 1.8, marginBottom: '16px' }}>
          {formatInline(line)}
        </p>
      );
    }
  });

  if (inTable) flushTable();
  flushList();
  return elements;
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) notFound();

  const related = (relatedPosts[slug] || [])
    .map(s => ({ slug: s, ...blogData[s] }))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      {/* ── JSON-LD: Article + Breadcrumb schemas ─────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `${SITE_CONFIG.url}/blog/${slug}`,
            headline: post.title,
            description: post.description,
            url: `${SITE_CONFIG.url}/blog/${slug}`,
            datePublished: post.publishedDate,
            dateModified: post.publishedDate,
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
                url: `${SITE_CONFIG.url}/logo.jpeg`,
                width: 512,
                height: 512,
              },
            },
            image: {
              '@type': 'ImageObject',
              url: `${SITE_CONFIG.url}/og-image.png`,
              width: 1200,
              height: 630,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_CONFIG.url}/blog/${slug}`,
            },
            keywords: post.tags.concat(['Jamshedpur cab', 'taxi Jamshedpur']).join(', '),
            articleSection: post.category,
            inLanguage: 'en-IN',
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Travel Guides', url: `${SITE_CONFIG.url}/blog` },
          { name: post.title, url: `${SITE_CONFIG.url}/blog/${slug}` },
        ]}
      />
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{ background: 'var(--gradient-navy)', padding: '56px 0 0', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="blog-post-title"
      >
        {/* Decorative blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-60px', right: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '0', left: '-80px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,58,117,0.5) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: '6px', listStyle: 'none', flexWrap: 'wrap' }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</li>
              <li><Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none' }}>Travel Guides</Link></li>
              <li style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</li>
              <li style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</li>
            </ol>
          </nav>

          {/* Category + read time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: post.categoryColor,
              background: `${post.categoryColor}1a`,
              border: `1px solid ${post.categoryColor}40`,
              padding: '4px 14px', borderRadius: '20px'
            }}>
              {post.category}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              {post.readTime}
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              {new Date(post.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          {/* Icon + Title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
            <div style={{ fontSize: '52px', flexShrink: 0, lineHeight: 1 }} aria-hidden="true">{post.icon}</div>
            <h1 id="blog-post-title" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, margin: 0 }}>
              {post.title}
            </h1>
          </div>

          {/* Description */}
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
            {post.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '0' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '3px 12px', borderRadius: '20px' }}>
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom wave */}
          <div style={{ height: '40px', marginTop: '32px', position: 'relative' }}>
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: '-24px', right: '-24px', width: 'calc(100% + 48px)', height: '40px' }} aria-hidden="true">
              <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── CONTENT + SIDEBAR ────────────────────────────────────────── */}
      <section style={{ background: 'white', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="blog-article-grid">

            {/* Main article */}
            <article className="blog-article-body" style={{ paddingTop: '40px', minWidth: 0 }}>
              {renderContent(post.content)}

              {/* Inline CTA after content */}
              <div style={{ background: 'var(--gradient-navy)', borderRadius: '20px', padding: '36px 32px', marginTop: '48px', textAlign: 'center', boxShadow: '0 8px 32px rgba(10,22,40,0.25)' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }} aria-hidden="true">🚕</div>
                <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 800, marginBottom: '8px', lineHeight: 1.3 }}>
                  Ready to Book Your Cab?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.68)', marginBottom: '24px', fontSize: '15px', lineHeight: 1.6 }}>
                  Contact Shivansh Tour &amp; Travel, Jamshedpur — 24x7 available. Call or WhatsApp for instant confirmation.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={getWhatsAppLink(`Hello Shivansh, I read your article on "${post.title}" and want to book a cab. Please share options and fare.`)}
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

              {/* Back */}
              <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
                <Link href="/blog" className="btn btn-outline">
                  ← View All Travel Guides
                </Link>
              </div>
            </article>

            {/* Sticky sidebar */}
            <aside className="blog-sidebar" style={{ paddingTop: '40px' }}>
              {/* Quick book card */}
              <div style={{ background: 'var(--gradient-navy)', borderRadius: '20px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 24px rgba(10,22,40,0.2)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Quick Book
                </div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
                  Get instant cab availability and fare on WhatsApp — no waiting.
                </p>
                <a
                  href={getWhatsAppLink(`Hello Shivansh, I need a cab. I was reading: ${post.title}`)}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  id="sidebar-whatsapp-cta"
                >
                  💬 WhatsApp Now
                </a>
                <a
                  href={getCallLink()}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px', color: 'rgba(255,255,255,0.65)', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
                  id="sidebar-call-cta"
                >
                  📞 {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div style={{ background: 'var(--color-gray-50)', borderRadius: '20px', padding: '20px', border: '1px solid var(--color-gray-100)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '14px' }}>
                    Related Guides
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {related.map(r => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '10px', borderRadius: '12px', background: 'white', border: '1px solid var(--color-gray-100)', transition: 'box-shadow 0.2s' }}>
                          <span style={{ fontSize: '22px', flexShrink: 0 }}>{r.icon}</span>
                          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.4 }}>{r.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
