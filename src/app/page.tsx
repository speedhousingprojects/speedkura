'use client';

import React, { useState, useCallback, useEffect } from 'react';

// Navigation & Layout
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';

// Page Sections
import HeroSection from '@/components/hero/HeroSection';
import WhySection from '@/components/sections/WhySection';
import PriceContextSection from '@/components/sections/PriceContextSection';
import StartingPriceSection from '@/components/sections/StartingPriceSection';
import NetOutgoCalculator from '@/components/sections/NetOutgoCalculator';
import LocationSection from '@/components/sections/LocationSection';
import ExteriorGallerySection from '@/components/sections/ExteriorGallerySection';
import InteriorGallerySection from '@/components/sections/InteriorGallerySection';
import WatchAndDecideSection from '@/components/sections/WatchAndDecideSection';
import FloorPlansSection from '@/components/sections/FloorPlansSection';
import ConstructionSection from '@/components/sections/ConstructionSection';
import EnquirySection from '@/components/sections/EnquirySection';

// Persistent Overlay UI
import EnquiryModal from '@/components/ui/EnquiryModal';
import StickyMobileBar from '@/components/ui/StickyMobileBar';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Website CTA');

  const openEnquiry = useCallback((source?: string) => {
    setModalSource(source || 'Website CTA');
    setModalOpen(true);
  }, []);

  // 5-Second Auto Popup on every website visit
  useEffect(() => {
    const timer = setTimeout(() => {
      openEnquiry('Automatic 5s Popup');
    }, 5000);

    return () => clearTimeout(timer);
  }, [openEnquiry]);

  return (
    <>
      {/* 3-Zone Sticky Header */}
      <Header onEnquire={openEnquiry} />

      {/* Main Experience Flow */}
      <main>
        {/* 1. Hero with Location Badge, Question Headline, Ticker Strip & 6 Key Stats */}
        <HeroSection onEnquire={openEnquiry} />

        {/* 2. Why Section: "Everything you need, exactly where you need it" (4 USP Cards) */}
        <WhySection onEnquire={openEnquiry} />

        {/* 3. ORR 5 Price Context: "ORR 5 — in an earlier growth phase" (Corridor Comparison) */}
        <PriceContextSection />

        {/* 4. Starting at ₹55L 2 BHK / ₹95L Duplex with 5 Checkmarks */}
        <StartingPriceSection onEnquire={openEnquiry} />

        {/* 5. Your ₹55L Home: Net Outgo Calculator (Scenario A vs B, Breakdown Table, Sliders) */}
        <NetOutgoCalculator />

        {/* 6. In the Spotlight — Location: Where the city breathes easy (5 Stats, Compact Hero View) */}
        <LocationSection onEnquire={openEnquiry} />

        {/* 7. Exterior Section: Horizontal Swipeable Rail of 12 Architecture & Amenity Photos */}
        <ExteriorGallerySection />

        {/* 8. Interior Section: "Spaces designed for real living." (7 Living Space Photos) */}
        <InteriorGallerySection />

        {/* 9. Watch & Decide (01 Location, 02 Investment, 03 Design) */}
        <WatchAndDecideSection onEnquire={openEnquiry} />

        {/* 10. Floor Plans: 2 BHK & Duplex with blurred blueprint previews */}
        <FloorPlansSection onEnquire={openEnquiry} />

        {/* 11. Construction Progress: 90% Complete. Possession Soon. */}
        <ConstructionSection />

        {/* 12. Book a Visit: Final High-Conversion Form with 3 Trust Guarantees & Direct Sync */}
        <EnquirySection />
      </main>

      {/* Footer with Legal Info, RERA / HMDA Numbers & Full Disclaimer */}
      <Footer />

      {/* Persistent UI Elements */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source={modalSource}
      />
      <StickyMobileBar onEnquire={openEnquiry} />
      <FloatingWhatsApp />
    </>
  );
}
