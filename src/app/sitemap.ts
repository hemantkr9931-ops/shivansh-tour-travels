// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import { getIndexedRoutes } from '@/data/routes';
import { getIndexedCities } from '@/data/cities';

const BASE_URL = SITE_CONFIG.url;
const SERVICE_SLUGS = [
  'local-taxi',
  'outstation-taxi',
  'one-way-taxi',
  'round-trip-taxi',
  'airport-taxi',
  'corporate-travel',
  'wedding-car-rental',
  'tempo-traveller',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/routes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/fleet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/fare-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/refund-cancellation-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Route pages
  const routePages: MetadataRoute.Sitemap = getIndexedRoutes().map((route) => ({
    url: `${BASE_URL}/routes/${route.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = getIndexedCities().map((city) => ({
    url: `${BASE_URL}/cities/${city.state}/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: city.priority,
  }));

  return [...staticPages, ...servicePages, ...routePages, ...cityPages];
}
