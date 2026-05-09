import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importamos la imagen desde tus assets
import banner1 from "../../assets/banner1.png";

// Simulamos los 4 banners reciclando la misma imagen
const slides = [
  {
    id: 1,
    image: banner1,
    alt: "Lleva tu laptop al siguiente nivel - Oferta 1",
  },
  {
    id: 2,
    image: banner1,
    alt: "Lleva tu laptop al siguiente nivel - Oferta 2",
  },
  {
    id: 3,
    image: banner1,
    alt: "Lleva tu laptop al siguiente nivel - Oferta 3",
  },
  {
    id: 4,
    image: banner1,
    alt: "Lleva tu laptop al siguiente nivel - Oferta 4",
  },
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica de Autoplay (Cambia cada 5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    // Limpiamos el intervalo si el componente se desmonta
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    // Altura responsiva: más baja en móviles, más alta en desktop
    <div className="relative w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] bg-gray-100 overflow-hidden group">
      {/* ── EFECTO DE DESVANECIMIENTO LATERAL ── */}
      {/* Este contenedor crea el degradado de máscara para el efecto de desvanecimiento */}
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        {/* Contenedor de las imágenes con animación de desvanecimiento (Crossfade) */}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* ── CONTROLES: Flecha Izquierda ── */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white text-[#313131] p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-md"
        aria-label="Banner anterior"
      >
        <ChevronLeft size={24} />
      </button>

      {/* ── CONTROLES: Flecha Derecha ── */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white text-[#313131] p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-md"
        aria-label="Siguiente banner"
      >
        <ChevronRight size={24} />
      </button>

      {/* ── INDICADORES (Puntitos inferiores) ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
              index === currentIndex
                ? "bg-[#42BC0D] w-8" // El punto activo se alarga y se pinta del verde Cahuana
                : "bg-white/70 hover:bg-white w-2.5"
            }`}
            aria-label={`Ir al banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
