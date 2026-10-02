'use client';

interface MapEmbedProps {
  /** For mode=place: search query e.g. "Jamshedpur,+Jharkhand,+India" */
  query?: string;
  /** For mode=directions: origin city */
  origin?: string;
  /** For mode=directions: destination city */
  destination?: string;
  /** Optional accessibility label */
  label?: string;
  /** Height of embedded map — default 400px */
  height?: number;
  /** Show "Open in Google Maps" button below map */
  showOpenLink?: boolean;
  /**
   * Zoom level (place mode only). 1=world … 21=building.
   * 10–11 = city level (good default for city pages)
   * 8 = district/region level (good for route overview)
   */
  zoom?: number;
}

/**
 * Renders a live Google Maps iframe (no API key required).
 * - Pass origin + destination for a route/directions map.
 * - Pass query for a single-location city map.
 */
export default function MapEmbed({
  query,
  origin,
  destination,
  label,
  height = 400,
  showOpenLink = true,
  zoom = 11,
}: MapEmbedProps) {
  let embedSrc: string;
  let openUrl: string;

  if (origin && destination) {
    // Directions mode — shows the actual route line between cities
    const encOrigin = encodeURIComponent(origin);
    const encDest   = encodeURIComponent(destination);
    embedSrc = `https://maps.google.com/maps?saddr=${encOrigin}&daddr=${encDest}&output=embed&hl=en`;
    openUrl  = `https://www.google.com/maps/dir/${encOrigin}/${encDest}`;
  } else {
    // Place mode — show a city/location with specified zoom
    const q   = (query ?? '').replace(/\+/g, ' ');
    const enc = encodeURIComponent(q);
    embedSrc  = `https://maps.google.com/maps?q=${enc}&output=embed&z=${zoom}&hl=en`;
    openUrl   = `https://www.google.com/maps/search/${encodeURIComponent(query ?? '')}`;
  }

  const ariaLabel = label ?? (origin && destination
    ? `Route map: ${origin} to ${destination}`
    : `Map — ${(query ?? '').replace(/\+/g, ' ')}`);

  return (
    <div style={{
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(10,22,40,0.15)',
      border: '2px solid rgba(245,166,35,0.18)',
    }}>
      <iframe
        src={embedSrc}
        width="100%"
        height={height}
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={ariaLabel}
        aria-label={ariaLabel}
      />
      {showOpenLink && (
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: 'var(--gradient-navy)',
            color: 'white',
            fontWeight: 600,
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Open in Google Maps
        </a>
      )}
    </div>
  );
}
