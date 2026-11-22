"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Instagram } from "lucide-react";
import { GALLERY_PHOTOS, POLICIES, SITE_CONFIG } from "@/data/catalog";
import GridMotion from "@/components/GridMotion";
import {
  CoastalParcelIcon,
  CoralIcon,
  DiveMaskIcon,
  ShellIcon,
  StarfishIcon,
  TideCycleIcon,
  WaterCareIcon,
  WavePinIcon,
} from "@/components/MarineIcons";

const POLICY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  envios: CoastalParcelIcon,
  cambios: TideCycleIcon,
  cuidados: WaterCareIcon,
};

export default function AboutAndTrust() {
  const [openPolicy, setOpenPolicy] = useState<string>("envios");

  return (
    <div className="bg-[#FFFDF9]">
      {/* SOBRE CARLY */}
      <section
        id="sobre-carly"
        className="relative py-20 sm:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Narrative & SNSI Credentials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#0B7A8F] mb-3">
                <ShellIcon className="size-4 text-[#FF7A6E]" />
                <span>Sobre Carly</span>
              </div>

              <h2 className="text-balance text-3xl sm:text-5xl font-extrabold text-[#0B3D6E] leading-[1.12]">
                Bióloga marina, buza y{" "}
                <span className="font-script font-normal text-[#0B7A8F]">
                  enamorada del mar
                </span>
              </h2>

              <p className="text-pretty mt-5 text-sm sm:text-base text-[#0B3D6E]/82 leading-[1.7]">
                Soy <strong>Carly</strong>, bióloga y estudiante de Doctorado en
                Ciencias Marinas. Soy buza desde hace <strong>10 años</strong> y,
                como podrás notar, amo el océano con todo el corazón. Me encanta
                enseñar con paciencia, cercanía y respeto por cada especie del
                arrecife.
              </p>

              <p className="text-pretty mt-3.5 text-sm sm:text-base text-[#0B3D6E]/78 leading-[1.7]">
                Así nació <strong>CarlyUnderWater</strong>: un espacio donde
                comparto mis dos pasiones —diseñar trajes cómodos inspirados en
                el tiburón ballena hechos justo a tu medida y acompañarte a
                descubrir el mar en Veracruz.
              </p>

              {/* SNSI Badge Card */}
              <div className="mt-6 p-5 rounded-3xl bg-[#F7F1E7] border border-[#0B3D6E]/10">
                <div className="flex items-center gap-2.5 text-[#0B3D6E] font-extrabold text-sm">
                  <DiveMaskIcon className="size-5 text-[#0B7A8F]" />
                  <span>Certificación Internacional SNSI</span>
                </div>
                <p className="text-pretty mt-2 text-xs sm:text-sm text-[#0B3D6E]/78 leading-relaxed">
                  <strong>Scuba and Nitrox Safety International (SNSI)</strong>{" "}
                  está avalada por WRSTC y cumple estándares ISO. Aprenderás a
                  sentirte cómoda, segura y con control total de tu flotabilidad;
                  tu certificación es válida en todo el mundo.
                </p>
              </div>

              {/* Social Links: Clean palette-consistent Instagram & TikTok buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wave inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FF7A6E] hover:bg-[#ff6658] text-white font-bold text-sm shadow-sm"
                >
                  <Instagram className="size-4" />
                  <span>Instagram {SITE_CONFIG.instagramHandle}</span>
                </a>
                <a
                  href={SITE_CONFIG.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wave inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0B3D6E] hover:bg-[#0B7A8F] text-white font-bold text-sm shadow-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span>TikTok {SITE_CONFIG.tiktokHandle}</span>
                </a>
              </div>
            </motion.div>

            {/* Right: React Bits GridMotion Interactive Ocean & Lifestyle Gallery (24 real photos) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="relative h-[460px] sm:h-[560px] lg:h-[620px] w-full rounded-3xl overflow-hidden bg-[#F7F1E7] border border-[#0B3D6E]/10 shadow-sm">
                <GridMotion
                  items={GALLERY_PHOTOS}
                  rows={4}
                  aspectRatio={1.22}
                  gap={14}
                  radius={18}
                  angle={-10}
                  tilt={3}
                  speed={22}
                  direction="alternate"
                  parallax={0.55}
                  spotlight={0.75}
                  dim={0.22}
                  fade={0.35}
                  grayscale={false}
                  theme="light"
                  tileColor="#EFE7DA"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ENVÍOS, POLÍTICA DE CAMBIOS Y GUÍA DE CUIDADOS */}
      <section
        id="politicas"
        className="scroll-mt-28 py-16 sm:py-24 bg-[#F7F1E7]/75 border-t border-[#0B3D6E]/8"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-[#0B7A8F]">
              <CoralIcon className="size-4" />
              <span>Compra con total tranquilidad</span>
            </span>
            <h2 className="text-balance text-3xl sm:text-4xl font-extrabold text-[#0B3D6E] mt-2 leading-[1.15]">
              Envíos, cambios y{" "}
              <span className="font-script font-normal text-[#0B7A8F]">
                cuidados de tu traje
              </span>
            </h2>
          </div>

          {/* Highlight Shipping Cards — Animated Coastal Hover Micro-interactions */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.button
              type="button"
              onClick={() => setOpenPolicy("envios")}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="btn-wave group text-left flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#0B3D6E]/10 hover:border-[#4EC7C3] shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div className="size-13 rounded-2xl bg-[#BFE8E3]/65 text-[#0B7A8F] group-hover:bg-[#0B7A8F] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 flex items-center justify-center shrink-0 transition-all duration-250">
                <CoastalParcelIcon className="size-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-[#0B3D6E] group-hover:text-[#0B7A8F] transition-colors leading-snug">
                  Envíos a todo México
                </h3>
                <p className="text-pretty text-xs sm:text-sm text-[#0B3D6E]/72 leading-relaxed mt-0.5">
                  Recibe tu traje confeccionado a medida directo en tu ciudad.
                </p>
              </div>
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setOpenPolicy("envios")}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="btn-wave group text-left flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#0B3D6E]/10 hover:border-[#FF7A6E] shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div className="size-13 rounded-2xl bg-[#F6C44E]/35 text-[#FF7A6E] group-hover:bg-[#FF7A6E] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center shrink-0 transition-all duration-250">
                <WavePinIcon className="size-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-[#0B3D6E] group-hover:text-[#FF7A6E] transition-colors leading-snug">
                  Entregas locales sin paquetería
                </h3>
                <p className="text-pretty text-xs sm:text-sm text-[#0B3D6E]/72 leading-relaxed mt-0.5">
                  Únicamente en <strong>Veracruz, Ver. y Boca del Río</strong>.
                </p>
              </div>
            </motion.button>
          </div>

          {/* Interactive Accordion with Vibrant Accent Bar, Icon Morph & Hover Lift */}
          <div className="space-y-3.5">
            {POLICIES.map((pol, idx) => {
              const Icon = POLICY_ICONS[pol.id] || StarfishIcon;
              const isOpen = openPolicy === pol.id;
              const accent =
                idx === 0
                  ? { bar: "bg-[#4EC7C3]", border: "hover:border-[#4EC7C3]", activeBg: "bg-[#0B7A8F]", hoverBg: "group-hover:bg-[#0B7A8F]" }
                  : idx === 1
                  ? { bar: "bg-[#FF7A6E]", border: "hover:border-[#FF7A6E]", activeBg: "bg-[#FF7A6E]", hoverBg: "group-hover:bg-[#FF7A6E]" }
                  : { bar: "bg-[#F6C44E]", border: "hover:border-[#F6C44E]", activeBg: "bg-[#0B3D6E]", hoverBg: "group-hover:bg-[#0B3D6E]" };

              return (
                <motion.div
                  key={pol.id}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className={`group relative rounded-3xl bg-[#FFFDF9] border-2 overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-[#0B7A8F]/45 shadow-md"
                      : `border-[#0B3D6E]/10 ${accent.border} shadow-xs hover:shadow-md`
                  }`}
                >
                  {/* Animated Left Accent Ribbon */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-transform duration-250 origin-top ${accent.bar} ${
                      isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setOpenPolicy(isOpen ? "" : pol.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 pl-6 sm:pl-7 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`size-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-250 group-hover:scale-110 group-hover:-rotate-6 ${
                          isOpen
                            ? `${accent.activeBg} text-white shadow-sm`
                            : `bg-[#F7F1E7] text-[#0B7A8F] ${accent.hoverBg} group-hover:text-white`
                        }`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-sm sm:text-base text-[#0B3D6E] group-hover:text-[#0B7A8F] transition-colors leading-snug">
                          {pol.title}
                        </h3>
                        <p className="text-xs text-[#0B3D6E]/68 mt-0.5 leading-snug">
                          {pol.summary}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`size-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#0B3D6E] text-white rotate-180"
                          : "bg-[#F7F1E7] text-[#0B7A8F] group-hover:bg-[#BFE8E3]/70 group-hover:translate-y-0.5"
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="px-6 sm:px-8 pl-7 sm:pl-9 pb-6 pt-3 space-y-2.5 border-t border-[#0B3D6E]/8">
                          {pol.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B3D6E]/82 leading-[1.65]"
                            >
                              <span className="size-1.5 rounded-full bg-[#4EC7C3] shrink-0 mt-2.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
