// src/app/refund-cancellation-policy/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG, getCallLink, getWhatsAppLink } from '@/lib/config';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Shivansh Tour & Travels',
  description: 'Cancellation and refund policy for cab bookings with Shivansh Tour & Travels, Jamshedpur.',
  alternates: { canonical: `${SITE_CONFIG.url}/refund-cancellation-policy` },
  robots: { index: true, follow: false },
};

export default function CancellationPolicyPage() {
  return (
    <>
      <section style={{ background: 'var(--gradient-navy)', padding: '40px 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Cancellation Policy' }]} dark />
          <h1 style={{ marginTop: '16px', fontSize: '2rem', fontWeight: 800, color: 'white' }}>
            Cancellation & Refund Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', marginTop: '6px' }}>
            Last updated: September 2025
          </p>
        </div>
      </section>
      <section className="section section-gray">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', lineHeight: 1.8, color: 'var(--color-gray-700)', fontSize: '15px' }}>
            <div
              style={{
                background: 'rgba(245,166,35,0.08)',
                border: '1px solid rgba(245,166,35,0.25)',
                borderRadius: '10px',
                padding: '14px 18px',
                marginBottom: '24px',
                fontSize: '14px',
              }}
            >
              ⚠️ Our cancellation policy applies to confirmed bookings. We operate as a small, local business — please communicate early if your plans change to minimise inconvenience for both parties.
            </div>

            {[
              {
                title: 'Cancellation by the Passenger',
                content: [
                  'Cancellation 24 hours or more before the scheduled pickup time: No charge; advance amount (if any) refundable.',
                  'Cancellation less than 24 hours before the scheduled pickup: A cancellation charge may apply, depending on the booking and preparation already done.',
                  'No-show (passenger not available at pickup time without prior notice): The full booking amount may be forfeited.',
                ],
              },
              {
                title: 'Cancellation by Shivansh Tour & Travels',
                content: [
                  'If we are unable to fulfil a confirmed booking due to operational issues, we will notify you at the earliest possible time.',
                  'Any advance payment collected will be refunded in full in such cases.',
                ],
              },
              {
                title: 'Refund Process',
                content: [
                  'Refunds (where applicable) will be processed via the original payment method or by mutual agreement (bank transfer, UPI).',
                  'Refund processing time may take 3–7 business days.',
                  'Cash bookings cancelled before the trip: refund at time of cancellation confirmation.',
                ],
              },
              {
                title: 'Mid-Trip Cancellations',
                content: [
                  'If a trip is cancelled after it has begun, fare for the distance already covered is payable.',
                  'Driver allowance or waiting charges (if applicable) for time already expended are payable.',
                ],
              },
              {
                title: 'How to Cancel',
                content: [
                  'To cancel a booking, call or WhatsApp us at +91 7061767617 with your booking details.',
                  'Please cancel as early as possible — this helps us make the vehicle available for other passengers.',
                ],
              },
            ].map((section) => (
              <div key={section.title} style={{ marginBottom: '28px' }}>
                <h2 style={{ color: 'var(--color-navy)', fontWeight: 800, marginBottom: '12px', fontSize: '17px' }}>
                  {section.title}
                </h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {section.content.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{ marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href={getWhatsAppLink('Hello Shivansh Tour & Travels, I need to cancel my booking. Booking details: ')}
                className="btn btn-whatsapp btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Cancel via WhatsApp
              </a>
              <a href={getCallLink()} className="btn btn-navy btn-sm">
                📞 Call to Cancel
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
