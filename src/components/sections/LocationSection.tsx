'use client';

import React from 'react';
import { ASSETS } from '@/data/content';

interface LocationSectionProps {
  onEnquire?: (src: string) => void;
}

export default function LocationSection({ onEnquire }: LocationSectionProps) {
  const stats = [
    { value: '1 min', label: 'ORR EXIT 5' },
    { value: '10 min', label: 'BACHUPALLY' },
    { value: '30 min', label: 'KUKATPALLY' },
    { value: '35 min', label: 'FINANCIAL DISTRICT' },
    { value: '25+', label: 'SCHOOLS NEARBY' },
  ];

  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 bg-[#F5F3E6] text-[#1B1717] border-t border-[#3A1C11]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Small Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-1.5">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em]">
            IN THE SPOTLIGHT — LOCATION
          </p>
        </div>

        {/* 2. Main Headline */}
        <div className="text-center max-w-3xl mx-auto mb-2">
          <h2 className="font-gumani text-2xl sm:text-3xl lg:text-4xl text-[#3A1C11] leading-tight">
            Where the city <span className="italic text-[#CE793A]">breathes easy.</span>
          </h2>
        </div>

        {/* 3. Supporting Paragraph */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm text-[#1B1717]/80 leading-relaxed font-light">
            This project brings urban convenience and natural calm together — with ORR, Bachupally, Kukatpally, Financial District and schools all within easy reach.
          </p>
        </div>

        {/* 4. Compact Controlled-Height Hero Project Image (Fits in single desktop viewport) */}
        <div className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#3A1C11]/15 mb-6 sm:mb-8 group bg-[#28120C]">
          <div className="h-[200px] sm:h-[260px] lg:h-[300px] w-full overflow-hidden">
            <img
              src={ASSETS.images.locationView}
              alt="This Project Location Overview"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>

        {/* 5. Five Key Location Stats */}
        {/* Desktop View: Single 5-Column Horizontal Information Strip */}
        <div className="hidden md:grid md:grid-cols-5 divide-x divide-[#3A1C11]/15 bg-[#EEE8DE]/75 rounded-2xl p-3 sm:p-5 border border-[#3A1C11]/15 shadow-md max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-3 py-1.5">
              <div className="font-gumani text-2xl lg:text-3xl xl:text-4xl font-bold text-[#3A1C11] leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] font-bold text-[#CE793A] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Balanced 2-Row Grid (All 5 Highlights Visible at Once, No Horizontal Scroll) */}
        <div className="md:hidden grid grid-cols-6 gap-2.5 max-w-md mx-auto">
          {/* Row 1: 2 items (span 3 each) */}
          <div className="col-span-3 bg-[#EEE8DE] rounded-xl p-3.5 text-center border border-[#3A1C11]/10 shadow-sm">
            <div className="font-gumani text-2xl font-bold text-[#3A1C11] leading-none mb-1">
              {stats[0].value}
            </div>
            <div className="text-[10px] font-bold text-[#CE793A] uppercase tracking-wider">
              {stats[0].label}
            </div>
          </div>

          <div className="col-span-3 bg-[#EEE8DE] rounded-xl p-3.5 text-center border border-[#3A1C11]/10 shadow-sm">
            <div className="font-gumani text-2xl font-bold text-[#3A1C11] leading-none mb-1">
              {stats[1].value}
            </div>
            <div className="text-[10px] font-bold text-[#CE793A] uppercase tracking-wider">
              {stats[1].label}
            </div>
          </div>

          {/* Row 2: 3 items (span 2 each) */}
          <div className="col-span-2 bg-[#EEE8DE] rounded-xl p-3 text-center border border-[#3A1C11]/10 shadow-sm">
            <div className="font-gumani text-xl font-bold text-[#3A1C11] leading-none mb-1">
              {stats[2].value}
            </div>
            <div className="text-[9px] font-bold text-[#CE793A] uppercase tracking-wider leading-tight">
              {stats[2].label}
            </div>
          </div>

          <div className="col-span-2 bg-[#EEE8DE] rounded-xl p-3 text-center border border-[#3A1C11]/10 shadow-sm">
            <div className="font-gumani text-xl font-bold text-[#3A1C11] leading-none mb-1">
              {stats[3].value}
            </div>
            <div className="text-[9px] font-bold text-[#CE793A] uppercase tracking-wider leading-tight">
              {stats[3].label}
            </div>
          </div>

          <div className="col-span-2 bg-[#EEE8DE] rounded-xl p-3 text-center border border-[#3A1C11]/10 shadow-sm">
            <div className="font-gumani text-xl font-bold text-[#3A1C11] leading-none mb-1">
              {stats[4].value}
            </div>
            <div className="text-[9px] font-bold text-[#CE793A] uppercase tracking-wider leading-tight">
              {stats[4].label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
