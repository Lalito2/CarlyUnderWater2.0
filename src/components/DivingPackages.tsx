"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Check,
  ChevronDown,
  Clock,
  MessageCircle,
  Users,
  X,
} from "lucide-react";
import { DIVING_PACKAGES, DivingPackage, SITE_CONFIG } from "@/data/catalog";
import {
  DiveMaskIcon,
  OceanWaveIcon,
  StarfishIcon,
} from "@/components/MarineIcons";

const LEVEL_STYLES: Record<string, string> = {
  teal: "bg-[#0B7A8F] text-white",
  ocean: "bg-[#0B3D6E] text-white",
  coral: "bg-[#FF7A6E] text-white",
};

/** Plays diving video smoothly only while visible in viewport (performance-safe) */
function PackageVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={`Video del paquete ${title}`}
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function DivingPackages() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [bookingPkg, setBookingPkg] = useState<DivingPackage | null>(null);
  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    personas: "1",
    experiencia: "Primera vez / Principiante",
    notas: "",
  });

  useEffect(() => {
    if (!bookingPkg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBookingPkg(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [bookingPkg]);

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingPkg) return;

    const lines = [
      `¡Hola Carly! 🤿 Quiero reservar un paquete de buceo:`,
      ``,
      `🌊 *Paquete:* ${bookingPkg.title}${
        bookingPkg.subtitle ? ` (${bookingPkg.subtitle})` : ""
      }`,
      `💰 *Precio:* ${bookingPkg.priceLabel}`,
      `👤 *Nombre:* ${form.nombre.trim() || "Sin especificar"}`,
      `📅 *Fecha tentativa:* ${form.fecha || "Por definir"}`,
      `👥 *Personas:* ${form.personas}`,
      `🧭 *Experiencia:* ${form.experiencia}`,
    ];
    if (form.notas.trim()) {
      lines.push(`📝 *Comentarios:* ${form.notas.trim()}`);
    }
    lines.push(
      ``,
      `¿Me ayudas a confirmar disponibilidad y los pasos para apartar? ✨`
    );

    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="buceo" className="relative py-16 sm:py-22 bg-[#F7F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#0B7A8F] mb-2.5">
            <DiveMaskIcon className="size-4 text-[#0B7A8F]" />
            <span>Sistema Arrecifal Veracruzano · Clases Privadas con Carly</span>
          </div>
          <h2 className="text-balance text-3xl sm:text-5xl font-extrabold text-[#0B3D6E] leading-[1.12]">
            Paquetes de buceo{" "}
            <span className="font-script font-normal text-[#FF7A6E]">
              a tu ritmo
            </span>
          </h2>
          <p className="text-pretty mt-3 text-sm text-[#0B3D6E]/78 leading-relaxed">
            Todos incluyen equipo completo, fotografías y videos submarinos,
            bitácora, sticker y lunch con acompañamiento privado de Carly.
          </p>
        </motion.div>

        {/* Compact 4-Column Row Grid with Real Underwater Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-5">
          {DIVING_PACKAGES.map((pkg, idx) => {
            const isExpanded = expandedId === pkg.id;
            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-3xl bg-[#FFFDF9] overflow-hidden border transition-shadow duration-300 flex flex-col justify-between ${
                  pkg.featured
                    ? "border-[#4EC7C3] shadow-md"
                    : "border-[#0B3D6E]/10 shadow-xs hover:shadow-lg"
                }`}
              >
                <div>
                  {/* Compact Real Underwater Video Banner */}
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-[#0B3D6E]">
                    <PackageVideo
                      src={pkg.video}
                      poster={pkg.image}
                      title={pkg.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2540]/75 via-[#0B2540]/12 to-transparent pointer-events-none" />

                    {/* Top Pills */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold shadow-sm ${
                          LEVEL_STYLES[pkg.levelTone]
                        }`}
                      >
                        {pkg.level}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-[#FFFDF9]/95 text-[#0B3D6E] text-xs font-extrabold shadow-sm tabular-nums">
                        {pkg.priceLabel}
                      </span>
                    </div>

                    {/* Depth & duration compact chips */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap items-center gap-1.5 text-[10px] font-bold text-white">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0B2540]/68 backdrop-blur-md">
                        <OceanWaveIcon className="size-3 text-[#4EC7C3]" />
                        {pkg.maxDepth}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0B2540]/68 backdrop-blur-md truncate max-w-[165px]">
                        <Clock className="size-3 text-[#F6C44E] shrink-0" />
                        <span className="truncate">{pkg.duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Compact Card Body */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-balance text-lg font-extrabold text-[#0B3D6E] leading-snug">
                          {pkg.title}
                        </h3>
                        {pkg.subtitle && (
                          <p className="text-xs font-bold text-[#0B7A8F] mt-0.5 truncate">
                            {pkg.subtitle}
                          </p>
                        )}
                      </div>
                      {pkg.featured && (
                        <span
                          title="Más popular"
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F6C44E]/40 text-[#0B3D6E] text-[10px] font-extrabold shrink-0"
                        >
                          <StarfishIcon className="size-3 text-[#FF7A6E]" />
                          Top
                        </span>
                      )}
                    </div>

                    <p className="text-pretty mt-2.5 text-xs text-[#0B3D6E]/78 leading-relaxed line-clamp-3">
                      {pkg.description}
                    </p>

                    {/* Compact Expandable "¿Qué incluye?" Panel */}
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : pkg.id)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#F7F1E7] hover:bg-[#BFE8E3]/45 text-[#0B3D6E] text-[11px] font-bold transition-colors duration-200 cursor-pointer"
                      >
                        <span>¿Qué incluye? ({pkg.includes.length})</span>
                        <ChevronDown
                          className={`size-3.5 text-[#0B7A8F] transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 pb-1 space-y-2">
                              <ul className="space-y-1.5">
                                {pkg.includes.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2 text-[11px] text-[#0B3D6E]/88 font-medium leading-snug"
                                  >
                                    <span className="size-4 rounded-full bg-[#BFE8E3]/80 text-[#0B7A8F] flex items-center justify-center shrink-0 mt-0.5">
                                      <Check className="size-2.5 stroke-[3]" />
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                              <p className="mt-2 p-2.5 rounded-xl bg-[#BFE8E3]/25 border border-[#4EC7C3]/30 text-[11px] text-[#0B3D6E]/80 italic leading-snug">
                                {pkg.extra}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Compact Card Footer CTA */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1">
                  <button
                    type="button"
                    onClick={() => setBookingPkg(pkg)}
                    className="btn-wave w-full py-2.5 px-4 rounded-full bg-[#0B7A8F] hover:bg-[#0B3D6E] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>Reservar</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Short Diving Reservation Modal -> Direct to WhatsApp */}
      <AnimatePresence>
        {bookingPkg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBookingPkg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2540]/65 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-md rounded-3xl bg-[#FFFDF9] overflow-hidden shadow-2xl border border-white/70"
            >
              {/* Header */}
              <div className="relative h-32 bg-[#0B3D6E] overflow-hidden">
                <img
                  src={bookingPkg.image}
                  alt={bookingPkg.title}
                  className="w-full h-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D6E] via-[#0B3D6E]/40 to-transparent" />
                <button
                  onClick={() => setBookingPkg(null)}
                  aria-label="Cerrar reserva"
                  className="absolute top-3.5 right-3.5 size-9 rounded-full bg-white/92 hover:bg-white text-[#0B3D6E] flex items-center justify-center shadow cursor-pointer"
                >
                  <X className="size-4" />
                </button>
                <div className="absolute bottom-3.5 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold uppercase text-[#F6C44E] tabular-nums">
                    Reserva rápida · {bookingPkg.priceLabel}
                  </span>
                  <h3 className="text-xl font-extrabold leading-tight">
                    {bookingPkg.title}
                    {bookingPkg.subtitle ? ` · ${bookingPkg.subtitle}` : ""}
                  </h3>
                </div>
              </div>

              {/* Short Form */}
              <form onSubmit={handleReserveSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                    Tu nombre *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.nombre}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, nombre: e.target.value }))
                    }
                    placeholder="Ej. Ana Martínez"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="flex items-center gap-1 text-xs font-bold text-[#0B3D6E] mb-1">
                      <Calendar className="size-3.5 text-[#0B7A8F]" />
                      <span>Fecha tentativa</span>
                    </label>
                    <input
                      type="date"
                      value={form.fecha}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, fecha: e.target.value }))
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-xs sm:text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1 text-xs font-bold text-[#0B3D6E] mb-1">
                      <Users className="size-3.5 text-[#0B7A8F]" />
                      <span>Personas</span>
                    </label>
                    <select
                      value={form.personas}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, personas: e.target.value }))
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                    >
                      <option value="1">1 persona</option>
                      <option value="2">2 personas</option>
                      <option value="3">3 personas</option>
                      <option value="4 o más">4 o más</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                    ¿Tienes experiencia previa?
                  </label>
                  <select
                    value={form.experiencia}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, experiencia: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                  >
                    <option>Primera vez / Principiante</option>
                    <option>Ya hice snorkel, nunca buceo</option>
                    <option>Ya tengo experiencia o certificación</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                    ¿Alguna duda o comentario? (opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={form.notas}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, notas: e.target.value }))
                    }
                    placeholder="Ej. Vamos de viaje a Veracruz el próximo puente..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-wave w-full py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="size-5" />
                  <span>Confirmar disponibilidad por WhatsApp</span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
