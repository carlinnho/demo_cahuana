


export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductInclude {
  item: string;
  iconName: string; // Store name to avoid circular/heavy deps in pure data
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  rating: number;
  reviewsCount: number;
  price: string;
  oldPrice: string;
  discount: string;
  badge?: string;
  badgeType?: 'discount' | 'new' | 'hot' | 'unspecified';
  stock: number;
  mainImage: string;
  thumbnails: string[];
  specs: ProductSpec[];
  includes: ProductInclude[];
  description: {
    title: string;
    content: string;
    features: { title: string; desc: string; iconName: string }[];
    image: string;
    badgeValue: string;
    badgeLabel: string;
  };
  highlights: { title: string; desc: string; iconName: string }[];
  relatedProductIds: string[];
  deliveryInfo?: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "ventilador-portatil-k60a",
    name: "Ventilador portátil K60A con motor brushless, batería 5000 y carga rápida Type-C",
    brand: "TOPK",
    rating: 5,
    reviewsCount: 128,
    price: "48.30",
    oldPrice: "56.90",
    discount: "-15%",
    badge: "-15%",
    badgeType: "discount",
    stock: 15,
    mainImage: "https://images.unsplash.com/photo-1544244015-0cd4b3ff36ff?w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1544244015-0cd4b3ff36ff?w=200&q=80",
      "https://images.unsplash.com/photo-1544244015-0cd4b3ff36ff?w=200&q=80",
      "https://images.unsplash.com/photo-1544244015-0cd4b3ff36ff?w=200&q=80",
      "https://images.unsplash.com/photo-1544244015-0cd4b3ff36ff?w=200&q=80"
    ],
    specs: [
      { label: "Modelo", value: "K60A" },
      { label: "Tipo de motor", value: "Brushless (sin escobillas)" },
      { label: "Batería", value: "Litio 5000mAh recargable" },
      { label: "Autonomía", value: "Hasta 12 horas (según velocidad)" },
      { label: "Tiempo de carga", value: "Aprox. 3.5 horas" },
      { label: "Puerto de carga", value: "USB Type-C" },
      { label: "Niveles de velocidad", value: "3" },
      { label: "Rotación", value: "360°" },
      { label: "Material", value: "ABS resistente" },
      { label: "Dimensiones", value: "15 x 6.4 x 6.7 cm" },
      { label: "Peso", value: "Aprox. 280 g" }
    ],
    includes: [
      { item: "1x Ventilador K60A", iconName: "Package" },
      { item: "1x Cable USB Type-C", iconName: "Zap" },
      { item: "1x Base / soporte", iconName: "Move" },
      { item: "1x Manual de usuario", iconName: "Package" }
    ],
    description: {
      title: "Potencia, silencio y frescura donde quieras",
      content: "El ventilador portátil K60A combina un motor brushless de última generación con una batería de alta capacidad para brindarte una experiencia de uso superior. Ideal para escritorio, oficina, auto, viajes, camping y más.",
      features: [
        { title: "3 niveles de velocidad", desc: "Ajusta el flujo de aire", iconName: "Wind" },
        { title: "Rotación 360°", desc: "Dirige el aire a donde quieras", iconName: "Smartphone" },
        { title: "Diseño compacto", desc: "Ligero y fácil de transportar", iconName: "Move" },
        { title: "Base ajustable", desc: "Se adapta a múltiples superficies", iconName: "Package" }
      ],
      image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80",
      badgeValue: "12h",
      badgeLabel: "Autonomía"
    },
    highlights: [
      { title: "Batería 5000mAh", desc: "Hasta 12h de uso continuo", iconName: "Battery" },
      { title: "Motor brushless silencioso", desc: "Más potencia, menos ruido", iconName: "Wind" },
      { title: "Carga rápida Type-C", desc: "100% en aprox. 3.5 horas", iconName: "Zap" },
      { title: "Portátil y resistente", desc: "Ideal para todo lugar", iconName: "Move" }
    ],
    relatedProductIds: ["7", "8", "9", "10", "11"],
    deliveryInfo: "Llega mañana"
  },
  {
    id: "7",
    slug: "audifonos-bluetooth-h650e",
    name: "Audífonos Bluetooth H650e con micrófono incorporado",
    brand: "Logitech",
    rating: 5,
    reviewsCount: 128,
    price: "109.00",
    oldPrice: "129.00",
    discount: "-15%",
    badge: "-15%",
    badgeType: "discount",
    stock: 25,
    mainImage: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1", "8", "9"],
    deliveryInfo: "Llega mañana"
  },
  {
    id: "8",
    slug: "redmi-buds-5",
    name: "Audífonos Redmi Buds 5 Inalámbricos con cancelación de ruido",
    brand: "Xiaomi",
    rating: 5,
    reviewsCount: 96,
    price: "159.00",
    oldPrice: "",
    discount: "",
    badge: "Nuevo",
    badgeType: "new",
    stock: 40,
    mainImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1", "7", "9"],
    deliveryInfo: "Llega mañana"
  },
  {
    id: "9",
    slug: "wave-buds-2",
    name: "Audífonos Bluetooth Wave Buds 2 Pure Bass",
    brand: "JBL",
    rating: 4,
    reviewsCount: 75,
    price: "199.00",
    oldPrice: "249.00",
    discount: "-20%",
    badge: "-20%",
    badgeType: "discount",
    stock: 15,
    mainImage: "https://images.unsplash.com/photo-1606220588913-b3aec4ce5423?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1", "7", "8"],
    deliveryInfo: "Envío gratis"
  },
  {
    id: "10",
    slug: "mouse-m350-silent",
    name: "Mouse Inalámbrico M350 Silent Moderno y Estilizado",
    brand: "Logitech",
    rating: 4,
    reviewsCount: 54,
    price: "79.00",
    oldPrice: "89.00",
    discount: "-10%",
    badge: "-10%",
    badgeType: "discount",
    stock: 60,
    mainImage: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1", "15"],
    deliveryInfo: "Llega mañana"
  },
  {
    id: "11",
    slug: "ergostand-iv",
    name: "Base Refrigerante Notepal ErgoStand IV para Laptop",
    brand: "Cooler Master",
    rating: 4,
    reviewsCount: 32,
    price: "149.00",
    oldPrice: "199.00",
    discount: "-25%",
    badge: "-25%",
    badgeType: "discount",
    stock: 12,
    mainImage: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1", "14"],
    deliveryInfo: "Envío gratis"
  },
  {
    id: "12",
    slug: "hp-executive-bag",
    name: "Bolso para laptop 15.6\" Executive Series",
    brand: "HP",
    rating: 5,
    reviewsCount: 18,
    price: "89.00",
    oldPrice: "",
    discount: "",
    badge: "Nuevo",
    badgeType: "new",
    stock: 10,
    mainImage: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1"],
    deliveryInfo: "Llega mañana"
  },
  {
    id: "13",
    slug: "hub-ugreen-7in1",
    name: "Hub USB-C 7 en 1 Multifunción 4K HDMI",
    brand: "UGREEN",
    rating: 5,
    reviewsCount: 64,
    price: "144.00",
    oldPrice: "169.00",
    discount: "-15%",
    badge: "-15%",
    badgeType: "discount",
    stock: 22,
    mainImage: "https://images.unsplash.com/photo-1592844002373-a55e2e4e1a0b?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1"],
    deliveryInfo: "Envío gratis"
  },
  {
    id: "14",
    slug: "baseus-laptop-stand",
    name: "Soporte Plegable para Laptop Ajustable de Aluminio",
    brand: "Baseus",
    rating: 4,
    reviewsCount: 22,
    price: "69.00",
    oldPrice: "",
    discount: "",
    badge: "Nuevo",
    badgeType: "new",
    stock: 35,
    mainImage: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1", "11"],
    deliveryInfo: "Llega mañana"
  },
  {
    id: "15",
    slug: "redragon-k552",
    name: "Teclado Mecánico Redragon K552 RGB Kumara",
    brand: "Redragon",
    rating: 5,
    reviewsCount: 142,
    price: "159.00",
    oldPrice: "199.00",
    discount: "-20%",
    badge: "-20%",
    badgeType: "discount",
    stock: 28,
    mainImage: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1", "10"],
    deliveryInfo: "Envío gratis"
  },
  {
    id: "16",
    slug: "anker-powercore-10k",
    name: "Power Bank 10000mAh PowerCore Essential Slim",
    brand: "Anker",
    rating: 5,
    reviewsCount: 86,
    price: "89.00",
    oldPrice: "",
    discount: "",
    badge: "Nuevo",
    badgeType: "new",
    stock: 55,
    mainImage: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
    thumbnails: [],
    specs: [],
    includes: [],
    description: { title: "", content: "", features: [], image: "", badgeValue: "", badgeLabel: "" },
    highlights: [],
    relatedProductIds: ["1"],
    deliveryInfo: "Llega mañana"
  }
];
