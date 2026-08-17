'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function ConstructionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play ONLY when user is inside this section; Pause immediately when scrolling out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          // Play when in view
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          });
        } else {
          // Pause immediately when scrolled away
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section ref={sectionRef} id="progress" className="py-20 lg:py-28 bg-[#F5F3E6] text-[#1B1717] border-t border-[#3A1C11]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#CE793A]" />
            <span>CONSTRUCTION PROGRESS</span>
            <span className="w-4 h-[1.5px] bg-[#CE793A]" />
          </p>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-3">
            90% complete. <span className="italic text-[#CE793A]">Possession Soon.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1B1717]/80 leading-relaxed font-light">
            Real progress, captured on-site. No surprises at possession.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#3A1C11]/15 bg-[#28120C] group">
            <video
              ref={videoRef}
              src="/videos/construction-progress.mp4"
              poster="/images/Night Aerial.webp"
              preload="metadata"
              controls
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom Play Button Overlay (shown when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-[#1B1717]/35 backdrop-blur-[1px] flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-[#1B1717]/25"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#CE793A] text-[#3A1C11] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Metadata Footer Note */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#1B1717]/70 font-light flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
            <span>
              Progress updated: May 2026 · Cross-referenced with TG RERA quarterly filing <strong>P02200002810</strong>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
