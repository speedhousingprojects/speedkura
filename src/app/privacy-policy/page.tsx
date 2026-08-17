'use client';

import React from 'react';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { BRAND } from '@/data/content';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header onEnquire={() => {}} />

      <main className="pt-32 pb-24 bg-[#F5F3E6] text-[#1B1717] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-[#3A1C11]/15">
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2">
              LEGAL & PRIVACY
            </p>
            <h1 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#1B1717]/60">
              Last Updated: May 2026 · CODENAME HI-FIVE by Kura Homes
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#1B1717]/85 font-light">
            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                1. Overview & Commitment
              </h2>
              <p>
                Kura Homes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website for <strong>CODENAME HI-FIVE</strong> (located at ORR Exit-5, Gandimaisamma / Bowrampet, Hyderabad) or submit your contact details for project enquiries.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                2. Information We Collect
              </h2>
              <p>When you interact with our website or submit an enquiry form, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Contact Information:</strong> Full Name, Mobile Phone Number, Email Address.</li>
                <li><strong>Property Preferences:</strong> Configuration interests (2 BHK, 3 BHK, Duplex), budget preferences, and preferred visit schedules.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and referring URL via analytics cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                3. Purpose of Processing
              </h2>
              <p>We use your information exclusively to:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Respond to your requested pricing, floor plans, and project brochures.</li>
                <li>Schedule and coordinate complimentary site visits to CODENAME HI-FIVE.</li>
                <li>Send transactional SMS, WhatsApp updates, or direct sales phone callbacks.</li>
                <li>Comply with regulatory mandates under TG RERA (Reg: {BRAND.rera}).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                4. Data Protection & Sharing
              </h2>
              <p>
                We do not sell, rent, or trade your personal data to unauthorized third-party marketers. Information is shared only with our dedicated sales and customer relationship team for scheduling visits and providing project documentation.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                5. Opt-Out & Contact
              </h2>
              <p>
                You may opt out of promotional communications at any time by contacting our support desk at <a href={`tel:${BRAND.phone}`} className="text-[#CE793A] font-semibold underline">{BRAND.phone}</a> or messaging our sales team on WhatsApp.
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
