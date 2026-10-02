// src/data/fares.ts
// Approximate fare configuration — edit base rates here to update all fare calculations.
// These are estimates only. Final fare depends on route, date, vehicle availability,
// tolls, driver allowance, and confirmation by Shivansh Tour & Travel.

import type { FareConfig } from './types';

export const fareConfigs: FareConfig[] = [
  {
    vehicleId: 'sedan',
    vehicleName: 'Sedan',
    baseRatePerKm: 12, // ₹ per km (approximate)
    minimumFare: 400,
    nightChargeSurcharge: 10, // 10% extra for travel between 10 PM – 5 AM
    driverAllowancePerDay: 250, // ₹ per night stay for outstation
    localPackages: [
      { name: '4 Hours / 40 KM', basePrice: 700, extraPerKm: 11, extraPerHour: 100 },
      { name: '8 Hours / 80 KM', basePrice: 1200, extraPerKm: 11, extraPerHour: 100 },
    ],
    note:
      'Toll, parking, and state permit charges extra. Driver allowance applicable for outstation trips requiring overnight stay.',
  },
  {
    vehicleId: 'muv',
    vehicleName: 'MUV / MPV',
    baseRatePerKm: 14,
    minimumFare: 500,
    nightChargeSurcharge: 10,
    driverAllowancePerDay: 300,
    localPackages: [
      { name: '4 Hours / 40 KM', basePrice: 900, extraPerKm: 13, extraPerHour: 120 },
      { name: '8 Hours / 80 KM', basePrice: 1500, extraPerKm: 13, extraPerHour: 120 },
    ],
    note:
      'Toll, parking, and state permit charges extra. Driver allowance applicable for outstation trips.',
  },
  {
    vehicleId: 'suv',
    vehicleName: 'SUV',
    baseRatePerKm: 16,
    minimumFare: 600,
    nightChargeSurcharge: 10,
    driverAllowancePerDay: 350,
    localPackages: [
      { name: '4 Hours / 40 KM', basePrice: 1100, extraPerKm: 15, extraPerHour: 140 },
      { name: '8 Hours / 80 KM', basePrice: 1800, extraPerKm: 15, extraPerHour: 140 },
    ],
    note:
      'Toll, parking, and state permit charges extra. Driver allowance applicable for outstation trips.',
  },
  {
    vehicleId: 'premium-suv',
    vehicleName: 'Premium SUV',
    baseRatePerKm: 20,
    minimumFare: 800,
    nightChargeSurcharge: 10,
    driverAllowancePerDay: 400,
    localPackages: [
      { name: '4 Hours / 40 KM', basePrice: 1400, extraPerKm: 18, extraPerHour: 160 },
      { name: '8 Hours / 80 KM', basePrice: 2200, extraPerKm: 18, extraPerHour: 160 },
    ],
    note:
      'Toll, parking, and state permit charges extra. Driver allowance applicable for outstation trips.',
  },
  {
    vehicleId: 'luxury',
    vehicleName: 'Luxury Car',
    baseRatePerKm: 28,
    minimumFare: 1200,
    nightChargeSurcharge: 10,
    driverAllowancePerDay: 500,
    localPackages: [
      { name: '4 Hours / 40 KM', basePrice: 2000, extraPerKm: 25, extraPerHour: 200 },
      { name: '8 Hours / 80 KM', basePrice: 3200, extraPerKm: 25, extraPerHour: 200 },
    ],
    note:
      'Luxury vehicles subject to availability. Please confirm in advance. Toll, parking, and state permit charges extra.',
  },
  {
    vehicleId: 'tempo-traveller',
    vehicleName: 'Tempo Traveller',
    baseRatePerKm: 22,
    minimumFare: 1500,
    nightChargeSurcharge: 10,
    driverAllowancePerDay: 500,
    localPackages: [
      { name: '8 Hours / 80 KM', basePrice: 3000, extraPerKm: 20, extraPerHour: 250 },
    ],
    note:
      'Capacity 12–17 seats. Toll, parking, and state permit charges extra. Driver allowance applicable.',
  },
];

export function getFareConfig(vehicleId: string): FareConfig | undefined {
  return fareConfigs.find((f) => f.vehicleId === vehicleId);
}

/**
 * Calculate an approximate one-way fare.
 * Returns an object with estimated fare and breakdown notes.
 * ALWAYS label output as "estimated" — not a guaranteed quote.
 */
export function calculateEstimatedFare(
  vehicleId: string,
  distanceKm: number,
  isRoundTrip: boolean = false
): {
  estimatedFare: number;
  vehicleName: string;
  distanceKm: number;
  ratePerKm: number;
  isRoundTrip: boolean;
  note: string;
} | null {
  const config = getFareConfig(vehicleId);
  if (!config) return null;

  const baseDistance = isRoundTrip ? distanceKm * 2 : distanceKm;
  const rawFare = baseDistance * config.baseRatePerKm;
  const estimatedFare = Math.max(rawFare, config.minimumFare);

  return {
    estimatedFare: Math.ceil(estimatedFare / 10) * 10, // round to nearest ₹10
    vehicleName: config.vehicleName,
    distanceKm: baseDistance,
    ratePerKm: config.baseRatePerKm,
    isRoundTrip,
    note: config.note,
  };
}
