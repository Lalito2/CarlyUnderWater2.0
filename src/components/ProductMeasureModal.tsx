"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";
import { SwimwearProduct, formatMXN } from "@/data/catalog";
import { useCart } from "@/context/CartContext";
import {
  BeachToteIcon,
  HibiscusIcon,
  MeasureTapeIcon,
  TideCycleIcon,
} from "@/components/MarineIcons";

interface Props {
  product: SwimwearProduct | null;
  onClose: () => void;
}

type MeasureField = "busto" | "cintura" | "cadera" | "altura";

/**
 * Coordinates distributed across BOTH mermaid silhouettes (front on left, profile on right)
 * using mermaid-guide-clean.png (407x630) so pins never collide or crowd.
 * - #1 Busto -> Front silhouette chest line (left: 37%, top: 27.5%)
 * - #2 Cintura -> Profile silhouette waist line (left: 87.5%, top: 36%)
 * - #3 Cadera -> Profile silhouette hip line (left: 84.5%, top: 47.5%)
 * - #4 Altura -> Far-left height axis lower third (left: 6%, top: 62%)
 */
const MEASURE_META: Record<
  MeasureField,
  {
    num: string;
    label: string;
    placeholder: string;
    hint: string;
    top: string;
    left: string;
  }
> = {
  busto: {
    num: "1",
    label: "Busto (cm)",
    placeholder: "Ej. 88",
    hint: "Parte más llena del busto con cinta horizontal",
    top: "27.5%",
    left: "37%",
  },
  cintura: {
    num: "2",
    label: "Cintura (cm)",
    placeholder: "Ej. 68",
    hint: "Parte más estrecha del torso, a la altura del ombligo",
    top: "36%",
    left: "87.5%",
  },
  cadera: {
    num: "3",
    label: "Cadera (cm)",
    placeholder: "Ej. 96",
    hint: "Parte más ancha de cadera y glúteos",
    top: "47.5%",
    left: "84.5%",
  },
  altura: {
    num: "4",
    label: "Altura (cm)",
    placeholder: "Ej. 165",
    hint: "Tu estatura total, de pies a cabeza",
    top: "62%",
    left: "6%",
  },
};

