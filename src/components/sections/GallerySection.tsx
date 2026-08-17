'use client';

import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/content';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Exterior' | 'Interior'>('All');
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F5F3E6] text-[#1B1717]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5">
            <Camera className="w-4 h-4" />
            <span>Exterior & Interior</span>
          </p>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-2">
            A home you&apos;ll be <span className="italic text-[#CE793A]">proud to return to.</span>
          </h2>
          <p className="text-xs text-[#1B1717]/60 uppercase tracking-widest font-semibold">
            Spaces designed for real living
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(['All', 'Exterior', 'Interior'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#3A1C11] text-[#F5F3E6] shadow-md'
                  : 'bg-[#EEE8DE] text-[#3A1C11] hover:bg-[#E2D8CA]'
              }`}
            >
              {cat === 'All' ? 'All Spaces' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EEE8DE] border border-[#3A1C11]/10 cursor-pointer group shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A1C11]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold text-[#CE793A] uppercase tracking-widest block">
                  {item.category}
                </span>
                <span className="text-sm font-bold text-[#F5F3E6] truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-[80] bg-[#1B1717]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveIdx(null)}
        >
          <button
            onClick={() => setActiveIdx(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F5F3E6]/10 text-[#F5F3E6] flex items-center justify-center hover:bg-[#F5F3E6]/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx(prev => (prev! > 0 ? prev! - 1 : filtered.length - 1));
            }}
            className="absolute left-4 w-12 h-12 rounded-full bg-[#F5F3E6]/10 text-[#F5F3E6] flex items-center justify-center hover:bg-[#F5F3E6]/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx(prev => (prev! < filtered.length - 1 ? prev! + 1 : 0));
            }}
            className="absolute right-4 w-12 h-12 rounded-full bg-[#F5F3E6]/10 text-[#F5F3E6] flex items-center justify-center hover:bg-[#F5F3E6]/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[activeIdx].src}
              alt={filtered[activeIdx].title}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl shadow-2xl object-contain mb-4"
            />
            <h4 className="font-gumani text-2xl font-bold text-[#F5F3E6]">
              {filtered[activeIdx].title}
            </h4>
            <p className="text-xs text-[#CE793A] font-semibold uppercase tracking-wider mt-1">
              {filtered[activeIdx].category} · {activeIdx + 1} of {filtered.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
