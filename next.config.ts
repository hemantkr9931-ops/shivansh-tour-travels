import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    dangerouslyAllowSVG: false,
  },
  // Compression
  compress: true,
  // Power By header
  poweredByHeader: false,
  // Strict Mode for React
  reactStrictMode: true,
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self), payment=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          // Cross-Origin-Opener-Policy — fixes Lighthouse COOP warning
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          // Content-Security-Policy — fixes Lighthouse CSP/XSS warnings
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com https://www.google.com https://lh3.googleusercontent.com",
              "frame-src https://www.google.com https://maps.google.com",
              "connect-src 'self' https://maps.googleapis.com https://www.google-analytics.com https://analytics.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://wa.me",
            ].join('; '),
          },
        ],
      },
      // Long-cache for Next.js static chunks (immutable — hash changes on rebuild)
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache public images for 30 days
      {
        source: '/(.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|woff2))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
  // Redirects — add permanent redirects here if URLs change
  async redirects() {
    return [];
  },
};

export default nextConfig;
