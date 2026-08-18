'use client';

import React from 'react';
import { Check, ArrowRight, Home, Building, Sparkles } from 'lucide-react';
import { STARTING_PRICE, ASSETS } from '@/data/content';

interface StartingPriceProps {
  onEnquire: (src: string) => void;
}

export default function StartingPriceSection({ onEnquire }: StartingPriceProps) {
  return (
    <section id="price" className="py-16 sm:py-20 lg:py-28 bg-[#F5F3E6] text-[#1B1717]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Introduction */}
        <div className="mb-8 lg:mb-12">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#CE793A]" />
            <span>INVEST IN CODENAME HI FIVE</span>
          </p>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight">
            Premium living, <span className="italic text-[#CE793A]">within reach.</span>
          </h2>
        </div>

        {/* Full-Width Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-[#3A1C11]/15 bg-[#3A1C11]">
          {/* ================= LEFT: Large Architectural Property Image (42-45% width on desktop) ================= */}
          <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[620px] w-full overflow-hidden bg-[#28120C]">
            <img
              src={ASSETS.images.startingAt}
              alt="CODENAME HI FIVE Architecture"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle Gradient Overlays for Seamless Dark Sienna Integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#28120C]/85 via-transparent to-transparent lg:hidden" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#3A1C11]/10 to-[#3A1C11]/80 pointer-events-none" />

            {/* Architectural Trust Badge */}
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#28120C]/90 border border-[#CE793A]/40 text-[#F5F3E6] text-xs font-semibold backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#CE793A]" />
              <span>5.3 Acres Gated Community</span>
            </div>
          </div>

          {/* ================= RIGHT: Dark Sienna Pricing & Value Stack (55-58% width on desktop) ================= */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-[#F5F3E6]">
            <div>
              {/* Header Label */}
              <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-4">
                {STARTING_PRICE.startingLabel}
              </p>

              {/* Two Distinct Luxury Pricing Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* 2 BHK Card */}
                <div className="bg-[#28120C]/90 border border-[#CE793A]/30 hover:border-[#CE793A] rounded-2xl p-5 sm:p-6 transition-all shadow-md group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#CE793A]">
                      2 BHK
                    </span>
                    <Home className="w-4 h-4 text-[#CE793A] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F3E6] leading-none mb-2">
                    ₹55L
                  </div>
                  <p className="text-xs text-[#F5F3E6]/65 font-light">
                    Smart Luxe (1,100–1,285 sq.ft)
                  </p>
                </div>

                {/* Duplex Card */}
                <div className="bg-[#28120C]/90 border border-[#CE793A]/30 hover:border-[#CE793A] rounded-2xl p-5 sm:p-6 transition-all shadow-md group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#CE793A]">
                      Duplex
                    </span>
                    <Building className="w-4 h-4 text-[#CE793A] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-[#CE793A] leading-none mb-2">
                    ₹95L
                  </div>
                  <p className="text-xs text-[#F5F3E6]/65 font-light">
                    Penthouse & Duplex (1,850–2,200 sq.ft)
                  </p>
                </div>
              </div>

              {/* 5 Ownership Value Proposition Items */}
              <div className="space-y-3.5 mb-8">
                {STARTING_PRICE.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F3E6]/90 font-light">
                    <div className="w-5 h-5 rounded-full bg-[#CE793A] text-[#3A1C11] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onEnquire('Starting Price Section CTA')}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#CE793A] hover:bg-[#E59253] text-[#3A1C11] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Book a Site Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
