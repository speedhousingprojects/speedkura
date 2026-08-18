'use client';

import React, { useState } from 'react';
import { X, Send, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import { BRAND } from '@/data/content';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export default function EnquiryModal({ isOpen, onClose, source = '' }: ModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
  });
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          configInterest: form.requirement || '2 BHK / 3 BHK / Duplex',
          sourceSection: `Modal: ${source || 'Website'}`,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', phone: '', email: '', requirement: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0B0807]/85 backdrop-blur-sm animate-fadeIn" />

      {/* Modal Card */}
      <div
        className="relative bg-[#3A1C11] rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-2xl border border-[#CE793A]/30 text-[#F5F3E6] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 bg-[#28120C]/80 hover:bg-[#CE793A] hover:text-[#3A1C11] rounded-full flex items-center justify-center text-[#F5F3E6]/80 transition-colors border border-[#CE793A]/20"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'sent' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#CE793A]/20 text-[#CE793A] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#CE793A]/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-gumani text-2xl sm:text-3xl text-[#F5F3E6] mb-2">Thank You!</h3>
            <p className="text-[#F5F3E6]/80 text-sm mb-6 font-light leading-relaxed">
              Your enquiry has been received. A dedicated Kura Homes advisor will contact you within 2 hours.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-[#CE793A] hover:bg-[#E59253] text-[#3A1C11] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[#CE793A] text-[10px] font-bold uppercase tracking-widest mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enquire Now · CODENAME HI FIVE</span>
              </div>
              <h3 className="font-gumani text-2xl text-[#F5F3E6] leading-tight">
                Request Pricing & Project Details
              </h3>
              <p className="font-figtree font-normal text-xs text-[#F5F3E6]/75 mt-1">
                Get instant brochure, official pricing breakdown & floor plans.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Honeypot */}
              <input
                type="text"
                name="website_url"
                value={honey}
                onChange={(e) => setHoney(e.target.value)}
                className="absolute opacity-0 h-0 w-0 -z-10"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name (Mandatory) */}
              <div>
                <label className="text-[11px] font-semibold text-[#F5F3E6]/80 uppercase tracking-wider block mb-1">
                  Full Name <span className="text-[#CE793A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#28120C] border border-[#CE793A]/30 rounded-xl text-[#F5F3E6] text-sm placeholder-[#F5F3E6]/30 focus:border-[#CE793A] focus:ring-1 focus:ring-[#CE793A] outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone (Mandatory) */}
              <div>
                <label className="text-[11px] font-semibold text-[#F5F3E6]/80 uppercase tracking-wider block mb-1">
                  Phone Number <span className="text-[#CE793A]">*</span>
                </label>
                <div className="flex">
                  <span className="px-3.5 py-3 bg-[#28120C]/90 border border-r-0 border-[#CE793A]/30 rounded-l-xl text-[#F5F3E6]/60 text-sm font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="flex-1 px-4 py-3 bg-[#28120C] border border-[#CE793A]/30 rounded-r-xl text-[#F5F3E6] text-sm placeholder-[#F5F3E6]/30 focus:border-[#CE793A] focus:ring-1 focus:ring-[#CE793A] outline-none transition-all"
                    placeholder="10-digit mobile number"
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
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#28120C] border border-[#CE793A]/30 rounded-xl text-[#F5F3E6] text-sm placeholder-[#F5F3E6]/30 focus:border-[#CE793A] focus:ring-1 focus:ring-[#CE793A] outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>

              {/* Requirement (Text Input - Type freely, Optional) */}
              <div>
                <label className="text-[11px] font-semibold text-[#F5F3E6]/80 uppercase tracking-wider block mb-1">
                  Requirement <span className="text-[#F5F3E6]/40 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={form.requirement}
                  onChange={(e) => setForm((f) => ({ ...f, requirement: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#28120C] border border-[#CE793A]/30 rounded-xl text-[#F5F3E6] text-sm placeholder-[#F5F3E6]/30 focus:border-[#CE793A] outline-none transition-all"
                  placeholder="e.g. 2 BHK / 3 BHK / Duplex, Floor preference, etc."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-rose-400 text-xs bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/40">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Submission error. Please try again or call {BRAND.phone}.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 mt-2 bg-[#CE793A] hover:bg-[#E59253] text-[#3A1C11] font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
              >
                {status === 'sending' ? (
                  <span>Sending Details...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-[#F5F3E6]/50 font-light">
                100% Confidential · Response within 2 hours · Direct Developer Team
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
