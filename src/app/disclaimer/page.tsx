'use client';

import React from 'react';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { BRAND, FOOTER_DATA } from '@/data/content';

export default function DisclaimerPage() {
  return (
    <>
      <Header onEnquire={() => {}} />

      <main className="pt-32 pb-24 bg-[#F5F3E6] text-[#1B1717] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-[#3A1C11]/15">
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2">
              STATUTORY & REGULATORY
            </p>
            <h1 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-4">
              Project Disclaimer
            </h1>
            <p className="text-xs text-[#1B1717]/60">
              Regulatory Reference: TG RERA Reg. {BRAND.rera} · HMDA Approval {BRAND.hmda}
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#1B1717]/85 font-light">
            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                1. Statutory Regulatory Approvals
              </h2>
              <p>
                <strong>CODENAME HI-FIVE</strong> is developed by Kura Homes and duly approved by the Hyderabad Metropolitan Development Authority (HMDA Permit No: <strong>{BRAND.hmda}</strong>) and registered under Telangana Real Estate Regulatory Authority (TG RERA Registration No: <strong>{BRAND.rera}</strong>). Project details may be independently verified on the official TG RERA portal (<a href="https://rera.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#CE793A] underline font-semibold">rera.telangana.gov.in</a>).
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                2. Illustrative Financial Estimates & Calculators
              </h2>
              <p>
                All computed costs, monthly outgo calculations, loan EMIs, interest rates, tax benefits under Section 24(b), and rental income projections displayed on this website are indicative and provided solely for conceptual illustration. They do not constitute financial, investment, or legal advice, nor do they guarantee capital appreciation or rental returns. Actual loan eligibility and terms depend on individual borrower profiles and bank guidelines.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                3. Construction Milestones & Timelines
              </h2>
              <p>
                Construction progress percentages and estimated possession timelines reflect current site status and are cross-referenced with periodic quarterly filings submitted to TG RERA. Final completion schedules remain subject to force majeure and applicable regulatory provisions.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                4. Non-Binding Nature
              </h2>
              <p>
                This website is intended for informational and marketing purposes only and does not constitute an offer, invitation to offer, or contract of sale. The binding agreement between the buyer and Kura Homes is exclusively governed by the executed Agreement for Sale and registered Sale Deed.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
