export const SITE_CONFIG = {
  brandName: "CarlyUnderWater",
  whatsappNumber: "522281773148",
  instagramUrl: "https://www.instagram.com/carly_underwater",
  instagramHandle: "@carly_underwater",
  tiktokUrl: "https://www.tiktok.com/@carly_underwater",
  tiktokHandle: "@carly_underwater",
  location: "Veracruz y Boca del Río, México",
  heroMantaVideoMp4: "/assets/videos/mantas.mp4",
  heroMantaVideoWebm: "/assets/videos/mantas.webm",
  divingScrollVideoMp4: "/assets/videos/mantas.mp4",
  divingScrollVideoWebm: "/assets/videos/mantas.webm",
  marqueeItems: [
    "Trajes de baño hechos a tu medida · Estampados de tiburón ballena",
    "Envíos a todo México · Entregas locales en Veracruz y Boca del Río",
    "Certificaciones y experiencias privadas de buceo con Carly (SNSI)",
    "Combina top y calzón con tus medidas exactas",
  ],
  welcomePromo: {
    badge: "NUEVA COLECCIÓN · MAR DE VERACRUZ",
    eyebrow: "Hecho a tu medida",
    title: "Trajes inspirados en el tiburón ballena & buceo en arrecife",
    subtitle:
      "Confeccionamos cada traje con tus medidas exactas y te acompañamos a explorar el Sistema Arrecifal Veracruzano.",
    image: "/assets/products/naia-2.webp",
    ctaPrimary: "Explorar colección",
    ctaSecondary: "Ver paquetes de buceo",
    perks: [
      {
        title: "Hecho a tu medida",
        desc: "Capturas busto, cintura, cadera y altura al pedir",
      },
      {
        title: "Envíos a todo México",
        desc: "Y entregas personales en Veracruz y Boca del Río",
      },
      {
        title: "Buceo 100% privado",
        desc: "Con Carly, bióloga marina e instructora SNSI",
      },
      {
        title: "Atención directa",
        desc: "Confirma pedido o reserva al instante por WhatsApp",
      },
    ],
  },
};

export interface ProductPhoto {
  src: string;
  objectPosition: string;
  zoom?: number;
}

export interface SwimwearProduct {
  id: string;
  name: string;
  subtitle: string;
  category: "completos" | "bikinis" | "accesorios";
  categoryLabel: string;
  price: number;
  badge?: string;
  badgeTone?: "coral" | "sun" | "teal";
  isCustomSized: boolean;
  isReversible?: boolean;
  prints: { id: string; label: string; swatch: string; swatchAccent: string }[];
  defaultImage: string;
  defaultPosition: string;
  defaultScale?: number;
  hoverImage: string;
  hoverPosition: string;
  gallery: ProductPhoto[];
  tagline: string;
  description: string;
  features: string[];
  coverageNote: string;
}

export const WHALE_SHARK_PRINTS = [
  {
    id: "puntos-oceano",
    label: "Tiburón Ballena · Azul Puntos",
    swatch: "#0B3D6E",
    swatchAccent: "#BFE8E3",
  },
  {
    id: "siluetas-espuma",
    label: "Tiburón Ballena · Blanco & Azul",
    swatch: "#E8F4FA",
    swatchAccent: "#0B3D6E",
  },
];

