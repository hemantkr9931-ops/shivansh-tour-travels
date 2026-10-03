'use client';
import { useState } from 'react';
import { SITE_CONFIG, getWhatsAppLink, getCallLink } from '@/lib/config';

interface BookingWidgetProps {
  defaultPickup?: string;
  defaultDrop?: string;
  title?: string;
  defaultService?: string;
}

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

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.pickup.trim()) e.pickup = 'Pickup location is required';
    if (!form.drop.trim()) e.drop = 'Drop location is required';
    if (form.phone && !/^[\d\s+\-()]{7,15}$/.test(form.phone)) {
      e.phone = 'Enter a valid phone number';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const tripLabels: Record<string, string> = {
      'one-way': 'One Way', 'round-trip': 'Round Trip',
      'local': 'Local Rental', 'airport': 'Airport Transfer',
    };
    const vehicleLabels: Record<string, string> = {
      sedan: 'Sedan (Dzire/Amaze)', muv: 'MUV (Ertiga)',
      suv: 'SUV (Innova)', 'premium-suv': 'Innova Crysta',
      'tempo-traveller': 'Tempo Traveller',
    };
    const msg = `Hello Shivansh Tour & Travel! 🙏\n\n📋 *Booking Request*\n📍 Pickup: ${form.pickup || '-'}\n🏁 Drop: ${form.drop || '-'}\n📅 Date: ${form.date || '-'}  ⏰ Time: ${form.time || '-'}\n🔄 Trip: ${tripLabels[form.tripType] || form.tripType}\n🚗 Vehicle: ${vehicleLabels[form.vehicle] || form.vehicle}\n👤 Name: ${form.name || '-'}\n📞 Phone: ${form.phone || '-'}\n\nPlease confirm fare & availability. Thank you!`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };


  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: '10px',
    border: '1.5px solid #e2e8f0', fontSize: '14px', fontWeight: 500,
    outline: 'none', boxSizing: 'border-box' as const,
    background: 'white', color: '#1a202c', transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block', fontSize: '11px', fontWeight: 700,
    color: '#64748b', textTransform: 'uppercase' as const,
    letterSpacing: '0.06em', marginBottom: '5px',
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px -10px rgba(10,22,40,0.18), 0 0 0 1px rgba(10,22,40,0.06)',
    }}>
      {/* Header bar */}
      <div style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a3358 100%)',
        padding: '20px 24px',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #ffc107, #ff9800)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', flexShrink: 0,
        }}>🚕</div>
        <div>
          <h2 style={{ color: 'white', fontSize: '17px', fontWeight: 800, margin: 0 }}>{title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', margin: 0 }}>24/7 • Jamshedpur &amp; All Routes</p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {['✅ No Hidden Charges', '⚡ Instant Confirm'].map(t => (
            <span key={t} style={{
              padding: '3px 9px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.8)', fontSize: '10px', fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>
      </div>

      <form onSubmit={handleWhatsApp} noValidate>
        <div style={{ padding: '20px 24px' }}>

          {/* Row 1: Pickup + Drop */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            <div>
              <label style={labelStyle} htmlFor="bk-pickup">📍 Pickup Location</label>
              <input id="bk-pickup"
                style={{ ...inputStyle, borderColor: errors.pickup ? '#ef4444' : '#e2e8f0' }}
                type="text"
                placeholder="e.g. Bistupur, Jamshedpur"
                value={form.pickup} onChange={e => { update('pickup', e.target.value); if (errors.pickup) setErrors(p => ({...p, pickup: ''})); }} required />
              {errors.pickup && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '3px' }}>{errors.pickup}</p>}
            </div>
            <div>
              <label style={labelStyle} htmlFor="bk-drop">🏁 Drop Location</label>
              <input id="bk-drop"
                style={{ ...inputStyle, borderColor: errors.drop ? '#ef4444' : '#e2e8f0' }}
                type="text"
                placeholder="e.g. Ranchi Airport"
                value={form.drop} onChange={e => { update('drop', e.target.value); if (errors.drop) setErrors(p => ({...p, drop: ''})); }} required />
              {errors.drop && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '3px' }}>{errors.drop}</p>}
            </div>
          </div>

          {/* Row 2: Date + Time + Trip Type */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            <div>
              <label style={labelStyle} htmlFor="bk-date">📅 Date</label>
              <input id="bk-date" style={inputStyle} type="date"
                min={new Date().toISOString().split('T')[0]}
                value={form.date} onChange={e => update('date', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="bk-time">⏰ Time</label>
              <input id="bk-time" style={inputStyle} type="time"
                value={form.time} onChange={e => update('time', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="bk-trip">🔄 Trip Type</label>
              <select id="bk-trip" style={inputStyle}
                value={form.tripType} onChange={e => update('tripType', e.target.value)}>
                <option value="one-way">One Way</option>
                <option value="round-trip">Round Trip</option>
                <option value="local">Local Rental</option>
                <option value="airport">Airport Transfer</option>
              </select>
            </div>
          </div>

          {/* Row 3: Vehicle pills */}
          <div style={{ marginBottom: '12px' }}>
            <label style={labelStyle}>🚗 Vehicle Type</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { v: 'sedan', l: '🚗 Sedan' },
                { v: 'muv', l: '🚐 MUV' },
                { v: 'suv', l: '🚙 SUV (Innova)' },
                { v: 'premium-suv', l: '✨ Innova Crysta' },
                { v: 'tempo-traveller', l: '🚌 Tempo Traveller' },
              ].map(({ v, l }) => (
                <button key={v} type="button" onClick={() => update('vehicle', v)}
                  style={{
                    padding: '7px 14px', borderRadius: '20px', cursor: 'pointer',
                    border: '1.5px solid ' + (form.vehicle === v ? '#0a1628' : '#e2e8f0'),
                    background: form.vehicle === v ? '#0a1628' : 'white',
                    color: form.vehicle === v ? 'white' : '#374151',
                    fontSize: '12px', fontWeight: 700, transition: 'all 0.18s',
                    fontFamily: 'inherit',
                  }}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Row 4: Name + Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle} htmlFor="bk-name">👤 Your Name</label>
              <input id="bk-name" style={inputStyle} type="text"
                placeholder="Full name"
                value={form.name} onChange={e => update('name', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="bk-phone">📞 Phone Number</label>
              <input id="bk-phone" style={inputStyle} type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone} onChange={e => update('phone', e.target.value)} />
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
            <button type="submit" id="booking-whatsapp-submit"
              style={{
                padding: '14px', borderRadius: '12px', border: 'none',
                background: 'linear-gradient(135deg, #25d366, #128c7e)',
                color: 'white', fontSize: '15px', fontWeight: 800,
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '8px',
                boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
                fontFamily: 'inherit',
              }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </button>
            <a href={getCallLink()} id="booking-call-btn"
              style={{
                padding: '14px', borderRadius: '12px',
                border: '2px solid #0a1628', color: '#0a1628',
                fontSize: '14px', fontWeight: 800, textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '6px', transition: 'all 0.18s', textAlign: 'center' as const,
              }}>
              📞 {SITE_CONFIG.phone}
            </a>
          </div>

        </div>
      </form>
    </div>
  );
}
