'use client';

import React from 'react';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { BRAND } from '@/data/content';

export default function TermsPage() {
  return (
    <>
      <Header onEnquire={() => {}} />

      <main className="pt-32 pb-24 bg-[#F5F3E6] text-[#1B1717] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-[#3A1C11]/15">
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2">
              TERMS OF SERVICE
            </p>
            <h1 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[#1B1717]/60">
              Last Updated: May 2026 · This project by Kura Homes
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#1B1717]/85 font-light">
            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree to these terms, please do not use this site.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                2. Information & Artistic Renders
              </h2>
              <p>
                The information, visual walkthroughs, renders, architectural perspectives, and layout plans displayed on this website are conceptual and artistic impressions. Actual finished specifications, dimensions, amenities, and landscaping are subject to the registered agreements for sale and approved TG RERA filings ({BRAND.rera}).
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                3. Pricing & Availability
              </h2>
              <p>
                All prices, configurations, payment schedules, and unit availability are subject to change without prior notice at the sole discretion of Kura Homes. Final pricing and allocation are confirmed upon formal booking documentation and execution of the Agreement for Sale.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                4. Intellectual Property
              </h2>
              <p>
                All logos, typography, visual designs, imagery, project videos, architectural renders, and website source content are the exclusive intellectual property of Kura Homes. Unauthorized reproduction or distribution is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                5. Jurisdiction
              </h2>
              <p>
                Any disputes arising from the use of this website or related sales transactions shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.
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
