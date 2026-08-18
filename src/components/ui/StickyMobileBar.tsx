'use client';

import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { BRAND } from '@/data/content';
import WhatsAppIcon from './WhatsAppIcon';

interface StickyMobileBarProps {
  onEnquire: (src: string) => void;
}

export default function StickyMobileBar({ onEnquire }: StickyMobileBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#28120C] border-t-2 border-[#CE793A] shadow-2xl pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 divide-x divide-[#CE793A]/30 py-2">
        {/* Call Action */}
        <a
          href={`tel:${BRAND.phone}`}
          className="flex flex-col items-center justify-center py-1.5 text-[#F5F3E6] active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 text-[#CE793A] mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5F3E6]">
            Contact Us
          </span>
        </a>

        {/* Real Official WhatsApp Action */}
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20about%20CODENAME%20HI%20FIVE.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 text-[#25D366] active:scale-95 transition-all"
        >
          <WhatsAppIcon className="w-6 h-6 mb-0.5 drop-shadow-md" size={24} />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#25D366]">
            WhatsApp
          </span>
        </a>

        {/* Enquire Now Action */}
        <button
          onClick={() => onEnquire('Mobile Sticky Bar')}
          className="flex flex-col items-center justify-center py-1.5 text-[#CE793A] active:scale-95 transition-all"
        >
          <CalendarCheck className="w-5 h-5 mb-1 text-[#CE793A]" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#CE793A]">
            Enquire Now
          </span>
        </button>
      </div>
    </div>
  );
}
