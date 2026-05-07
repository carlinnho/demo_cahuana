import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import CompatibilitySelector from "../components/home/CompatibilitySelector";
import CategoryHighlights from "../components/home/CategoryHighlights";
import ProductCarousel from "../components/home/ProductCarousel";
import PromoTripleBanners from "../components/home/PromoTripleBanners";
import SolutionsBanners from "../components/home/SolutionsBanners";
import B2BCta from "../components/home/B2BCta";
import BrandsSection from "../components/home/brandsSection";
import Testimonials from "../components/home/Testimonials";

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-[#F4F6FB]">
      {/* 1. Hero Principal */}
      <HeroSlider />

      {/* 2. Selector de Compatibilidad (Superpuesto) */}
      {/* El -mt-16 tira el contenedor hacia arriba para superponerlo, y z-20 lo pone por encima del Hero */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 -mt-8">
        <CompatibilitySelector />
      </div>

      <div className="flex flex-col gap-16 pb-20 pt-12">
        {/* 3. Conoce lo que tenemos para ti */}
        <CategoryHighlights />

        {/* 4. Productos Más Vendidos */}
        <ProductCarousel title="Productos Más Vendidos" />

        {/* 5. 3 Banners Promocionales */}
        <PromoTripleBanners />

        {/* 6. Repuestos para tu computadora */}
        <ProductCarousel title="Repuestos para tu Computadora" />

        {/* 7. Accesorios */}
        <ProductCarousel title="Accesorios Imprescindibles" />

        {/* 8. Soluciones Cahuana */}
        <SolutionsBanners />

        {/* 9. CTA Ventas Corporativas */}
        <B2BCta />

        {/* 10. Marcas (Pendiente a definir el nuevo diseño) */}
        <BrandsSection />

        {/* 11. Testimonios */}
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
