"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/catalog";
import {
  DiveMaskIcon,
  HibiscusIcon,
  MeasureTapeIcon,
  WavePinIcon,
} from "@/components/MarineIcons";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ICONS = [MeasureTapeIcon, WavePinIcon, DiveMaskIcon, MessageCircle];

export default function WelcomePromoModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const promo = SITE_CONFIG.welcomePromo;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B2540]/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden bg-[#FFFDF9] shadow-2xl border border-white/60"
            data-lenis-prevent
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Cerrar promoción"
              className="absolute top-4 right-4 z-20 size-10 rounded-full bg-white/92 hover:bg-white text-[#0B3D6E] flex items-center justify-center shadow-md transition-transform duration-200 hover:rotate-90 cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Top sunlit photo section (Kulani Kinis inspired wavy cut) */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0B3D6E]">
              <img
                src={promo.image}
                alt="Colección Tiburón Ballena CarlyUnderWater"
                className="w-full h-full object-cover object-[50%_72%]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D6E]/50 via-[#0B3D6E]/25 to-[#0B3D6E]/75" />

              {/* Live Collection Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 text-[#0B3D6E] text-[11px] font-extrabold shadow-sm">
                <span className="size-2 rounded-full bg-[#FF7A6E]" />
                <span>{promo.badge}</span>
              </div>

              {/* Headline over sunlit image */}
              <div className="absolute inset-x-6 bottom-10 text-center text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[#0B3D6E] text-[11px] font-extrabold shadow-sm mb-2">
                  <HibiscusIcon className="size-3.5 text-[#FF7A6E]" />
                  <span className="tabular-nums">Trajes a tu medida · $800 MXN</span>
                </span>
                <p className="font-script text-2xl sm:text-3xl text-[#F6C44E] drop-shadow">
                  {promo.eyebrow}
                </p>
                <h3 className="text-balance text-lg sm:text-xl font-extrabold leading-snug mt-1 drop-shadow">
                  {promo.title}
                </h3>
              </div>

              {/* Organic wave divider */}
              <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className="absolute -bottom-px left-0 w-full h-8 text-[#FFFDF9]"
              >
                <path
                  fill="currentColor"
                  d="M0,48 C240,120 480,0 720,48 C960,96 1200,12 1440,56 L1440,120 L0,120 Z"
                />
              </svg>
            </div>

            {/* Bottom clean benefits + CTA */}
            <div className="px-6 sm:px-8 pt-3 pb-7">
              <p className="text-pretty text-center text-xs sm:text-sm text-[#0B3D6E]/78 mb-5 leading-relaxed">
                {promo.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {promo.perks.map((perk, idx) => {
                  const Icon = ICONS[idx % ICONS.length];
                  return (
                    <div
                      key={perk.title}
                      className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F7F1E7]/85 border border-[#0B3D6E]/8"
                    >
                      <div className="size-8 rounded-xl bg-[#BFE8E3]/65 text-[#0B7A8F] flex items-center justify-center shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0B3D6E] leading-snug">
                          {perk.title}
                        </p>
                        <p className="text-[11px] text-[#0B3D6E]/70 leading-relaxed mt-0.5">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#trajes"
                  onClick={onClose}
                  className="btn-wave flex-1 py-3.5 px-5 rounded-full bg-[#FF7A6E] hover:bg-[#ff6658] text-white font-bold text-sm text-center shadow-md"
                >
                  {promo.ctaPrimary}
                </a>
                <a
                  href="#buceo"
                  onClick={onClose}
                  className="btn-wave flex-1 py-3.5 px-5 rounded-full bg-[#0B3D6E] hover:bg-[#0B7A8F] text-white font-bold text-sm text-center"
                >
                  {promo.ctaSecondary}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