export default function ProductMeasureModal({ product, onClose }: Props) {
  const { addItem } = useCart();
  const [imgIdx, setImgIdx] = useState(0);
  const [printId, setPrintId] = useState("");
  const [qty, setQty] = useState(1);
  const [activeMeasure, setActiveMeasure] = useState<MeasureField | null>("busto");
  const [measures, setMeasures] = useState({
    busto: "",
    cintura: "",
    cadera: "",
    altura: "",
  });
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setImgIdx(0);
      setPrintId(product.prints[0]?.id || "");
      setQty(1);
      setMeasures({ busto: "", cintura: "", cadera: "", altura: "" });
      setError("");
      setAdded(false);
      setActiveMeasure("busto");
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    if (product.isCustomSized) {
      if (
        !measures.busto.trim() ||
        !measures.cintura.trim() ||
        !measures.cadera.trim() ||
        !measures.altura.trim()
      ) {
        setError(
          "Por favor ingresa tus 4 medidas (busto, cintura, cadera y altura) para confeccionarlo exacto para ti."
        );
        return;
      }
    }

    const chosenPrint =
      product.prints.find((p) => p.id === printId) || product.prints[0];

    addItem(
      {
        productId: product.id,
        name: product.name,
        subtitle: product.subtitle,
        price: product.price,
        image: product.defaultImage,
        printLabel: chosenPrint.label,
        isCustomSized: product.isCustomSized,
        measurements: product.isCustomSized ? { ...measures } : undefined,
      },
      product.isCustomSized ? 1 : qty
    );

    setError("");
    setAdded(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const currentPhoto = product?.gallery[imgIdx];

  return (
    <AnimatePresence>
      {product && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B2540]/65 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className={`relative w-full ${
              product.isCustomSized ? "max-w-5xl" : "max-w-4xl"
            } max-h-[92dvh] overflow-y-auto rounded-3xl bg-[#FFFDF9] shadow-2xl border border-white/70`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Cerrar producto"
              className="sticky sm:absolute top-4 right-4 ml-auto mr-4 mt-4 sm:m-0 z-30 size-10 rounded-full bg-white/95 hover:bg-[#F7F1E7] text-[#0B3D6E] flex items-center justify-center shadow-md transition-transform duration-200 hover:rotate-90 cursor-pointer"
            >
              <X className="size-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-8 pt-2 sm:pt-8 items-start">
              {/* Left Column: Centered Swimwear Gallery (+ Features for custom-sized suits) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative aspect-[4/4.3] rounded-2xl overflow-hidden bg-[#F7F1E7]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPhoto.src}
                      src={currentPhoto.src}
                      alt={`${product.name} foto ${imgIdx + 1}`}
                      initial={{ opacity: 0.35 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.35 }}
                      transition={{ duration: 0.25 }}
                      style={{ objectPosition: currentPhoto.objectPosition }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {product.gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setImgIdx((i) =>
                            i === 0 ? product.gallery.length - 1 : i - 1
                          )
                        }
                        aria-label="Foto anterior"
                        className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white/88 hover:bg-white text-[#0B3D6E] flex items-center justify-center shadow-md cursor-pointer transition-transform duration-150 hover:scale-105"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setImgIdx((i) => (i + 1) % product.gallery.length)
                        }
                        aria-label="Siguiente foto"
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white/88 hover:bg-white text-[#0B3D6E] flex items-center justify-center shadow-md cursor-pointer transition-transform duration-150 hover:scale-105"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Wrapped Thumbnails (never overflows horizontally) */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {product.gallery.map((photo, i) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setImgIdx(i)}
                      aria-label={`Ver foto ${i + 1}`}
                      className={`size-13 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-150 cursor-pointer ${
                        i === imgIdx
                          ? "border-[#0B7A8F] scale-105 shadow-sm"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt=""
                        style={{ objectPosition: photo.objectPosition }}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* For custom-sized swimsuits, place Design Details under gallery; for Nerea, show side-by-side comparison of both prints so zero whitespace remains */}
                {product.isCustomSized ? (
                  <div className="mt-4 p-4 rounded-2xl bg-[#F7F1E7]/80 border border-[#0B3D6E]/8">
                    <p className="text-[11px] font-extrabold uppercase text-[#0B7A8F] mb-1.5">
                      Detalles del diseño
                    </p>
                    <p className="text-pretty text-xs text-[#0B3D6E]/82 leading-relaxed mb-3">
                      {product.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {product.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-xs text-[#0B3D6E]/88 font-medium leading-snug"
                        >
                          <Check className="size-3.5 text-[#0B7A8F] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-4 p-4 rounded-2xl bg-[#F7F1E7]/85 border border-[#0B3D6E]/8">
                    <p className="text-[11px] font-extrabold uppercase text-[#0B7A8F] mb-2.5">
                      Compara los 2 estampados de Nerea
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          setPrintId("puntos-oceano");
                          setImgIdx(2);
                        }}
                        className={`group relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer text-left ${
                          printId === "puntos-oceano"
                            ? "border-[#0B3D6E] shadow-sm"
                            : "border-transparent hover:border-[#4EC7C3]"
                        }`}
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-[#0B3D6E]/10">
                          <img
                            src="/assets/products/nerea-2.webp"
                            alt="Nerea Azul Puntos"
                            className="w-full h-full object-cover object-[50%_34%] transition-transform duration-300 group-hover:scale-106"
                          />
                        </div>
                        <div className="px-2.5 py-1.5 bg-[#FFFDF9] flex items-center justify-between gap-1">
                          <span className="text-[11px] font-extrabold text-[#0B3D6E]">
                            Azul Puntos
                          </span>
                          {printId === "puntos-oceano" && (
                            <span className="size-4 rounded-full bg-[#F6C44E] text-[#0B3D6E] flex items-center justify-center">
                              <Check className="size-2.5 stroke-[3]" />
                            </span>
                          )}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setPrintId("siluetas-espuma");
                          setImgIdx(0);
                        }}
                        className={`group relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer text-left ${
                          printId === "siluetas-espuma"
                            ? "border-[#0B3D6E] shadow-sm"
                            : "border-transparent hover:border-[#4EC7C3]"
                        }`}
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-[#0B3D6E]/10">
                          <img
                            src="/assets/products/nerea-3.webp"
                            alt="Nerea Blanco y Azul"
                            className="w-full h-full object-cover object-[50%_26%] transition-transform duration-300 group-hover:scale-106"
                          />
                        </div>
                        <div className="px-2.5 py-1.5 bg-[#FFFDF9] flex items-center justify-between gap-1">
                          <span className="text-[11px] font-extrabold text-[#0B3D6E]">
                            Blanco & Azul
                          </span>
                          {printId === "siluetas-espuma" && (
                            <span className="size-4 rounded-full bg-[#F6C44E] text-[#0B3D6E] flex items-center justify-center">
                              <Check className="size-2.5 stroke-[3]" />
                            </span>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Print Picker + Measurements (or Balanced Accessory Info for Nerea) */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-7 flex flex-col gap-5"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0B7A8F]">
                    <span>{product.categoryLabel}</span>
                    <span>•</span>
                    <span>{product.coverageNote}</span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4 mt-1">
                    <div>
                      <h3 className="text-balance text-2xl sm:text-3xl font-extrabold text-[#0B3D6E] leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#0B3D6E]/68 mt-0.5">
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="text-right tabular-nums">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#0B3D6E]">
                        {formatMXN(
                          product.isCustomSized
                            ? product.price
                            : product.price * qty
                        )}
                      </span>
                      <span className="block text-[11px] font-semibold text-[#0B7A8F]">
                        MXN
                      </span>
                    </div>
                  </div>
                </div>

                {/* Print Selector ONLY when product has multiple selectable prints (Galatea, Altea, Nerea).
                    Estela shows a reversible double-sided callout; Naia & Calipso have 1 print so no selector! */}
                {product.isReversible ? (
                  <div className="p-3.5 rounded-2xl bg-[#BFE8E3]/35 border border-[#4EC7C3]/45 flex items-center gap-3">
                    <div className="size-9 rounded-xl bg-[#0B3D6E] text-[#F6C44E] flex items-center justify-center shrink-0">
                      <TideCycleIcon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold uppercase text-[#0B3D6E]">
                        Modelo doble vista (reversible)
                      </p>
                      <p className="text-xs text-[#0B3D6E]/78 leading-snug mt-0.5">
                        Incluye ambos estampados de tiburón ballena en el mismo
                        traje: úsalo por el lado que prefieras.
                      </p>
                    </div>
                  </div>
                ) : product.prints.length > 1 ? (
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#0B3D6E] mb-2.5">
                      1. Elige tu estampado de tiburón ballena
                    </label>
                    {/* Whale Shark Print Selector (Clear active check state, zero radio confusion) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.prints.map((pr) => {
                        const selected = printId === pr.id;
                        return (
                          <button
                            key={pr.id}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => {
                              setPrintId(pr.id);
                              if (product.id === "nerea") {
                                setImgIdx(pr.id === "puntos-oceano" ? 2 : 0);
                              }
                            }}
                            className={`relative flex items-center justify-between gap-2.5 p-3 rounded-2xl border-2 text-left transition-all duration-150 cursor-pointer ${
                              selected
                                ? "border-[#0B3D6E] bg-[#0B3D6E] text-white shadow-sm"
                                : "border-[#0B3D6E]/15 bg-white text-[#0B3D6E] hover:border-[#0B7A8F]"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span
                                style={{
                                  backgroundColor: pr.swatch,
                                  boxShadow: `inset 0 0 0 2.5px ${pr.swatchAccent}`,
                                }}
                                className="size-7 rounded-lg shrink-0 border border-white/40"
                              />
                              <div className="min-w-0">
                                <span className="block text-xs font-extrabold leading-snug">
                                  {pr.id === "puntos-oceano"
                                    ? "Azul Puntos"
                                    : "Blanco & Azul"}
                                </span>
                                <span
                                  className={`block text-[10px] font-medium ${
                                    selected
                                      ? "text-[#BFE8E3]"
                                      : "text-[#0B3D6E]/60"
                                  }`}
                                >
                                  Tiburón ballena
                                </span>
                              </div>
                            </div>

                            <span
                              className={`size-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                                selected
                                  ? "bg-[#F6C44E] text-[#0B3D6E]"
                                  : "border border-[#0B3D6E]/25 bg-transparent"
                              }`}
                            >
                              {selected && <Check className="size-3 stroke-[3]" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {/* Interactive Measurements Section OR Balanced Accessory Content (Zero whitespace!) */}
                {product.isCustomSized ? (
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-extrabold uppercase text-[#0B3D6E] flex items-center gap-1.5">
                        <MeasureTapeIcon className="size-4 text-[#FF7A6E]" />
                        <span>
                          {product.prints.length > 1
                            ? "2. Tus medidas exactas (hecho para ti)"
                            : "Tus medidas exactas (hecho para ti)"}
                        </span>
                      </label>
                      <span className="text-[11px] font-semibold text-[#0B7A8F]">
                        En centímetros
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center p-4 sm:p-5 rounded-3xl bg-[#F7F1E7]/90 border border-[#0B3D6E]/10">
                      {/* Clean Mermaid Visual — Pins spaced cleanly across BOTH silhouettes */}
                      <div className="sm:col-span-6 flex flex-col items-center">
                        <div className="relative aspect-[407/630] w-[185px] sm:w-[196px]">
                          <img
                            src="/images/brand/mermaid-guide-clean.png"
                            alt="Guía de medidas sirena frente y perfil"
                            className="w-full h-full object-contain select-none"
                          />
                          {(Object.keys(MEASURE_META) as MeasureField[]).map(
                            (key) => {
                              const meta = MEASURE_META[key];
                              const isActive = activeMeasure === key;
                              return (
                                <button
                                  key={key}
                                  type="button"
                                  aria-label={`Ver referencia ${meta.label}`}
                                  onClick={() => setActiveMeasure(key)}
                                  style={{ top: meta.top, left: meta.left }}
                                  className={`absolute -translate-x-1/2 -translate-y-1/2 size-6 rounded-full text-[11px] font-extrabold flex items-center justify-center transition-all duration-150 cursor-pointer tabular-nums ${
                                    isActive
                                      ? "bg-[#FF7A6E] text-white scale-115 ring-4 ring-[#FF7A6E]/30 shadow-md z-10"
                                      : "bg-[#0B3D6E] text-white hover:scale-110 shadow-xs"
                                  }`}
                                >
                                  {meta.num}
                                </button>
                              );
                            }
                          )}
                        </div>

                        {activeMeasure && (
                          <p className="mt-2.5 text-center text-[11px] font-semibold text-[#0B3D6E]/82 bg-white/95 px-3 py-2 rounded-xl border border-[#0B3D6E]/8 leading-snug w-full">
                            <strong className="text-[#FF7A6E]">
                              #{MEASURE_META[activeMeasure].num}{" "}
                              {MEASURE_META[activeMeasure].label.split(" ")[0]}:
                            </strong>{" "}
                            {MEASURE_META[activeMeasure].hint}
                          </p>
                        )}
                      </div>

                      {/* 4 Measurement Inputs */}
                      <div className="sm:col-span-6 grid grid-cols-2 gap-3">
                        {(Object.keys(MEASURE_META) as MeasureField[]).map(
                          (field) => {
                            const meta = MEASURE_META[field];
                            const isActive = activeMeasure === field;
                            return (
                              <div key={field}>
                                <label
                                  htmlFor={`measure-${field}`}
                                  className="flex items-center gap-1.5 text-xs font-bold text-[#0B3D6E] mb-1"
                                >
                                  <span
                                    className={`size-4 rounded-full text-[10px] font-extrabold inline-flex items-center justify-center tabular-nums ${
                                      isActive
                                        ? "bg-[#FF7A6E] text-white"
                                        : "bg-[#0B3D6E]/15 text-[#0B3D6E]"
                                    }`}
                                  >
                                    {meta.num}
                                  </span>
                                  <span>{meta.label}</span>
                                </label>
                                <input
                                  id={`measure-${field}`}
                                  type="text"
                                  inputMode="decimal"
                                  value={measures[field]}
                                  onFocus={() => setActiveMeasure(field)}
                                  onChange={(e) =>
                                    setMeasures((prev) => ({
                                      ...prev,
                                      [field]: e.target.value,
                                    }))
                                  }
                                  placeholder={meta.placeholder}
                                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#0B3D6E]/15 text-sm font-semibold text-[#0B3D6E] placeholder:text-[#0B3D6E]/35 focus:outline-none focus:border-[#0B7A8F] focus:ring-2 focus:ring-[#4EC7C3]/35 transition-all tabular-nums"
                                />
                              </div>
                            );
                          }
                        )}
                        <p className="col-span-2 text-[11px] text-[#0B3D6E]/68 leading-relaxed">
                          Tus 4 medidas viajarán automáticamente en tu pedido de
                          WhatsApp para confeccionar top y calzón exactos para ti.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Balanced, compact accessory layout (Nerea headband — zero empty whitespace) */
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#F7F1E7]/85 border border-[#0B3D6E]/8">
                      <p className="text-[11px] font-extrabold uppercase text-[#0B7A8F] mb-1.5">
                        Detalles del diseño
                      </p>
                      <p className="text-pretty text-sm text-[#0B3D6E]/82 leading-relaxed mb-3">
                        {product.description}
                      </p>
                      <ul className="space-y-2">
                        {product.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#0B3D6E]/88 font-medium leading-snug"
                          >
                            <Check className="size-4 text-[#0B7A8F] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#BFE8E3]/30 border border-[#4EC7C3]/40 flex items-start gap-3">
                      <HibiscusIcon className="size-5 text-[#0B7A8F] shrink-0 mt-0.5" />
                      <p className="text-pretty text-xs sm:text-sm text-[#0B3D6E] leading-relaxed">
                        <strong>Unitalla elástica cómoda:</strong> no necesitas
                        ingresar medidas para la diadema Nerea. Mantiene tu
                        cabello en su lugar en la playa, lancha o paddle.
                      </p>
                    </div>

                    {/* Quantity selector */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/8">
                      <span className="text-xs font-extrabold uppercase text-[#0B3D6E]">
                        Cantidad
                      </span>
                      <div className="inline-flex items-center gap-3 rounded-full bg-white px-2.5 py-1 border border-[#0B3D6E]/10">
                        <button
                          type="button"
                          aria-label="Restar cantidad"
                          onClick={() => setQty((q) => Math.max(1, q - 1))}
                          className="size-7 rounded-full bg-[#F7F1E7] text-[#0B3D6E] flex items-center justify-center hover:bg-[#BFE8E3]/60 cursor-pointer"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="text-sm font-extrabold text-[#0B3D6E] min-w-[20px] text-center tabular-nums">
                          {qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Sumar cantidad"
                          onClick={() => setQty((q) => q + 1)}
                          className="size-7 rounded-full bg-[#F7F1E7] text-[#0B3D6E] flex items-center justify-center hover:bg-[#BFE8E3]/60 cursor-pointer"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <p className="text-xs font-bold text-[#c93e32] bg-[#FF7A6E]/15 px-3.5 py-2.5 rounded-xl">
                    {error}
                  </p>
                )}

                {/* Submit CTA */}
                <div className="pt-3 border-t border-[#0B3D6E]/10">
                  <button
                    type="submit"
                    className={`btn-wave w-full py-4 px-6 rounded-full font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg cursor-pointer transition-colors tabular-nums ${
                      added
                        ? "bg-[#0B7A8F] text-white"
                        : "bg-[#FF7A6E] hover:bg-[#ff6658] text-white"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="size-5" />
                        <span>¡Agregado a tu carrito!</span>
                      </>
                    ) : (
                      <>
                        <BeachToteIcon className="size-5" />
                        <span>
                          Agregar al carrito ·{" "}
                          {formatMXN(
                            product.isCustomSized
                              ? product.price
                              : product.price * qty
                          )}{" "}
                          MXN
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
