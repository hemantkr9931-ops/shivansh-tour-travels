// src/data/types.ts
// Strongly typed interfaces for all data entities

export type StateSlug = 'jharkhand' | 'west-bengal' | 'odisha' | 'bihar';

export interface City {
  id: string;
  name: string;
  slug: string;
  state: StateSlug;
  stateName: string;
  isDistrict?: boolean;
  region?: string;
  description: string;
  intro: string; // Unique intro paragraph
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  pickupAreas: string[];
  railwayStation?: string;
  airport?: string;
  nearbyAttractions: string[];
  relatedCityIds: string[];
  popularRouteIds: string[];
  services: string[]; // service slugs
  travelTips: string[];
  faqs: CityFaq[];
  aliases?: string[]; // Other popular names (e.g. Tata, Tata Nagar for Jamshedpur)
  mapQuery: string;
  index: boolean; // Whether to index this page
  priority: number; // Sitemap priority 0.1–1.0
}

export interface CityFaq {
  question: string;
  answer: string;
}

export interface Route {
  id: string;
  slug: string;
  origin: string; // city id
  destination: string; // city id
  originName: string;
  destinationName: string;
  originState: StateSlug;
  destinationState: StateSlug;
  approxDistanceKm: number; // approximate
  approxDurationHours: number; // approximate
  routeHighlights: string[];
  routeDescription: string;
  travelTips: string[];
  services: string[]; // service slugs
  recommendedVehicles: string[]; // vehicle ids
  faqs: RouteFaq[];
  relatedRouteIds: string[];
  relatedCityIds: string[];
  airportRelevance?: string;
  railwayRelevance?: string;
  index: boolean;
  priority: number;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
}

export interface RouteFaq {
  question: string;
  answer: string;
}

export interface Vehicle {
  id: string;
  name: string;
  slug: string;
  category: 'sedan' | 'muv' | 'suv' | 'premium-suv' | 'luxury' | 'tempo-traveller';
  examples: string[];
  passengerCapacity: number;
  luggageCapacity: string;
  isAC: boolean;
  bestFor: string[];
  features: string[];
  image?: string; // path to vehicle photo in /public
  description: string;
  icon: string;
}


export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  faqs: ServiceFaq[];
  relatedServices: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface FareConfig {
  vehicleId: string;
  vehicleName: string;
  baseRatePerKm: number; // ₹ per km — approximate, edit freely
  minimumFare: number; // ₹
  nightChargeSurcharge: number; // % surcharge for night travel
  driverAllowancePerDay: number; // ₹ per day for outstation
  localPackages: LocalPackage[];
  note: string;
}

export interface LocalPackage {
  name: string; // e.g., '4 Hours / 40 KM'
  basePrice: number;
  extraPerKm: number;
  extraPerHour: number;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  state: StateSlug;
  stateName: string;
  description: string;
  intro: string;
  distanceFromJamshedpurKm: number;
  approxDriveHours: number;
  highlights: string[];
  nearbyAttractions: string[];
  bestTime?: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  faqs: DestinationFaq[];
  relatedCityIds: string[];
  mapQuery: string;
  index: boolean;
  priority: number;
}

export interface DestinationFaq {
  question: string;
  answer: string;
}

export interface Airport {
  id: string;
  name: string;
  code: string;
  city: string;
  cityId: string;
  state: StateSlug;
  description: string;
  distanceFromJamshedpurKm: number;
  approxDriveHours: number;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  index: boolean;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  route?: string;
  service?: string;
  review: string;
  rating: number; // 1–5 (only real reviews)
  date: string;
  initials: string;
}
