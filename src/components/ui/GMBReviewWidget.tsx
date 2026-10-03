'use client';
// src/components/ui/GMBReviewWidget.tsx
// Google My Business Review Widget — shows Google reviews CTA + rating
// Customers can click to see GMB profile and leave a Google review

import { SITE_CONFIG } from '@/lib/config';

interface GMBReviewWidgetProps {
  /** Show the full prominent widget or a compact inline version */
  variant?: 'full' | 'compact' | 'banner';
}

const GoogleLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarRow = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div style={{ display: 'flex', gap: '2px' }} aria-label={`${rating} out of 5 stars`}>
    {[1,2,3,4,5].map(s => (
      <span key={s} style={{ color: s <= rating ? '#f59e0b' : '#e2e8f0', fontSize: `${size}px` }}>★</span>
    ))}
  </div>
);

export default function GMBReviewWidget({ variant = 'full' }: GMBReviewWidgetProps) {
  const gmbLink = SITE_CONFIG.gmb.shareLink;
  const reviewLink = SITE_CONFIG.gmb.shareLink; // share.google link opens review option too

  /* ── COMPACT ──────────────────────────────────────────────── */
  if (variant === 'compact') {
    return (
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        background: 'white', borderRadius: '12px', padding: '10px 16px',
        border: '1px solid #e2e6ee', boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      }}>
        <GoogleLogo size={20} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <StarRow rating={5} size={13} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginLeft: '4px' }}>4.8</span>
          </div>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Google Reviews</span>
        </div>
        <a href={reviewLink} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '12px', fontWeight: 600, color: '#4285F4', textDecoration: 'none', whiteSpace: 'nowrap' }}
          aria-label="Rate us on Google">
          Rate Us →
        </a>
      </div>
    );
  }

  /* ── BANNER ───────────────────────────────────────────────── */
  if (variant === 'banner') {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #1a56db 0%, #4285F4 100%)',
        borderRadius: '16px', padding: '20px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <GoogleLogo size={24} />
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: '15px' }}>
              Satisfied with our service?
            </div>
            <div style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', marginTop: '2px' }}>
              A Google review helps us grow &amp; helps other travellers choose us 🙏
            </div>
          </div>
        </div>
        <a href={reviewLink} target="_blank" rel="noopener noreferrer" id="gmb-review-banner-btn"
          style={{
            background: 'white', color: '#1a56db', padding: '11px 22px', borderRadius: '10px',
            fontWeight: 700, fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '6px',
          }}
          aria-label="Write a Google Review for Shivansh Tour & Travel">
          ⭐ Write a Google Review
        </a>
      </div>
    );
  }

  /* ── FULL (default) ───────────────────────────────────────── */
  return (
    <div style={{
      background: 'white', borderRadius: '20px', padding: '28px',
      border: '1px solid #e2e6ee', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      maxWidth: '560px', margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <GoogleLogo size={36} />
        <div>
          <div style={{ fontWeight: 800, fontSize: '17px', color: '#1a1a1a' }}>{SITE_CONFIG.name}</div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>on Google Maps</div>
        </div>
      </div>

      {/* Rating Row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '14px 16px', background: '#f8f9fb', borderRadius: '12px', marginBottom: '20px',
      }}>
        <span style={{ fontSize: '36px', fontWeight: 900, color: '#1a1a1a', lineHeight: 1 }}>4.8</span>
        <div>
          <StarRow rating={5} size={20} />
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>127+ Google reviews</div>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <a href={gmbLink} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '12px', color: '#4285F4', textDecoration: 'none', fontWeight: 600 }}
            aria-label="View all reviews on Google">
            View all →
          </a>
        </div>
      </div>

      {/* Review Steps */}
      <p style={{ fontSize: '13px', color: '#374151', marginBottom: '10px', fontWeight: 600 }}>
        Leave a Google review in 3 steps:
      </p>
      <ol style={{ fontSize: '13px', color: '#6b7280', paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <li>Click the button below ↓</li>
        <li>Sign in to your Google account</li>
        <li>Rate ⭐⭐⭐⭐⭐ &amp; share your experience</li>
      </ol>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <a href={reviewLink} target="_blank" rel="noopener noreferrer" id="gmb-write-review-btn"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #4285F4 0%, #1a56db 100%)',
            color: 'white', padding: '14px 20px', borderRadius: '12px',
            fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(66,133,244,0.35)',
          }}
          aria-label="Write a Google review for Shivansh Tour & Travel">
          ⭐ Write a Google Review
        </a>
        <a href={gmbLink} target="_blank" rel="noopener noreferrer" id="gmb-view-profile-btn"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            background: 'transparent', color: '#4285F4', padding: '12px 20px', borderRadius: '12px',
            fontWeight: 600, fontSize: '14px', textDecoration: 'none', border: '1.5px solid #4285F4',
          }}
          aria-label="View our Google Business Profile">
          📍 View Our Google Business Profile
        </a>
      </div>
    </div>
  );
}
