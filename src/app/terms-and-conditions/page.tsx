// src/app/terms-and-conditions/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Shivansh Tour & Travel',
  description: 'Terms and conditions for taxi and cab booking with Shivansh Tour & Travel, Jamshedpur.',
  alternates: { canonical: `${SITE_CONFIG.url}/terms-and-conditions` },
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <section style={{ background: 'var(--gradient-navy)', padding: '40px 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} dark />
          <h1 style={{ marginTop: '16px', fontSize: '2rem', fontWeight: 800, color: 'white' }}>
            Terms & Conditions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', marginTop: '6px' }}>
            Last updated: September 2025
          </p>
        </div>
      </section>
      <section className="section section-gray">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', lineHeight: 1.8, color: 'var(--color-gray-700)', fontSize: '15px' }}>
            {[
              {
                title: '1. Booking Confirmation',
                content: 'A booking is confirmed only after explicit verbal or written confirmation from Shivansh Tour & Travel. A booking enquiry (via WhatsApp, phone, or form) does not constitute a confirmed booking.',
              },
              {
                title: '2. Fare Estimates',
                content: 'All fares quoted are estimates unless explicitly stated as a final confirmed price. Actual fares depend on the exact route, distance, vehicle, tolls, parking, state permits, and driver allowance.',
              },
              {
                title: '3. Tolls & Additional Charges',
                content: 'Toll charges, state permit fees, parking charges, and driver allowance (for multi-day outstation trips) are payable extra by the passenger unless specifically included in a quoted fare.',
              },
              {
                title: '4. Punctuality & Delays',
                content: 'While we make every effort to be punctual, delays due to traffic, road conditions, or unforeseen circumstances may occur. We will communicate proactively in such situations.',
              },
              {
                title: '5. Vehicle Substitution',
                content: 'In rare cases of operational necessity, a different vehicle of equivalent or higher category may be arranged. We will notify you in advance if possible.',
              },
              {
                title: '6. Passenger Responsibility',
                content: 'Passengers are responsible for keeping the vehicle interior clean. Damage caused by passengers may be charged. All passengers must comply with applicable traffic laws (seat belts, child restraints).',
              },
              {
                title: '7. Luggage',
                content: 'Luggage is carried at the passenger\'s risk. We are not responsible for loss or damage to personal belongings.',
              },
              {
                title: '8. Cancellation',
                content: 'Please refer to our Cancellation & Refund Policy for cancellation terms.',
              },
              {
                title: '9. Liability',
                content: 'Shivansh Tour & Travel\'s liability is limited to the confirmed fare paid. We are not liable for indirect, consequential, or incidental damages arising from travel delays or changes.',
              },
              {
                title: '10. Jurisdiction',
                content: 'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Jamshedpur, Jharkhand.',
              },
            ].map((section) => (
              <div key={section.title} style={{ marginBottom: '24px' }}>
                <h2 style={{ color: 'var(--color-navy)', fontWeight: 800, marginBottom: '8px', fontSize: '17px' }}>
                  {section.title}
                </h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
