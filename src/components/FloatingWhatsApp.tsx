"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

export default function FloatingWhatsApp() {
  const { totalItems, isCartOpen } = useCart();

  if (isCartOpen) return null;

  const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "¡Hola Carly! 🌊 Quiero asesoría sobre trajes de baño a medida o paquetes de buceo."
  )}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        bottom: totalItems > 0 ? 88 : 24,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-5 z-40 group flex items-center gap-2.5 pl-4 pr-4 py-3 rounded-full bg-[#25D366] text-white shadow-[0_14px_35px_rgba(37,211,102,0.4)] border-2 border-white/80"
    >
      <MessageCircle className="w-5 h-5 fill-white/15" />
      <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
        ¿Dudas? WhatsApp
      </span>
    </motion.a>
  );
}
