'use client';

import React from 'react';
import { TrendingUp, AlertCircle, Sparkles } from 'lucide-react';
import { PRICE_CONTEXT } from '@/data/content';

export default function PriceContextSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#EEE8DE] text-[#1B1717] border-y border-[#3A1C11]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Explanatory Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>{PRICE_CONTEXT.eyebrow}</span>
            </p>
            <h2 className="font-gumani text-3xl sm:text-4xl text-[#3A1C11] leading-tight mb-4">
              {PRICE_CONTEXT.headline}{' '}
              <span className="italic text-[#CE793A]">{PRICE_CONTEXT.headlineHighlight}</span>
            </h2>
            <p className="text-sm text-[#1B1717]/80 leading-relaxed font-light mb-6">
              {PRICE_CONTEXT.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#1B1717]/60">
              <AlertCircle className="w-4 h-4 text-[#CE793A] shrink-0" />
              <span>{PRICE_CONTEXT.footer}</span>
            </div>
          </div>

          {/* Right Comparison Cards */}
          <div className="lg:col-span-7 space-y-4">
            {PRICE_CONTEXT.corridors.map((corridor, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl transition-all ${
                  corridor.highlight
                    ? 'bg-[#3A1C11] text-[#F5F3E6] shadow-xl border-2 border-[#CE793A]'
                    : 'bg-[#F5F3E6] border border-[#3A1C11]/15 text-[#1B1717]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {corridor.highlight && (
                      <span className="w-7 h-7 rounded-lg bg-[#CE793A] text-[#3A1C11] flex items-center justify-center font-bold text-xs">
                        <Sparkles className="w-4 h-4" />
                      </span>
                    )}
                    <div>
                      <h4 className={`text-base font-bold ${corridor.highlight ? 'text-[#F5F3E6]' : 'text-[#3A1C11]'}`}>
                        {corridor.name}
                      </h4>
                      {corridor.subtext && (
                        <p className="text-xs text-[#CE793A] font-semibold mt-0.5">
                          {corridor.subtext}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className={`font-gumani text-2xl font-bold ${corridor.highlight ? 'text-[#CE793A]' : 'text-[#3A1C11]'}`}>
                      {corridor.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
