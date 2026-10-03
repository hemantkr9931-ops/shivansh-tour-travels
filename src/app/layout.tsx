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
    'taxi service in Jamshedpur',
    'cab service in Jamshedpur',
    'taxi in Jamshedpur',
    'Tata Nagar taxi service',
    'taxi in Tata Nagar',
    'Jamshedpur cab booking',
    'Jamshedpur to Ranchi cab',
    'Jamshedpur to Kolkata cab',
    'Jamshedpur to Durgapur cab',
    'Tata to Ranchi cab',
    'Tata to Kolkata cab',
    'Tata Nagar to Ranchi taxi',
    'cab from Jamshedpur to Ranchi',
    'Ranchi taxi service',
    'taxi in Ranchi',
    'cab service in Ranchi',
    'Ranchi to Jamshedpur cab',
    'Ranchi to Kolkata cab',
    'Ranchi airport cab',
    'Birsa Munda Airport taxi',
    'Innova cab Jamshedpur',
    'Innova Crysta Jamshedpur',
    'Innova Crysta Ranchi',
    'outstation taxi Jamshedpur',
    'airport taxi Jamshedpur',
    'Shivansh Tour Travel',
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
    title: `${SITE_CONFIG.name} | Best Cab & Taxi in Jamshedpur, Ranchi`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shivansh Tour & Travel — Jamshedpur Taxi & Cab Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Jamshedpur Taxi & Cab`,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: SITE_CONFIG.analytics.gscVerification || undefined,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16',  type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32',  type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48',  type: 'image/png' },
      { url: '/icon-192x192.png',  sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png',  sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
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
        {/* Preload first hero image (WebP) for LCP — tells browser to fetch before render */}
        <link
          rel="preload"
          as="image"
          href="/shivansh hero bg1.webp"
          fetchPriority="high"
          type="image/webp"
        />
        {/* Brand favicon — all sizes for all browsers & devices */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
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
