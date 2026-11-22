"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_CONFIG } from "@/data/catalog";
import { DiveMaskIcon, OceanWaveIcon } from "@/components/MarineIcons";

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  {
    depth: "0 m",
    label: "Superficie · Veracruz",
    title: "Tu primera respiración tranquila",
    body: "Nos vemos temprano para preparar tu equipo sin prisas. Carly te explica cada paso con paciencia y cercanía antes de subir a la lancha.",
    range: [0, 0.27],
  },
  {
    depth: "-4 m",
    label: "Snorkel y flotabilidad",
    title: "Siente el ritmo del mar",
    body: "Antes de bajar, nos aclimatamos en la superficie sobre el agua turquesa del Sistema Arrecifal Veracruzano hasta que te sientas 100% cómoda.",
    range: [0.27, 0.54],
  },
  {
    depth: "-10 m",
    label: "El arrecife cobra vida",
    title: "Flota entre corales y peces",
    body: "La gravedad desaparece. Descubre peces mariposa, tortugas, anémonas y jardines de coral mientras Carly captura tus mejores fotos y videos.",
    range: [0.54, 0.8],
  },
  {
    depth: "-18 m",
    label: "Certificación internacional SNSI",
    title: "El océano entero te espera",
    body: "Desde tu primera inmersión de iniciación hasta tu certificación Open Water Diver válida en cualquier océano del planeta.",
    range: [0.8, 1.01],
  },
];

export default function DiveScrollExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.pause();
    let targetTime = 0;
    let currentTime = 0;
    let rafId = 0;

    const smoothScrub = () => {
      if (
        video.readyState >= 2 &&
        video.duration &&
        !Number.isNaN(video.duration)
      ) {
        const diff = targetTime - currentTime;
        if (Math.abs(diff) > 0.008) {
          currentTime += diff * 0.14;
          try {
            video.currentTime = Math.max(
              0,
              Math.min(video.duration - 0.05, currentTime)
            );
          } catch {
            // ignore rapid seek exceptions
          }
        }
      }
      rafId = requestAnimationFrame(smoothScrub);
    };
    rafId = requestAnimationFrame(smoothScrub);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=230%",
        pin: true,
        scrub: 0.4,
        onUpdate: (self) => {
          const p = self.progress;
          setProgress(p);
          if (video.duration && !Number.isNaN(video.duration)) {
            targetTime = p * Math.max(0.1, video.duration - 0.1);
          }
        },
      });
    }, section);

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, []);

  const foundIdx = CHAPTERS.findIndex(
    (c) => progress >= c.range[0] && progress < c.range[1]
  );
  const activeIndex = foundIdx === -1 ? CHAPTERS.length - 1 : foundIdx;
  const depthMeters = Math.round(progress * 18);
  const chapter = CHAPTERS[activeIndex];

  return (
    <section id="inmersion" className="relative bg-[#0B3D6E]">
      {/* Top sand wave */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-12 sm:h-16 text-[#F7F1E7] bg-[#0B3D6E] -mb-px"
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,34 C1180,92 840,12 520,66 C280,104 120,40 0,58 Z"
        />
      </svg>

      {/* Pinned Frame-by-Frame Video Scrollytelling Container */}
      <div
        ref={sectionRef}
        className="relative h-dvh w-full overflow-hidden flex items-center"
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/assets/gallery/IMG_1689.webp"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `scale(${1.02 + progress * 0.08})`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <source src={SITE_CONFIG.divingScrollVideoMp4} type="video/mp4" />
          <source src={SITE_CONFIG.divingScrollVideoWebm} type="video/webm" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(11,122,143,${
              0.38 + progress * 0.22
            }) 0%, rgba(11,61,110,${0.5 + progress * 0.28}) 100%)`,
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#BFE8E3] mb-4">
              <OceanWaveIcon className="size-4 text-[#4EC7C3]" />
              <span>Experiencia inmersiva · Desliza para sumergirte</span>
            </div>

            <div className="min-h-[210px] sm:min-h-[230px] flex flex-col justify-center">
              <p className="font-accent text-2xl sm:text-3xl text-[#F6C44E] font-semibold">
                {chapter.label}
              </p>
              <h2 className="text-balance text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mt-1 drop-shadow">
                {chapter.title}
              </h2>
              <p className="text-pretty mt-4 text-sm sm:text-lg text-white/92 max-w-xl leading-[1.65]">
                {chapter.body}
              </p>
            </div>

            {/* Chapter Depth Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {CHAPTERS.map((c, idx) => (
                <div
                  key={c.depth}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 tabular-nums ${
                    idx === activeIndex
                      ? "bg-[#F6C44E] text-[#0B3D6E] border-[#F6C44E] scale-105 shadow-md"
                      : idx < activeIndex
                      ? "bg-[#4EC7C3]/30 text-white border-[#4EC7C3]/50"
                      : "bg-white/10 text-white/68 border-white/20"
                  }`}
                >
                  {c.depth}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#buceo"
                className="btn-wave inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF7A6E] hover:bg-[#ff6658] text-white font-extrabold text-sm shadow-lg"
              >
                <DiveMaskIcon className="size-5" />
                <span>Ver los 4 paquetes de buceo</span>
              </a>
            </div>
          </div>

          {/* Live Depth Gauge */}
          <div className="hidden lg:flex lg:col-span-5 justify-end items-center">
            <div className="flex items-center gap-6 bg-[#0B2540]/50 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl">
              <div className="text-right text-white">
                <span className="text-[11px] font-bold uppercase text-[#BFE8E3]">
                  Profundidad
                </span>
                <p className="text-5xl font-extrabold tabular-nums mt-1">
                  -{depthMeters}
                  <span className="text-xl font-bold text-[#4EC7C3] ml-1">m</span>
                </p>
                <p className="text-xs text-white/78 mt-2 max-w-[165px] leading-relaxed">
                  Sistema Arrecifal Veracruzano · Video controlado por scroll
                </p>
              </div>

              <div className="relative w-3 h-52 rounded-full bg-white/15 overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 rounded-full bg-gradient-to-b from-[#F6C44E] via-[#4EC7C3] to-[#FF7A6E]"
                  style={{ height: `${Math.max(8, progress * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle progress pill */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-[#0B2540]/55 backdrop-blur-md border border-white/15 text-white/88 text-xs font-semibold">
          <span>Desliza para avanzar cuadro a cuadro</span>
          <span className="font-extrabold text-[#F6C44E] tabular-nums">
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>

      {/* Bottom wave back to sand */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-12 sm:h-16 text-[#F7F1E7] bg-[#0B3D6E] -mt-px"
      >
        <path
          fill="currentColor"
          d="M0,56 C300,6 620,94 960,42 C1180,10 1320,48 1440,34 L1440,90 L0,90 Z"
        />
      </svg>
    </section>
  );
}