export const SWIMWEAR_PRODUCTS: SwimwearProduct[] = [
  {
    id: "galatea",
    name: "Galatea",
    subtitle: "Completo con cierre",
    category: "completos",
    categoryLabel: "Una pieza",
    price: 800,
    badge: "Protección solar",
    badgeTone: "teal",
    isCustomSized: true,
    prints: WHALE_SHARK_PRINTS,
    defaultImage: "/assets/products/galatea-4.webp",
    defaultPosition: "50% 68%",
    hoverImage: "/assets/products/galatea-7.webp",
    hoverPosition: "50% 72%",
    gallery: [
      { src: "/assets/products/galatea-4.webp", objectPosition: "50% 66%" },
      { src: "/assets/products/galatea-7.webp", objectPosition: "50% 70%" },
      { src: "/assets/products/galatea-5.webp", objectPosition: "50% 64%" },
      { src: "/assets/products/galatea-2.webp", objectPosition: "50% 66%" },
      { src: "/assets/products/galatea-3.webp", objectPosition: "50% 58%" },
      { src: "/assets/products/galatea-1.webp", objectPosition: "50% 52%" },
      { src: "/assets/products/galatea-6.webp", objectPosition: "50% 52%" },
    ],
    tagline: "Tu espíritu aventurero, hecho traje de baño.",
    description:
      "Tu espíritu aventurero, hecho traje de baño. Su diseño de manga larga y cierre frontal te permite jugar con el escote y llevar el mar a tu manera.",
    features: [
      "Una sola pieza.",
      "Manga larga.",
      "Cierre frontal.",
      "Mayor cobertura en brazos y torso.",
      "Protección solar.",
      "Calzón de corte clásico.",
    ],
    coverageNote: "Cobertura alta · Corte clásico",
  },
  {
    id: "altea",
    name: "Altea",
    subtitle: "Bikini de tiro alto",
    category: "bikinis",
    categoryLabel: "Bikini · 2 piezas",
    price: 800,
    badge: "Favorito",
    badgeTone: "coral",
    isCustomSized: true,
    prints: WHALE_SHARK_PRINTS,
    defaultImage: "/assets/products/altea-2.webp",
    defaultPosition: "50% 82%",
    hoverImage: "/assets/products/altea-1.webp",
    hoverPosition: "50% 62%",
    gallery: [
      { src: "/assets/products/altea-2.webp", objectPosition: "50% 78%" },
      { src: "/assets/products/altea-1.webp", objectPosition: "50% 62%" },
      { src: "/assets/products/altea-3.webp", objectPosition: "50% 64%" },
    ],
    tagline: "Para disfrutar la brisa, la sal y el sol.",
    description:
      "Para disfrutar la brisa, la sal y el sol. Un conjunto de dos piezas con cintura alta que enmarca tu silueta y ofrece mayor cobertura en el abdomen y glúteo.",
    features: [
      "Incluye top y calzón de tiro alto.",
      "Calzón de cintura alta y corte clásico.",
      "Top de escote en V, banda ancha debajo del busto, lazos en la espalda para ajustar el contorno.",
    ],
    coverageNote: "Tiro alto · Corte clásico",
  },
  {
    id: "naia",
    name: "Naia",
    subtitle: "Bikini de tiro bajo",
    category: "bikinis",
    categoryLabel: "Bikini · 2 piezas",
    price: 800,
    badge: "Corte Cheeky",
    badgeTone: "sun",
    isCustomSized: true,
    prints: [WHALE_SHARK_PRINTS[0]],
    // Foto 5 solicitada por el usuario como primera vista (espalda con aletas)
    defaultImage: "/assets/products/naia-3.webp",
    defaultPosition: "50% 72%",
    defaultScale: 1.08,
    hoverImage: "/assets/products/naia-1.webp",
    hoverPosition: "50% 56%",
    gallery: [
      { src: "/assets/products/naia-3.webp", objectPosition: "50% 70%" },
      { src: "/assets/products/naia-1.webp", objectPosition: "50% 56%" },
      { src: "/assets/products/naia-2.webp", objectPosition: "50% 82%" },
    ],
    tagline: "Para sentir el mar cerquita de la piel.",
    description:
      "Para sentir el mar cerquita de la piel. Un conjunto de dos piezas con calzón de cintura baja, ideal si prefieres dejar el abdomen y glúteo más descubierto.",
    features: [
      "Incluye top y calzón de tiro bajo.",
      "Cintura baja.",
      "Calzón de corte cheeky.",
      "Top de escote en V, banda ancha debajo del busto, lazos en la espalda para ajustar el contorno.",
    ],
    coverageNote: "Tiro bajo · Corte cheeky",
  },
  {
    id: "calipso",
    name: "Calipso",
    subtitle: "Completo de tirantes",
    category: "completos",
    categoryLabel: "Una pieza",
    price: 800,
    badge: "Toque Sirena",
    badgeTone: "coral",
    isCustomSized: true,
    prints: [WHALE_SHARK_PRINTS[0]],
    // Foto 6 solicitada por el usuario como primera vista (junto a la tabla de paddle)
    defaultImage: "/assets/products/calipso-2.webp",
    defaultPosition: "44% 88%",
    defaultScale: 1.16,
    hoverImage: "/assets/products/calipso-3.webp",
    hoverPosition: "50% 72%",
    gallery: [
      { src: "/assets/products/calipso-2.webp", objectPosition: "44% 85%" },
      { src: "/assets/products/calipso-3.webp", objectPosition: "50% 70%" },
      { src: "/assets/products/calipso-1.webp", objectPosition: "50% 68%" },
    ],
    tagline: "Un poquito de sirena en cada salida al mar.",
    description:
      "Un poquito de sirena en cada salida al mar. Con tirantes anchos, escote redondo y un ajuste relajado, Calipso combina comodidad con un toque sexy.",
    features: [
      "Una sola pieza.",
      "Tirantes anchos.",
      "Escote redondo amplio.",
      "Espalda abierta con lazos para anudar.",
      "Corte cheeky de cobertura reducida en glúteos.",
      "Ajuste más relajado que el modelo sport.",
    ],
    coverageNote: "Ajuste relajado · Corte cheeky",
  },
  {
    id: "estela",
    name: "Estela",
    subtitle: "Completo sport ajustable · Doble vista",
    category: "completos",
    categoryLabel: "Una pieza · Doble vista",
    price: 800,
    badge: "Doble vista",
    badgeTone: "teal",
    isCustomSized: true,
    isReversible: true,
    prints: [
      {
        id: "doble-vista",
        label: "Doble vista · Tiburón Ballena",
        swatch: "#0B3D6E",
        swatchAccent: "#E8F4FA",
      },
    ],
    defaultImage: "/assets/products/estela-1.webp",
    defaultPosition: "50% 60%",
    hoverImage: "/assets/products/estela-2.webp",
    hoverPosition: "50% 58%",
    gallery: [
      { src: "/assets/products/estela-1.webp", objectPosition: "50% 60%" },
      { src: "/assets/products/estela-2.webp", objectPosition: "50% 58%" },
      { src: "/assets/products/estela-3.webp", objectPosition: "50% 64%" },
    ],
    tagline: "Dos estilos de mar en un mismo traje.",
    description:
      "Para las que siguen su propia corriente. Es doble vista (reversible) para usar ambos estampados de tiburón ballena según tu mood, con corte ceñido deportivo y espalda descubierta con tirantes cruzados ajustables.",
    features: [
      "Doble vista (reversible): 2 estampados en 1 traje.",
      "Una sola pieza.",
      "Escote redondo.",
      "Tirantes delgados cruzados en la espalda.",
      "Lazo posterior para ajustar.",
      "Ajuste al cuerpo, más ceñido.",
      "Cobertura media en glúteos.",
    ],
    coverageNote: "Doble vista · Cobertura media",
  },
  {
    id: "nerea",
    name: "Nerea",
    subtitle: "Diadema de tela",
    category: "accesorios",
    categoryLabel: "Accesorio",
    price: 170,
    badge: "Match perfecto",
    badgeTone: "sun",
    isCustomSized: false,
    prints: WHALE_SHARK_PRINTS,
    defaultImage: "/assets/products/nerea-3.webp",
    defaultPosition: "50% 26%",
    hoverImage: "/assets/products/nerea-2.webp",
    hoverPosition: "50% 34%",
    gallery: [
      { src: "/assets/products/nerea-3.webp", objectPosition: "50% 26%" },
      { src: "/assets/products/nerea-1.webp", objectPosition: "50% 44%" },
      { src: "/assets/products/nerea-2.webp", objectPosition: "50% 34%" },
    ],
    tagline: "Un toque de mar para acompañar tus aventuras.",
    description:
      "Un toque de mar para acompañar tus aventuras. Complementa tu traje favorito y ayuda a mantener el cabello lejos del rostro.",
    features: [
      "Diseño de banda ancha.",
      "Disponible en ambos estampados de tiburón ballena.",
      "Combínala con cualquiera de nuestros trajes.",
    ],
    coverageNote: "Unitalla elástica · Banda ancha",
  },
];

