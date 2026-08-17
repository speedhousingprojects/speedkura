'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { WATCH_AND_DECIDE } from '@/data/content';

interface WatchAndDecideProps {
  onEnquire?: (src: string) => void;
}

export default function WatchAndDecideSection({ onEnquire }: WatchAndDecideProps) {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    video: string;
    category: string;
  } | null>(null);

  return (
    <section id="watch" className="py-20 lg:py-28 bg-[#F5F3E6] text-[#1B1717] border-t border-[#3A1C11]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#CE793A]" />
            <span>WATCH & DECIDE</span>
          </p>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight">
            Hear it from <span className="italic text-[#CE793A]">those who know.</span>
          </h2>
        </div>

        {/* 3 Responsive Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WATCH_AND_DECIDE.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedVideo(item)}
              className="relative aspect-[16/10] sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#3A1C11]/15 group cursor-pointer bg-[#28120C] transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Video Thumbnail (Extracts first frame) */}
              <video
                src={`${item.video}#t=0.5`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                preload="metadata"
                muted
                playsInline
              />

              {/* Gradient Scrim for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717]/90 via-[#1B1717]/30 to-transparent" />

              {/* Centered Translucent Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-[#CE793A] backdrop-blur-md text-white flex items-center justify-center transition-all group-hover:scale-110 shadow-lg border border-white/30">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </div>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[11px] font-bold text-[#CE793A] uppercase tracking-wider block mb-1">
                  {item.num} — {item.category}
                </span>
                <h3 className="font-gumani text-lg sm:text-xl font-bold text-[#F5F3E6] leading-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0807]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            aria-label="Close video player"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#F5F3E6]/10 text-[#F5F3E6] hover:bg-[#CE793A] hover:text-[#3A1C11] flex items-center justify-center transition-all shadow-lg active:scale-95 z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content Container */}
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#CE793A]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.video}
              controls
              autoPlay
              playsInline
              className="w-full aspect-video object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
