// src/app/loading.tsx
// Global loading UI for Next.js App Router navigation

export default function Loading() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f9fafb',
      }}
      aria-label="Loading page content"
      role="status"
    >
      <div style={{ textAlign: 'center' }}>
        {/* Spinner */}
        <div
          style={{
            width: '48px',
            height: '48px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #0a1628',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 16px',
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p
          style={{
            color: '#6b7280',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}