export interface DivingPackage {
  id: string;
  title: string;
  subtitle?: string;
  level: string;
  levelTone: "teal" | "ocean" | "coral";
  price: number;
  priceLabel: string;
  duration: string;
  maxDepth: string;
  image: string;
  video: string;
  description: string;
  includes: string[];
  extra: string;
  featured?: boolean;
}

export const DIVING_PACKAGES: DivingPackage[] = [
  {
    id: "iniciacion-buceo",
    title: "Iniciación al buceo",
    subtitle: "Tu primera respiración bajo el mar",
    level: "Principiante",
    levelTone: "teal",
    price: 2350,
    priceLabel: "$2,350 MXN",
    duration: "1 día · 8am–2pm",
    maxDepth: "Hasta 8 m",
    image: "/assets/gallery/IMG_7294.webp",
    video: "/assets/videos/packages/pkg-iniciacion.mp4",
    description:
      "Esta es tu iniciación al mundo submarino. Sin necesidad de experiencia previa, te llevamos de la mano a respirar bajo el azul por primera vez.",
    includes: [
      "Material digital",
      "1 Buceo (1 tanque) a máximo 8 metros",
      "1 Clase teórica básica",
      "Instructora profesional privada (Carly)",
      "Equipo completo",
      "Fotografías / video bajo el agua",
      "Bitácora y sticker de regalo",
      "Lunch (volován, fruta y agua)",
    ],
    extra:
      "Te citaré aproximadamente a las 8:00 am para tu clase teórica. Prepararemos tu equipo y nos iremos al mar. Tendremos una sesión de snorkel y ahora sí… ¡a bucear! Regresamos a tierra aproximadamente a las 2:00 pm.",
  },
  {
    id: "open-water-mar",
    title: "Open Water Diver",
    subtitle: "Completamente en el mar",
    level: "Certificación",
    levelTone: "ocean",
    price: 10900,
    priceLabel: "$10,900 MXN",
    duration: "4 días en mar",
    maxDepth: "Hasta 18 m",
    image: "/assets/gallery/IMG_7310.webp",
    video: "/assets/videos/packages/pkg-openwater-mar.mp4",
    description:
      "Obtén tu certificación internacional SNSI y bucea en todo el planeta hasta los 18 metros. Aprende a dominar el equipo y navega con autonomía en cualquier océano.",
    includes: [
      "Instructora profesional privada (Carly)",
      "5 Clases teóricas en línea (antes del buceo) y material de estudio",
      "4 Días de buceo en mar (Sistema Arrecifal Veracruzano)",
      "Equipo completo",
      "¡Todas las fotografías y videos que pueda tomarte!",
      "Bitácora y sticker de regalo",
      "Lunch diario (volován, fruta y agua)",
      "Certificación internacional SNSI y trámites",
    ],
    extra:
      "Los días deben programarse con anticipación. Incluye lunch diario en el mar y tu certificación avalada internacionalmente.",
    featured: true,
  },
  {
    id: "paquete-cumpleanero",
    title: "Paquete cumpleañero",
    subtitle: "Para jóvenes de 10 a 14 años",
    level: "Principiante",
    levelTone: "coral",
    price: 2500,
    priceLabel: "$2,500 MXN",
    duration: "1 día · 8am–2pm",
    maxDepth: "Hasta 8 m",
    image: "/assets/gallery/IMG_9701.webp",
    video: "/assets/videos/packages/pkg-cumpleanero.mp4",
    description:
      "La aventura no tiene edad, tiene actitud. Diseñado para jóvenes de 10 a 14 años que buscan celebrar explorando el mundo submarino con respeto por la vida marina.",
    includes: [
      "1 Buceo (1 tanque) a máximo 8 metros",
      "1 Clase teórica básica y snorkel",
      "Instructora profesional privada (Carly)",
      "Equipo completo",
      "Fotografías / video con cartel de cumpleaños",
      "Bitácora, sticker y tarjeta cumpleañera",
      "Pastel con velita de buzo / buza",
      "Lunch (volován, fruta y agua)",
    ],
    extra:
      "Te citaré aproximadamente a las 8:00 am para tu clase teórica. Prepararemos equipo, haremos snorkel y luego el buceo con sorpresa de cumpleaños. Regreso aproximado 2:00 pm.",
  },
  {
    id: "open-water-alberca-mar",
    title: "Open Water Diver",
    subtitle: "Alberca + mar",
    level: "Principiante",
    levelTone: "teal",
    price: 9000,
    priceLabel: "$9,000 MXN",
    duration: "2 días alberca + mar",
    maxDepth: "Hasta 18 m",
    image: "/assets/gallery/IMG_1687.webp",
    video: "/assets/videos/packages/pkg-openwater-alberca.mp4",
    description:
      "Obtén tu certificación internacional paso a paso: comienza ganando confianza total en alberca antes de explorar los arrecifes de Veracruz hasta los 18 metros.",
    includes: [
      "Instructora profesional privada (Carly)",
      "5 Clases teóricas en línea (antes del buceo) y material de estudio",
      "2 Días de buceo en mar (Sistema Arrecifal Veracruzano) y 2 días en alberca",
      "Equipo completo",
      "¡Todas las fotografías y videos que pueda tomarte!",
      "Bitácora y sticker de regalo",
      "Lunch en los días de mar (volován, fruta y agua)",
      "Certificación internacional SNSI y trámites",
    ],
    extra:
      "Los días deben programarse con anticipación. Ideal si prefieres practicar tus primeros ejercicios en aguas confinadas antes de ir al arrecife.",
  },
];

