// src/data/services.ts
import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'local-taxi',
    name: 'Local Taxi',
    slug: 'local-taxi',
    shortDescription: 'Hourly cab rental within Jamshedpur city and nearby areas.',
    description:
      'Our local taxi service is designed for travel within Jamshedpur city and nearby areas. Whether you need to visit multiple locations in a day, get to a meeting, or run errands — our hourly cab packages give you a vehicle and driver at your disposal for a set duration. We cover all major areas including Bistupur, Sakchi, Mango, Kadma, Sonari, Telco, Golmuri, Jugsalai, and Adityapur.',
    icon: '🏙️',
    features: [
      'Flexible hourly packages (4 hrs / 40 km and 8 hrs / 80 km)',
      'Coverage across all Jamshedpur localities',
      'Sedan, MUV, and SUV options',
      'Station and airport drop included in local service area',
      'Extra km and extra hour rates clearly defined',
    ],
    seoTitle: 'Local Taxi Service in Jamshedpur | Hourly Cab Rental | Shivansh Tour',
    seoDescription:
      'Book local taxi service in Jamshedpur with Shivansh Tour & Travel. Hourly cab packages for city travel — Bistupur, Sakchi, Mango, Kadma, Sonari and all areas. Call +91 7061767617.',
    primaryKeyword: 'local taxi service Jamshedpur',
    faqs: [
      {
        question: 'What is the local taxi package in Jamshedpur?',
        answer:
          'We offer 4 Hours / 40 KM and 8 Hours / 80 KM local packages. For time or distance beyond the package, extra charges apply at a per-km / per-hour rate.',
      },
      {
        question: 'What areas do you cover for local taxi in Jamshedpur?',
        answer:
          'We cover all major Jamshedpur areas including Bistupur, Sakchi, Mango, Kadma, Sonari, Telco, Golmuri, Jugsalai, Adityapur, Gamharia, and more.',
      },
    ],
    relatedServices: ['outstation-taxi', 'airport-taxi', 'corporate-travel'],
  },
  {
    id: 'outstation-taxi',
    name: 'Outstation Taxi',
    slug: 'outstation-taxi',
    shortDescription: 'Outstation cab service from Jamshedpur to cities across Jharkhand, West Bengal, Odisha, and Bihar.',
    description:
      'Our outstation taxi service connects Jamshedpur to major cities and destinations across Jharkhand, West Bengal, Odisha, and Bihar. Whether you need a one-way cab or a round-trip booking, Shivansh Tour & Travel provides comfortable, reliable vehicles with experienced drivers for all outstation routes.',
    icon: '🛣️',
    features: [
      'One-way and round-trip options',
      'Sedan, MUV, SUV, Premium SUV, and Tempo Traveller',
      'Service to Jharkhand, West Bengal, Odisha, Bihar',
      'Transparent fare — tolls and driver allowance separately stated',
      'Door-to-door pickup',
    ],
    seoTitle: 'Outstation Taxi from Jamshedpur | One Way & Round Trip Cab | Shivansh',
    seoDescription:
      'Book outstation taxi from Jamshedpur with Shivansh Tour & Travel. Reliable one-way and round-trip cab to Ranchi, Kolkata, Bhubaneswar, Patna, Puri & more. Call +91 7061767617.',
    primaryKeyword: 'outstation taxi from Jamshedpur',
    faqs: [
      {
        question: 'Which cities can I travel to from Jamshedpur by outstation cab?',
        answer:
          'We cover major destinations in Jharkhand (Ranchi, Dhanbad, Bokaro, Deoghar), West Bengal (Kolkata, Kharagpur, Purulia), Odisha (Bhubaneswar, Puri, Rourkela), and Bihar (Patna, Gaya, Bodh Gaya). Contact us for other destinations.',
      },
      {
        question: 'Are tolls included in the outstation fare?',
        answer:
          'No. Toll, state permit, and parking charges are payable extra as per actuals. Driver allowance for overnight outstation trips is also applicable. We clearly communicate these when sharing the fare.',
      },
      {
        question: 'What vehicles are available for outstation travel?',
        answer:
          'Sedan (Swift Dzire type), MUV (Ertiga type), SUV (Innova type), Premium SUV (Innova Crysta type), and Tempo Traveller for groups.',
      },
    ],
    relatedServices: ['one-way-taxi', 'round-trip-taxi', 'airport-taxi', 'tempo-traveller'],
  },
  {
    id: 'one-way-taxi',
    name: 'One-Way Taxi',
    slug: 'one-way-taxi',
    shortDescription: 'One-way cab from Jamshedpur — pay only for the journey you take.',
    description:
      'A one-way cab is ideal when you only need transportation in one direction. Whether travelling from Jamshedpur to Ranchi for a flight, heading to Kolkata for work, or visiting family in Patna — our one-way cab lets you travel comfortably without paying for a return journey. One-way fare is calculated based on the actual one-way distance and vehicle type.',
    icon: '➡️',
    features: [
      'Pay only for one-way journey distance',
      'Available for all outstation routes',
      'All vehicle types available',
      'Door-to-door pickup',
      'Estimated fare shared upfront on request',
    ],
    seoTitle: 'One Way Taxi from Jamshedpur | Outstation One Way Cab | Shivansh',
    seoDescription:
      'Book one-way taxi from Jamshedpur to any destination. Pay only for the distance you travel. All vehicle types. Call Shivansh Tour & Travel: +91 7061767617.',
    primaryKeyword: 'one way taxi Jamshedpur',
    faqs: [
      {
        question: 'How is a one-way cab fare calculated?',
        answer:
          'One-way fare is based on the one-way distance and the vehicle type\'s per-km rate. Minimum fare and tolls apply. Driver allowance is applicable for overnight trips.',
      },
      {
        question: 'Is a one-way cab cheaper than a round trip?',
        answer:
          'One-way fare is lower than round-trip as you pay for the one-way distance. Round trip may be better value if you need a return the same or next day.',
      },
    ],
    relatedServices: ['round-trip-taxi', 'outstation-taxi', 'airport-taxi'],
  },
  {
    id: 'round-trip-taxi',
    name: 'Round Trip Taxi',
    slug: 'round-trip-taxi',
    shortDescription: 'Round-trip cab from Jamshedpur — one vehicle, same driver, return included.',
    description:
      'A round-trip cab is ideal when you plan to return after your visit. With a round-trip booking, the same vehicle and driver stays with you throughout your trip. This is especially convenient for day trips, pilgrimages, weddings, and short outstation visits where having your vehicle waiting saves time and hassle.',
    icon: '🔄',
    features: [
      'Same vehicle and driver for your entire round trip',
      'Driver waits at destination',
      'Ideal for day pilgrimages and short outstation',
      'Driver allowance included in round-trip fare for multi-day trips',
      'All vehicle types available',
    ],
    seoTitle: 'Round Trip Taxi from Jamshedpur | Outstation Round Trip Cab | Shivansh',
    seoDescription:
      'Book round-trip taxi from Jamshedpur. Same vehicle and driver. Day trips and multi-day outstation. All vehicles. Call +91 7061767617.',
    primaryKeyword: 'round trip taxi Jamshedpur',
    faqs: [
      {
        question: 'What is the advantage of a round-trip cab booking?',
        answer:
          'With a round-trip booking, the same vehicle and driver waits at your destination and returns with you. No need to arrange separate transport on the way back.',
      },
      {
        question: 'Is a round-trip cheaper than booking two separate one-ways?',
        answer:
          'It depends on the route and duration. For shorter day trips, round-trip is often more convenient. For long gaps between outward and return journeys, one-way + separate one-way may work better. Contact us to compare.',
      },
    ],
    relatedServices: ['one-way-taxi', 'outstation-taxi', 'tempo-traveller'],
  },
  {
    id: 'airport-taxi',
    name: 'Airport Transfer',
    slug: 'airport-taxi',
    shortDescription: 'Reliable airport pickup and drop from Jamshedpur to Ranchi, Kolkata, and other airports.',
    description:
      'Shivansh Tour & Travel provides reliable airport transfer service for travellers connecting to and from major airports from Jamshedpur. The nearest airports are Birsa Munda Airport (Ranchi, ~135 km) and Netaji Subhas Chandra Bose International Airport (Kolkata, ~270 km). We provide punctual pickup and drop to ensure you reach your flight on time.',
    icon: '✈️',
    features: [
      'Ranchi Airport (IXR) transfers — most popular from Jamshedpur',
      'Kolkata Airport (CCU) transfers',
      'Punctual, pre-booked service',
      'Flight timing coordination (share your flight number when booking)',
      'Pickup from Tatanagar Junction or any Jamshedpur location',
      'Return airport pickup also available',
    ],
    seoTitle: 'Jamshedpur Airport Taxi | Ranchi & Kolkata Airport Transfer | Shivansh',
    seoDescription:
      'Book airport taxi from Jamshedpur to Ranchi Airport or Kolkata Airport with Shivansh Tour & Travel. Reliable, punctual airport transfer. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur airport taxi',
    faqs: [
      {
        question: 'Which airport is closest to Jamshedpur?',
        answer:
          'Birsa Munda Airport (IXR) in Ranchi is the closest commercial airport, approximately 130–140 km from Jamshedpur.',
      },
      {
        question: 'How long does it take from Jamshedpur to Ranchi Airport?',
        answer:
          'Approximately 2.5–3.5 hours. We recommend starting at least 3.5–4 hours before your scheduled departure.',
      },
      {
        question: 'Do you offer pickup from Ranchi Airport to Jamshedpur?',
        answer:
          'Yes. Share your flight arrival details and we will arrange a cab to pick you up from Ranchi Airport.',
      },
    ],
    relatedServices: ['outstation-taxi', 'one-way-taxi', 'corporate-travel'],
  },
  {
    id: 'corporate-travel',
    name: 'Corporate Travel',
    slug: 'corporate-travel',
    shortDescription: 'Professional corporate cab service for business travel from Jamshedpur.',
    description:
      'Shivansh Tour & Travel provides corporate cab service for professionals and businesses in Jamshedpur and the region. Whether you need airport transfers for executives, inter-city corporate travel, or reliable daily transportation for business guests — we offer clean, well-maintained vehicles with professional drivers experienced in corporate protocol.',
    icon: '👔',
    features: [
      'Sedan, Premium SUV, and SUV options for corporate clients',
      'Reliable, punctual service',
      'Professional, neatly-dressed drivers',
      'Long-distance executive transfers',
      'Airport and railway station transfers for business guests',
      'Flexible booking for last-minute corporate requirements',
    ],
    seoTitle: 'Corporate Cab Service Jamshedpur | Business Travel | Shivansh Tour',
    seoDescription:
      'Professional corporate taxi and cab service in Jamshedpur for business travel, executive transfers, airport pickups. Call Shivansh: +91 7061767617.',
    primaryKeyword: 'corporate cab service Jamshedpur',
    faqs: [
      {
        question: 'Do you provide regular corporate transportation contracts?',
        answer:
          'We can discuss regular arrangements for businesses. Please contact us to discuss your specific requirements.',
      },
      {
        question: 'Can I book a premium SUV for corporate clients?',
        answer:
          'Yes. Premium SUV options (like Innova Crysta) are available for executive travel. Subject to availability — please book in advance.',
      },
    ],
    relatedServices: ['airport-taxi', 'outstation-taxi', 'local-taxi'],
  },
  {
    id: 'wedding-car-rental',
    name: 'Wedding Car Rental',
    slug: 'wedding-car-rental',
    shortDescription: 'Wedding transportation service in Jamshedpur — bridal cars, guest convoys, and family travel.',
    description:
      'Planning a wedding? Shivansh Tour & Travel provides reliable wedding transportation services in Jamshedpur and surrounding areas. From the wedding day baraat to guest transportation and family travel between venues, we can arrange clean, well-maintained vehicles appropriate for your special occasion.',
    icon: '💒',
    features: [
      'Sedan, MUV, SUV, and Premium SUV for weddings',
      'Multiple vehicle booking for guest convoys',
      'Venue-to-venue transfers',
      'Family and baraat vehicle arrangements',
      'Pre-planned schedule coordination',
      'Jamshedpur city and outstation wedding travel',
    ],
    seoTitle: 'Wedding Car Rental Jamshedpur | Wedding Cab Service | Shivansh Tour',
    seoDescription:
      'Book wedding transportation in Jamshedpur with Shivansh Tour & Travel. Bridal cars, guest convoys, SUVs and sedans for weddings. Call +91 7061767617.',
    primaryKeyword: 'wedding car rental Jamshedpur',
    faqs: [
      {
        question: 'Can I book multiple vehicles for my wedding?',
        answer:
          'Yes. We can arrange multiple vehicles for guest transportation and family travel during weddings. Contact us well in advance to plan accordingly.',
      },
      {
        question: 'Do you decorate the wedding vehicle?',
        answer:
          'Vehicle decoration is not a standard service, but we can arrange clean, presentable vehicles for wedding use. Please discuss your requirements when booking.',
      },
    ],
    relatedServices: ['local-taxi', 'corporate-travel', 'tempo-traveller'],
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    slug: 'tempo-traveller',
    shortDescription: '12–17 seater Tempo Traveller for groups — pilgrimage tours, outings, and outstation travel.',
    description:
      'Our Tempo Traveller service is designed for groups of 10–17 people. Ideal for pilgrimage tours (Deoghar, Parasnath, Puri), school and college trips, corporate team outings, family tours, and any situation where a large group needs to travel together. Our Tempo Travellers are equipped with AC and comfortable seating.',
    icon: '🚌',
    features: [
      '12–17 passenger capacity',
      'AC equipped',
      'Suitable for long outstation journeys',
      'Ideal for pilgrimage groups',
      'Ample luggage space',
      'Experienced group-travel drivers',
    ],
    seoTitle: 'Tempo Traveller Rental Jamshedpur | Group Cab | Shivansh Tour & Travel',
    seoDescription:
      'Book Tempo Traveller from Jamshedpur for group travel, pilgrimage tours, outings. 12–17 seater AC vehicle. Call Shivansh: +91 7061767617.',
    primaryKeyword: 'tempo traveller Jamshedpur',
    faqs: [
      {
        question: 'How many people can travel in a Tempo Traveller?',
        answer: 'Our Tempo Travellers typically seat 12–17 passengers comfortably.',
      },
      {
        question: 'Is the Tempo Traveller air conditioned?',
        answer: 'Yes, our Tempo Travellers are AC equipped.',
      },
      {
        question: 'What are popular group tour destinations from Jamshedpur?',
        answer:
          'Popular group destinations include Deoghar (Baidyanath Dham), Parasnath (Shikharji), Puri (Jagannath), Ranchi falls, Dalma, and Netarhat.',
      },
    ],
    relatedServices: ['outstation-taxi', 'round-trip-taxi', 'tour-packages'],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
