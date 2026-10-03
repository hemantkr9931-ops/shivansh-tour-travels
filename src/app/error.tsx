// src/app/error.tsx
// Global error boundary for Next.js App Router
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('App Error:', error);
    }
  }, [error]);

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 20px',
        background: '#f9fafb',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '480px' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }} aria-hidden="true">
          ⚠️
        </div>
        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#0a1628',
            marginBottom: '12px',
          }}
        >
          Something went wrong
        </h1>
        <p
          style={{
            color: '#6b7280',
            fontSize: '15px',
            lineHeight: 1.7,
            marginBottom: '28px',
          }}
        >
          We hit an unexpected error. Please try again, or contact us directly to book your cab.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              border: 'none',
              background: '#0a1628',
              color: 'white',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            🔄 Try Again
          </button>
          <a
            href="/"
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              border: '2px solid #0a1628',
              color: '#0a1628',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            🏠 Go Home
          </a>
          <a
            href="https://wa.me/917061767617?text=Hi%2C+I+encountered+an+error+on+your+website."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              border: 'none',
              background: '#25d366',
              color: 'white',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
