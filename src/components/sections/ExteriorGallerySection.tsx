'use client';

import React, { useRef, useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const EXTERIOR_IMAGES = [
  { src: '/images/Front view.webp', title: 'Front View' },
  { src: '/images/Night Aerial.webp', title: 'Night Aerial' },
  { src: '/images/Drone view.jpg', title: 'Drone View' },
  { src: '/images/water body.webp', title: 'Water Body' },
  { src: '/images/club view.webp', title: 'Club View' },
  { src: '/images/Street view.webp', title: 'Street View' },
  { src: '/images/swimming pool.webp', title: 'Swimming Pool' },
  { src: '/images/Basket ball court.webp', title: 'Basketball Court' },
  { src: '/images/Childrens Play area.webp', title: "Children's Play Area" },
  { src: '/images/community view.webp', title: 'Community View' },
  { src: '/images/Birds level view.webp', title: "Bird's Eye View" },
];

export default function ExteriorGallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLightBox, setActiveLightBox] = useState<string | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      const newIndex = Math.round(scrollLeft / (cardWidth + 16));
      setActiveIndex(Math.min(Math.max(newIndex, 0), EXTERIOR_IMAGES.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + 16),
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  return (
    <section id="exterior" className="py-16 sm:py-20 lg:py-28 bg-[#EEE8DE] text-[#1B1717]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-4">
          <div>
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-[#CE793A]" />
              <span>EXTERIOR & AMENITIES</span>
            </p>
            <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight">
              Grand scale, <span className="italic text-[#CE793A]">crafted in detail.</span>
            </h2>
          </div>

          {/* Slide Counter */}
          <div className="flex items-center">
            <span className="font-gumani text-sm sm:text-base font-bold text-[#3A1C11] bg-[#F5F3E6] px-4 py-1.5 rounded-full border border-[#3A1C11]/10 shadow-sm">
              {String(activeIndex + 1).padStart(2, '0')} / {String(EXTERIOR_IMAGES.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Carousel Rail */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EXTERIOR_IMAGES.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveLightBox(img.src)}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-center bg-[#F5F3E6] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#3A1C11]/15 group cursor-pointer transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#28120C]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28120C]/85 via-transparent to-transparent opacity-75 group-hover:opacity-55 transition-opacity" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#28120C]/70 text-[#F5F3E6] backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-gumani text-lg sm:text-xl font-bold text-[#F5F3E6] drop-shadow-md">
                    {img.title}
                  </span>
                  <span className="text-[11px] font-bold text-[#CE793A] bg-[#28120C]/80 px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm">
                    Exterior
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Progress Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {EXTERIOR_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-[#CE793A]' : 'w-2 bg-[#3A1C11]/20 hover:bg-[#3A1C11]/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightBox && (
        <div
          className="fixed inset-0 z-50 bg-[#28120C]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightBox(null)}
        >
          <button
            onClick={() => setActiveLightBox(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#F5F3E6]/10 text-[#F5F3E6] hover:bg-[#CE793A] hover:text-[#3A1C11] flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeLightBox}
            alt="Enlarged view"
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
