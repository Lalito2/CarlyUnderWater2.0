"use client";

import { Instagram, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/catalog";
import { WavePinIcon } from "@/components/MarineIcons";

export default function SunsetFooter() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "¡Hola Carly! 🌊 Tengo una duda sobre los trajes de baño o paquetes de buceo."
  )}`;

  return (
    <footer className="relative overflow-hidden bg-[#F7F1E7] pt-10">
      {/* Kulani Kinis Inspired Sunlit Coastal Sunset Horizon with Animated Palm Silhouettes */}
      <div className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden">
        {/* Warm Sunset Sky Gradient using Official Palette (#F7F1E7 -> #F6C44E -> #F4B6A6 -> #FF7A6E) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #F7F1E7 0%, #FDE7A6 34%, #F6C44E 54%, #F4B6A6 72%, #FF7A6E 95%)",
          }}
        />

        {/* Glowing Coastal Sun */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-16 sm:bottom-20 w-36 h-36 sm:w-48 sm:h-48 rounded-full opacity-90 blur-[1px]"
          style={{
            background:
              "radial-gradient(circle, #FFFDF9 0%, #F6C44E 58%, rgba(255,122,110,0) 100%)",
          }}
        />

        {/* Illustrated Silhouette Horizon (Palms, Birds, Surfboard, Coastal Dunes) */}
        <svg
          viewBox="0 0 1440 280"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-x-0 bottom-0 w-full h-full text-[#0B3D6E]"
          aria-hidden="true"
        >
          {/* Distant coastal birds */}
          <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.75">
            <path d="M510 118 q8 -8 16 0 q8 -8 16 0" />
            <path d="M555 104 q6 -6 12 0 q6 -6 12 0" />
            <path d="M880 112 q7 -7 14 0 q7 -7 14 0" />
            <path d="M925 96 q5 -5 10 0 q5 -5 10 0" />
          </g>

          {/* Left Palm Cluster (gently swaying) */}
          <g className="animate-palm-sway">
            {/* Tall Palm 1 */}
            <path
              d="M150 250 Q162 175 184 115"
              fill="none"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <g fill="currentColor" transform="translate(184, 112)">
              <path d="M0 0 C-26 -24 -58 -16 -76 8 C-46 -4 -22 -2 0 6 Z" />
              <path d="M0 0 C-18 -38 -42 -48 -68 -40 C-38 -32 -18 -18 0 0 Z" />
              <path d="M0 0 C12 -38 42 -46 72 -34 C40 -26 18 -12 0 4 Z" />
              <path d="M0 0 C32 -18 66 -6 84 22 C52 6 24 4 0 8 Z" />
              <path d="M0 4 C24 8 44 26 52 50 C34 30 16 18 0 10 Z" />
              <path d="M0 4 C-22 10 -44 28 -50 52 C-32 32 -16 18 0 10 Z" />
            </g>

            {/* Medium Palm 2 */}
            <path
              d="M95 255 Q88 205 72 152"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <g fill="currentColor" transform="translate(72, 150) scale(0.76)">
              <path d="M0 0 C-26 -24 -58 -16 -76 8 C-46 -4 -22 -2 0 6 Z" />
              <path d="M0 0 C-16 -38 -40 -48 -64 -38 C-36 -30 -18 -16 0 0 Z" />
              <path d="M0 0 C14 -36 42 -42 70 -30 C40 -22 18 -10 0 4 Z" />
              <path d="M0 0 C30 -16 62 -4 78 22 C48 6 22 4 0 8 Z" />
            </g>
          </g>

          {/* Mid-left Palapa / Beach Lifeguard Tower */}
          <g fill="currentColor" transform="translate(310, 178)">
            <path d="M-2 22 L42 -4 L86 22 Z" />
            <rect x="14" y="22" width="56" height="28" rx="2" />
            <rect x="26" y="29" width="32" height="12" rx="2" fill="#FF7A6E" opacity="0.65" />
            <line x1="18" y1="50" x2="10" y2="85" stroke="currentColor" strokeWidth="5" />
            <line x1="66" y1="50" x2="74" y2="85" stroke="currentColor" strokeWidth="5" />
            <line x1="14" y1="68" x2="70" y2="68" stroke="currentColor" strokeWidth="4" />
          </g>

          {/* Mid-right Paddleboard standing in the sand */}
          <g fill="currentColor" transform="translate(1035, 198) rotate(8)">
            <ellipse cx="0" cy="24" rx="11" ry="34" />
          </g>

          {/* Right Palm Cluster (gently swaying out of phase) */}
          <g className="animate-palm-sway-slow">
            {/* Tall Palm 3 */}
            <path
              d="M1245 252 Q1232 178 1206 112"
              fill="none"
              stroke="currentColor"
              strokeWidth="9.5"
              strokeLinecap="round"
            />
            <g fill="currentColor" transform="translate(1206, 110)">
              <path d="M0 0 C-28 -22 -62 -14 -80 12 C-48 -2 -24 0 0 6 Z" />
              <path d="M0 0 C-18 -40 -44 -48 -72 -38 C-40 -30 -18 -16 0 0 Z" />
              <path d="M0 0 C14 -38 46 -44 76 -30 C44 -22 20 -10 0 4 Z" />
              <path d="M0 0 C32 -16 68 -4 84 24 C52 8 24 4 0 8 Z" />
              <path d="M0 4 C22 10 42 28 48 52 C32 32 16 18 0 10 Z" />
              <path d="M0 4 C-22 12 -42 30 -48 54 C-30 32 -14 18 0 10 Z" />
            </g>

            {/* Palm 4 */}
            <path
              d="M1345 256 Q1358 198 1378 144"
              fill="none"
              stroke="currentColor"
              strokeWidth="7.5"
              strokeLinecap="round"
            />
            <g fill="currentColor" transform="translate(1378, 142) scale(0.82)">
              <path d="M0 0 C-26 -24 -58 -16 -76 8 C-46 -4 -22 -2 0 6 Z" />
              <path d="M0 0 C-16 -38 -40 -48 -64 -38 C-36 -30 -18 -16 0 0 Z" />
              <path d="M0 0 C14 -36 42 -42 70 -30 C40 -22 18 -10 0 4 Z" />
              <path d="M0 0 C30 -16 62 -4 78 22 C48 6 22 4 0 8 Z" />
            </g>
          </g>

          {/* Coastal Sandbank Silhouette */}
          <path
            fill="currentColor"
            d="M0,236 Q180,218 360,234 T760,238 T1140,230 T1440,236 L1440,280 L0,280 Z"
          />
        </svg>
      </div>

      {/* Deep Ocean Footer Body */}
      <div className="bg-[#0B3D6E] text-[#F7F1E7] pt-10 pb-36 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <img
                  src="/images/brand/logo-white.png"
                  alt="CarlyUnderWater"
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <span className="font-script text-2xl text-[#F6C44E] block leading-none">
                    Carly
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#BFE8E3]">
                    UNDERWATER
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#BFE8E3]/85 max-w-sm leading-relaxed">
                Trajes de baño confeccionados a tu medida inspirados en el
                tiburón ballena y experiencias privadas de buceo en el Sistema
                Arrecifal Veracruzano.
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6C44E]">
                <WavePinIcon className="size-4" />
                <span>{SITE_CONFIG.location} · Envíos a todo México</span>
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#4EC7C3] mb-4">
                Explorar
              </h4>
              <ul className="space-y-2.5 text-sm text-white/85 font-medium">
                <li>
                  <a href="#trajes" className="hover:text-[#F6C44E] transition-colors">
                    Trajes de baño a medida
                  </a>
                </li>
                <li>
                  <a href="#inmersion" className="hover:text-[#F6C44E] transition-colors">
                    Experiencia de buceo
                  </a>
                </li>
                <li>
                  <a href="#buceo" className="hover:text-[#F6C44E] transition-colors">
                    Paquetes de buceo SNSI
                  </a>
                </li>
                <li>
                  <a href="#sobre-carly" className="hover:text-[#F6C44E] transition-colors">
                    Sobre Carly
                  </a>
                </li>
                <li>
                  <a href="#politicas" className="hover:text-[#F6C44E] transition-colors">
                    Envíos, cambios y cuidados
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#4EC7C3] mb-4">
                Conecta con Carly
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wave inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-[#25D366] text-white text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp directo · Pedidos y buceo</span>
                </a>
                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wave flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-[#FF7A6E] text-white text-xs font-bold transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={SITE_CONFIG.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wave flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-[#4EC7C3] hover:text-[#0B3D6E] text-white text-xs font-bold transition-colors"
                  >
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#BFE8E3]/70">
            <p>
              © {new Date().getFullYear()} CarlyUnderWater · Hecho con amor por el
              océano en Veracruz, México.
            </p>
            <p className="font-accent text-base text-[#F6C44E]">
              Nos vemos bajo el azul 🌊
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
