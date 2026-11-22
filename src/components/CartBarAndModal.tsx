"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  SITE_CONFIG,
  SWIMWEAR_PRODUCTS,
  WHALE_SHARK_PRINTS,
  formatMXN,
} from "@/data/catalog";
import {
  BeachToteIcon,
  CoastalParcelIcon,
  HibiscusIcon,
  WavePinIcon,
} from "@/components/MarineIcons";

export default function CartBarAndModal() {
  const {
    items,
    totalItems,
    subtotal,
    isCartOpen,
    openCart,
    closeCart,
    addItem,
    updateQuantity,
    updateItemPrint,
    removeItem,
    lastAddedTick,
  } = useCart();

  const [deliveryMode, setDeliveryMode] = useState<"envio" | "local">("envio");
  const [customer, setCustomer] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    direccion: "",
    cp: "",
    ciudad: "",
  });

  useEffect(() => {
    if (!isCartOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isCartOpen, closeCart]);

  const hasNerea = items.some((i) => i.productId === "nerea");
  const nereaProduct = SWIMWEAR_PRODUCTS.find((p) => p.id === "nerea");

  const handleAddNereaUpsell = () => {
    if (!nereaProduct) return;
    addItem({
      productId: nereaProduct.id,
      name: nereaProduct.name,
      subtitle: nereaProduct.subtitle,
      price: nereaProduct.price,
      image: nereaProduct.defaultImage,
      printLabel: nereaProduct.prints[0].label,
      isCustomSized: false,
    });
  };

  const handleCheckoutWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const productLines = items.map((item, index) => {
      let block = `${index + 1}. *${item.name}* (${item.subtitle}) × ${
        item.quantity
      } — ${formatMXN(item.price * item.quantity)} MXN\n   • Estampado: ${
        item.printLabel
      }`;
      if (item.measurements) {
        block += `\n   • Medidas (cm): Busto ${item.measurements.busto} | Cintura ${item.measurements.cintura} | Cadera ${item.measurements.cadera} | Altura ${item.measurements.altura}`;
      }
      return block;
    });

    const shippingBlock =
      deliveryMode === "local"
        ? `📍 *Entrega:* Entrega local (Veracruz / Boca del Río)\n🏠 *Referencia/Zona:* ${
            customer.direccion || "Por coordinar"
          }`
        : `📦 *Envío a domicilio:*\n   • Dirección: ${customer.direccion}\n   • C.P.: ${customer.cp}\n   • Ciudad: ${customer.ciudad}`;

    const message = [
      `¡Hola CarlyUnderWater! 🌊 Quiero confirmar mi pedido:`,
      ``,
      `🛍️ *PRODUCTOS:*`,
      ...productLines,
      ``,
      `💰 *Subtotal:* ${formatMXN(subtotal)} MXN`,
      ``,
      `👤 *DATOS PERSONALES:*`,
      `• Nombre: ${customer.nombre} ${customer.apellido}`,
      `• Correo: ${customer.correo}`,
      `• Celular: ${customer.celular}`,
      ``,
      shippingBlock,
      ``,
      `Quedo al pendiente para que me compartas la liga / datos de transferencia. ¡Muchas gracias!`,
    ].join("\n");

    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* PERSISTENT BOTTOM CART BAR */}
      <AnimatePresence>
        {totalItems > 0 && !isCartOpen && (
          <motion.div
            key="bottom-cart-bar"
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 110, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-4 inset-x-4 z-40 flex justify-center pointer-events-none pb-[env(safe-area-inset-bottom)]"
          >
            <motion.div
              key={lastAddedTick}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto w-full max-w-2xl rounded-full bg-[#0B3D6E]/96 backdrop-blur-xl text-white px-4 sm:px-5 py-3 shadow-2xl border border-[#4EC7C3]/35 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex -space-x-2 shrink-0">
                  {items.slice(0, 3).map((item) => (
                    <img
                      key={item.uid}
                      src={item.image}
                      alt={item.name}
                      className="size-10 rounded-full object-cover object-[50%_68%] border-2 border-[#0B3D6E] bg-white"
                    />
                  ))}
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-extrabold truncate tabular-nums">
                    {totalItems} {totalItems === 1 ? "prenda" : "prendas"} en tu
                    carrito
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#BFE8E3] font-semibold tabular-nums">
                    Subtotal:{" "}
                    <strong className="text-[#F6C44E]">
                      {formatMXN(subtotal)} MXN
                    </strong>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={openCart}
                className="btn-wave px-5 py-2.5 rounded-full bg-[#FF7A6E] hover:bg-[#ff6658] text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shrink-0 shadow-md cursor-pointer"
              >
                <BeachToteIcon className="size-4" />
                <span>Ver carrito</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TWO-COLUMN CHECKOUT CART MODAL */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B2540]/65 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 14 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-5xl max-h-[92dvh] overflow-y-auto rounded-3xl bg-[#FFFDF9] shadow-2xl border border-white/70"
            >
              {/* Modal Top Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#FFFDF9]/96 backdrop-blur-md border-b border-[#0B3D6E]/10">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-2xl bg-[#BFE8E3]/60 text-[#0B7A8F] flex items-center justify-center">
                    <BeachToteIcon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0B3D6E] leading-tight">
                      Tu carrito CarlyUnderWater
                    </h3>
                    <p className="text-xs text-[#0B3D6E]/68 font-medium mt-0.5">
                      Revisa tus prendas y completa tus datos para confirmar por
                      WhatsApp
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeCart}
                  aria-label="Cerrar carrito"
                  className="size-10 rounded-full bg-[#F7F1E7] hover:bg-[#BFE8E3]/50 text-[#0B3D6E] flex items-center justify-center transition-transform duration-200 hover:rotate-90 cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="size-16 rounded-full bg-[#F7F1E7] text-[#0B7A8F] flex items-center justify-center mx-auto mb-4">
                    <BeachToteIcon className="size-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-[#0B3D6E]">
                    Tu carrito todavía está vacío
                  </h4>
                  <p className="text-pretty text-sm text-[#0B3D6E]/72 mt-2 max-w-sm mx-auto leading-relaxed">
                    Elige tu modelo favorito inspirado en el tiburón ballena e
                    ingresa tus medidas para confeccionarlo para ti.
                  </p>
                  <a
                    href="#trajes"
                    onClick={closeCart}
                    className="btn-wave mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF7A6E] text-white font-extrabold text-sm"
                  >
                    Ver trajes de baño
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* LEFT COLUMN: Product Breakdown with Thumbnails + Subtotal */}
                  <div className="lg:col-span-6 p-5 sm:p-7 bg-[#F7F1E7]/65 border-b lg:border-b-0 lg:border-r border-[#0B3D6E]/10 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-extrabold uppercase text-[#0B7A8F] mb-4 tabular-nums">
                        Resumen de productos ({totalItems})
                      </p>

                      <div className="space-y-3.5">
                        {items.map((item) => (
                          <div
                            key={item.uid}
                            className="flex gap-3.5 p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#0B3D6E]/8 shadow-xs"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-20 rounded-xl object-cover object-[50%_68%] shrink-0 bg-[#F7F1E7]"
                            />

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h4 className="font-extrabold text-sm text-[#0B3D6E] leading-tight">
                                    {item.name}
                                  </h4>
                                  <p className="text-[11px] text-[#0B3D6E]/68 font-semibold">
                                    {item.subtitle}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeItem(item.uid)}
                                  aria-label="Eliminar producto"
                                  className="text-[#0B3D6E]/40 hover:text-[#FF7A6E] transition-colors cursor-pointer"
                                >
                                  <Trash2 className="size-4" />
                                </button>
                              </div>

                              {/* Interactive Print Selector ONLY for models that offer 2 prints (Galatea, Altea, Nerea) */}
                              {(() => {
                                const catalogProd = SWIMWEAR_PRODUCTS.find(
                                  (p) => p.id === item.productId
                                );
                                const hasMultiplePrints =
                                  (catalogProd?.prints.length ?? 0) > 1;
                                if (!hasMultiplePrints) {
                                  return (
                                    <p className="mt-1.5 text-[11px] font-bold text-[#0B7A8F]">
                                      {item.printLabel}
                                    </p>
                                  );
                                }
                                return (
                                  <div className="mt-2 flex flex-wrap gap-1.5">
                                    {WHALE_SHARK_PRINTS.map((pr) => {
                                      const isSelected =
                                        item.printLabel === pr.label;
                                      return (
                                        <button
                                          key={pr.id}
                                          type="button"
                                          onClick={() =>
                                            updateItemPrint(item.uid, pr.label)
                                          }
                                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all cursor-pointer ${
                                            isSelected
                                              ? "border-[#0B7A8F] bg-[#0B3D6E] text-white shadow-xs"
                                              : "border-[#0B3D6E]/15 bg-[#F7F1E7] text-[#0B3D6E]/75 hover:border-[#0B7A8F]"
                                          }`}
                                        >
                                          <span
                                            style={{
                                              backgroundColor: pr.swatch,
                                              boxShadow: `inset 0 0 0 1.5px ${pr.swatchAccent}`,
                                            }}
                                            className="size-2.5 rounded-full shrink-0"
                                          />
                                          <span>
                                            {pr.id === "puntos-oceano"
                                              ? "Azul Puntos"
                                              : "Blanco & Azul"}
                                          </span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                );
                              })()}

                              {item.measurements && (
                                <p className="mt-1.5 text-[10px] font-semibold text-[#0B3D6E]/78 bg-[#F7F1E7] px-2 py-1 rounded-lg inline-block tabular-nums">
                                  B: {item.measurements.busto}cm · C:{" "}
                                  {item.measurements.cintura}cm · Cad:{" "}
                                  {item.measurements.cadera}cm · Alt:{" "}
                                  {item.measurements.altura}cm
                                </p>
                              )}

                              <div className="mt-2.5 flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F1E7] px-2 py-1">
                                  <button
                                    type="button"
                                    aria-label="Restar unidad"
                                    onClick={() => updateQuantity(item.uid, -1)}
                                    className="size-6 rounded-full bg-white text-[#0B3D6E] flex items-center justify-center shadow-xs hover:bg-[#BFE8E3]/50 cursor-pointer"
                                  >
                                    <Minus className="size-3" />
                                  </button>
                                  <span className="text-xs font-extrabold text-[#0B3D6E] min-w-[16px] text-center tabular-nums">
                                    {item.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    aria-label="Sumar unidad"
                                    onClick={() => updateQuantity(item.uid, 1)}
                                    className="size-6 rounded-full bg-white text-[#0B3D6E] flex items-center justify-center shadow-xs hover:bg-[#BFE8E3]/50 cursor-pointer"
                                  >
                                    <Plus className="size-3" />
                                  </button>
                                </div>

                                <span className="text-sm font-extrabold text-[#0B3D6E] tabular-nums">
                                  {formatMXN(item.price * item.quantity)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Subtle Cross-Sell for Nerea Headband */}
                      {!hasNerea && nereaProduct && (
                        <div className="mt-4 p-3.5 rounded-2xl bg-[#BFE8E3]/35 border border-[#4EC7C3]/40 flex items-center gap-3">
                          <img
                            src={nereaProduct.defaultImage}
                            alt="Diadema Nerea"
                            className="size-12 rounded-xl object-cover object-[50%_26%] shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-extrabold text-[#0B3D6E] flex items-center gap-1">
                              <HibiscusIcon className="size-3.5 text-[#FF7A6E]" />
                              <span>Completa tu look con Nerea</span>
                            </p>
                            <p className="text-[11px] text-[#0B3D6E]/78 tabular-nums">
                              Diadema a juego de tiburón ballena ·{" "}
                              <strong>$170 MXN</strong>
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={handleAddNereaUpsell}
                            className="px-3.5 py-2 rounded-full bg-[#0B3D6E] hover:bg-[#0B7A8F] text-white text-xs font-bold shrink-0 cursor-pointer transition-colors"
                          >
                            + Agregar
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Subtotal Summary */}
                    <div className="mt-6 pt-4 border-t border-[#0B3D6E]/10 space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#0B3D6E]/72 font-semibold">
                        <span>Entrega / Envío</span>
                        <span>
                          {deliveryMode === "local"
                            ? "Entrega local Veracruz / Boca del Río"
                            : "Se cotiza al confirmar por WhatsApp"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-lg font-extrabold text-[#0B3D6E] tabular-nums">
                        <span>Subtotal</span>
                        <span>{formatMXN(subtotal)} MXN</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Personal & Shipping Form */}
                  <form
                    onSubmit={handleCheckoutWhatsApp}
                    className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <p className="text-xs font-extrabold uppercase text-[#0B7A8F]">
                        Tus datos personales y de envío
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                            Nombre *
                          </label>
                          <input
                            required
                            type="text"
                            value={customer.nombre}
                            onChange={(e) =>
                              setCustomer((c) => ({ ...c, nombre: e.target.value }))
                            }
                            placeholder="Tu nombre"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                            Apellido *
                          </label>
                          <input
                            required
                            type="text"
                            value={customer.apellido}
                            onChange={(e) =>
                              setCustomer((c) => ({
                                ...c,
                                apellido: e.target.value,
                              }))
                            }
                            placeholder="Tu apellido"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                            Correo electrónico *
                          </label>
                          <input
                            required
                            type="email"
                            value={customer.correo}
                            onChange={(e) =>
                              setCustomer((c) => ({ ...c, correo: e.target.value }))
                            }
                            placeholder="correo@ejemplo.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                            Número de celular *
                          </label>
                          <input
                            required
                            type="tel"
                            value={customer.celular}
                            onChange={(e) =>
                              setCustomer((c) => ({ ...c, celular: e.target.value }))
                            }
                            placeholder="Ej. 229 123 4567"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                          />
                        </div>
                      </div>

                      {/* Delivery Type Toggle */}
                      <div>
                        <label className="block text-xs font-bold text-[#0B3D6E] mb-1.5">
                          Tipo de entrega
                        </label>
                        <div className="grid grid-cols-2 gap-2.5">
                          <button
                            type="button"
                            onClick={() => setDeliveryMode("envio")}
                            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border-2 text-xs font-bold transition-all duration-150 cursor-pointer ${
                              deliveryMode === "envio"
                                ? "border-[#0B7A8F] bg-[#BFE8E3]/35 text-[#0B3D6E]"
                                : "border-[#0B3D6E]/10 text-[#0B3D6E]/68 hover:border-[#4EC7C3]"
                            }`}
                          >
                            <CoastalParcelIcon className="size-4" />
                            <span>Envío a todo México</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeliveryMode("local")}
                            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border-2 text-xs font-bold transition-all duration-150 cursor-pointer ${
                              deliveryMode === "local"
                                ? "border-[#0B7A8F] bg-[#BFE8E3]/35 text-[#0B3D6E]"
                                : "border-[#0B3D6E]/10 text-[#0B3D6E]/68 hover:border-[#4EC7C3]"
                            }`}
                          >
                            <WavePinIcon className="size-4" />
                            <span>Veracruz / Boca del Río</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                          {deliveryMode === "local"
                            ? "Zona o punto de referencia en Veracruz / Boca del Río *"
                            : "Dirección completa (calle, número, colonia) *"}
                        </label>
                        <input
                          required
                          type="text"
                          value={customer.direccion}
                          onChange={(e) =>
                            setCustomer((c) => ({
                              ...c,
                              direccion: e.target.value,
                            }))
                          }
                          placeholder={
                            deliveryMode === "local"
                              ? "Ej. Costa de Oro, Boca del Río"
                              : "Calle, número exterior/interior, colonia"
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                        />
                      </div>

                      {deliveryMode === "envio" && (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                              Código postal *
                            </label>
                            <input
                              required
                              type="text"
                              inputMode="numeric"
                              value={customer.cp}
                              onChange={(e) =>
                                setCustomer((c) => ({ ...c, cp: e.target.value }))
                              }
                              placeholder="Ej. 94299"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white tabular-nums"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#0B3D6E] mb-1">
                              Ciudad y Estado *
                            </label>
                            <input
                              required
                              type="text"
                              value={customer.ciudad}
                              onChange={(e) =>
                                setCustomer((c) => ({
                                  ...c,
                                  ciudad: e.target.value,
                                }))
                              }
                              placeholder="Ej. Ciudad de México"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F1E7]/70 border border-[#0B3D6E]/15 text-sm font-medium text-[#0B3D6E] focus:outline-none focus:border-[#0B7A8F] focus:bg-white"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#0B3D6E]/10">
                      <div className="flex items-center justify-between mb-3 tabular-nums">
                        <span className="text-xs font-bold text-[#0B3D6E]/72">
                          Subtotal a confirmar
                        </span>
                        <span className="text-xl font-extrabold text-[#0B3D6E]">
                          {formatMXN(subtotal)} MXN
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="btn-wave w-full py-4 px-5 rounded-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                      >
                        <MessageCircle className="size-5" />
                        <span>Enviar y confirmar por WhatsApp</span>
                      </button>

                      <p className="text-pretty mt-2.5 text-center text-[11px] text-[#0B3D6E]/62 leading-relaxed">
                        Al enviar, recibiremos tu pedido con tus medidas exactas
                        y te compartiremos la liga para realizar tu transferencia.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