export const POLICIES = [
  {
    id: "envios",
    title: "Envíos a todo México y entregas locales",
    summary: "Llevamos el mar hasta tu puerta o nos vemos en Veracruz.",
    items: [
      "Realizamos envíos seguros a toda la República Mexicana por paquetería con número de guía.",
      "Contamos con entregas locales sin costo de paquetería únicamente en Veracruz, Veracruz y Boca del Río (punto a convenir por WhatsApp).",
      "Al confeccionarse cada traje a tu medida, al confirmar tu pedido por WhatsApp te compartimos la fecha exacta de confección y envío.",
    ],
  },
  {
    id: "cambios",
    title: "Política de cambios y ajustes",
    summary: "Queremos que tu traje se sienta como una segunda piel.",
    items: [
      "Por higiene en prendas de baño y al ser confeccionados específicamente con tus medidas, no aplican devoluciones de efectivo.",
      "Si necesitas un ajuste menor en tirantes o contorno tras recibir tu prenda, contáctanos dentro de los primeros 5 días naturales con la prenda sin usar, limpia y con su protector higiénico para evaluar ajuste o cambio.",
      "Te recomendamos revisar nuestra guía interactiva de la sirena antes de enviar tus medidas; ante cualquier duda, Carly te asesora por WhatsApp.",
    ],
  },
  {
    id: "cuidados",
    title: "Guía de cuidados de la tela",
    summary: "Mantén los colores de tiburón ballena vibrantes por muchas inmersiones.",
    items: [
      "Enjuaga tu traje con agua dulce y fría inmediatamente después de salir del mar o alberca para retirar sal y cloro.",
      "Lava a mano con jabón neutro suave. No uses cloro, suavizantes ni lavadora.",
      "Seca a la sombra en posición horizontal; evita exprimir con fuerza o usar secadora.",
      "Evita rozarlo con superficies ásperas como bordes de alberca o roca volcánica para cuidar las fibras elásticas.",
    ],
  },
];

