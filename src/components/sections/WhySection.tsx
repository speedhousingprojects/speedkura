'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Trees, Building2, TrendingUp, Check } from 'lucide-react';
import { WHY_SECTION } from '@/data/content';

interface WhySectionProps {
  onEnquire?: (src: string) => void;
}

const ICONS: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6 text-[#3A1C11]" />,
  Trees: <Trees className="w-6 h-6 text-[#3A1C11]" />,
  Building2: <Building2 className="w-6 h-6 text-[#3A1C11]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#3A1C11]" />,
};

export default function WhySection({ onEnquire }: WhySectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = WHY_SECTION.cards.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance mobile slideshow
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % total);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const currentMobileCard = WHY_SECTION.cards[activeIdx];

  return (
    <section id="why" className="py-20 lg:py-28 bg-[#F5F3E6] text-[#1B1717]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.2em] mb-2">
            {WHY_SECTION.eyebrow}
          </p>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight">
            {WHY_SECTION.headline}{' '}
            <span className="italic text-[#CE793A]">{WHY_SECTION.headlineHighlight}</span>
          </h2>
        </div>

        {/* ================= DESKTOP VIEW: 4 Horizontal Cards Grid ================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_SECTION.cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#EEE8DE]/70 border border-[#3A1C11]/10 rounded-2xl p-7 flex flex-col hover:border-[#CE793A]/50 hover:bg-[#EEE8DE] transition-all hover:shadow-lg group"
            >
              {/* Centered Circular Icon */}
              <div className="w-14 h-14 rounded-full bg-[#F5F3E6] border border-[#3A1C11]/10 flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-transform">
                {ICONS[card.icon]}
              </div>

              {/* Category / Subtitle */}
              <p className="text-[11px] font-bold text-[#CE793A] uppercase tracking-wider text-center mb-1.5">
                {card.subtitle}
              </p>

              {/* Card Title */}
              <h3 className="font-gumani text-xl font-bold text-[#3A1C11] text-center mb-6">
                {card.title}
              </h3>

              {/* Checkmark Points */}
              <ul className="space-y-3">
                {card.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-xs text-[#1B1717]/85 leading-snug">
                    <Check className="w-3.5 h-3.5 text-[#CE793A] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= MOBILE VIEW: Slideshow Carousel with 4 Dots (No Arrows) ================= */}
        <div
          className="md:hidden max-w-sm mx-auto"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Active Card */}
          <div className="bg-[#EEE8DE]/80 border border-[#3A1C11]/15 rounded-3xl p-7 shadow-lg transition-all duration-300">
            {/* Centered Circular Icon */}
            <div className="w-14 h-14 rounded-full bg-[#F5F3E6] border border-[#CE793A]/30 flex items-center justify-center mx-auto mb-4 shadow-sm">
              {ICONS[currentMobileCard.icon]}
            </div>

            {/* Category / Subtitle */}
            <p className="text-[11px] font-bold text-[#CE793A] uppercase tracking-wider text-center mb-1">
              {currentMobileCard.subtitle}
            </p>

            {/* Card Main Title */}
            <h3 className="font-gumani text-xl font-bold text-[#3A1C11] text-center mb-6">
              {currentMobileCard.title}
            </h3>

            {/* Points */}
            <div className="space-y-3">
              {currentMobileCard.points.map((pt, j) => (
                <div key={j} className="flex items-start gap-2.5 text-xs text-[#1B1717]/85">
                  <div className="w-4 h-4 rounded-full bg-[#CE793A]/15 text-[#CE793A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Interactive Indicator Dots (No Arrows) */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {WHY_SECTION.cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIdx === idx
                    ? 'w-7 h-2.5 bg-[#CE793A]'
                    : 'w-2.5 h-2.5 bg-[#CE793A]/30 hover:bg-[#CE793A]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
