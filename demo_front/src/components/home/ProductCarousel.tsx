import React, { useRef, useState, useEffect } from "react";
import CardProducts, { type Product } from "../ui/CardProducts";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  title: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    brand: "Sony",
    title:
      "TECLADO PARA SONY SVE14 SVE141 SVE1411 SVE1412 SVE1413 ESP E-B S/N EXT",
    oldPrice: 85.0,
    price: 75.22,
    discount: "13%",
    imageMain: "https://placehold.co/300x300/f8fafc/313131?text=Teclado+Sony",
  },
  {
    id: 2,
    brand: "Lenovo",
    title: "BATERÍA ORIGINAL LENOVO THINKPAD T470 T480 SERIES 61+ 6 CELDAS",
    oldPrice: 150.0,
    price: 120.0,
    discount: "20%",
    imageMain: "https://placehold.co/300x300/f8fafc/313131?text=Bateria+Lenovo",
  },
  {
    id: 3,
    brand: "HP",
    title: "CARGADOR ORIGINAL HP TIPO C 65W PUNTA AZUL PROBOOK ELITEBOOK",
    price: 95.0,
    imageMain: "https://placehold.co/300x300/f8fafc/313131?text=Cargador+HP",
  },
  {
    id: 4,
    brand: "Asus",
    title: "PANTALLA LED 15.6 SLIM 30 PINES FHD IPS BORDES DELGADOS",
    oldPrice: 280.0,
    price: 250.0,
    discount: "10%",
    imageMain: "https://placehold.co/300x300/f8fafc/313131?text=Pantalla+Asus",
  },
  {
    id: 5,
    brand: "Apple",
    title: "CARGADOR MACBOOK MAGSAFE 2 85W ORIGINAL A1424",
    price: 180.0,
    imageMain: "https://placehold.co/300x300/f8fafc/313131?text=Cargador+Mac",
  },
  {
    id: 6,
    brand: "Logitech",
    title: "MOUSE INALÁMBRICO LOGITECH M170 NEGRO CONEXIÓN USB",
    oldPrice: 45.0,
    price: 35.0,
    discount: "22%",
    imageMain: "https://placehold.co/300x300/f8fafc/313131?text=Mouse+Logitech",
  },
];

const ProductCarousel: React.FC<Props> = ({ title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 224 * 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 w-full relative">
      {/* Cabecera del Carrusel */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[24px] font-black text-[#313131] tracking-tight">
          {title}
        </h2>
        <a
          href="#"
          className="text-[#42BC0D] font-bold text-[14px] hover:underline hidden sm:block"
        >
          Ver todos
        </a>
      </div>

      {/* ── BOTONES DE NAVEGACIÓN ── */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute left-0 top-[60%] -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 text-[#313131] p-2 rounded-full transition-all duration-300 z-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:text-[#42BC0D] hover:border-[#42BC0D]"
          aria-label="Mover a la izquierda"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute right-0 top-[60%] -translate-y-1/2 translate-x-4 bg-white border border-gray-200 text-[#313131] p-2 rounded-full transition-all duration-300 z-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:text-[#42BC0D] hover:border-[#42BC0D]"
          aria-label="Mover a la derecha"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* ── CONTENEDOR UNIFICADO DEL CARRUSEL ── */}
      {/* Aquí aplicamos el borde global, el redondeado y 'divide-x' */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory divide-x divide-gray-200"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
            div::-webkit-scrollbar { display: none; }
          `,
            }}
          />

          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] max-w-[200px] lg:min-w-[224px] lg:max-w-[224px] snap-start"
            >
              <CardProducts product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
