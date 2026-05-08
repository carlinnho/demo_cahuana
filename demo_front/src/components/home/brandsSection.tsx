import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const brands = [
  {
    name: "Sony",
    image: "https://1000marcas.net/wp-content/uploads/2020/01/logo-Sony.png",
  },
  {
    name: "HP",
    image:
      "https://www.pngplay.com/wp-content/uploads/9/HP-Logo-Background-PNG-Image.png",
  },
  {
    name: "Dell",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png",
  },
  {
    name: "Asus",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/asus-6630-logo-png-transparent.png",
  },
  {
    name: "Lenovo",
    image:
      "https://static.vecteezy.com/system/resources/previews/020/927/282/non_2x/lenovo-logo-brand-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg",
  },
];

const BrandsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full my-12 md:my-16">
      {/* ── CABECERA CON TÍTULO Y LINK A CATÁLOGO ── */}
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-[24px] md:text-[28px] font-black text-[#313131] tracking-tight">
          Nuestras Marcas
        </h2>

        <Link
          to="/catalogo"
          // Mantenemos el link en verde porque es un CTA (Call to Action)
          className="group flex items-center gap-1.5 text-[#42BC0D] font-bold text-[14px] hover:text-[#38a00b] transition-colors"
        >
          Ver más marcas
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* ── GRID DE MARCAS (5 Columnas) ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 justify-center">
        {brands.map((brand) => (
          <Link key={brand.name} to="/catalogo" className="group block">
            {/* Contenedor: Cambiamos sombra y borde a colores neutros (gray) */}
            <div className="relative w-full aspect-3/2 bg-white rounded-2xl flex flex-col items-center justify-between p-4 transition-all duration-300 border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] group-hover:border-gray-300 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Contenedor del Logo (Mantiene el zoom y aumento de opacidad) */}
              <div className="flex-1 w-full flex items-center justify-center min-h-0 mb-2">
                <img
                  src={brand.image}
                  alt={`Logo de ${brand.name}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-multiply"
                />
              </div>

              {/* Nombre de la Marca: Quitamos el hover verde */}
              <span className="text-[12px] font-bold text-[#313131] transition-colors leading-none">
                {brand.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
