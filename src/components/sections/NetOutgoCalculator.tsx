'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, HelpCircle } from 'lucide-react';
import { NET_OUTGO_CALCULATOR } from '@/data/content';

export default function NetOutgoCalculator() {
  const [propertyVal] = useState(NET_OUTGO_CALCULATOR.defaults.propertyValue);
  const [loanAmount, setLoanAmount] = useState(NET_OUTGO_CALCULATOR.defaults.loanAmount);
  const [rate, setRate] = useState(NET_OUTGO_CALCULATOR.defaults.rate);
  const [tenure, setTenure] = useState(NET_OUTGO_CALCULATOR.defaults.tenure);
  const [rentalIncome] = useState(NET_OUTGO_CALCULATOR.defaults.rentalIncome);
  const [taxBenefit] = useState(NET_OUTGO_CALCULATOR.defaults.taxBenefit);

  // Live EMI calculation
  const computedEmi = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return loanAmount / n;
    return Math.round((loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }, [loanAmount, rate, tenure]);

  const scenarioANet = Math.max(0, computedEmi - taxBenefit);
  const scenarioBNet = Math.max(0, computedEmi - rentalIncome - taxBenefit);

  const formatLakhs = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    return `₹${(val / 100000).toFixed(0)}L`;
  };

  const formatInr = (val: number) => '₹' + val.toLocaleString('en-IN');

  // Slider progress percentages for filled gradient tracks
  const ratePct = ((rate - 7.0) / (10.5 - 7.0)) * 100;
  const loanPct = ((loanAmount - 2000000) / (12000000 - 2000000)) * 100;
  const tenurePct = ((tenure - 5) / (30 - 5)) * 100;

  return (
    <section className="py-20 lg:py-28 bg-[#F5F3E6] text-[#1B1717] border-t border-[#3A1C11]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ================= LEFT COLUMN: Own a home for less than most local rents ================= */}
          <div>
            {/* Eyebrow */}
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-[#CE793A]" />
              <span>{NET_OUTGO_CALCULATOR.title}</span>
            </p>

            {/* Headline */}
            <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-4">
              {NET_OUTGO_CALCULATOR.headline}{' '}
              <span className="italic text-[#CE793A]">{NET_OUTGO_CALCULATOR.headlineHighlight}</span>
            </h2>

            {/* Description (Standard readable font size) */}
            <p className="text-sm sm:text-base text-[#1B1717]/80 leading-relaxed font-light mb-8">
              {NET_OUTGO_CALCULATOR.description}
            </p>

            {/* Scenario B Dark Sienna Banner Card */}
            <div className="bg-[#3A1C11] text-[#F5F3E6] rounded-2xl p-6 sm:p-8 mb-5 shadow-xl border border-[#CE793A]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#CE793A] uppercase tracking-widest block mb-2">
                    {NET_OUTGO_CALCULATOR.scenarioBHighlight.label}
                  </span>
                  <div className="font-gumani text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3E6] leading-none mb-3">
                    {formatInr(scenarioBNet)}
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F3E6]/75 max-w-sm font-light leading-relaxed">
                    {NET_OUTGO_CALCULATOR.scenarioBHighlight.subtext}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <span className="text-sm text-[#CE793A] italic font-serif">
                    Choose the scenario that fits your plan.
                  </span>
                </div>
              </div>
            </div>

            {/* Note Below Banner */}
            <p className="text-xs text-[#1B1717]/65 leading-relaxed mb-8 font-light">
              * EMI at {rate.toFixed(2)}% / {tenure} yrs / {formatLakhs(loanAmount)} ≈ {formatInr(computedEmi)}. Rental income ₹20,000–25,000/month is indicative, based on current 2BHK market in Dundigal–Gandimaisamma corridor. Old-regime Section 24(b) deduction is not available under the new (default) tax regime — opt-in required; consult a CA. Not investment advice. T&C Apply.
            </p>

            {/* Equation Breakdown Horizontal Key-Value Rows */}
            <div className="border-t border-[#3A1C11]/15 divide-y divide-[#3A1C11]/10 text-sm sm:text-base">
              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#1B1717]/80 flex items-center gap-2">
                  <span className="font-mono text-sm opacity-60">=</span> Property Value
                </span>
                <span className="font-gumani font-bold text-[#3A1C11] text-lg">{formatInr(propertyVal)}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#1B1717]/80 flex items-center gap-2">
                  <span className="font-mono text-sm opacity-60">→</span> Home Loan
                </span>
                <span className="font-gumani font-bold text-[#3A1C11] text-lg">{formatInr(loanAmount)}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#1B1717]/80 flex items-center gap-2">
                  <span className="font-mono text-sm opacity-60">=</span> Monthly EMI
                </span>
                <span className="font-gumani font-bold text-[#3A1C11] text-lg">{formatInr(computedEmi)}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#1B1717]/80 flex items-center gap-2">
                  <span className="font-mono text-sm opacity-60">−</span> Rental Income (Scenario B)
                </span>
                <span className="font-gumani font-bold text-[#3A1C11] text-lg">{formatInr(rentalIncome)}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#1B1717]/80 flex items-center gap-2">
                  <span className="font-mono text-sm opacity-60">−</span> Old Regime Section 24(b)
                </span>
                <span className="font-gumani font-bold text-[#3A1C11] text-lg">{formatInr(taxBenefit)}</span>
              </div>

              <div className="py-4 flex items-center justify-between bg-[#EEE8DE]/70 px-4 rounded-xl border-t-2 border-[#CE793A]">
                <span className="font-bold text-[#3A1C11] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#CE793A]" />
                  <span>Net Outgo / Month (Scenario B)</span>
                </span>
                <span className="font-gumani font-bold text-[#CE793A] text-2xl sm:text-3xl">{formatInr(scenarioBNet)}</span>
              </div>
            </div>
          </div>


          {/* ================= RIGHT COLUMN: Adjust & Compare Sliders & Breakdown Box ================= */}
          <div className="lg:pl-4">
            {/* Eyebrow */}
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-[#CE793A]" />
              <span>ADJUST & COMPARE</span>
            </p>

            {/* Headline */}
            <h2 className="font-gumani text-3xl sm:text-4xl text-[#3A1C11] leading-tight mb-8">
              See how your <span className="italic text-[#CE793A]">numbers change</span>
            </h2>

            {/* Sliders Stack with Filled Progress Bars */}
            <div className="space-y-7 mb-8">
              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#3A1C11] uppercase tracking-wider">
                    Interest Rate
                  </label>
                  <span className="font-gumani text-2xl font-bold text-[#3A1C11]">{rate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min={7.0}
                  max={10.5}
                  step={0.05}
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="w-full h-2 rounded-lg cursor-pointer appearance-none transition-all"
                  style={{
                    background: `linear-gradient(to right, #CE793A 0%, #CE793A ${ratePct}%, #E2D8CA ${ratePct}%, #E2D8CA 100%)`,
                  }}
                />
                <span className="text-xs text-[#1B1717]/60 block mt-1.5 font-light">
                  Current bank range: 8.00% – 8.25% · May vary by bank & profile
                </span>
              </div>

              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#3A1C11] uppercase tracking-wider">
                    Loan Amount
                  </label>
                  <span className="font-gumani text-2xl font-bold text-[#3A1C11]">{formatLakhs(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min={2000000}
                  max={12000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg cursor-pointer appearance-none transition-all"
                  style={{
                    background: `linear-gradient(to right, #CE793A 0%, #CE793A ${loanPct}%, #E2D8CA ${loanPct}%, #E2D8CA 100%)`,
                  }}
                />
                <span className="text-xs text-[#1B1717]/60 block mt-1.5 font-light">
                  ₹20L – ₹1.2 Cr range
                </span>
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#3A1C11] uppercase tracking-wider">
                    Loan Tenure
                  </label>
                  <span className="font-gumani text-2xl font-bold text-[#3A1C11]">{tenure} yrs</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg cursor-pointer appearance-none transition-all"
                  style={{
                    background: `linear-gradient(to right, #CE793A 0%, #CE793A ${tenurePct}%, #E2D8CA ${tenurePct}%, #E2D8CA 100%)`,
                  }}
                />
                <span className="text-xs text-[#1B1717]/60 block mt-1.5 font-light">
                  5 yrs – 30 yrs
                </span>
              </div>
            </div>

            {/* Scenario Comparative Analysis Box */}
            <div className="bg-[#EEE8DE]/80 rounded-2xl p-6 sm:p-7 border border-[#3A1C11]/15 space-y-4 mb-6 shadow-sm">
              <div>
                <h4 className="text-sm font-bold text-[#3A1C11] mb-1.5">
                  Scenario A — Owner-occupied:
                </h4>
                <p className="text-xs sm:text-sm text-[#1B1717]/85 leading-relaxed font-light">
                  EMI {formatInr(computedEmi)} at {rate.toFixed(2)}% / {tenure} yrs on {formatLakhs(loanAmount)} − {formatInr(taxBenefit)} old-regime Section 24(b) benefit = <strong className="text-[#3A1C11] font-semibold">{formatInr(scenarioANet)}/month</strong> net cost of ownership. Compare: typical 2BHK rent in the area ~₹20,000–25,000/month.
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#3A1C11]/15">
                <h4 className="text-sm font-bold text-[#3A1C11] mb-1.5">
                  Scenario B — Rent-out:
                </h4>
                <p className="text-xs sm:text-sm text-[#1B1717]/85 leading-relaxed font-light">
                  EMI − {formatInr(rentalIncome)} rental income − {formatInr(taxBenefit)} old-regime benefit = <strong className="text-[#CE793A] font-semibold">{formatInr(scenarioBNet)}/month</strong> net outgo.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs text-[#1B1717]/60 leading-snug font-light">
                  Old-regime Section 24(b) benefit requires opt-in; not available under the new default tax regime. Rental income is indicative. Consult a CA before deciding.
                </p>
              </div>
            </div>

            {/* FAQ Box: Why is rental income shown? */}
            <div className="bg-[#F5F3E6] rounded-2xl p-6 border border-[#3A1C11]/15 shadow-sm flex items-start gap-3.5">
              <HelpCircle className="w-5 h-5 text-[#CE793A] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#3A1C11] mb-1.5">
                  {NET_OUTGO_CALCULATOR.faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-[#1B1717]/80 font-light leading-relaxed">
                  {NET_OUTGO_CALCULATOR.faq.a}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
