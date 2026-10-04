// src/app/robots.ts
// NOTE: 'host' directive is Yandex-only — Googlebot warns and ignores it.
// Removed to keep robots.txt clean and warning-free in Google Search Console.
import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    // 'host' intentionally omitted — not a valid Googlebot directive (Yandex only)
    // Google Search Console warns: "Rule ignored by Googlebot (line N)"
  };
}
