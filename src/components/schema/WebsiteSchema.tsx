// src/components/schema/WebsiteSchema.tsx
// WebSite schema with SearchAction — enables Google Sitelinks Search Box in results
import { SITE_CONFIG } from '@/lib/config';

export default function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    // Sitelinks Search Box — if Google chooses to display it
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/routes?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
