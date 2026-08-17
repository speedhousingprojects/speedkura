'use client';

import React, { useState } from 'react';
import { Phone, Clock, Car, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { ENQUIRY_SECTION, BRAND } from '@/data/content';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function EnquirySection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          configInterest: requirement || '2 BHK / 3 BHK / Duplex',
          sourceSection: 'Bottom Book Visit Form',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-[#3A1C11] text-[#F5F3E6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Trust Guarantees */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.2em] mb-2">
              Book a Visit
            </p>
            <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#F5F3E6] leading-tight mb-4">
              {ENQUIRY_SECTION.headline}{' '}
              <span className="italic text-[#CE793A]">{ENQUIRY_SECTION.headlineHighlight}</span>
            </h2>
            <p className="text-sm text-[#F5F3E6]/80 leading-relaxed font-light mb-10">
              {ENQUIRY_SECTION.subheadline}
            </p>

            {/* 3 Trust Points */}
            <div className="space-y-6 mb-10">
              {ENQUIRY_SECTION.trustPoints.map((tp, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#28120C] border border-[#CE793A]/30 flex items-center justify-center shrink-0 text-[#CE793A]">
                    {i === 0 && <Clock className="w-5 h-5" />}
                    {i === 1 && <Car className="w-5 h-5" />}
                    {i === 2 && <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F3E6]">{tp.title}</h4>
                    <p className="text-xs text-[#F5F3E6]/70 mt-0.5 font-light">{tp.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Phone & WhatsApp Callouts */}
            <div className="pt-6 border-t border-[#CE793A]/20">
              <p className="text-xs font-semibold text-[#CE793A] uppercase tracking-wider mb-4">
                — or reach us directly —
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="px-5 py-3 rounded-xl bg-[#28120C] hover:bg-[#28120C]/80 border border-[#CE793A]/30 text-[#F5F3E6] text-sm font-bold flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#CE793A]" />
                  <span>{BRAND.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20about%20Codename%20Hi-Five.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#22bf5b] text-white text-sm font-bold flex items-center gap-2 transition-colors shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Lead Capture Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#28120C] rounded-3xl p-6 sm:p-10 border border-[#CE793A]/30 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#CE793A]/20 text-[#CE793A] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-gumani text-2xl font-bold text-[#F5F3E6] mb-2">
                    Request Received!
                  </h3>
                  <p className="text-xs text-[#F5F3E6]/75 leading-relaxed max-w-sm mx-auto mb-6">
                    A dedicated Kura Homes property advisor will reach out to you within 2 hours to confirm your free site visit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#CE793A] uppercase tracking-wider hover:underline"
                  >
                    Submit another number
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-gumani text-2xl font-bold text-[#F5F3E6] mb-1">
                    Get Instant Project Information
                  </h3>
                  <p className="text-xs text-[#F5F3E6]/65 mb-6 font-light">
                    We will send project brochure & pricing breakdown to your details
                  </p>

                  {/* Name (Mandatory) */}
                  <div>
                    <label className="text-[11px] font-semibold text-[#F5F3E6]/80 uppercase tracking-wider block mb-1">
                      Full Name <span className="text-[#CE793A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#3A1C11] border border-[#CE793A]/30 text-[#F5F3E6] placeholder-[#F5F3E6]/30 text-sm focus:border-[#CE793A] outline-none"
                    />
                  </div>

                  {/* Phone (Mandatory) */}
                  <div>
                    <label className="text-[11px] font-semibold text-[#F5F3E6]/80 uppercase tracking-wider block mb-1">
                      Mobile Number <span className="text-[#CE793A]">*</span>
                    </label>
                    <div className="flex">
                      <span className="px-4 py-3 bg-[#3A1C11] border border-r-0 border-[#CE793A]/30 rounded-l-xl text-xs font-semibold text-[#F5F3E6]/70 flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-r-xl bg-[#3A1C11] border border-[#CE793A]/30 text-[#F5F3E6] placeholder-[#F5F3E6]/30 text-sm focus:border-[#CE793A] outline-none"
                      />
                    </div>
                  </div>

                  {/* Email (Mandatory) */}
                  <div>
                    <label className="text-[11px] font-semibold text-[#F5F3E6]/80 uppercase tracking-wider block mb-1">
                      Email Address <span className="text-[#CE793A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#3A1C11] border border-[#CE793A]/30 text-[#F5F3E6] placeholder-[#F5F3E6]/30 text-sm focus:border-[#CE793A] outline-none"
                    />
                  </div>

                  {/* Requirement (Free Text Input, Optional) */}
                  <div>
                    <label className="text-[11px] font-semibold text-[#F5F3E6]/80 uppercase tracking-wider block mb-1">
                      Requirement <span className="text-[#F5F3E6]/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 BHK / 3 BHK / Duplex, Floor preference, etc."
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#3A1C11] border border-[#CE793A]/30 text-[#F5F3E6] placeholder-[#F5F3E6]/30 text-sm focus:border-[#CE793A] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#CE793A] hover:bg-[#E59253] text-[#3A1C11] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-4 active:scale-95"
                  >
                    <span>{loading ? 'Submitting...' : 'Submit Enquiry & Get Details'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-[#F5F3E6]/40 leading-relaxed pt-2">
                    {ENQUIRY_SECTION.consentText}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
