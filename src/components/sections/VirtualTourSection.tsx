'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Compass, Sparkles } from 'lucide-react';
import { ASSETS } from '@/data/content';

export default function VirtualTourSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#28120C] text-[#F5F3E6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Virtual Tour</span>
          </p>
          <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#F5F3E6] leading-tight">
            Walk through this project in <span className="italic text-[#CE793A]">360°.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#3A1C11] border border-[#CE793A]/30 shadow-2xl relative group">
          <video
            ref={videoRef}
            src={ASSETS.videos.hero}
            poster={ASSETS.images.heroBg}
            playsInline
            loop
            className="w-full aspect-video object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Center Play/Pause button */}
          <div
            onClick={handleTogglePlay}
            className="absolute inset-0 bg-[#28120C]/40 flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-[#28120C]/30"
          >
            <div className="w-20 h-20 rounded-full bg-[#CE793A] text-[#3A1C11] flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
