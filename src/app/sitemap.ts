// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import { getIndexedRoutes } from '@/data/routes';
import { getIndexedCities } from '@/data/cities';

const BASE_URL = SITE_CONFIG.url;

// All service slugs available on service-specific city pages
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

// High-priority cities that get weekly change frequency (main hubs)
const HIGH_PRIORITY_CITY_IDS = new Set([
  'jamshedpur', 'ranchi', 'kolkata', 'dhanbad', 'bokaro', 'deoghar',
  'bhubaneswar', 'puri', 'patna', 'howrah', 'bodh-gaya', 'rajgir', 'nalanda',
  'sonari', 'bistupur', 'adityapur', 'mango',
]);

// High-priority routes (most-searched corridors)
const HIGH_PRIORITY_ROUTE_SLUGS = new Set([
  'jamshedpur-to-ranchi', 'ranchi-to-jamshedpur',
  'jamshedpur-to-kolkata', 'kolkata-to-jamshedpur',
  'jamshedpur-to-dhanbad', 'dhanbad-to-jamshedpur',
  'jamshedpur-to-bokaro', 'bokaro-to-jamshedpur',
  'jamshedpur-to-deoghar', 'deoghar-to-jamshedpur',
  'jamshedpur-to-bhubaneswar', 'bhubaneswar-to-jamshedpur',
  'jamshedpur-to-puri', 'puri-to-jamshedpur',
  'jamshedpur-to-patna', 'patna-to-jamshedpur',
  'jamshedpur-to-howrah', 'howrah-to-jamshedpur',
  'jamshedpur-to-bodh-gaya', 'bodh-gaya-to-jamshedpur',
  'ranchi-to-kolkata', 'kolkata-to-ranchi',
  'ranchi-to-patna', 'patna-to-ranchi',
  'ranchi-to-bodh-gaya', 'bodh-gaya-to-ranchi',
  'jamshedpur-to-keonjhar', 'jamshedpur-to-baripada',
  'jamshedpur-to-rajgir', 'jamshedpur-to-nalanda',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const cities = getIndexedCities();
  const routes = getIndexedRoutes();

  // 1. Static core pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                 lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/routes`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/cities`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/fleet`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/fare-calculator`,            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`,             lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/refund-cancellation-policy`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  // 2. Service landing pages — /[serviceSlug]
  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 3. Route pages — /routes/[slug]
  const routePages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}/routes/${route.slug}`,
    lastModified: now,
    changeFrequency: (
      HIGH_PRIORITY_ROUTE_SLUGS.has(route.slug) ? 'weekly' : 'monthly'
    ) as 'weekly' | 'monthly',
    priority: route.priority,
  }));

  // 4. City pages — /cities/[state]/[slug]
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/cities/${city.state}/${city.slug}`,
    lastModified: now,
    changeFrequency: (
      HIGH_PRIORITY_CITY_IDS.has(city.id) ? 'weekly' : 'monthly'
    ) as 'weekly' | 'monthly',
    priority: city.priority,
  }));

  // 5. City + Service pages — /cities/[state]/[slug]/[serviceSlug]
  //    Only include service sub-pages for services a city actually provides
  const cityServicePages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    city.services
      .filter((svc) => SERVICE_SLUGS.includes(svc))
      .map((svc) => ({
        url: `${BASE_URL}/cities/${city.state}/${city.slug}/${svc}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: Math.max(0.4, parseFloat((city.priority - 0.1).toFixed(2))),
      }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...routePages,
    ...cityPages,
    ...cityServicePages,
  ];
}
