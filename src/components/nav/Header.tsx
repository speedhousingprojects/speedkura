'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { ASSETS, BRAND, NAV_LINKS } from '@/data/content';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

interface HeaderProps {
  onEnquire?: (src?: string) => void;
}

export default function Header({ onEnquire }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#3A1C11]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#CE793A]/20'
          : 'bg-gradient-to-b from-[#28120C]/95 via-[#3A1C11]/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* ================= LEFT: Kura Homes Logo (Enlarged) ================= */}
        <div className="flex items-center">
          <a href="/#hero" className="flex items-center">
            <img
              src={ASSETS.logos.kuraHomes}
              alt="Kura Homes"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </a>
        </div>

        {/* ================= CENTER: Enlarged Navigation Links ================= */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 xl:px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#F5F3E6]/90 hover:text-[#CE793A] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-[#CE793A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ================= RIGHT: Contact & Enlarged CTAs ================= */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Quick Call */}
          <a
            href={`tel:${BRAND.phone}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5F3E6]/10 text-[#F5F3E6] text-sm font-medium hover:bg-[#F5F3E6]/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#CE793A]" />
            <span className="font-semibold">{BRAND.phone}</span>
          </a>

          {/* Enquire CTA */}
          <button
            onClick={() => onEnquire?.('Header CTA')}
            className="px-5 sm:px-6 py-2.5 bg-[#CE793A] hover:bg-[#E59253] text-[#3A1C11] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
          >
            <span>Book Visit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 text-[#F5F3E6] hover:text-[#CE793A] transition-colors rounded-lg bg-[#F5F3E6]/5"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#28120C] border-t border-[#CE793A]/30 px-4 py-5 mt-2.5 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 bg-[#3A1C11] rounded-xl text-[#F5F3E6] text-sm font-medium text-center hover:bg-[#CE793A] hover:text-[#3A1C11] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href={`tel:${BRAND.phone}`}
              className="w-full py-3 bg-[#3A1C11] text-[#F5F3E6] rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#CE793A]" />
              <span>Call {BRAND.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20about%20this%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] text-white rounded-xl flex items-center justify-center gap-2 text-sm font-semibold shadow-md"
            >
              <WhatsAppIcon className="w-5 h-5" size={20} />
              <span>WhatsApp Sales</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
