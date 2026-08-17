'use client';

import React from 'react';
import { Layers, ZoomIn } from 'lucide-react';
import { MASTER_PLAN_DATA, ASSETS } from '@/data/content';

interface MasterPlanProps {
  onEnquire: (src: string) => void;
}

export default function MasterPlanSection({ onEnquire }: MasterPlanProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#EEE8DE] text-[#1B1717] border-y border-[#3A1C11]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>Site Layout</span>
          </p>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-4">
            {MASTER_PLAN_DATA.headline}
          </h2>
          <p className="text-sm text-[#1B1717]/80 leading-relaxed font-light">
            {MASTER_PLAN_DATA.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Master Plan Visual */}
          <div className="lg:col-span-7 bg-[#F5F3E6] rounded-3xl p-4 border border-[#3A1C11]/15 shadow-lg overflow-hidden group">
            <div
              onClick={() => onEnquire('Master Plan Zoom')}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={ASSETS.images.aerialNight}
                alt="Master Plan Layout"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#3A1C11]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="px-5 py-2.5 rounded-full bg-[#3A1C11]/90 text-[#F5F3E6] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
                  <ZoomIn className="w-4 h-4 text-[#CE793A]" />
                  <span>Click to Zoom Layout</span>
                </div>
              </div>
            </div>
          </div>

          {/* 19 Legend Items Grid */}
          <div className="lg:col-span-5 bg-[#F5F3E6] rounded-3xl p-6 sm:p-8 border border-[#3A1C11]/15 shadow-lg">
            <h3 className="font-gumani text-xl font-bold text-[#3A1C11] mb-1">
              Master Plan Legend
            </h3>
            <p className="text-xs text-[#CE793A] font-semibold uppercase tracking-wider mb-6">
              Every space, accounted for.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
              {MASTER_PLAN_DATA.legend.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-2 bg-[#EEE8DE] rounded-xl text-xs font-medium text-[#1B1717]/85 flex items-center gap-2 border border-[#3A1C11]/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE793A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onEnquire('Download Master Plan')}
              className="mt-6 w-full py-3 bg-[#3A1C11] hover:bg-[#28120C] text-[#F5F3E6] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
            >
              Download High-Res Master Plan PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
