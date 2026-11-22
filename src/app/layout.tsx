import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "CarlyUnderWater · Trajes de Baño a la Medida & Buceo en Veracruz",
  description:
    "Trajes de baño confeccionados a tu medida inspirados en el tiburón ballena y experiencias privadas de buceo en el Sistema Arrecifal Veracruzano con Carly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Montserrat:wght@400;500;600;700;800&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#4EC7C3]/35 selection:text-[#0B3D6E]">
        <CartProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
