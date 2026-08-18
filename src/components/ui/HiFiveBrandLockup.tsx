'use client';

import React from 'react';

interface HiFiveBrandLockupProps {
  variant?: 'hero' | 'header' | 'footer';
  className?: string;
}

export default function HiFiveBrandLockup({
  variant = 'hero',
  className = '',
}: HiFiveBrandLockupProps) {
  if (variant === 'header' || variant === 'footer') {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        {/* Top: ───── CODENAME ───── with long prominent lines */}
        <div className="flex items-center justify-center gap-2 mb-1 w-full min-w-[140px] sm:min-w-[160px]">
          <span className="w-7 sm:w-10 h-[1.5px] bg-[#CE793A]" />
          <span className="font-gumani text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#F5F3E6] whitespace-nowrap">
            CODENAME
          </span>
          <span className="w-7 sm:w-10 h-[1.5px] bg-[#CE793A]" />
        </div>

        {/* Bottom: HI FIVE text */}
        <span className="font-gumani text-2xl sm:text-3xl font-bold tracking-normal text-[#F5F3E6] leading-none text-center whitespace-nowrap">
          HI FIVE
        </span>
      </div>
    );
  }

  // Default 'hero' prominent variant
  return (
    <div className={`inline-flex flex-col items-center select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] ${className}`}>
      {/* Top: ──────── CODENAME ──────── */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 mb-2 sm:mb-3 w-full min-w-[260px] sm:min-w-[340px] md:min-w-[420px]">
        <span className="flex-1 max-w-[120px] sm:max-w-[160px] h-[2px] bg-[#CE793A] rounded-full shadow-sm" />
        <span className="font-gumani text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.3em] uppercase text-[#F5F3E6] whitespace-nowrap drop-shadow-md">
          CODENAME
        </span>
        <span className="flex-1 max-w-[120px] sm:max-w-[160px] h-[2px] bg-[#CE793A] rounded-full shadow-sm" />
      </div>

      {/* Main Dominant Headline */}
      <h1 className="font-gumani text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none text-center whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
        HI FIVE
      </h1>
    </div>
  );
}
