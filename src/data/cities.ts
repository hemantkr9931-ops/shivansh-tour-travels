// src/data/cities.ts
import type { City } from './types';

export const cities: City[] = [
  // ==================== JHARKHAND ====================
  {
    id: 'jamshedpur',
    name: 'Jamshedpur',
    slug: 'jamshedpur',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'East Singhbhum',
    description:
      'Jamshedpur, the Steel City of India, is the primary base of Shivansh Tour & Travels. We offer local, outstation, airport, and corporate cab services across Jamshedpur and all its localities including Bistupur, Sakchi, Mango, Kadma, Sonari, Telco, and Adityapur.',
    intro:
      'Jamshedpur — known as Tata Nagar or the Steel City — is the largest city in Jharkhand and a major industrial hub in eastern India. Located in East Singhbhum district along the Subarnarekha and Kharkai rivers, Jamshedpur is well-connected by road and rail. As the home city of Shivansh Tour & Travels, we have deep local knowledge of all Jamshedpur localities, including Bistupur, Sakchi, Mango, Kadma, Sonari, Telco, Golmuri, Jugsalai, and Adityapur.',
    seoTitle:
      'Jamshedpur Taxi Service | Local, Airport & Outstation Cab | Shivansh Tour & Travels',
    seoDescription:
      'Book reliable cab and taxi service in Jamshedpur for local travel, airport transfers, outstation trips, weddings, and corporate needs. Sedan, SUV, MUV & Tempo Traveller available. Call +91 7061767617.',
    primaryKeyword: 'taxi service in Jamshedpur',
    secondaryKeywords: [
      'cab service in Jamshedpur',
      'Jamshedpur taxi booking',
      'Jamshedpur cab booking',
      'local taxi Jamshedpur',
      'outstation cab Jamshedpur',
      'Jamshedpur airport taxi',
    ],
    pickupAreas: [
      'Bistupur',
      'Sakchi',
      'Mango',
      'Kadma',
      'Sonari',
      'Telco / Burmamines',
      'Golmuri',
      'Jugsalai',
      'Adityapur',
      'Gamharia',
      'Baridih',
      'Boram',
      'Dimna',
      'Parsudih',
      'Tatanagar Railway Station',
    ],
    railwayStation: 'Tatanagar Junction (TATA) \u2014 Jamshedpur\'s main railway station',
    airport:
      'Nearest airport: Birsa Munda Airport, Ranchi (~130 km). Shivansh provides Jamshedpur to Ranchi Airport transfer service.',
    nearbyAttractions: [
      'Jubilee Park',
      'Dalma Wildlife Sanctuary',
      'Dimna Lake',
      'Hudco Lake',
      'Tata Steel Zoological Park',
      'Dokan Bazar',
      'Bhuiyadih',
    ],
    relatedCityIds: ['ranchi', 'dhanbad', 'bokaro', 'chaibasa', 'khunti', 'seraikela'],
    popularRouteIds: [
      'jamshedpur-to-ranchi',
      'jamshedpur-to-kolkata',
      'jamshedpur-to-dhanbad',
      'jamshedpur-to-bokaro',
      'jamshedpur-to-deoghar',
      'jamshedpur-to-patna',
      'jamshedpur-to-bhubaneswar',
      'jamshedpur-to-puri',
      'jamshedpur-to-kharagpur',
    ],
    services: [
      'local-taxi',
      'outstation-taxi',
      'one-way-taxi',
      'round-trip-taxi',
      'airport-taxi',
      'corporate-travel',
      'wedding-car-rental',
      'tempo-traveller',
    ],
    travelTips: [
      'Tatanagar Junction is the main railway hub — Shivansh provides station pickup and drop.',
      'For Ranchi Airport transfers, allow at least 3–3.5 hours of travel time from Jamshedpur.',
      'NH-33 is the primary highway connecting Jamshedpur to Ranchi and Dhanbad.',
      'Early morning and evening bookings fill quickly during festive seasons — book ahead.',
    ],
    faqs: [
      {
        question: 'Which areas in Jamshedpur does Shivansh Tour & Travels cover?',
        answer:
          'We cover all major areas including Bistupur, Sakchi, Mango, Kadma, Sonari, Telco, Golmuri, Jugsalai, Adityapur, Gamharia, and more. Pickup from Tatanagar Railway Station is also available.',
      },
      {
        question: 'Which is the nearest airport to Jamshedpur?',
        answer:
          'The nearest commercial airport is Birsa Munda Airport in Ranchi, approximately 130 km from central Jamshedpur. Shivansh provides reliable Jamshedpur to Ranchi Airport cab service.',
      },
      {
        question: 'Can I book a taxi for an outstation trip from Jamshedpur?',
        answer:
          'Yes. We offer one-way and round-trip outstation cab service from Jamshedpur to destinations across Jharkhand, West Bengal, Odisha, and Bihar.',
      },
      {
        question: 'What vehicles are available for taxi service in Jamshedpur?',
        answer:
          'We offer Sedan (Swift Dzire type), MUV (Ertiga type), SUV (Innova type), Premium SUV (Innova Crysta type), and Tempo Traveller for groups.',
      },
      {
        question: 'How do I book a cab in Jamshedpur with Shivansh?',
        answer:
          'You can call us at +91 7061767617, send a WhatsApp message, or fill the booking enquiry form on our website. We will confirm your booking and share fare details promptly.',
      },
    ],
    mapQuery: 'Jamshedpur,+Jharkhand,+India',
    index: true,
    priority: 0.9,
  },
  {
    id: 'ranchi',
    name: 'Ranchi',
    slug: 'ranchi',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'Capital Region',
    description:
      'Ranchi is the capital of Jharkhand and a major travel hub. Shivansh Tour & Travels provides cab service from Jamshedpur to Ranchi and taxi service within the Ranchi region, including Birsa Munda Airport transfers.',
    intro:
      'Ranchi, the capital of Jharkhand, sits on the Chota Nagpur Plateau at an elevation that keeps temperatures relatively mild. It is home to Birsa Munda Airport — the state\'s primary airport — and is a key hub for travel across Jharkhand. Shivansh Tour & Travels operates cab service on the busy Jamshedpur–Ranchi corridor and provides Ranchi Airport pickup and drop for travellers connecting to or from Jamshedpur.',
    seoTitle:
      'Jamshedpur to Ranchi Cab | Ranchi Taxi Service | Shivansh Tour & Travels',
    seoDescription:
      'Book Jamshedpur to Ranchi cab service with Shivansh Tour & Travels. One-way and round-trip taxi, Ranchi Airport transfers, and local Ranchi cab. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Ranchi cab',
    secondaryKeywords: [
      'Ranchi taxi service',
      'Jamshedpur to Ranchi taxi',
      'Ranchi airport cab',
      'Ranchi to Jamshedpur taxi',
      'cab service Ranchi',
    ],
    pickupAreas: [
      'Birsa Munda Airport',
      'Ranchi Railway Station',
      'Lalpur',
      'Doranda',
      'Hinoo',
      'Bariatu',
      'Harmu',
      'Morabadi',
      'Kanke',
    ],
    railwayStation: 'Ranchi Railway Station',
    airport: 'Birsa Munda Airport (IXR) — Jharkhand\'s main airport',
    nearbyAttractions: [
      'Hundru Falls',
      'Dassam Falls',
      'Jonha Falls',
      'Rock Garden',
      'Pahari Mandir',
      'Nakshatra Van',
      'Birsa Munda Memorial',
    ],
    relatedCityIds: ['jamshedpur', 'dhanbad', 'bokaro', 'hazaribagh', 'ramgarh'],
    popularRouteIds: [
      'jamshedpur-to-ranchi',
      'ranchi-to-jamshedpur',
    ],
    services: [
      'local-taxi',
      'outstation-taxi',
      'one-way-taxi',
      'round-trip-taxi',
      'airport-taxi',
      'corporate-travel',
    ],
    travelTips: [
      'Ranchi Airport (IXR) is located about 7–9 km from the city centre. Plan buffer time for airport check-in.',
      'The Jamshedpur–Ranchi route via NH-33 takes approximately 2.5–3.5 hours depending on traffic.',
      'Ranchi is significantly cooler than Jamshedpur in summer due to its plateau elevation.',
    ],
    faqs: [
      {
        question: 'How far is Jamshedpur from Ranchi?',
        answer:
          'Jamshedpur is approximately 130–140 km from Ranchi by road via NH-33. The drive typically takes 2.5–3.5 hours depending on traffic and road conditions.',
      },
      {
        question: 'Does Shivansh provide airport pickup from Ranchi airport?',
        answer:
          'Yes. We provide Ranchi Airport (Birsa Munda Airport) pickup and drop to Jamshedpur and other destinations in the region.',
      },
      {
        question: 'Is there a one-way cab option from Jamshedpur to Ranchi?',
        answer:
          'Yes, we offer one-way and round-trip cab options for the Jamshedpur–Ranchi route. Please contact us to get an estimated fare.',
      },
    ],
    mapQuery: 'Ranchi,+Jharkhand,+India',
    index: true,
    priority: 0.8,
  },
  {
    id: 'dhanbad',
    name: 'Dhanbad',
    slug: 'dhanbad',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'Coal Belt',
    description:
      'Dhanbad, the coal capital of India, is well connected to Jamshedpur. Shivansh Tour & Travels provides reliable taxi and cab service between Jamshedpur and Dhanbad.',
    intro:
      'Dhanbad — often called the Coal Capital of India — is a major industrial city in Jharkhand, home to the Indian School of Mines and surrounded by one of India\'s largest coal mining regions. Located approximately 100 km from Jamshedpur, it is a popular destination for business travellers. Shivansh Tour & Travels provides comfortable, reliable cab service on this busy corridor.',
    seoTitle:
      'Jamshedpur to Dhanbad Taxi | Dhanbad Cab Service | Shivansh Tour & Travels',
    seoDescription:
      'Book cab from Jamshedpur to Dhanbad with Shivansh Tour & Travels. One-way and round-trip taxi available. Reliable, comfortable, affordable. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Dhanbad taxi',
    secondaryKeywords: [
      'Dhanbad cab service',
      'Dhanbad taxi booking',
      'Jamshedpur Dhanbad cab',
    ],
    pickupAreas: [
      'Dhanbad Railway Station',
      'Jharia',
      'Sindri',
      'Govindpur',
      'Katras',
      'Baghmore',
    ],
    railwayStation: 'Dhanbad Junction — a major railway hub in eastern India',
    nearbyAttractions: ['Topchanchi Lake', 'IISM Campus', 'Maithon Dam'],
    relatedCityIds: ['jamshedpur', 'bokaro', 'ranchi', 'giridih'],
    popularRouteIds: ['jamshedpur-to-dhanbad', 'dhanbad-to-jamshedpur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'corporate-travel'],
    travelTips: [
      'Dhanbad Junction is one of the busiest railway stations in India — allow time for congestion near the station.',
      'The route from Jamshedpur to Dhanbad passes through Adityapur and Gamharia.',
    ],
    faqs: [
      {
        question: 'How far is Dhanbad from Jamshedpur?',
        answer:
          'Dhanbad is approximately 95–110 km from Jamshedpur by road. The drive typically takes 2–3 hours.',
      },
      {
        question: 'Can I book a one-way cab from Jamshedpur to Dhanbad?',
        answer:
          'Yes. We offer one-way cab service for this route. Contact us for an estimated fare.',
      },
    ],
    mapQuery: 'Dhanbad,+Jharkhand,+India',
    index: true,
    priority: 0.7,
  },
  {
    id: 'bokaro',
    name: 'Bokaro',
    slug: 'bokaro',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'Steel Belt',
    description:
      'Bokaro Steel City is a planned industrial city in Jharkhand. Shivansh provides cab service from Jamshedpur to Bokaro and return.',
    intro:
      'Bokaro Steel City — a planned industrial township built around the Bokaro Steel Plant — lies approximately 170 km from Jamshedpur. The city is known for its orderly layout, prominent steel industry, and proximity to Dhanbad and Ranchi. Whether you\'re travelling for work or visiting family, Shivansh Tour & Travels provides a comfortable cab journey on this route.',
    seoTitle:
      'Jamshedpur to Bokaro Cab | Bokaro Taxi Service | Shivansh Tour & Travels',
    seoDescription:
      'Book a cab from Jamshedpur to Bokaro Steel City with Shivansh. One-way and round-trip taxi available. Comfortable sedans, SUVs, and MUVs. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Bokaro cab',
    secondaryKeywords: ['Bokaro taxi service', 'Bokaro cab booking', 'Bokaro Steel City taxi'],
    pickupAreas: ['Sector 4', 'City Centre', 'Chas', 'Bokaro Thermal', 'Bermo'],
    railwayStation: 'Bokaro Steel City Railway Station',
    nearbyAttractions: ['Bokaro Steel Plant', 'Jawaharlal Nehru Biological Park', 'City Park'],
    relatedCityIds: ['jamshedpur', 'dhanbad', 'ranchi', 'ramgarh'],
    popularRouteIds: ['jamshedpur-to-bokaro', 'bokaro-to-jamshedpur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'corporate-travel'],
    travelTips: [
      'The Jamshedpur–Bokaro route passes through Adityapur and Gamharia before joining NH-32.',
      'Consider breaking at Ramgarh or Dhanbad if planning a longer journey beyond Bokaro.',
    ],
    faqs: [
      {
        question: 'How far is Bokaro from Jamshedpur?',
        answer:
          'Bokaro is approximately 155–175 km from Jamshedpur by road. The drive typically takes 3–4 hours.',
      },
    ],
    mapQuery: 'Bokaro+Steel+City,+Jharkhand,+India',
    index: true,
    priority: 0.7,
  },
  {
    id: 'deoghar',
    name: 'Deoghar',
    slug: 'deoghar',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'Santhal Parganas',
    description:
      'Deoghar, home to Baidyanath Dham — one of the 12 Jyotirlingas — is a major pilgrimage destination. Shivansh provides pilgrimage cab service from Jamshedpur to Deoghar.',
    intro:
      'Deoghar is one of the most revered pilgrimage towns in eastern India, home to Baidyanath Dham — one of the 12 Jyotirlingas of Lord Shiva. Every year, millions of devotees visit during the Shravan month and Shivratri. Shivansh Tour & Travels provides respectful, comfortable pilgrimage cab service from Jamshedpur and other cities to Deoghar.',
    seoTitle:
      'Jamshedpur to Deoghar Cab | Deoghar Taxi | Baidyanath Dham | Shivansh Tour',
    seoDescription:
      'Book cab from Jamshedpur to Deoghar for Baidyanath Dham pilgrimage. One-way and round-trip taxi available. Comfortable and reliable service. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Deoghar taxi',
    secondaryKeywords: ['Deoghar cab service', 'Deoghar pilgrimage taxi', 'Baidyanath Dham taxi'],
    pickupAreas: ['Deoghar Town', 'Baidyanath Dham Temple', 'Deoghar Bus Stand', 'Jasidih Junction'],
    railwayStation: 'Jasidih Junction — nearest railway station to Baidyanath Dham (3 km away)',
    nearbyAttractions: [
      'Baidyanath Dham (Jyotirlinga)',
      'Naulakha Temple',
      'Tapovan',
      'Trikut Parvat',
      'Mayapur',
    ],
    relatedCityIds: ['jamshedpur', 'ranchi', 'dhanbad', 'dumka'],
    popularRouteIds: ['jamshedpur-to-deoghar', 'deoghar-to-jamshedpur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'tempo-traveller'],
    travelTips: [
      'Book well in advance during Shravan month — demand is extremely high.',
      'Jasidih Junction is the railway station closest to Baidyanath Dham.',
      'The route from Jamshedpur passes through Dhanbad and Giridih.',
      'Allow a full day for a round trip from Jamshedpur to Deoghar.',
    ],
    faqs: [
      {
        question: 'How far is Deoghar from Jamshedpur?',
        answer:
          'Deoghar is approximately 210–230 km from Jamshedpur by road. The drive typically takes 4–5 hours.',
      },
      {
        question: 'Do you provide group cab service for Deoghar pilgrimage?',
        answer:
          'Yes. We offer Tempo Traveller service for groups visiting Baidyanath Dham. Ideal for family or group pilgrimages.',
      },
    ],
    mapQuery: 'Deoghar,+Jharkhand,+India',
    index: true,
    priority: 0.75,
  },
  {
    id: 'hazaribagh',
    name: 'Hazaribagh',
    slug: 'hazaribagh',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'North Chota Nagpur',
    description:
      'Hazaribagh is a scenic hill town in Jharkhand, popular for its lake and wildlife sanctuary. Shivansh provides cab service from Jamshedpur to Hazaribagh.',
    intro:
      'Hazaribagh — meaning "thousand gardens" — is a pleasant hill town in Jharkhand known for its lake, wildlife sanctuary, and relatively cool climate. It is a popular weekend getaway from Jamshedpur and Ranchi. Shivansh Tour & Travels provides comfortable outstation cab service to Hazaribagh.',
    seoTitle: 'Jamshedpur to Hazaribagh Taxi | Hazaribagh Cab Service | Shivansh',
    seoDescription:
      'Book cab from Jamshedpur to Hazaribagh with Shivansh Tour & Travels. Outstation one-way and round-trip taxi. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Hazaribagh cab',
    secondaryKeywords: ['Hazaribagh taxi', 'Hazaribagh cab booking'],
    pickupAreas: ['Hazaribagh Town', 'Hazaribagh Lake', 'Barkagaon'],
    railwayStation: 'Hazaribagh Road Railway Station (20 km from town)',
    nearbyAttractions: ['Hazaribagh Lake', 'Hazaribagh Wildlife Sanctuary', 'Rajrappa Temple'],
    relatedCityIds: ['jamshedpur', 'ranchi', 'ramgarh', 'bokaro'],
    popularRouteIds: ['jamshedpur-to-hazaribagh'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: [
      'Hazaribagh is approximately 200 km from Jamshedpur — allow 4–5 hours for travel.',
      'Best visited between October and March for pleasant weather.',
    ],
    faqs: [
      {
        question: 'How far is Hazaribagh from Jamshedpur?',
        answer: 'Approximately 195–215 km by road, typically 4–5 hours of drive time.',
      },
    ],
    mapQuery: 'Hazaribagh,+Jharkhand,+India',
    index: true,
    priority: 0.6,
  },
  {
    id: 'chaibasa',
    name: 'Chaibasa',
    slug: 'chaibasa',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'West Singhbhum',
    description:
      'Chaibasa is the district headquarters of West Singhbhum, close to Jamshedpur. Shivansh provides reliable local and outstation cab service to Chaibasa.',
    intro:
      'Chaibasa, the administrative headquarters of West Singhbhum district, lies just 60–70 km from Jamshedpur. It is a gateway to the Saranda forest — one of the largest Sal forests in Asia. Shivansh Tour & Travels provides frequent and convenient cab service between Jamshedpur and Chaibasa.',
    seoTitle: 'Jamshedpur to Chaibasa Taxi | Chaibasa Cab Service | Shivansh',
    seoDescription:
      'Book reliable cab from Jamshedpur to Chaibasa. Short outstation and local taxi available. Call Shivansh Tour & Travels at +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Chaibasa cab',
    secondaryKeywords: ['Chaibasa taxi', 'West Singhbhum taxi'],
    pickupAreas: ['Chaibasa Town', 'Chaibasa Bus Stand', 'Circuit House Area'],
    railwayStation: 'Chaibasa Railway Station',
    nearbyAttractions: ['Saranda Forest', 'Kiriburu', 'Meghahatuburu'],
    relatedCityIds: ['jamshedpur', 'chakradharpur', 'seraikela'],
    popularRouteIds: ['jamshedpur-to-chaibasa'],
    services: ['local-taxi', 'outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: [
      'Chaibasa is approximately 60–70 km from Jamshedpur — about 1.5 hours by road.',
      'The Saranda forest area has poor connectivity — plan accordingly.',
    ],
    faqs: [
      {
        question: 'How far is Chaibasa from Jamshedpur?',
        answer: 'Approximately 60–70 km, typically 1.5 hours by road.',
      },
    ],
    mapQuery: 'Chaibasa,+Jharkhand,+India',
    index: true,
    priority: 0.6,
  },
  // ==================== WEST BENGAL ====================
  {
    id: 'kolkata',
    name: 'Kolkata',
    slug: 'kolkata',
    state: 'west-bengal',
    stateName: 'West Bengal',
    description:
      'Kolkata is the nearest major metro city to Jamshedpur. Shivansh Tour & Travels provides outstation cab service from Jamshedpur to Kolkata, including airport transfers to Netaji Subhas Chandra Bose International Airport.',
    intro:
      'Kolkata — the cultural capital of India — is approximately 260–280 km from Jamshedpur, making it one of the most popular outstation routes. Travellers frequently book cabs from Jamshedpur to Kolkata for airport connections, medical trips, business visits, and family travel. Shivansh Tour & Travels provides comfortable and reliable cab service on this route, passing through Kharagpur.',
    seoTitle:
      'Jamshedpur to Kolkata Cab | Kolkata Airport Transfer | Shivansh Tour & Travels',
    seoDescription:
      'Book cab from Jamshedpur to Kolkata with Shivansh Tour & Travels. One-way and round-trip taxi, Kolkata airport transfer available. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Kolkata cab',
    secondaryKeywords: [
      'Jamshedpur to Kolkata taxi',
      'Kolkata airport taxi from Jamshedpur',
      'Jamshedpur Kolkata outstation cab',
    ],
    pickupAreas: [
      'Howrah Station area',
      'Sealdah area',
      'Park Street',
      'Esplanade',
      'Salt Lake City',
      'New Town / Rajarhat',
      'Kolkata Airport (NSCBI)',
      'Behala',
      'Tollygunge',
    ],
    railwayStation: 'Howrah Junction and Sealdah Station',
    airport: 'Netaji Subhas Chandra Bose International Airport (CCU)',
    nearbyAttractions: [
      'Victoria Memorial',
      'Howrah Bridge',
      'Dakshineswar Temple',
      'Sundarbans (day trip)',
      'Kolkata Zoo',
    ],
    relatedCityIds: ['jamshedpur', 'kharagpur', 'howrah', 'durgapur'],
    popularRouteIds: ['jamshedpur-to-kolkata', 'kolkata-to-jamshedpur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'airport-taxi'],
    travelTips: [
      'The Jamshedpur–Kolkata route via NH-16 passes through Kharagpur. Total distance approximately 260–280 km.',
      'Allow 5–6 hours for travel — more during peak hours or festivals.',
      'For Kolkata airport transfers, add extra time for city traffic.',
    ],
    faqs: [
      {
        question: 'How far is Kolkata from Jamshedpur by road?',
        answer:
          'Kolkata is approximately 260–280 km from Jamshedpur by road via NH-16 through Kharagpur. The journey typically takes 5–6 hours.',
      },
      {
        question: 'Does Shivansh provide Kolkata airport pickup from Jamshedpur?',
        answer:
          'Yes. We provide cab service from Jamshedpur to Netaji Subhas Chandra Bose International Airport (CCU) in Kolkata and also from Kolkata Airport to Jamshedpur.',
      },
    ],
    mapQuery: 'Kolkata,+West+Bengal,+India',
    index: true,
    priority: 0.85,
  },
  {
    id: 'kharagpur',
    name: 'Kharagpur',
    slug: 'kharagpur',
    state: 'west-bengal',
    stateName: 'West Bengal',
    description:
      'Kharagpur is a major railway junction and IIT town in West Bengal, lying on the Jamshedpur–Kolkata route. Shivansh provides cab service from Jamshedpur to Kharagpur.',
    intro:
      'Kharagpur is best known as the home of IIT Kharagpur and its historic railway junction. Located approximately 175–190 km from Jamshedpur, it is a natural stopover on the Jamshedpur–Kolkata route. Shivansh Tour & Travels serves travellers heading to Kharagpur for academic, business, or transit purposes.',
    seoTitle: 'Jamshedpur to Kharagpur Taxi | Kharagpur Cab | Shivansh Tour & Travels',
    seoDescription:
      'Book cab from Jamshedpur to Kharagpur. Reliable outstation taxi, one-way and round-trip. Call Shivansh at +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Kharagpur cab',
    secondaryKeywords: ['Kharagpur taxi', 'Kharagpur cab service', 'IIT Kharagpur taxi'],
    pickupAreas: ['Kharagpur Railway Station', 'IIT Kharagpur Gate', 'Kharagpur Town'],
    railwayStation: 'Kharagpur Junction — major railway station',
    nearbyAttractions: ['IIT Kharagpur Campus'],
    relatedCityIds: ['jamshedpur', 'kolkata', 'howrah'],
    popularRouteIds: ['jamshedpur-to-kharagpur', 'jamshedpur-to-kolkata'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: [
      'Kharagpur is approximately 175–190 km from Jamshedpur, roughly 3.5–4 hours.',
    ],
    faqs: [
      {
        question: 'How far is Kharagpur from Jamshedpur?',
        answer: 'Approximately 175–190 km by road via NH-16, typically 3.5–4 hours.',
      },
    ],
    mapQuery: 'Kharagpur,+West+Bengal,+India',
    index: true,
    priority: 0.65,
  },
  {
    id: 'purulia',
    name: 'Purulia',
    slug: 'purulia',
    state: 'west-bengal',
    stateName: 'West Bengal',
    description:
      'Purulia is a border district of West Bengal adjacent to Jharkhand, with strong connectivity to Jamshedpur. Shivansh provides cab service from Jamshedpur to Purulia.',
    intro:
      'Purulia, a district of West Bengal bordering Jharkhand, shares cultural and geographical proximity with Jamshedpur. Known for its unique Chhau dance, Ajodhya Hills, and forested landscape, Purulia attracts both business and leisure travellers. Shivansh Tour & Travels provides reliable cab service between Jamshedpur and Purulia.',
    seoTitle: 'Jamshedpur to Purulia Taxi | Purulia Cab Service | Shivansh Tour',
    seoDescription:
      'Book cab from Jamshedpur to Purulia with Shivansh Tour & Travels. Outstation one-way and round-trip taxi. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Purulia cab',
    secondaryKeywords: ['Purulia taxi', 'Purulia cab service'],
    pickupAreas: ['Purulia Town', 'Purulia Railway Station', 'Raghunathpur', 'Balarampur'],
    railwayStation: 'Purulia Junction',
    nearbyAttractions: ['Ajodhya Hills', 'Baghmundi', 'Matha Dam', 'Charida'],
    relatedCityIds: ['jamshedpur', 'kolkata', 'bokaro'],
    popularRouteIds: ['jamshedpur-to-purulia'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: [
      'Purulia is approximately 100–120 km from Jamshedpur, roughly 2.5–3 hours by road.',
    ],
    faqs: [
      {
        question: 'How far is Purulia from Jamshedpur?',
        answer: 'Approximately 100–120 km, typically 2.5–3 hours by road.',
      },
    ],
    mapQuery: 'Purulia,+West+Bengal,+India',
    index: true,
    priority: 0.6,
  },
  // ==================== ODISHA ====================
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar',
    slug: 'bhubaneswar',
    state: 'odisha',
    stateName: 'Odisha',
    description:
      'Bhubaneswar, the capital of Odisha, is a major travel destination from Jamshedpur. Shivansh provides outstation cab service from Jamshedpur to Bhubaneswar.',
    intro:
      'Bhubaneswar — the "Temple City of India" and capital of Odisha — is a popular destination from Jamshedpur for pilgrimage, tourism, and official travel. Home to Biju Patnaik International Airport and hundreds of ancient temples, Bhubaneswar is approximately 350–380 km from Jamshedpur. Shivansh Tour & Travels provides comfortable outstation cab service on this route.',
    seoTitle:
      'Jamshedpur to Bhubaneswar Cab | Bhubaneswar Taxi | Shivansh Tour & Travels',
    seoDescription:
      'Book cab from Jamshedpur to Bhubaneswar with Shivansh. Outstation one-way and round-trip taxi available. Comfortable sedan, SUV, MUV. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Bhubaneswar taxi',
    secondaryKeywords: ['Bhubaneswar cab service', 'Jamshedpur to Bhubaneswar cab'],
    pickupAreas: [
      'Bhubaneswar Airport',
      'Bhubaneswar Railway Station',
      'Unit 9 Market',
      'Saheed Nagar',
      'Nayapalli',
      'Acharya Vihar',
    ],
    railwayStation: 'Bhubaneswar Railway Station',
    airport: 'Biju Patnaik International Airport (BBI)',
    nearbyAttractions: [
      'Lingaraj Temple',
      'Udayagiri Caves',
      'Dhauli Peace Pagoda',
      'Nandankanan Zoo',
      'Ekamra Haat',
    ],
    relatedCityIds: ['jamshedpur', 'cuttack', 'puri', 'rourkela'],
    popularRouteIds: ['jamshedpur-to-bhubaneswar', 'bhubaneswar-to-jamshedpur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'airport-taxi'],
    travelTips: [
      'The Jamshedpur–Bhubaneswar route passes through Rourkela or Balasore. Distance: ~350–380 km.',
      'Allow 7–9 hours for travel depending on the route taken.',
      'An overnight stay may be preferred for a more comfortable journey.',
    ],
    faqs: [
      {
        question: 'How far is Bhubaneswar from Jamshedpur by road?',
        answer:
          'Approximately 350–380 km by road, typically 7–9 hours depending on the route and stops.',
      },
      {
        question: 'Which route does the cab take from Jamshedpur to Bhubaneswar?',
        answer:
          'The common route is via Chaibasa and Rourkela (NH-23 / NH-143) or via Kharagpur and Balasore. Please confirm the route when booking.',
      },
    ],
    mapQuery: 'Bhubaneswar,+Odisha,+India',
    index: true,
    priority: 0.8,
  },
  {
    id: 'puri',
    name: 'Puri',
    slug: 'puri',
    state: 'odisha',
    stateName: 'Odisha',
    description:
      'Puri, home to the Jagannath Temple and famous beaches, is a top pilgrimage and tourism destination from Jamshedpur. Shivansh provides cab service to Puri.',
    intro:
      'Puri — one of the four sacred dhams in Hinduism — is home to the world-famous Jagannath Temple and beautiful golden beaches. It is a top pilgrimage destination from Jamshedpur, especially during Rath Yatra. Shivansh Tour & Travels provides outstation cab service from Jamshedpur to Puri for religious visits, beach holidays, and family trips.',
    seoTitle:
      'Jamshedpur to Puri Cab | Puri Taxi | Jagannath Dham Tour | Shivansh Tour & Travels',
    seoDescription:
      'Book cab from Jamshedpur to Puri for Jagannath Dham pilgrimage or beach holiday. Outstation taxi, one-way and round-trip. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Puri taxi',
    secondaryKeywords: ['Puri cab service', 'Puri pilgrimage taxi', 'Jagannath Dham taxi'],
    pickupAreas: ['Puri Town', 'Puri Beach', 'Puri Railway Station', 'Jagannath Temple Area'],
    railwayStation: 'Puri Railway Station',
    nearbyAttractions: [
      'Jagannath Temple',
      'Puri Beach',
      'Konark Sun Temple (65 km)',
      'Chilika Lake',
      'Bhubaneswar (60 km)',
    ],
    relatedCityIds: ['bhubaneswar', 'cuttack', 'jamshedpur'],
    popularRouteIds: ['jamshedpur-to-puri'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'tempo-traveller'],
    travelTips: [
      'Puri is approximately 420–450 km from Jamshedpur — ideal for an overnight outstation trip.',
      'Book well in advance during Rath Yatra — demand peaks significantly.',
      'A Puri–Bhubaneswar–Konark circuit can be combined in a 2–3 day trip.',
    ],
    faqs: [
      {
        question: 'How far is Puri from Jamshedpur by road?',
        answer:
          'Approximately 420–450 km by road, typically 8–10 hours. An overnight trip is recommended.',
      },
      {
        question: 'Do you offer a Puri–Bhubaneswar–Konark package tour?',
        answer:
          'We can arrange a multi-day outstation trip covering Puri, Bhubaneswar, and Konark. Please contact us to discuss your itinerary.',
      },
    ],
    mapQuery: 'Puri,+Odisha,+India',
    index: true,
    priority: 0.75,
  },
  {
    id: 'rourkela',
    name: 'Rourkela',
    slug: 'rourkela',
    state: 'odisha',
    stateName: 'Odisha',
    description:
      'Rourkela, the Steel City of Odisha, is accessible from Jamshedpur via Chaibasa. Shivansh provides cab service from Jamshedpur to Rourkela.',
    intro:
      'Rourkela is Odisha\'s third-largest city and an important industrial and educational centre, known for the Rourkela Steel Plant and the National Institute of Technology (NIT Rourkela). Located approximately 180–200 km from Jamshedpur, it is a convenient outstation destination for business and family visits. Shivansh Tour & Travels provides reliable cab service on this route.',
    seoTitle: 'Jamshedpur to Rourkela Cab | Rourkela Taxi | Shivansh Tour & Travels',
    seoDescription:
      'Book cab from Jamshedpur to Rourkela, Odisha. Outstation one-way and round-trip taxi. Comfortable and reliable. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Rourkela cab',
    secondaryKeywords: ['Rourkela taxi service', 'Rourkela cab booking'],
    pickupAreas: [
      'Rourkela Railway Station',
      'Uditnagar',
      'Chhend Colony',
      'Bisra Road',
      'NIT Rourkela Gate',
    ],
    railwayStation: 'Rourkela Railway Station',
    nearbyAttractions: ['Vedavyas Ashram', 'Handibhanga Dam', 'Mandira Dam'],
    relatedCityIds: ['jamshedpur', 'bhubaneswar', 'chaibasa'],
    popularRouteIds: ['jamshedpur-to-rourkela'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'corporate-travel'],
    travelTips: [
      'Rourkela is approximately 180–200 km from Jamshedpur via Chaibasa, typically 4–5 hours.',
    ],
    faqs: [
      {
        question: 'How far is Rourkela from Jamshedpur?',
        answer:
          'Approximately 180–200 km via Chaibasa by road, typically 4–5 hours.',
      },
    ],
    mapQuery: 'Rourkela,+Odisha,+India',
    index: true,
    priority: 0.65,
  },
  // ==================== BIHAR ====================
  {
    id: 'patna',
    name: 'Patna',
    slug: 'patna',
    state: 'bihar',
    stateName: 'Bihar',
    description:
      'Patna, the capital of Bihar, is a major travel destination from Jamshedpur. Shivansh provides outstation cab service from Jamshedpur to Patna.',
    intro:
      'Patna, one of the oldest cities in the world and the capital of Bihar, is a significant travel destination for business, pilgrimage, and family visits. Located approximately 330–360 km from Jamshedpur, Patna is served by the Jay Prakash Narayan International Airport. Shivansh Tour & Travels provides reliable long-distance cab service on this important corridor.',
    seoTitle:
      'Jamshedpur to Patna Cab | Patna Taxi | Outstation Taxi | Shivansh Tour & Travels',
    seoDescription:
      'Book cab from Jamshedpur to Patna with Shivansh Tour & Travels. Long-distance outstation taxi, one-way and round-trip. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Patna cab',
    secondaryKeywords: ['Patna taxi service', 'Patna cab booking', 'Jamshedpur Patna taxi'],
    pickupAreas: ['Patna Junction', 'Patna Airport', 'Gandhi Maidan', 'Boring Road', 'Kankarbagh'],
    railwayStation: 'Patna Junction — major railway hub',
    airport: 'Jay Prakash Narayan Airport (PAT)',
    nearbyAttractions: ['Golghar', 'Patna Sahib Gurudwara', 'Bihar Museum', 'Mahavir Mandir'],
    relatedCityIds: ['jamshedpur', 'ranchi', 'dhanbad', 'gaya'],
    popularRouteIds: ['jamshedpur-to-patna'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: [
      'Patna is approximately 330–360 km from Jamshedpur — a long but manageable day journey.',
      'The route typically passes through Dhanbad and Aurangabad / Gaya.',
      'Allow 7–8 hours for travel, more during festive or peak periods.',
    ],
    faqs: [
      {
        question: 'How far is Patna from Jamshedpur by road?',
        answer:
          'Approximately 330–360 km, typically 7–8 hours of drive time depending on route and traffic.',
      },
      {
        question: 'Is there a cab service from Jamshedpur to Patna?',
        answer:
          'Yes. Shivansh Tour & Travels provides outstation cab service from Jamshedpur to Patna. Both one-way and round-trip options are available.',
      },
    ],
    mapQuery: 'Patna,+Bihar,+India',
    index: true,
    priority: 0.75,
  },
  {
    id: 'gaya',
    name: 'Gaya',
    slug: 'gaya',
    state: 'bihar',
    stateName: 'Bihar',
    description:
      'Gaya and Bodh Gaya are major pilgrimage destinations in Bihar. Shivansh provides cab service from Jamshedpur to Gaya for Hindu and Buddhist pilgrims.',
    intro:
      'Gaya is a sacred city in Bihar known for the Vishnupad Temple and the Pind Daan rituals performed here. Just 12 km away lies Bodh Gaya — the birthplace of Buddhism and a UNESCO World Heritage Site. Together, they attract millions of Hindu and Buddhist pilgrims. Shivansh Tour & Travels provides respectful and comfortable pilgrimage cab service from Jamshedpur to Gaya and Bodh Gaya.',
    seoTitle:
      'Jamshedpur to Gaya Taxi | Bodh Gaya Cab | Pilgrimage Tour | Shivansh Tour & Travels',
    seoDescription:
      'Book cab from Jamshedpur to Gaya and Bodh Gaya for pilgrimage. Outstation one-way and round-trip taxi. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Gaya cab',
    secondaryKeywords: ['Bodh Gaya taxi', 'Gaya pilgrimage cab', 'Jamshedpur Bodh Gaya taxi'],
    pickupAreas: ['Gaya Railway Station', 'Bodh Gaya Temple Complex', 'Vishnupad Mandir', 'Gaya Town'],
    railwayStation: 'Gaya Junction',
    airport: 'Gaya International Airport (GAY)',
    nearbyAttractions: [
      'Mahabodhi Temple — Bodh Gaya (UNESCO)',
      'Vishnupad Temple',
      'Rajgir (90 km)',
      'Nalanda (100 km)',
    ],
    relatedCityIds: ['jamshedpur', 'patna', 'ranchi'],
    popularRouteIds: ['jamshedpur-to-gaya'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'tempo-traveller'],
    travelTips: [
      'Gaya is approximately 280–310 km from Jamshedpur, typically 6–7 hours.',
      'Combine Gaya, Bodh Gaya, Rajgir, and Nalanda in a 2–3 day pilgrimage circuit.',
      'Bodh Gaya sees large international crowds — book accommodation early.',
    ],
    faqs: [
      {
        question: 'How far is Gaya from Jamshedpur?',
        answer:
          'Approximately 280–310 km, typically 6–7 hours by road.',
      },
      {
        question: 'Do you provide a Rajgir–Nalanda–Bodh Gaya pilgrimage circuit cab?',
        answer:
          'Yes. We can arrange multi-day outstation trips covering Gaya, Bodh Gaya, Rajgir, and Nalanda. Please contact us to plan your itinerary.',
      },
    ],
    mapQuery: 'Gaya,+Bihar,+India',
    index: true,
    priority: 0.65,
  },

  // ==================== NEW CITIES ====================
  {
    id: 'netarhat',
    name: 'Netarhat',
    slug: 'netarhat',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: false,
    region: 'Latehar',
    description: 'Netarhat is Jharkhand\'s most beautiful hill station at 3,622 ft, known as the Queen of Chotanagpur for its stunning sunrise, sunset, and forest scenery.',
    intro: 'Netarhat — the "Queen of Chotanagpur" — is Jharkhand\'s premier hill station, located at an altitude of approximately 3,622 feet in Latehar district. Shivansh Tour & Travels offers cab and SUV service from Jamshedpur to Netarhat for weekend getaways, nature lovers, and photography enthusiasts. The hill station is famous for its breathtaking sunrise from Magnolia Point, the twin Ghagri Falls (Upper and Lower), lush sal and pine forests, and the prestigious Netarhat Residential School (NRS). The cool climate (15–25°C) makes it a favourite escape year-round.',
    seoTitle: 'Cab from Jamshedpur to Netarhat | Hill Station Taxi | Shivansh Tour & Travels',
    seoDescription: 'Book cab from Jamshedpur to Netarhat hill station. Sunrise point, Ghagri Falls taxi. SUV recommended. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Netarhat cab',
    secondaryKeywords: ['Netarhat taxi from Jamshedpur', 'Netarhat cab booking', 'Queen of Chotanagpur taxi'],
    pickupAreas: ['Netarhat town', 'Magnolia Point', 'Netarhat Residential School', 'Upper Ghagri Falls'],
    nearbyAttractions: ['Magnolia Point (Sunrise & Sunset)', 'Upper Ghagri Falls', 'Lower Ghagri Falls', 'Netarhat Residential School', 'Betla National Park (45 km)'],
    relatedCityIds: ['jamshedpur', 'ranchi', 'latehar'],
    popularRouteIds: ['jamshedpur-to-netarhat'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: [
      'Best time: October–February for clear skies and best sunrise/sunset views.',
      'Last fuel pump before Netarhat is in Latehar town — fill up there.',
      'Roads after Latehar are winding — SUV or Innova recommended for comfort.',
      'Arrive at Magnolia Point before 5:30 AM for the famous sunrise.',
    ],
    faqs: [
      { question: 'How far is Netarhat from Jamshedpur?', answer: 'Approximately 240–260 km via Ranchi. Travel time is about 5–6 hours.' },
      { question: 'Which vehicle is best for Netarhat from Jamshedpur?', answer: 'SUV (Innova Crysta) is recommended. The winding hill roads are more comfortable in an SUV. Sedan is also available.' },
    ],
    mapQuery: 'Netarhat,+Latehar,+Jharkhand,+India',
    index: true,
    priority: 0.65,
  },
  {
    id: 'hundru-falls',
    name: 'Hundru Falls',
    slug: 'hundru-falls',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: false,
    region: 'Ranchi',
    description: 'Hundru Falls is one of the highest waterfalls in Jharkhand at 98 metres, formed by the Subarnarekha River, located 45 km from Ranchi and 160 km from Jamshedpur.',
    intro: 'Hundru Falls is one of Jharkhand\'s most spectacular natural attractions — the Subarnarekha River plunges 98 metres down a rocky gorge, creating a powerful and scenic waterfall. Located approximately 45 km from Ranchi and 160 km from Jamshedpur, Hundru is a popular day-trip destination, especially during and after monsoon season (July–October) when the water flow is at its peak. Shivansh Tour & Travels provides comfortable cab service for nature trips to Hundru Falls from Jamshedpur.',
    seoTitle: 'Cab from Jamshedpur to Hundru Falls | Waterfall Trip Taxi | Shivansh',
    seoDescription: 'Book cab from Jamshedpur to Hundru Falls. Jharkhand waterfall trip taxi. Best in monsoon. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Hundru Falls cab',
    secondaryKeywords: ['Hundru Falls taxi', 'Hundru waterfall trip from Jamshedpur', 'Jharkhand waterfall cab'],
    pickupAreas: ['Hundru Falls entry gate', 'Hundru base (Subarnarekha river bank)'],
    nearbyAttractions: ['Hundru Falls (98m drop)', 'Rock pools at base', 'Subarnarekha River gorge', 'Ranchi (45 km)'],
    relatedCityIds: ['jamshedpur', 'ranchi'],
    popularRouteIds: ['jamshedpur-to-hundru-falls'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: [
      'Best season: July–October — maximum water flow.',
      'Steep steps to the falls base — wear proper footwear.',
      'Combine with Ranchi city sightseeing on the same trip.',
    ],
    faqs: [
      { question: 'How far is Hundru Falls from Jamshedpur?', answer: 'Approximately 155–165 km via Ranchi. About 3.5 hours by road.' },
      { question: 'When is the best time to visit Hundru Falls?', answer: 'July to October — when the Subarnarekha river has maximum flow after monsoon rains.' },
    ],
    mapQuery: 'Hundru+Falls,+Ranchi,+Jharkhand,+India',
    index: true,
    priority: 0.6,
  },
  {
    id: 'ramgarh',
    name: 'Ramgarh',
    slug: 'ramgarh',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'Chota Nagpur Plateau',
    description: 'Ramgarh is an industrial district town on NH-33, midpoint between Jamshedpur and Ranchi. Known for coal mining and Rajrappa Temple proximity.',
    intro: 'Ramgarh is a district town in Jharkhand situated on NH-33 — the main highway connecting Jamshedpur to Ranchi — approximately 120 km from Jamshedpur and 70 km from Ranchi. It is an important industrial hub in the coal mining belt and serves as a midpoint town for travellers on the Jamshedpur–Ranchi corridor. Nearby Rajrappa Temple (30 km) on the Damodar River is a famous pilgrimage site.',
    seoTitle: 'Cab from Jamshedpur to Ramgarh | Rajrappa Temple Taxi | Shivansh',
    seoDescription: 'Book cab from Jamshedpur to Ramgarh. NH-33 route, Rajrappa Temple nearby. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Ramgarh cab',
    secondaryKeywords: ['Ramgarh taxi', 'Rajrappa temple cab from Jamshedpur', 'Jamshedpur Ramgarh taxi'],
    pickupAreas: ['Ramgarh town', 'Ramgarh Junction', 'Rajrappa (30 km from Ramgarh)'],
    nearbyAttractions: ['Rajrappa Temple (Chhinnmastika Devi)', 'Damodar River', 'Barkagaon waterfalls'],
    relatedCityIds: ['jamshedpur', 'ranchi', 'hazaribagh'],
    popularRouteIds: ['jamshedpur-to-ramgarh'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: ['Rajrappa Temple is 30 km from Ramgarh — a short detour worth taking.'],
    faqs: [
      { question: 'How far is Ramgarh from Jamshedpur?', answer: 'Approximately 115–125 km on NH-33, about 2–2.5 hours.' },
    ],
    mapQuery: 'Ramgarh,+Jharkhand,+India',
    index: true,
    priority: 0.55,
  },
  {
    id: 'giridih',
    name: 'Giridih',
    slug: 'giridih',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'Northern Jharkhand',
    description: 'Giridih is a Jharkhand district known for Parasnath Hill (Shikharji) — the holiest Jain pilgrimage site and the highest peak in Jharkhand at 1,365 metres.',
    intro: 'Giridih is a district in northern Jharkhand, approximately 190–210 km from Jamshedpur via Dhanbad. The district is globally famous among the Jain community as the location of Parasnath Hill (Shikharji) — the highest mountain in Jharkhand (1,365 metres) and the most sacred pilgrimage site in Jainism. The hill has 20 Jain tonks (temples) reached by a 9 km trek. Usri Falls, a scenic cascade in a forested gorge, is another attraction. Shivansh Tour & Travels provides cab and Tempo Traveller for Jain pilgrimages and leisure visits.',
    seoTitle: 'Cab from Jamshedpur to Giridih | Parasnath Shikharji Taxi | Shivansh',
    seoDescription: 'Book cab from Jamshedpur to Giridih. Parasnath Hill Jain pilgrimage, Usri Falls taxi. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Giridih cab',
    secondaryKeywords: ['Parasnath taxi from Jamshedpur', 'Shikharji cab', 'Giridih taxi Jamshedpur'],
    pickupAreas: ['Giridih town', 'Parasnath Hill (Shikharji) base', 'Madhuban (Jain town)'],
    nearbyAttractions: ['Parasnath Hill (Shikharji) — 20 Jain temples', 'Usri Falls', 'Madhuban Jain pilgrim town'],
    relatedCityIds: ['jamshedpur', 'dhanbad', 'deoghar'],
    popularRouteIds: ['jamshedpur-to-giridih'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'tempo-traveller'],
    travelTips: [
      'Parasnath Hill trek is 9 km each way — start early (4–5 AM) for the full circuit.',
      'Jain pilgrimage peak season: October–March. Book well in advance.',
      'Doli and palanquin services are available at the base for those unable to trek.',
    ],
    faqs: [
      { question: 'How far is Giridih from Jamshedpur?', answer: 'Approximately 190–210 km via Dhanbad. About 4–5 hours by road.' },
      { question: 'Is Tempo Traveller available for Parasnath pilgrimage group?', answer: 'Yes. Tempo Traveller (12–17 seats) available for group pilgrimages. Call +91 7061767617.' },
    ],
    mapQuery: 'Giridih,+Jharkhand,+India',
    index: true,
    priority: 0.62,
  },
  {
    id: 'latehar',
    name: 'Latehar',
    slug: 'latehar',
    state: 'jharkhand',
    stateName: 'Jharkhand',
    isDistrict: true,
    region: 'Palamu Division',
    description: 'Latehar district is the gateway to Netarhat hill station and Betla National Park (Palamau Tiger Reserve) — Jharkhand\'s premier wildlife destination.',
    intro: 'Latehar is a district in the Palamu division of Jharkhand, approximately 195–205 km from Jamshedpur. The district serves as the gateway to two of Jharkhand\'s most treasured natural destinations — Netarhat hill station (45 km from Latehar) and Betla National Park (Palamau Tiger Reserve). Betla is one of India\'s original 9 tiger reserves and is home to tigers, elephants, leopards, and a diverse ecosystem. The historic Palamau Fort ruins are also located within the park area.',
    seoTitle: 'Cab from Jamshedpur to Latehar | Betla National Park Taxi | Shivansh',
    seoDescription: 'Book cab from Jamshedpur to Latehar. Betla National Park, Palamau Tiger Reserve, Netarhat gateway taxi. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Latehar cab',
    secondaryKeywords: ['Betla National Park cab', 'Palamau Tiger Reserve taxi', 'Latehar Jharkhand taxi'],
    pickupAreas: ['Latehar town', 'Betla National Park gate'],
    nearbyAttractions: ['Betla National Park (Palamau Tiger Reserve)', 'Palamau Fort', 'Netarhat (45 km)'],
    relatedCityIds: ['jamshedpur', 'ranchi', 'netarhat'],
    popularRouteIds: ['jamshedpur-to-latehar', 'jamshedpur-to-netarhat'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: ['SUV recommended for forest area roads.', 'Betla National Park requires forest department permit.'],
    faqs: [
      { question: 'How far is Latehar from Jamshedpur?', answer: 'Approximately 185–205 km via Ranchi. About 4–5 hours.' },
    ],
    mapQuery: 'Latehar,+Jharkhand,+India',
    index: true,
    priority: 0.55,
  },
  {
    id: 'asansol',
    name: 'Asansol',
    slug: 'asansol',
    state: 'west-bengal',
    stateName: 'West Bengal',
    isDistrict: false,
    region: 'Paschim Bardhaman',
    description: 'Asansol is West Bengal\'s second largest city and a major railway junction on the Howrah–Delhi main line, closely connected to the Bengal coal-steel industrial belt.',
    intro: 'Asansol is West Bengal\'s second largest city by population and one of the most important railway junctions on the Howrah–Delhi main line. Located approximately 155 km from Jamshedpur in Paschim Bardhaman district, Asansol is at the heart of the Bengal coal-steel industrial corridor. It is closely connected to Durgapur (30 km) and Kolkata (175 km). Shivansh Tour & Travels provides cab service to Asansol for professionals, students, and families travelling between Jamshedpur and West Bengal.',
    seoTitle: 'Cab from Jamshedpur to Asansol | West Bengal Taxi | Shivansh Tour & Travels',
    seoDescription: 'Book cab from Jamshedpur to Asansol. Station drop, industrial route. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Asansol cab',
    secondaryKeywords: ['Asansol taxi from Jamshedpur', 'Jamshedpur Asansol cab', 'Asansol taxi booking'],
    pickupAreas: ['Asansol Junction (station)', 'Asansol city centre'],
    railwayStation: 'Asansol Junction (ASN) — major station on Howrah–Delhi main line',
    nearbyAttractions: ['Asansol Railway Junction', 'Maithon Dam (45 km)', 'Durgapur (30 km)'],
    relatedCityIds: ['jamshedpur', 'durgapur', 'kolkata'],
    popularRouteIds: ['jamshedpur-to-asansol', 'jamshedpur-to-durgapur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: ['Asansol Junction is a key pickup point for trains to Delhi, Mumbai, and Kolkata.'],
    faqs: [
      { question: 'How far is Asansol from Jamshedpur?', answer: 'Approximately 145–165 km, typically 3–3.5 hours by road.' },
    ],
    mapQuery: 'Asansol,+West+Bengal,+India',
    index: true,
    priority: 0.62,
  },
  {
    id: 'durgapur',
    name: 'Durgapur',
    slug: 'durgapur',
    state: 'west-bengal',
    stateName: 'West Bengal',
    isDistrict: false,
    region: 'Paschim Bardhaman',
    description: 'Durgapur is West Bengal\'s planned industrial city, home to SAIL\'s Durgapur Steel Plant (DSP), NIT Durgapur, and major industrial companies.',
    intro: 'Durgapur is a planned industrial city in West Bengal\'s Paschim Bardhaman district, approximately 185 km from Jamshedpur via Asansol on NH-19. The city is built around Durgapur Steel Plant (SAIL DSP) and is also home to NIT Durgapur (one of India\'s premier engineering colleges), Ordnance Factory Muradnagar, and several large industrial companies. SAIL employees, NIT students and their families, and business professionals frequently travel between Jamshedpur and Durgapur. Shivansh Tour & Travels provides comfortable AC Sedan and SUV service for this route.',
    seoTitle: 'Cab from Jamshedpur to Durgapur | SAIL DSP, NIT Taxi | Shivansh',
    seoDescription: 'Book cab from Jamshedpur to Durgapur — Sedan ₹3,999, SUV ₹4,599. SAIL DSP, NIT Durgapur drop. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Durgapur cab',
    secondaryKeywords: ['Durgapur taxi from Jamshedpur', 'NIT Durgapur cab', 'SAIL Durgapur taxi', 'Jamshedpur Durgapur taxi'],
    pickupAreas: ['Durgapur city centre', 'NIT Durgapur campus', 'SAIL DSP township sectors', 'Durgapur Station Road'],
    railwayStation: 'Durgapur Railway Station',
    nearbyAttractions: ['NIT Durgapur', 'Durgapur Barrage', 'Durgapur Steel Plant', 'Asansol (30 km)'],
    relatedCityIds: ['jamshedpur', 'asansol', 'kolkata'],
    popularRouteIds: ['jamshedpur-to-durgapur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi', 'corporate-travel'],
    travelTips: [
      'SAIL DSP township sectors are spread across a large area — confirm sector address.',
      'NIT Durgapur is about 8 km from Durgapur city centre.',
    ],
    faqs: [
      { question: 'What is the cab fare from Jamshedpur to Durgapur?', answer: 'Sedan ₹3,999, SUV ₹4,599 (one-way). Call +91 7061767617.' },
      { question: 'How far is Durgapur from Jamshedpur?', answer: 'Approximately 175–195 km via Asansol. About 3.5–4.5 hours.' },
    ],
    mapQuery: 'Durgapur,+West+Bengal,+India',
    index: true,
    priority: 0.72,
  },
  {
    id: 'cuttack',
    name: 'Cuttack',
    slug: 'cuttack',
    state: 'odisha',
    stateName: 'Odisha',
    isDistrict: false,
    region: 'Mahanadi Delta',
    description: 'Cuttack is Odisha\'s historic Silver City and commercial capital, home to Dhabaleswar Island Temple, famous silver filigree work, and Barabati Fort.',
    intro: 'Cuttack — Odisha\'s Silver City — is the state\'s commercial capital and one of India\'s oldest continuously inhabited cities, located on the Mahanadi River delta. Approximately 390 km from Jamshedpur, Cuttack is known for the exquisite silver filigree (tarakasi) craft, Dhabaleswar Island Temple (Shiva temple on a Mahanadi island), Barabati Fort, and Cuttack Chandi Temple. It is 25–30 km from Bhubaneswar. Shivansh provides long-distance cab service to Cuttack.',
    seoTitle: 'Cab from Jamshedpur to Cuttack | Odisha Outstation Taxi | Shivansh',
    seoDescription: 'Book cab from Jamshedpur to Cuttack, Odisha Silver City. Long-distance outstation taxi. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Cuttack cab',
    secondaryKeywords: ['Cuttack taxi from Jamshedpur', 'Odisha cab service', 'Cuttack outstation taxi'],
    pickupAreas: ['Cuttack city centre', 'Dhabaleswar Temple', 'Barabati Fort area', 'Cuttack Railway Station'],
    railwayStation: 'Cuttack Railway Station',
    nearbyAttractions: ['Dhabaleswar Island Temple', 'Barabati Fort', 'Cuttack Chandi Temple', 'Bhubaneswar (30 km)'],
    relatedCityIds: ['jamshedpur', 'bhubaneswar', 'puri'],
    popularRouteIds: ['jamshedpur-to-cuttack'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: ['Combine with Bhubaneswar (30 km) and Puri (90 km) for a complete Odisha visit.'],
    faqs: [
      { question: 'How far is Cuttack from Jamshedpur?', answer: 'Approximately 380–400 km. About 8–9 hours by road.' },
    ],
    mapQuery: 'Cuttack,+Odisha,+India',
    index: true,
    priority: 0.6,
  },
  {
    id: 'sambalpur',
    name: 'Sambalpur',
    slug: 'sambalpur',
    state: 'odisha',
    stateName: 'Odisha',
    isDistrict: false,
    region: 'Western Odisha',
    description: 'Sambalpur is western Odisha\'s major city, home to the iconic Hirakud Dam on the Mahanadi River — one of the world\'s longest earthen dams at 26 km.',
    intro: 'Sambalpur is the largest city in western Odisha, approximately 295 km from Jamshedpur via Rourkela. The city is most famous for Hirakud Dam — one of the world\'s longest earthen dams spanning approximately 26 km across the Mahanadi River. Sambalpur is also known for the exquisite Sambalpuri handloom and ikat textiles, Samaleswari Temple, and proximity to Debrigarh Wildlife Sanctuary. It is a hub for commerce and education in western Odisha.',
    seoTitle: 'Cab from Jamshedpur to Sambalpur | Hirakud Dam Taxi | Shivansh',
    seoDescription: 'Book cab from Jamshedpur to Sambalpur, Odisha. Hirakud Dam, western Odisha outstation taxi. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Sambalpur cab',
    secondaryKeywords: ['Sambalpur taxi', 'Hirakud Dam cab', 'western Odisha taxi from Jamshedpur'],
    pickupAreas: ['Sambalpur city centre', 'Hirakud Dam', 'Samaleswari Temple'],
    nearbyAttractions: ['Hirakud Dam', 'Samaleswari Temple', 'Debrigarh Wildlife Sanctuary', 'Hirakud reservoir'],
    relatedCityIds: ['jamshedpur', 'rourkela', 'bhubaneswar'],
    popularRouteIds: ['jamshedpur-to-sambalpur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: ['Via Rourkela route is standard — about 110 km from Rourkela to Sambalpur.'],
    faqs: [
      { question: 'How far is Sambalpur from Jamshedpur?', answer: 'Approximately 280–310 km via Rourkela. About 6–7 hours.' },
    ],
    mapQuery: 'Sambalpur,+Odisha,+India',
    index: true,
    priority: 0.58,
  },
  {
    id: 'muzaffarpur',
    name: 'Muzaffarpur',
    slug: 'muzaffarpur',
    state: 'bihar',
    stateName: 'Bihar',
    isDistrict: false,
    region: 'Tirhut Division, Bihar',
    description: 'Muzaffarpur is Bihar\'s second largest city, famous as the Litchi Capital of India for the world-renowned Shahi Litchi. Vaishali Buddhist heritage site is 40 km away.',
    intro: 'Muzaffarpur is the second largest city in Bihar and a major commercial and educational hub in the Tirhut division, approximately 450 km from Jamshedpur. The city is internationally famous as the "Litchi Capital of India" — producing the prized Shahi Litchi (GI tagged). Just 40 km from Muzaffarpur is the ancient city of Vaishali — one of the world\'s first republics and a key Buddhist pilgrimage site where Lord Buddha delivered his last sermon. Shivansh Tour & Travels provides long-distance cab service to Muzaffarpur.',
    seoTitle: 'Cab from Jamshedpur to Muzaffarpur | Bihar Outstation Taxi | Shivansh',
    seoDescription: 'Book cab from Jamshedpur to Muzaffarpur, Bihar. Litchi Capital taxi, Vaishali nearby. Call +91 7061767617.',
    primaryKeyword: 'Jamshedpur to Muzaffarpur cab',
    secondaryKeywords: ['Muzaffarpur taxi', 'Bihar cab from Jamshedpur', 'Muzaffarpur outstation taxi'],
    pickupAreas: ['Muzaffarpur city centre', 'Muzaffarpur Junction', 'Vaishali (40 km)'],
    railwayStation: 'Muzaffarpur Junction (MFP)',
    nearbyAttractions: ['Vaishali — ancient Buddhist republic site (40 km)', 'Muzaffarpur Railway Junction', 'Ramna Durgasthan'],
    relatedCityIds: ['jamshedpur', 'patna'],
    popularRouteIds: ['jamshedpur-to-muzaffarpur'],
    services: ['outstation-taxi', 'one-way-taxi', 'round-trip-taxi'],
    travelTips: ['Long journey — overnight travel recommended. Via Patna route is standard.'],
    faqs: [
      { question: 'How far is Muzaffarpur from Jamshedpur?', answer: 'Approximately 430–470 km via Patna. About 9–10 hours of travel.' },
    ],
    mapQuery: 'Muzaffarpur,+Bihar,+India',
    index: true,
    priority: 0.55,
  },
];


export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByState(state: string): City[] {
  return cities.filter((c) => c.state === state && c.index);
}

export function getIndexedCities(): City[] {
  return cities.filter((c) => c.index);
}

export function getCitiesBySlugState(slug: string, state: string): City | undefined {
  return cities.find((c) => c.slug === slug && c.state === state);
}
