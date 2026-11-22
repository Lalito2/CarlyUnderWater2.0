# CarlyUnderWater 2.0

Sitio web a la medida para **CarlyUnderWater** — tienda en línea de trajes de baño confeccionados a la medida inspirados en el tiburón ballena y experiencias privadas de buceo en el Sistema Arrecifal Veracruzano (Veracruz y Boca del Río, México).

## Características principales

- **Hero inmersivo 50/50** con video en loop de mantarraya y cápsula dual de acceso rápido (*Trajes de Baño* / *Paquetes de Buceo*).
- **Catálogo de trajes a la medida** (*Galatea, Altea, Naia, Calipso, Estela doble vista* y diadema *Nerea*) con tarjetas interactivas en hover, galería calibrada y guía interactiva de la sirena para capturar **busto, cintura, cadera y altura**.
- **Carrito persistente inferior + modal de 2 columnas** con desglose de productos, medidas capturadas, cambio de estampado y envío directo de pedido formateado por **WhatsApp**.
- **Experiencia de buceo *frame-by-frame* al hacer scroll** (GSAP `ScrollTrigger` + Lenis) y **4 paquetes de buceo** con videos reales submarinos y modal rápido de reserva por WhatsApp.
- **Sobre Carly** con galería interactiva `GridMotion`, integración de Instagram/TikTok, acordeón animado de envíos/cambios/cuidados y **footer ilustrado de atardecer costero**.

## Stack técnico

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **GSAP (`ScrollTrigger`)**, **Lenis** y **Framer Motion**

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

## Edición rápida de contenido

Todos los precios, descripciones, estampados, videos, paquetes de buceo, número de WhatsApp y enlaces sociales se encuentran centralizados en `src/data/catalog.ts`.
