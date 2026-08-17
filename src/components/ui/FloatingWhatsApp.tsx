'use client';

import React from 'react';
import { BRAND } from '@/data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Contact options"
      className="hidden md:block fixed bottom-6 right-6 z-40"
    >
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20CODENAME%20HI-FIVE%20at%20ORR%20Exit-5.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sales on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/40"
      >
        <WhatsAppIcon className="w-8 h-8 fill-current" />
        
        {/* Tooltip */}
        <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#28120C] text-[#F5F3E6] text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-[#CE793A]/30 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
