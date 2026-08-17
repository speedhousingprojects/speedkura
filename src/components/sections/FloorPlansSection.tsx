'use client';

import React from 'react';
import { Lock, ArrowRight, Check, Compass, Sparkles } from 'lucide-react';
import { FLOOR_PLANS_DATA } from '@/data/content';

interface FloorPlansProps {
  onEnquire: (src: string) => void;
}

const THREE_PLANS = [
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
    ],
  },
  {
    id: 'plan-3bhk',
    bhk: '3 BHK',
    type: 'Premium Family Residences',
    range: '1,450 – 1,750 Sq.Ft',
    features: [
      'Spacious master suite with walk-in wardrobe',
      'Separate dining & expanded living lounge',
      'Corner unit layouts with 3-side daylight',
      'HMDA & TG RERA approved blueprint',
    ],
  },
  {
    id: 'plan-duplex',
    bhk: 'Duplex',
    type: 'Penthouse & Duplex Suites',
    range: '1,850 – 2,200 Sq.Ft',
    features: [
      'Double-height ceiling architectural living',
      'Private terrace deck & panoramic views',
      'Luxury master suites on upper level',
      'Exclusive private floor access',
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
            2 BHK · 3 BHK · Duplex · 1,100 – 2,200 sq.ft · ORR Exit-5, Hyderabad
          </p>
        </div>

        {/* 3 Floor Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {THREE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#EEE8DE]/70 border border-[#3A1C11]/15 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#CE793A] hover:shadow-2xl transition-all group duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#3A1C11]/10">
                  <div>
                    <span className="text-[11px] font-bold text-[#CE793A] uppercase tracking-wider block mb-1">
                      {plan.type}
                    </span>
                    <h3 className="font-gumani text-3xl sm:text-4xl font-bold text-[#3A1C11]">
                      {plan.bhk}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#3A1C11] bg-[#F5F3E6] border border-[#3A1C11]/15 px-3 py-1.5 rounded-full inline-block">
                      {plan.range}
                    </span>
                  </div>
                </div>

                {/* Sample Blurred Architectural Plan Box */}
                <div
                  onClick={() => onEnquire(`Unlock Floor Plan: ${plan.bhk}`)}
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

                  {/* Centered Lock Callout Badge */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#3A1C11] text-[#CE793A] flex items-center justify-center mb-2.5 shadow-xl group-hover:scale-110 group-hover:bg-[#CE793A] group-hover:text-[#3A1C11] transition-all">
                      <Lock className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#3A1C11] uppercase tracking-wider block mb-0.5 bg-[#F5F3E6]/95 px-3 py-1 rounded-full shadow-sm">
                      Enquire for Detailed Blueprint
                    </span>
                    <span className="text-[10px] text-[#3A1C11]/80 font-medium">
                      Dimensions, Room Sizes & Balcony Views
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#1B1717]/85 font-light">
                      <div className="w-4 h-4 rounded-full bg-[#CE793A]/20 text-[#CE793A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onEnquire(`Floor Plan: ${plan.bhk} (${plan.range})`)}
                className="w-full py-3.5 rounded-xl bg-[#3A1C11] hover:bg-[#28120C] text-[#F5F3E6] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 group/btn"
              >
                <span>Request {plan.bhk} Plan PDF</span>
                <ArrowRight className="w-4 h-4 text-[#CE793A] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
