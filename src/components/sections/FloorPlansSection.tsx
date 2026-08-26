'use client';

import React from 'react';
import { Lock, ArrowRight, Check, Sparkles } from 'lucide-react';
import { FLOOR_PLANS_DATA } from '@/data/content';

interface FloorPlansProps {
  onEnquire?: (src: string) => void;
}

const TWO_PLANS = [
  {
    id: 'plan-2bhk',
    bhk: '2 BHK',
    type: 'Smart Luxe Configurations',
    range: '1,100 – 1,285 Sq.Ft',
    features: [
      '100% Vaastu compliant layout',
      'Optimized space with zero dead corridors',
      'East & West facing entrance options',
      'Generous balconies & cross-ventilation',
      'HMDA & TG RERA approved blueprint',
    ],
  },
  {
    id: 'plan-duplex',
    bhk: 'Duplex',
    type: 'Duplex Homes',
    range: '2,200 Sq.Ft',
    features: [
      'Double-height ceiling architectural living',
      'Private terrace deck & panoramic views',
      'Luxury master suites on upper level',
      'Exclusive private floor access',
      'HMDA & TG RERA approved blueprint',
    ],
  },
];

export default function FloorPlansSection({ onEnquire }: FloorPlansProps) {
  return (
    <section id="plans" className="py-20 lg:py-28 bg-[#F5F3E6] text-[#1B1717] border-t border-[#3A1C11]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#CE793A]" />
            <span>FLOOR PLANS & CONFIGURATIONS</span>
            <span className="w-4 h-[1.5px] bg-[#CE793A]" />
          </p>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-3">
            Find your <span className="italic text-[#CE793A]">perfect layout.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#1B1717]/70 uppercase tracking-wider font-semibold">
            2 BHK & Duplex Homes · 1,100 – 2,200 sq.ft · ORR Exit-5, Hyderabad
          </p>
        </div>

        {/* 2 Floor Plan Cards Grid in Max-W-5xl centered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {TWO_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#EEE8DE]/70 border border-[#3A1C11]/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#CE793A] hover:shadow-2xl transition-all group duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#3A1C11]/10">
                  <div>
                    <span className="text-[11px] font-bold text-[#CE793A] uppercase tracking-wider block mb-1">
                      {plan.type}
                    </span>
                    <h3 className="font-gumani text-3xl sm:text-4xl font-bold text-[#3A1C11]">
                      {plan.bhk}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#3A1C11] bg-[#F5F3E6] border border-[#3A1C11]/15 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                      {plan.range}
                    </span>
                  </div>
                </div>

                {/* Sample Blurred Architectural Plan Box */}
                <div
                  onClick={() => onEnquire?.(`Unlock Floor Plan: ${plan.bhk}`)}
                  className="relative aspect-[16/11] rounded-2xl bg-[#F5F3E6] border border-[#3A1C11]/15 flex flex-col items-center justify-center p-6 mb-6 cursor-pointer overflow-hidden group-hover:border-[#CE793A] transition-colors shadow-inner"
                >
                  {/* Blurred Architectural Floor Plan Blueprint Graphics */}
                  <div className="absolute inset-0 opacity-40 blur-[2.5px] scale-105 pointer-events-none p-4 flex items-center justify-center">
                    <svg viewBox="0 0 200 140" className="w-full h-full stroke-[#3A1C11] fill-none stroke-[1.2]">
                      <rect x="10" y="10" width="180" height="120" rx="4" />
                      <line x1="10" y1="50" x2="110" y2="50" />
                      <line x1="110" y1="10" x2="110" y2="90" />
                      <line x1="60" y1="50" x2="60" y2="130" />
                      <line x1="110" y1="90" x2="190" y2="90" />
                      <rect x="20" y="20" width="30" height="20" strokeDasharray="3 3" />
                      <rect x="70" y="65" width="30" height="30" strokeDasharray="3 3" />
                      <rect x="125" y="25" width="50" height="50" strokeDasharray="3 3" />
                      <circle cx="150" cy="110" r="12" strokeDasharray="2 2" />
                    </svg>
                  </div>

                  {/* Dark Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-[#3A1C11]/30 backdrop-blur-[2px] transition-opacity group-hover:bg-[#3A1C11]/20" />

                  {/* Lock Badge Content */}
                  <div className="relative z-10 text-center px-4">
                    <div className="w-11 h-11 rounded-full bg-[#28120C]/90 border border-[#CE793A]/50 flex items-center justify-center text-[#CE793A] mx-auto mb-2.5 shadow-xl group-hover:scale-110 transition-transform">
                      <Lock className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#F5F3E6] uppercase tracking-wider block drop-shadow-md">
                      Sample {plan.bhk} Blueprint
                    </span>
                    <span className="text-[11px] text-[#CE793A] font-semibold flex items-center justify-center gap-1 mt-1">
                      <Sparkles className="w-3 h-3" />
                      Click to unlock HD Plan
                    </span>
                  </div>
                </div>

                {/* Key Features List */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-[#1B1717]/80">
                      <div className="w-4 h-4 rounded-full bg-emerald-700/15 text-emerald-800 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unlock Button */}
              <button
                onClick={() => onEnquire?.(`Unlock Floor Plan: ${plan.bhk}`)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#3A1C11] hover:bg-[#28120C] text-[#F5F3E6] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all group/btn border border-[#CE793A]/30"
              >
                <span>Request {plan.bhk} Floor Plan</span>
                <ArrowRight className="w-4 h-4 text-[#CE793A] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
