// src/data/vehicles.ts
import type { Vehicle } from './types';

export const vehicles: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Sedan',
    slug: 'sedan',
    category: 'sedan',
    examples: ['Swift Dzire', 'Honda Amaze', 'Tata Tigor'],
    passengerCapacity: 4,
    luggageCapacity: '2 medium bags',
    isAC: true,
    bestFor: ['Solo travel', 'Couples', 'Business trips', 'Short outstation'],
    features: [
      'Air conditioned',
      'Comfortable for 3–4 passengers',
      'Most economical outstation option',
      'Suitable for local and outstation routes',
    ],
    image: '/dzire.png',
    description:
      'A comfortable, fuel-efficient AC sedan ideal for solo or couple travel. Perfect for city drives and shorter outstation routes. Vehicles like the Swift Dzire offer a smooth, economical ride.',
    icon: '🚗',
  },
  {
    id: 'muv',
    name: 'MUV / MPV',
    slug: 'muv',
    category: 'muv',
    examples: ['Maruti Ertiga', 'Kia Carens'],
    passengerCapacity: 6,
    luggageCapacity: '3–4 medium bags',
    isAC: true,
    bestFor: ['Families', 'Small groups', 'Medium outstation trips'],
    features: [
      'Seats up to 6 passengers',
      'More luggage space than sedan',
      'Air conditioned',
      'Good for family outstation trips',
    ],
    image: '/ertiga.jpg',
    description:
      'A versatile multi-utility vehicle that seats up to 6 passengers comfortably. Great for families and small groups needing more space without moving to a full SUV.',
    icon: '🚐',
  },
  {
    id: 'suv',
    name: 'SUV',
    slug: 'suv',
    category: 'suv',
    examples: ['Toyota Innova', 'Mahindra Scorpio'],
    passengerCapacity: 6,
    luggageCapacity: '4–5 large bags',
    isAC: true,
    bestFor: ['Families', 'Hill travel', 'Long outstation', 'Group tours'],
    features: [
      'Spacious seating for up to 6',
      'Large luggage capacity',
      'Suitable for long outstation and hill routes',
      'Air conditioned',
    ],
    image: '/innova.jpg',
    description:
      'A spacious, capable SUV suited for longer journeys, hill trips, and group travel. The Toyota Innova is a popular choice for its reliability on all road types common in Jharkhand.',
    icon: '🚙',
  },
  {
    id: 'premium-suv',
    name: 'Premium SUV',
    slug: 'premium-suv',
    category: 'premium-suv',
    examples: ['Toyota Fortuner', 'Mahindra XUV700'],
    passengerCapacity: 6,
    luggageCapacity: '4–5 large bags',
    isAC: true,
    bestFor: ['Corporate travel', 'Premium outstation', 'Wedding', 'VIP transfers'],
    features: [
      'Premium interior and comfort',
      'Ideal for corporate and executive travel',
      'Suitable for wedding convoys',
      'Air conditioned',
    ],
    image: '/Fortuner.jpg',
    description:
      'A premium SUV offering superior comfort and a refined travel experience. Ideal for corporate guests, wedding processions, and travellers who want a more premium interior.',
    icon: '🏎️',
  },
  {
    id: 'luxury',
    name: 'Luxury Car',
    slug: 'luxury',
    category: 'luxury',
    examples: ['Toyota Innova Crysta', 'Subject to availability'],
    passengerCapacity: 4,
    luggageCapacity: '2–3 bags',
    isAC: true,
    bestFor: ['VIP travel', 'Premium weddings', 'Executive transfers'],
    features: [
      'Highest comfort level',
      'Suitable for VIP and executive trips',
      'Subject to advance booking and availability',
      'Air conditioned',
    ],
    image: '/innova.jpg',
    description:
      'For occasions demanding the highest level of comfort and presentation. Luxury vehicle availability is subject to confirmation — please enquire in advance.',
    icon: '✨',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    slug: 'tempo-traveller',
    category: 'tempo-traveller',
    examples: ['Force Tempo Traveller (12–17 seater)'],
    passengerCapacity: 12,
    luggageCapacity: 'Ample overhead storage',
    isAC: true,
    bestFor: ['Large groups', 'Pilgrimage tours', 'School trips', 'Corporate outings'],
    features: [
      'Seats 12–17 passengers',
      'Air conditioned',
      'Ideal for pilgrimages and group tours',
      'Ample overhead luggage storage',
    ],
    image: '/tempo-traveller.webp',
    description:
      'A large-capacity vehicle suitable for groups of 10–17 people. Equipped with AC and comfortable seating. Ideal for pilgrimage tours to Deoghar, Parasnath, or tourist trips to Puri, Digha, and other destinations.',
    icon: '🚌',
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}
