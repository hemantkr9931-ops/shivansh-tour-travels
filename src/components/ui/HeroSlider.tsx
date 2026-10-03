'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SLIDES = [
  { src: '/shivansh hero bg1.webp', alt: 'Shivansh Tour & Travel — Jamshedpur cab service' },
  { src: '/shivansh hero bg2.webp', alt: 'Outstation taxi from Jamshedpur to Ranchi' },
  { src: '/shivansh hero bg3.webp', alt: 'Innova & Ertiga cab for outstation trips' },
];

const INTERVAL_MS = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [next, setNext]       = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      setTransitioning(true);
      timerRef.current = setTimeout(() => {
        setCurrent((c) => (c + 1) % SLIDES.length);
        setNext((c)    => (c + 2) % SLIDES.length);
        setTransitioning(false);
      }, 600);
    };
    const interval = setInterval(tick, INTERVAL_MS);
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}
    >
      {/* ── Current slide — priority on index-0 for instant LCP preload ── */}
      {SLIDES.map((slide, idx) => {
        const isCurrent = idx === current;
        const isNext    = idx === next;
        if (!isCurrent && !isNext) return null;
        return (
          <div
            key={slide.src}
            style={{
              position: 'absolute',
              inset: 0,
              transition: 'opacity 0.8s ease-in-out',
              opacity: isCurrent ? (transitioning ? 0 : 1) : (transitioning ? 1 : 0),
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              // First image: priority preload + high fetchPriority for LCP
              priority={idx === 0}
              fetchPriority={idx === 0 ? 'high' : 'auto'}
              loading={idx === 0 ? 'eager' : 'lazy'}
              quality={80}
            />
          </div>
        );
      })}

      {/* Dark overlay so text stays readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(10,22,40,0.82) 0%, rgba(21,43,90,0.72) 60%, rgba(10,22,40,0.68) 100%)',
          zIndex: 1,
        }}
      />
    </div>
  );
}

