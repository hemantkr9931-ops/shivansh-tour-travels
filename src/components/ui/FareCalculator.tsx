'use client';
import { useState } from 'react';
import { fareConfigs, calculateEstimatedFare } from '@/data/fares';
import { getWhatsAppLink } from '@/lib/config';

interface FareCalculatorProps {
  defaultDistanceKm?: number;
  defaultVehicle?: string;
  defaultIsRoundTrip?: boolean;
  compact?: boolean;
}

export default function FareCalculator({
  defaultDistanceKm = 0,
  defaultVehicle = 'sedan',
  defaultIsRoundTrip = false,
  compact = false,
}: FareCalculatorProps) {
  const [distanceKm, setDistanceKm] = useState<string>(
    defaultDistanceKm > 0 ? String(defaultDistanceKm) : ''
  );
  const [vehicleId, setVehicleId] = useState(defaultVehicle);
  const [isRoundTrip, setIsRoundTrip] = useState(defaultIsRoundTrip);
  const [result, setResult] = useState<ReturnType<typeof calculateEstimatedFare> | null>(null);
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const km = parseFloat(distanceKm);
    if (!km || km <= 0) return;
    const res = calculateEstimatedFare(vehicleId, km, isRoundTrip);
    setResult(res);
    setCalculated(true);
  };

  const whatsappMsg = result
    ? `Hello Shivansh Tour & Travels,\n\nI used the fare calculator and got an estimate:\n- Vehicle: ${result.vehicleName}\n- Distance: ~${result.distanceKm} km\n- Trip type: ${isRoundTrip ? 'Round Trip' : 'One Way'}\n- Estimated fare: ₹${result.estimatedFare.toLocaleString('en-IN')}\n\nCould you please confirm the actual fare and availability?`
    : '';

  return (
    <div className={compact ? '' : 'booking-widget'}>
      {!compact && (
        <div className="booking-widget-title">
          🧮 Fare Estimator
        </div>
      )}
      <form onSubmit={handleCalculate}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px',
          }}
        >
          {/* Vehicle */}
          <div className="form-group">
            <label className="form-label" htmlFor="calc-vehicle">Vehicle Type</label>
            <select
              id="calc-vehicle"
              className="form-control"
              value={vehicleId}
              onChange={(e) => setVehicleId(e.target.value)}
              required
            >
              {fareConfigs.map((c) => (
                <option key={c.vehicleId} value={c.vehicleId}>
                  {c.vehicleName} (₹{c.baseRatePerKm}/km)
                </option>
              ))}
            </select>
          </div>

          {/* Distance */}
          <div className="form-group">
            <label className="form-label" htmlFor="calc-distance">Distance (KM)</label>
            <input
              id="calc-distance"
              type="number"
              className="form-control"
              placeholder="Enter distance"
              min="1"
              max="2000"
              step="1"
              value={distanceKm}
              onChange={(e) => setDistanceKm(e.target.value)}
              required
            />
          </div>

          {/* Trip type */}
          <div className="form-group">
            <label className="form-label" htmlFor="calc-trip">Trip Type</label>
            <select
              id="calc-trip"
              className="form-control"
              value={isRoundTrip ? 'round' : 'one-way'}
              onChange={(e) => setIsRoundTrip(e.target.value === 'round')}
            >
              <option value="one-way">One Way</option>
              <option value="round">Round Trip</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-navy"
          style={{ width: '100%', marginTop: '16px', padding: '12px 24px' }}
          id="calc-submit-btn"
        >
          Calculate Estimated Fare
        </button>
      </form>

      {calculated && result && (
        <div className="fare-result">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '16px',
            }}
          >
            <div>
              <div className="fare-result-amount">
                ₹{result.estimatedFare.toLocaleString('en-IN')}
              </div>
              <div className="fare-result-label">
                Estimated {result.isRoundTrip ? 'Round Trip' : 'One-Way'} fare
              </div>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-gray-500)', textAlign: 'right' }}>
              <div>Vehicle: <strong>{result.vehicleName}</strong></div>
              <div>Distance: ~{result.distanceKm} km</div>
              <div>Rate: ₹{result.ratePerKm}/km</div>
            </div>
          </div>

          <div className="fare-disclaimer">
            ⚠️ This is an <strong>estimated fare only</strong> — not a guaranteed quote. Actual fare depends on route, date, vehicle availability, tolls, parking, and driver allowance. {result.note}
          </div>

          <a
            href={getWhatsAppLink(whatsappMsg)}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%', marginTop: '14px', justifyContent: 'center' }}
            id="calc-whatsapp-btn"
          >
            💬 Confirm Fare on WhatsApp
          </a>
        </div>
      )}

      {calculated && !result && (
        <div style={{ color: 'red', fontSize: '14px', marginTop: '12px' }}>
          Please enter a valid distance to calculate.
        </div>
      )}
    </div>
  );
}
