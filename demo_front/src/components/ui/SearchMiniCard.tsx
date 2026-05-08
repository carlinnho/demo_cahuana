import React from "react";
import { Link } from "react-router-dom";

export interface MiniProduct {
  id: string | number;
  title: string;
  price: number;
  discount?: string;
  image: string;
}

interface SearchMiniCardProps {
  product: MiniProduct;
}

const SearchMiniCard: React.FC<SearchMiniCardProps> = ({ product }) => {
  return (
    <Link
      to={`/producto/${product.id}`}
      className="flex flex-col border border-gray-200 rounded-md p-2 hover:border-gray-300 hover:shadow-sm transition-all bg-white group cursor-pointer"
    >
      {/* ── CONTENEDOR DE IMAGEN ── */}
      {/* CAMBIO: Quitamos 'aspect-square' y usamos 'h-20' (80px) para forzar un tamaño pequeño */}
      <div className="w-full h-20 mb-2 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Información del producto */}
      <div className="flex flex-col">
        {/* Título: Tamaño 12px, truncado a 2 líneas */}
        <h4 className="text-[12px] text-[#313131] leading-tight line-clamp-2 mb-1.5 min-h-[28px]">
          {product.title}
        </h4>

        {/* Fila de Precios */}
        <div className="flex items-center gap-1.5">
          {/* Precio principal en 12px */}
          <span className="text-[12px] font-medium text-[#313131]">
            S/{product.price.toFixed(2)}
          </span>

          {/* Descuento en 10px, solo texto verde sin fondo */}
          {product.discount && (
            <span className="text-[10px] text-[#42BC0D]">
              {product.discount} DSCTO
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SearchMiniCard;
