"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/catalog";
import { StarfishIcon } from "@/components/MarineIcons";

export default function HeroManta() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-dvh w-full flex flex-col justify-between overflow-hidden bg-[#0B3D6E] pt-28 sm:pt-32"
    >
      {/* Full-bleed Manta Ray looping video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/gallery/IMG_7294.webp"
          className="w-full h-full object-cover scale-[1.02]"
        >
          <source src={SITE_CONFIG.heroMantaVideoMp4} type="video/mp4" />
          <source src={SITE_CONFIG.heroMantaVideoWebm} type="video/webm" />
        </video>

        {/* Sunlit oceanic veil for clean readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D6E]/48 via-[#0B7A8F]/20 to-[#0B3D6E]/78" />
      </div>

      {/* Main Centered Editorial Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center py-10 sm:py-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="font-script text-2xl sm:text-3xl text-[#F6C44E] drop-shadow mb-2.5"
        >
          CarlyUnderWater
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="text-balance text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.08] max-w-4xl drop-shadow-[0_6px_28px_rgba(11,37,64,0.35)]"
        >
          Lleva el océano contigo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
          className="text-pretty mt-4 text-base sm:text-lg text-white/92 max-w-2xl leading-[1.65] font-medium"
        >
          Trajes de baño confeccionados <strong>a tu medida exacta</strong> con
          estampados de tiburón ballena y experiencias privadas de{" "}
          <strong>buceo en el Sistema Arrecifal Veracruzano</strong>.
        </motion.p>

        {/* NEW PROPOSAL: Sleek Split Glass Editorial Dock with Live Photo Thumbnails (lets the manta ray breathe) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.26, ease: "easeOut" }}
          className="mt-9 sm:mt-11 w-full max-w-2xl rounded-full p-1.5 bg-[#0B2540]/38 backdrop-blur-xl border border-white/25 shadow-[0_20px_60px_rgba(11,37,64,0.32)] grid grid-cols-1 sm:grid-cols-2 gap-1.5"
        >
          {/* Left Wing: Swimwear */}
          <a
            href="#trajes"
            className="btn-wave group flex items-center justify-between gap-3 pl-2 pr-4 py-2 rounded-full bg-[#FFFDF9]/95 hover:bg-white text-left transition-all duration-200"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-11 rounded-full overflow-hidden shrink-0 ring-2 ring-[#FF7A6E]/60">
                <img
                  src="/assets/products/galatea-4.webp"
                  alt="Trajes de baño"
                  className="w-full h-full object-cover object-[50%_68%] transition-transform duration-300 group-hover:scale-115"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-[#0B3D6E] leading-tight truncate">
                  Trajes de Baño
                </p>
                <p className="text-[11px] font-semibold text-[#0B7A8F] truncate">
                  Hechos a tu medida · $800
                </p>
              </div>
            </div>
            <span className="size-8 rounded-full bg-[#FF7A6E] text-white flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-4" />
            </span>
          </a>

          {/* Right Wing: Diving Packages */}
          <a
            href="#buceo"
            className="btn-wave group flex items-center justify-between gap-3 pl-2 pr-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-left transition-all duration-200"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-11 rounded-full overflow-hidden shrink-0 ring-2 ring-[#4EC7C3]/75">
                <img
                  src="/assets/gallery/IMG_1689.webp"
                  alt="Paquetes de buceo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-115"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-white leading-tight truncate">
                  Paquetes de Buceo
                </p>
                <p className="text-[11px] font-semibold text-[#BFE8E3] truncate">
                  Clases privadas SNSI · Veracruz
                </p>
              </div>
            </div>
            <span className="size-8 rounded-full bg-[#4EC7C3] text-[#0B3D6E] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </motion.div>

        {/* Micro trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/88 font-medium"
        >
          <span className="inline-flex items-center gap-1.5">
            <StarfishIcon className="size-4 text-[#F6C44E]" />
            Hechos a tus medidas exactas
          </span>
          <span className="hidden sm:inline text-white/35">•</span>
          <span>Envíos a todo México</span>
          <span className="hidden sm:inline text-white/35">•</span>
          <span>Veracruz y Boca del Río</span>
        </motion.div>
      </div>

      {/* Scroll cue well clear of bottom sand wave */}
      <div className="relative z-20 flex flex-col items-center pb-20 sm:pb-24">
        <a
          href="#trajes"
          className="flex flex-col items-center gap-1.5 text-white/85 hover:text-[#F6C44E] transition-colors"
        >
          <span className="font-accent text-xl leading-none">
            Desliza y descubre
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-4" />
          </motion.div>
        </a>
      </div>

      {/* Smooth sand wave bottom edge */}
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="absolute -bottom-px left-0 w-full h-12 sm:h-16 md:h-20 z-20 text-[#F7F1E7] pointer-events-none"
      >
        <path
          fill="currentColor"
          d="M0,44 C260,104 560,0 860,52 C1120,96 1300,28 1440,48 L1440,96 L0,96 Z"
        />
      </svg>
    </section>
  );
}
