"use client";

import { useEffect, useState } from "react";
import TopMarqueeAndNav from "@/components/TopMarqueeAndNav";
import WelcomePromoModal from "@/components/WelcomePromoModal";
import HeroManta from "@/components/HeroManta";
import SwimwearShowcase from "@/components/SwimwearShowcase";
import DiveScrollExperience from "@/components/DiveScrollExperience";
import DivingPackages from "@/components/DivingPackages";
import AboutAndTrust from "@/components/AboutAndTrust";
import SunsetFooter from "@/components/SunsetFooter";
import CartBarAndModal from "@/components/CartBarAndModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const PROMO_SEEN_KEY = "carlyunderwater_welcome_seen_v1";

export default function HomePage() {
  const [promoOpen, setPromoOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(PROMO_SEEN_KEY);
      if (!seen) {
        const timer = setTimeout(() => {
          setPromoOpen(true);
          sessionStorage.setItem(PROMO_SEEN_KEY, "1");
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore sessionStorage restrictions
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F1E7] text-[#0B2540]">
      <TopMarqueeAndNav onOpenPromo={() => setPromoOpen(true)} />

      <main>
        <HeroManta />
        <SwimwearShowcase />
        <DiveScrollExperience />
        <DivingPackages />
        <AboutAndTrust />
      </main>

      <SunsetFooter />

      <WelcomePromoModal open={promoOpen} onClose={() => setPromoOpen(false)} />
      <CartBarAndModal />
      <FloatingWhatsApp />
    </div>
  );
}
