'use client';

import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { ASSETS, BRAND, HERO } from '@/data/content';

interface HeroProps {
  onEnquire: (src: string) => void;
}

export default function HeroSection({ onEnquire }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-[#1C0F0A] text-[#F5F3E6]">
      {/* Background Video with Dual-Layer Directional Cinematic Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={ASSETS.images.heroBg}
          className="w-full h-full object-cover scale-105"
        >
          <source src={ASSETS.videos.hero} type="video/mp4" />
        </video>

        {/* Directional Left-to-Right Gradient: Deep contrast behind text on left, bright video visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent z-[1]" />

        {/* Soft Vertical Polish: Subtle blend into top nav and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A] via-transparent to-black/40 z-[2]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-36 pb-12">
        <div className="max-w-2xl animate-fadeIn">
          {/* 1. Location Pill */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#CE793A]/50 text-[#CE793A] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-[#CE793A]" />
              <span className="drop-shadow-sm">{HERO.locationBadge}</span>
            </div>
          </div>

          {/* 2. CODENAME HI FIVE Typographic Brand Lockup */}
          <div className="mb-6">
            {/* Top: ──────── CODENAME ──────── */}
            <div className="flex items-center gap-3 sm:gap-4 mb-2 max-w-[340px] sm:max-w-[400px]">
              <span className="flex-1 h-[1.5px] bg-[#CE793A]" />
              <span className="font-gumani text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#F5F3E6] whitespace-nowrap">
                CODENAME
              </span>
              <span className="flex-1 h-[1.5px] bg-[#CE793A]" />
            </div>

            {/* Bottom: HI FIVE */}
            <h1 className="font-gumani text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              HI FIVE
            </h1>
          </div>

          {/* 3. Headline */}
          <h2 className="font-gumani text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight mb-4 text-balance drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
            {HERO.headline}
          </h2>

          {/* 4. Subheadline Copy */}
          <p className="text-[#F5F3E6]/90 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            {HERO.subheadline}
          </p>

          {/* 5. Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#why"
              className="px-6 py-3.5 bg-[#F5F3E6] hover:bg-[#EEE8DE] text-[#3A1C11] font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 active:scale-95"
            >
              <span>KNOW MORE</span>
              <ChevronDown className="w-4 h-4 text-[#3A1C11]" />
            </a>

            <button
              onClick={() => onEnquire('Hero CTA')}
              className="px-7 py-3.5 bg-[#CE793A] hover:bg-[#E59253] text-[#3A1C11] font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group active:scale-95 border border-[#CE793A]/50"
            >
              <span>BOOK A SITE VISIT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 6. TG RERA & HMDA Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs text-[#F5F3E6] shadow-md">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#CE793A]" />
              <span className="font-medium">TG RERA: {BRAND.rera}</span>
            </div>
            <span className="text-[#CE793A]">•</span>
            <span className="font-medium">HMDA: {BRAND.hmda}</span>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Ticker */}
      <div className="relative z-10 bg-[#28120C] border-y border-[#CE793A]/30 py-3.5 overflow-hidden shadow-lg">
        <div className="animate-marquee flex items-center gap-8">
          {[...HERO.ticker, ...HERO.ticker, ...HERO.ticker, ...HERO.ticker].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#F5F3E6]/90 shrink-0"
            >
              <span className="text-[#CE793A] font-bold text-sm">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive 6 Key Stats Grid */}
      <div className="relative z-10 bg-[#28120C]/95 backdrop-blur-md border-b border-[#CE793A]/20 py-6 sm:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {HERO.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#3A1C11]/80 border border-[#CE793A]/25 hover:border-[#CE793A]/60 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center transition-all shadow-sm group"
              >
                <div className="font-gumani text-2xl sm:text-3xl lg:text-4xl font-bold text-[#CE793A] group-hover:scale-105 transition-transform leading-none mb-1.5 flex items-baseline justify-center gap-0.5">
                  <span>{stat.value}</span>
                  {stat.unit && (
                    <span className="text-xs sm:text-sm font-normal text-[#F5F3E6]/80 ml-0.5">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-[#F5F3E6]/80 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
