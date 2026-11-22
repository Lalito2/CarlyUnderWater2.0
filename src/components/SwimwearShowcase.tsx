"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  SWIMWEAR_PRODUCTS,
  SwimwearProduct,
  formatMXN,
} from "@/data/catalog";
import { useCart } from "@/context/CartContext";
import ProductMeasureModal from "./ProductMeasureModal";
import {
  BeachToteIcon,
  HibiscusIcon,
  MeasureTapeIcon,
  OceanWaveIcon,
} from "@/components/MarineIcons";

const BADGE_STYLES: Record<string, string> = {
  coral: "bg-[#FF7A6E] text-white",
  sun: "bg-[#F6C44E] text-[#0B3D6E]",
  teal: "bg-[#4EC7C3] text-[#0B3D6E]",
};

export default function SwimwearShowcase() {
  const [selectedProduct, setSelectedProduct] =
    useState<SwimwearProduct | null>(null);
  const [quickAddedId, setQuickAddedId] = useState<string | null>(null);
  const { addItem } = useCart();

  const handleCardAction = (e: React.MouseEvent, product: SwimwearProduct) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  const handleQuickAddNerea = (
    e: React.MouseEvent,
    product: SwimwearProduct
  ) => {
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      image: product.defaultImage,
      printLabel: product.prints[0].label,
      isCustomSized: false,
    });
    setQuickAddedId(product.id);
    setTimeout(() => setQuickAddedId(null), 1600);
  };

  return (
    <section
      id="trajes"
      className="relative py-16 sm:py-24 bg-[#F7F1E7] pattern-whale-dots"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Section Header (No filters, no extra paragraph) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#0B7A8F] mb-2.5">
            <OceanWaveIcon className="size-4 text-[#0B7A8F]" />
            <span>Colección Tiburón Ballena · Confección a la medida</span>
          </div>
          <h2 className="text-balance text-3xl sm:text-5xl font-extrabold text-[#0B3D6E] leading-[1.12]">
            Trajes de baño que{" "}
            <span className="font-script font-normal text-[#0B7A8F]">
              abrazan tu silueta
            </span>
          </h2>
        </motion.div>

        {/* Sun Bum Inspired Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SWIMWEAR_PRODUCTS.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.06,
                ease: "easeOut",
              }}
                onClick={() => setSelectedProduct(product)}
                className="product-card-hover group relative h-[510px] sm:h-[535px] rounded-3xl bg-[#FFFDF9] border border-[#0B3D6E]/10 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer flex flex-col"
              >
                {/* HOVER STATE: Full-bleed sunlit lifestyle photo framed on the swimsuit */}
                <div className="hover-lifestyle absolute inset-0 z-10 pointer-events-none">
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} en el mar`}
                    style={{ objectPosition: product.hoverPosition }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2540]/72 via-transparent to-[#0B2540]/28" />
                </div>

                {/* DEFAULT STATE: Clean card layout */}
                <div className="default-view relative z-0 flex flex-col h-full p-5 sm:p-6">
                  {/* Top metadata row */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div>
                      <span className="text-[11px] font-bold uppercase text-[#0B7A8F]">
                        {product.categoryLabel}
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#0B3D6E] leading-tight mt-0.5">
                        {product.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#0B3D6E]/68 mt-0.5">
                        {product.subtitle}
                      </p>
                    </div>

                    {product.badge && (
                      <div
                        className={`size-15 rounded-full flex items-center justify-center text-center p-2 text-[10px] font-extrabold leading-tight shadow-xs rotate-6 group-hover:rotate-12 transition-transform duration-200 shrink-0 ${
                          BADGE_STYLES[product.badgeTone || "sun"]
                        }`}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Price & Prints Swatches */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-baseline gap-1.5 tabular-nums">
                      <span className="text-xl font-extrabold text-[#0B3D6E]">
                        {formatMXN(product.price)}
                      </span>
                      <span className="text-[11px] font-semibold text-[#0B3D6E]/55">
                        MXN
                      </span>
                    </div>

                    <div
                      className="flex items-center gap-1.5"
                      title="Estampados tiburón ballena"
                    >
                      {product.prints.map((pr) => (
                        <span
                          key={pr.id}
                          style={{
                            backgroundColor: pr.swatch,
                            boxShadow: `inset 0 0 0 2px ${pr.swatchAccent}`,
                          }}
                          className="size-4 rounded-full border border-[#0B3D6E]/20"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Framed Primary Image centered directly on the swimsuit */}
                  <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#F7F1E7]">
                    <img
                      src={product.defaultImage}
                      alt={`${product.name} · ${product.subtitle}`}
                      style={{
                        objectPosition: product.defaultPosition,
                        transform: product.defaultScale
                          ? `scale(${product.defaultScale})`
                          : undefined,
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#FFFDF9]/92 backdrop-blur-sm text-[11px] font-bold text-[#0B3D6E] shadow-xs">
                      {product.coverageNote}
                    </div>
                  </div>
                </div>

                {/* HOVER OVERLAY HEADER & FLOATING ACTION PILL */}
                <div className="hover-cta-pill absolute inset-x-5 top-5 z-20 flex items-center justify-between pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#FFFDF9]/94 backdrop-blur-md text-[#0B3D6E] shadow-sm tabular-nums">
                    <span className="font-extrabold text-sm">{product.name}</span>
                    <span className="mx-1.5 text-[#0B7A8F]">·</span>
                    <span className="text-xs font-bold text-[#0B7A8F]">
                      {formatMXN(product.price)}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0B3D6E]/80 text-white text-[11px] font-semibold backdrop-blur-sm tabular-nums">
                    {product.gallery.length} fotos
                  </span>
                </div>

                <div className="hover-cta-pill absolute inset-x-5 bottom-5 z-20 flex flex-col gap-2">
                  <p className="text-white text-xs font-medium line-clamp-2 drop-shadow px-1 leading-relaxed">
                    {product.tagline}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleCardAction(e, product)}
                      className="btn-wave flex-1 py-3.5 px-5 rounded-full bg-[#F6C44E] hover:bg-[#ffcf5c] text-[#0B3D6E] font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {product.isCustomSized ? (
                        <>
                          <MeasureTapeIcon className="size-4" />
                          <span>Personalizar medidas</span>
                        </>
                      ) : (
                        <>
                          <HibiscusIcon className="size-4" />
                          <span>Elegir estampado</span>
                        </>
                      )}
                    </button>

                    {!product.isCustomSized && (
                      <button
                        onClick={(e) => handleQuickAddNerea(e, product)}
                        aria-label="Agregar diadema Nerea al carrito"
                        title="Agregar rápido"
                        className="btn-wave size-12 rounded-full bg-[#FF7A6E] text-white flex items-center justify-center shadow-lg cursor-pointer shrink-0"
                      >
                        {quickAddedId === product.id ? (
                          <Check className="size-5" />
                        ) : (
                          <BeachToteIcon className="size-5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Mobile tap hint */}
                <div className="sm:hidden px-5 pb-4 pt-1 flex items-center justify-between text-xs font-bold text-[#0B7A8F]">
                  <span>
                    {product.isCustomSized
                      ? "Toca para ingresar tus medidas"
                      : "Toca para elegir estampado"}
                  </span>
                  <span>→</span>
                </div>
              </motion.article>
          ))}
        </div>

        {/* Custom-Made Mermaid Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 rounded-3xl bg-[#FFFDF9] border border-[#0B3D6E]/10 shadow-sm p-6 sm:p-10 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <img
                src="/images/brand/mermaid-guide.png"
                alt="Guía de medidas sirena CarlyUnderWater"
                className="h-64 sm:h-72 w-auto object-contain"
              />
            </div>

            <div className="lg:col-span-8">
              <span className="font-script text-2xl sm:text-3xl text-[#0B7A8F]">
                ¿Cómo pedir a tu medida?
              </span>
              <h3 className="text-balance text-2xl sm:text-3xl font-extrabold text-[#0B3D6E] mt-1 leading-snug">
                Tu cuerpo no tiene que encajar en una talla estándar
              </h3>
              <p className="text-pretty mt-3 text-sm sm:text-base text-[#0B3D6E]/78 leading-[1.68]">
                Cada traje se hace pensando en ti. Al seleccionar cualquier
                modelo podrás capturar estas 4 medidas en centímetros y se
                enviarán automáticamente con tu pedido por WhatsApp:
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    n: "1",
                    title: "Busto",
                    desc: "Mide la parte más llena del busto con la cinta horizontal.",
                  },
                  {
                    n: "2",
                    title: "Cintura",
                    desc: "Mide la parte más estrecha de tu torso, a la altura del ombligo.",
                  },
                  {
                    n: "3",
                    title: "Cadera",
                    desc: "Mide la parte más ancha de tu cadera y glúteos.",
                  },
                  {
                    n: "4",
                    title: "Altura",
                    desc: "Mide tu altura total, de pies a cabeza.",
                  },
                ].map((m) => (
                  <div
                    key={m.n}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#F7F1E7]/85 border border-[#0B3D6E]/8"
                  >
                    <span className="size-7 rounded-full bg-[#0B3D6E] text-white text-xs font-extrabold flex items-center justify-center shrink-0 tabular-nums">
                      {m.n}
                    </span>
                    <div>
                      <p className="font-bold text-sm text-[#0B3D6E] leading-snug">
                        {m.title}
                      </p>
                      <p className="text-xs text-[#0B3D6E]/72 leading-relaxed mt-0.5">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Detail + Custom Measures Modal */}
      <ProductMeasureModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
