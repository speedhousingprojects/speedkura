'use client';

import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { ASSETS, BRAND, HERO } from '@/data/content';
import HiFiveBrandLockup from '@/components/ui/HiFiveBrandLockup';

interface HeroProps {
  onEnquire: (src: string) => void;
}

export default function HeroSection({ onEnquire }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-[#3A1C11] text-[#F5F3E6]">
      {/* Background Video with Rich Gradient Scrim */}
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
        {/* Lightened Subtle Scrim Overlay for maximum video clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A]/90 via-black/25 to-black/35" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-12">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#28120C]/80 border border-[#CE793A]/40 text-[#CE793A] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>{HERO.locationBadge}</span>
            </div>
          </div>

          {/* Unified Codename Hi-Five Logo Lockup */}
          <div className="mb-6">
            <HiFiveBrandLockup variant="hero" />
          </div>

          {/* Core Question Headline */}
          <h2 className="font-gumani text-2xl sm:text-3xl lg:text-4xl text-[#F5F3E6] font-normal leading-snug mb-4 text-balance">
            {HERO.headline}
          </h2>

          {/* Subheadline copy */}
          <p className="text-[#F5F3E6]/85 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-light">
            {HERO.subheadline}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#why"
              className="px-6 py-3.5 bg-[#F5F3E6] hover:bg-[#EEE8DE] text-[#3A1C11] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <span>Know More</span>
              <ChevronDown className="w-4 h-4 text-[#3A1C11]" />
            </a>

            <button
              onClick={() => onEnquire('Hero CTA')}
              className="px-7 py-3.5 bg-[#CE793A] hover:bg-[#E59253] text-[#3A1C11] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              <span>Book a Site Visit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* RERA Approval Verification */}
          <div className="mt-8 flex items-center gap-4 text-xs text-[#F5F3E6]/70">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#CE793A]" />
              <span>TG RERA: {BRAND.rera}</span>
            </div>
            <span className="text-[#CE793A]">•</span>
            <span>HMDA: {BRAND.hmda}</span>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Ticker */}
      <div className="relative z-10 bg-[#28120C] border-y border-[#CE793A]/30 py-3.5 overflow-hidden">
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
