'use client';
import { useState, useEffect, useRef } from 'react';

const SLIDES = [
  '/shivansh hero bg1.png',
  '/shivansh hero bg2.png',
  '/shivansh hero bg3.png',
];

const INTERVAL_MS = 2000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      setTransitioning(true);
      timerRef.current = setTimeout(() => {
        setCurrent((c) => (c + 1) % SLIDES.length);
        setNext((c) => (c + 2) % SLIDES.length);
        setTransitioning(false);
      }, 800); // crossfade duration
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
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Current slide */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${SLIDES[current]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 0.8s ease-in-out',
          opacity: transitioning ? 0 : 1,
        }}
      />
      {/* Next slide (pre-loaded underneath) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${SLIDES[next]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 0.8s ease-in-out',
          opacity: transitioning ? 1 : 0,
        }}
      />
      {/* Dark overlay so text stays readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(10,22,40,0.82) 0%, rgba(21,43,90,0.72) 60%, rgba(10,22,40,0.68) 100%)',
        }}
      />
    </div>
  );
}
