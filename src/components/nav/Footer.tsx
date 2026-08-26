'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { BRAND, FOOTER_DATA, NAV_LINKS, ASSETS } from '@/data/content';
import HiFiveBrandLockup from '@/components/ui/HiFiveBrandLockup';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-[#28120C] text-[#F5F3E6] border-t border-[#CE793A]/20">
      {/* Top Banner Callout */}
      <div className="bg-[#28120C] border-b border-[#CE793A]/20 py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-gumani text-2xl sm:text-3xl font-bold text-[#F5F3E6] mb-2">
            {FOOTER_DATA.callout}
          </h3>
          <p className="text-xs text-[#CE793A] font-semibold uppercase tracking-widest">
            {FOOTER_DATA.address}
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              {/* Kura Homes Logo */}
              <img
                src={ASSETS.logos.kuraHomes}
                alt="Kura Homes"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <span className="text-[#CE793A]/40 text-lg font-light">|</span>
              {/* CODENAME HI-FIVE Brand Lockup */}
              <HiFiveBrandLockup variant="footer" />
            </div>

            <p className="text-xs text-[#F5F3E6]/70 leading-relaxed font-light mb-6 max-w-md">
              CODENAME HI-FIVE is a flagship 5.3-acre gated community development by Kura Homes, bringing 55+ years of trust and craftsmanship to the high-growth ORR Exit-5 corridor in Gandimaisamma / Bowrampet, Hyderabad.
            </p>

            {/* WhatsApp Direct Connect */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20about%20CODENAME%20HI-FIVE.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#3A1C11] border border-[#CE793A]/30 flex items-center gap-2 text-xs font-semibold text-[#F5F3E6] hover:border-[#25D366] transition-all"
                aria-label="WhatsApp Sales"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CE793A] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F3E6]/75">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#CE793A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal Pages */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CE793A] mb-4">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F3E6]/75">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#CE793A] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#CE793A] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#CE793A] transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Approvals & RERA */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CE793A] mb-4">
              Statutory Approvals
            </h4>
            <div className="bg-[#3A1C11] rounded-2xl p-4 border border-[#CE793A]/20 space-y-2.5 mb-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#F5F3E6]/60">HMDA Approval:</span>
                <span className="font-semibold text-[#F5F3E6]">{FOOTER_DATA.hmda}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#F5F3E6]/60">TG RERA Reg:</span>
                <span className="font-semibold text-[#CE793A]">{FOOTER_DATA.rera}</span>
              </div>
            </div>

            <a
              href="https://rera.telangana.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#CE793A] hover:underline font-semibold"
            >
              <span>Verify on TG RERA Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Important Disclaimer Section Above Bottom Bar */}
      <div className="border-t border-[#CE793A]/15 bg-[#28120C]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-[11px] text-[#F5F3E6]/60 leading-relaxed font-light">
            <strong className="text-[#CE793A] font-semibold">Important disclaimer:</strong> Computed costs and loan EMIs on this page are indicative and provided for illustration only. They are not financial or investment advice and do not constitute a guarantee. Actual loan terms vary by bank and applicant profile. All construction-related claims (% complete, possession date) are subject to TG RERA filings: P02200002810.
          </p>
        </div>
      </div>

      {/* Copyright Line & Direct Legal Links */}
      <div className="border-t border-[#CE793A]/15 py-5 bg-[#28120C] text-center text-xs text-[#F5F3E6]/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Kura Homes. All rights reserved.</span>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-[#CE793A] transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#CE793A] transition-colors">
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link href="/disclaimer" className="hover:text-[#CE793A] transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
