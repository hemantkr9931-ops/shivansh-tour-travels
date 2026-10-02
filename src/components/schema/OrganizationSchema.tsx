// src/components/schema/OrganizationSchema.tsx
// UPGRADED: Full Organization schema with sameAs social links + logo
import { SITE_CONFIG } from '@/lib/config';

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: 'Shivansh Tour & Travel',
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/shivansh tour & travel logo.jpeg`,
      width: 512,
      height: 512,
    },
    image: `${SITE_CONFIG.url}/shivansh tour & travel logo.jpeg`,
    description: 'Jamshedpur-based taxi and cab service covering Jharkhand, West Bengal, Odisha and Bihar. Outstation cabs, airport transfers, wedding cars and corporate travel.',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near 11th Phase, Adarsh Nagar, Sonari',
      addressLocality: 'Jamshedpur',
      addressRegion: 'Jharkhand',
      postalCode: '831011',
      addressCountry: 'IN',
    },
    foundingDate: '2018',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'customer service',
        contactOption: 'TollFree',
        areaServed: ['IN'],
        availableLanguage: ['English', 'Hindi'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'reservations',
        areaServed: ['IN'],
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [
      `https://wa.me/91${SITE_CONFIG.phone.replace(/[^0-9]/g, '').slice(-10)}`,
      // Add your actual social URLs below when you create them:
      // 'https://www.facebook.com/shivanshtourandtravel',
      // 'https://www.instagram.com/shivanshtourandtravel',
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
