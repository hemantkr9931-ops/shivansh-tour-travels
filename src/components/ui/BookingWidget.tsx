'use client';
import { useState } from 'react';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';

interface BookingWidgetProps {
  defaultPickup?: string;
  defaultDrop?: string;
  title?: string;
  defaultService?: string;
}

const TRIP_TYPES = [
  { v: 'one-way',    icon: '➡️',  l: 'One Way' },
  { v: 'round-trip', icon: '🔄',  l: 'Round Trip' },
  { v: 'local',      icon: '🏙️', l: 'Local Hire' },
  { v: 'airport',    icon: '✈️',  l: 'Airport' },
];

const VEHICLES = [
  { v: 'sedan',           icon: '🚗', l: 'Sedan',           sub: 'Dzire / Amaze' },
  { v: 'muv',             icon: '🚐', l: 'MUV',             sub: 'Ertiga' },
  { v: 'suv',             icon: '🚙', l: 'Innova',          sub: 'Innova Crysta' },
  { v: 'premium-suv',     icon: '✨', l: 'Premium',         sub: 'Innova Crysta AC' },
  { v: 'tempo-traveller', icon: '🚌', l: 'Tempo Traveller', sub: '12–17 Seater' },
];

export default function BookingWidget({
  defaultPickup = '',
  defaultDrop = '',
  title = 'Book Your Cab',
  defaultService,
}: BookingWidgetProps) {
  const getInitialTripType = () => {
    if (!defaultService) return 'one-way';
    if (defaultService.includes('local')) return 'local';
    if (defaultService.includes('airport')) return 'airport';
    if (defaultService.includes('round')) return 'round-trip';
    return 'one-way';
  };

  const [form, setForm] = useState({
    pickup: defaultPickup,
    drop: defaultDrop,
    date: '',
    time: '',
    tripType: getInitialTripType(),
    vehicle: 'sedan',
    name: '',
    phone: '',
  });

  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.pickup.trim()) e.pickup = 'Required';
    if (!form.drop.trim()) e.drop = 'Required';
    if (form.phone && !/^[\d\s+\-()]{7,15}$/.test(form.phone)) e.phone = 'Invalid number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const tripLabel = TRIP_TYPES.find((t) => t.v === form.tripType)?.l || form.tripType;
    const vehicleLabel = VEHICLES.find((v) => v.v === form.vehicle)?.l || form.vehicle;
    const msg = `Hello Shivansh Tour & Travel! 🙏\n\n📋 *Cab Booking Request*\n📍 Pickup: ${form.pickup || '-'}\n🏁 Drop: ${form.drop || '-'}\n📅 Date: ${form.date || 'Not specified'}  ⏰ Time: ${form.time || 'Not specified'}\n🔄 Trip: ${tripLabel}\n🚗 Vehicle: ${vehicleLabel}\n👤 Name: ${form.name || '-'}\n📞 Phone: ${form.phone || '-'}\n\nPlease confirm fare & availability. Thank you!`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
    }, 300);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bw-card">
      {/* ── Header ── */}
      <div className="bw-header">
        <div className="bw-header-icon">🚕</div>
        <div className="bw-header-text">
          <span className="bw-title">{title}</span>
          <span className="bw-sub">24/7 · Jamshedpur &amp; All Routes</span>
        </div>
        <div className="bw-badges">
          <span>✅ No Hidden Charges</span>
          <span>⚡ Instant Confirm</span>
        </div>
      </div>

      <form onSubmit={handleWhatsApp} noValidate className="bw-body">

        {/* ── Trip Type pills ── */}
        <div className="bw-field">
          <label className="bw-label">Trip Type</label>
          <div className="bw-trip-grid">
            {TRIP_TYPES.map(({ v, icon, l }) => (
              <button
                key={v}
                type="button"
                onClick={() => update('tripType', v)}
                className={`bw-trip-btn${form.tripType === v ? ' active' : ''}`}
              >
                <span className="bw-trip-icon">{icon}</span>
                <span>{l}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Pickup + Drop ── */}
        <div className="bw-row-2">
          <div className="bw-field">
            <label className="bw-label" htmlFor="bk-pickup">📍 Pickup</label>
            <input
              id="bk-pickup"
              className={`bw-input${errors.pickup ? ' bw-input-err' : ''}`}
              type="text"
              placeholder="e.g. Bistupur, Jamshedpur"
              value={form.pickup}
              onChange={(e) => { update('pickup', e.target.value); if (errors.pickup) setErrors((p) => ({ ...p, pickup: '' })); }}
              autoComplete="off"
            />
            {errors.pickup && <span className="bw-err">{errors.pickup}</span>}
          </div>
          <div className="bw-field">
            <label className="bw-label" htmlFor="bk-drop">🏁 Drop</label>
            <input
              id="bk-drop"
              className={`bw-input${errors.drop ? ' bw-input-err' : ''}`}
              type="text"
              placeholder="e.g. Ranchi Airport"
              value={form.drop}
              onChange={(e) => { update('drop', e.target.value); if (errors.drop) setErrors((p) => ({ ...p, drop: '' })); }}
              autoComplete="off"
            />
            {errors.drop && <span className="bw-err">{errors.drop}</span>}
          </div>
        </div>

        {/* ── Date + Time ── */}
        <div className="bw-row-2">
          <div className="bw-field">
            <label className="bw-label" htmlFor="bk-date">📅 Date</label>
            <input
              id="bk-date"
              className="bw-input"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={form.date}
              onChange={(e) => update('date', e.target.value)}
            />
          </div>
          <div className="bw-field">
            <label className="bw-label" htmlFor="bk-time">⏰ Time</label>
            <input
              id="bk-time"
              className="bw-input"
              type="time"
              value={form.time}
              onChange={(e) => update('time', e.target.value)}
            />
          </div>
        </div>

        {/* ── Vehicle ── */}
        <div className="bw-field">
          <label className="bw-label">🚗 Vehicle</label>
          <div className="bw-vehicle-grid">
            {VEHICLES.map(({ v, icon, l, sub }) => (
              <button
                key={v}
                type="button"
                onClick={() => update('vehicle', v)}
                className={`bw-vehicle-btn${form.vehicle === v ? ' active' : ''}`}
              >
                <span className="bw-vehicle-icon">{icon}</span>
                <span className="bw-vehicle-name">{l}</span>
                <span className="bw-vehicle-sub">{sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Name + Phone ── */}
        <div className="bw-row-2">
          <div className="bw-field">
            <label className="bw-label" htmlFor="bk-name">👤 Name</label>
            <input
              id="bk-name"
              className="bw-input"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
            />
          </div>
          <div className="bw-field">
            <label className="bw-label" htmlFor="bk-phone">📞 Phone</label>
            <input
              id="bk-phone"
              className={`bw-input${errors.phone ? ' bw-input-err' : ''}`}
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={(e) => { update('phone', e.target.value); if (errors.phone) setErrors((p) => ({ ...p, phone: '' })); }}
            />
            {errors.phone && <span className="bw-err">{errors.phone}</span>}
          </div>
        </div>

        {/* ── Submit ── */}
        <div className="bw-actions">
          <button
            type="submit"
            id="booking-whatsapp-submit"
            className={`bw-submit${submitted ? ' bw-submit-sent' : ''}`}
          >
            {submitted ? (
              <>✅ Opening WhatsApp…</>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Booking via WhatsApp
              </>
            )}
          </button>
          <a href={getCallLink()} id="booking-call-btn" className="bw-call-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {SITE_CONFIG.phone}
          </a>
        </div>

      </form>
    </div>
  );
}