export const GALLERY_PHOTOS = [
  { src: "/assets/gallery/IMG_1689.webp", alt: "Tortuga marina y Carly buceando", objectPosition: "50% 50%" },
  { src: "/assets/products/galatea-2.webp", alt: "Carly al amanecer con tabla de paddle", objectPosition: "50% 35%" },
  { src: "/assets/gallery/IMG_1643.webp", alt: "Buceo en el Sistema Arrecifal Veracruzano", objectPosition: "50% 45%" },
  { src: "/assets/gallery/IMG_1680.webp", alt: "Pulpo en arrecife de Veracruz", objectPosition: "50% 50%" },
  { src: "/assets/products/calipso-2.webp", alt: "Paddle board en el mar con Calipso", objectPosition: "45% 80%" },
  { src: "/assets/gallery/P4170538.webp", alt: "Gusanos arbolito de Navidad en el arrecife", objectPosition: "50% 50%" },
  { src: "/assets/products/naia-3.webp", alt: "Aletas y bikini Naia al amanecer", objectPosition: "50% 65%" },
  { src: "/assets/gallery/IMG_7294.webp", alt: "Peces sargento bajo el sol", objectPosition: "50% 50%" },
  { src: "/assets/products/galatea-7.webp", alt: "En el mar con Galatea y diadema Nerea", objectPosition: "50% 55%" },
  { src: "/assets/gallery/IMG_1681.webp", alt: "Calamar en el mar azul", objectPosition: "50% 50%" },
  { src: "/assets/products/estela-2.webp", alt: "Espalda cruzada Estela en la playa", objectPosition: "50% 52%" },
  { src: "/assets/gallery/IMG_1687.webp", alt: "Anémona marina de Veracruz", objectPosition: "50% 50%" },
  { src: "/assets/products/altea-2.webp", alt: "Bikini Altea frente al mar", objectPosition: "50% 50%" },
  { src: "/assets/gallery/IMG_7310.webp", alt: "Pez mariposa sobre coral cerebro", objectPosition: "50% 50%" },
  { src: "/assets/products/nerea-1.webp", alt: "Diadema Nerea en la tabla sobre el agua", objectPosition: "50% 42%" },
  { src: "/assets/gallery/IMG_1684.webp", alt: "Gusano plumero en el arrecife", objectPosition: "50% 50%" },
  { src: "/assets/products/naia-1.webp", alt: "Paddle en el océano", objectPosition: "50% 50%" },
  { src: "/assets/gallery/IMG_9701.webp", alt: "Coral cuerno de alce", objectPosition: "50% 50%" },
  { src: "/assets/products/calipso-3.webp", alt: "Carly con tabla de paddle en la orilla", objectPosition: "50% 62%" },
  { src: "/assets/gallery/IMG_1683.webp", alt: "Zoántidos marinos del arrecife", objectPosition: "50% 50%" },
  { src: "/assets/products/nerea-2.webp", alt: "Carly en el agua con diadema de tiburón ballena", objectPosition: "50% 35%" },
  { src: "/assets/gallery/IMG_1688.webp", alt: "Morena verde del arrecife", objectPosition: "50% 50%" },
  { src: "/assets/products/galatea-5.webp", alt: "Traje Galatea azul marino junto al mar", objectPosition: "50% 52%" },
  { src: "/assets/gallery/P4150335.webp", alt: "Jardín de corales de Veracruz", objectPosition: "50% 50%" },
];

export function formatMXN(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}
