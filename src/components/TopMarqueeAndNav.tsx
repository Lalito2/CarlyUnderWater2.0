"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/catalog";
import { useCart } from "@/context/CartContext";
import {
  BeachToteIcon,
  OceanWaveIcon,
  ShellIcon,
} from "@/components/MarineIcons";

interface Props {
  onOpenPromo: () => void;
}

const NAV_LINKS = [
  { label: "Trajes de baño", href: "#trajes" },
  { label: "Experiencia de buceo", href: "#inmersion" },
  { label: "Paquetes de buceo", href: "#buceo" },
  { label: "Sobre Carly", href: "#sobre-carly" },
  { label: "Envíos y cuidados", href: "#politicas" },
];

export default function TopMarqueeAndNav({ onOpenPromo }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeLoop = [...SITE_CONFIG.marqueeItems, ...SITE_CONFIG.marqueeItems];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Subtle top announcement marquee */}
      <div className="bg-[#0B3D6E] text-[#F7F1E7] text-xs font-medium overflow-hidden border-b border-white/10">
        <div className="relative flex items-center py-2">
          <div className="animate-marquee items-center">
            {marqueeLoop.map((text, idx) => (
              <button
                key={idx}
                onClick={onOpenPromo}
                className="flex items-center gap-3 px-6 whitespace-nowrap hover:text-[#F6C44E] transition-colors cursor-pointer"
              >
                <span className="inline-block size-1.5 rounded-full bg-[#4EC7C3]" />
                <span>{text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Adaptive floating coastal navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFDF9]/95 backdrop-blur-md shadow-sm border-b border-[#0B3D6E]/8 py-2.5"
            : "bg-gradient-to-b from-[#0B2540]/55 via-[#0B2540]/18 to-transparent py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <motion.img
              whileHover={{ rotate: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              src={
                scrolled
                  ? "/images/brand/logo-teal.png"
                  : "/images/brand/logo-white.png"
              }
              alt="CarlyUnderWater"
              className="h-11 sm:h-12 w-auto object-contain transition-all duration-200"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span
                className={`font-script text-xl transition-colors ${
                  scrolled ? "text-[#0B3D6E]" : "text-white"
                }`}
              >
                Carly
              </span>
              <span
                className={`text-[9px] font-bold tracking-[0.22em] uppercase mt-0.5 transition-colors ${
                  scrolled ? "text-[#0B7A8F]" : "text-[#BFE8E3]"
                }`}
              >
                UNDERWATER
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors duration-200 group ${
                  scrolled
                    ? "text-[#0B3D6E] hover:text-[#0B7A8F] hover:bg-[#BFE8E3]/30"
                    : "text-white/95 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
                <span className="absolute left-3.5 right-3.5 bottom-1 h-0.5 bg-[#FF7A6E] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenPromo}
              className={`hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer btn-wave ${
                scrolled
                  ? "bg-[#F6C44E]/28 text-[#0B3D6E] hover:bg-[#F6C44E]/45"
                  : "bg-white/15 text-white backdrop-blur-sm border border-white/25 hover:bg-white/25"
              }`}
            >
              <ShellIcon className="size-4 text-[#FF7A6E]" />
              <span>Beneficios</span>
            </button>

            <button
              onClick={openCart}
              aria-label="Abrir carrito"
              className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer btn-wave ${
                scrolled
                  ? "bg-[#0B3D6E] text-white hover:bg-[#0B7A8F] shadow-sm"
                  : "bg-[#FF7A6E] text-white hover:bg-[#ff6658] shadow-md"
              }`}
            >
              <BeachToteIcon className="size-4" />
              <span className="hidden sm:inline">Carrito</span>
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#F6C44E] text-[#0B3D6E] text-[11px] font-extrabold tabular-nums"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menú"
              className={`lg:hidden p-2 rounded-full transition-colors cursor-pointer ${
                scrolled
                  ? "text-[#0B3D6E] bg-[#F7F1E7]"
                  : "text-white bg-white/15 backdrop-blur-sm"
              }`}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#FFFDF9]/98 backdrop-blur-xl border-b border-[#0B3D6E]/10 shadow-xl px-6 py-5"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-2xl text-[#0B3D6E] font-semibold hover:bg-[#BFE8E3]/35 transition-colors"
                >
                  <span>{link.label}</span>
                  <OceanWaveIcon className="size-4 text-[#0B7A8F]" />
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenPromo();
                }}
                className="mt-2 py-3 px-4 rounded-2xl bg-[#F6C44E]/28 text-[#0B3D6E] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShellIcon className="size-4 text-[#FF7A6E]" />
                <span>Ver beneficios y envíos</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
