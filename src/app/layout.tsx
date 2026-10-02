import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import FloatingButtons from '@/components/ui/FloatingButtons';
import AnalyticsScript from '@/components/AnalyticsScript';
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Jamshedpur Taxi & Cab Service`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Jamshedpur taxi service',
    'Jamshedpur cab service',
    'Shivansh Tour Travel',
    'taxi service in Jamshedpur',
    'cab service Jamshedpur',
    'outstation taxi Jamshedpur',
    'Jamshedpur to Ranchi cab',
    'airport taxi Jamshedpur',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} | Reliable Cab & Taxi in Jamshedpur`,
    description: SITE_CONFIG.description,
    images: [
      {
        // Brand logo used as OG/social share image
        url: '/shivansh tour & travel logo.jpeg',
        width: 512,
        height: 512,
        alt: 'Shivansh Tour & Travel — Jamshedpur Taxi Service Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${SITE_CONFIG.name} | Jamshedpur Taxi & Cab`,
    description: SITE_CONFIG.description,
    images: ['/shivansh tour & travel logo.jpeg'],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: SITE_CONFIG.analytics.gscVerification || undefined,
  },
  icons: {
    icon: [
      // Brand logo as favicon — Next.js will serve this
      { url: '/shivansh tour & travel logo.jpeg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/shivansh tour & travel logo.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/shivansh tour & travel logo.jpeg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Brand favicon — overrides default Next.js favicon */}
        <link rel="icon" href="/shivansh tour %26 travel logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/shivansh tour %26 travel logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/shivansh tour %26 travel logo.jpeg" />
      </head>
      <body>
        {/* Global Structured Data */}
        <OrganizationSchema />
        <LocalBusinessSchema />

        {/* Site Layout */}
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />

        {/* Floating buttons — Back to Top (left) + Call/WhatsApp (right) */}
        <FloatingButtons />



        {/* Analytics (only loads if configured) */}
        <AnalyticsScript />
      </body>
    </html>
  );
}
