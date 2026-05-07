import React from "react";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string | number;
  brand: string;
  title: string;
  oldPrice?: number;
  price: number;
  discount?: string;
  imageMain: string;
  imageHover?: string;
}

interface CardProductsProps {
  product: Product;
}

const CardProducts: React.FC<CardProductsProps> = ({ product }) => {
  return (
    // Quitamos 'border', 'border-gray-200' y cambiamos a 'rounded-none'
    <div className="relative group bg-white rounded-none p-4 transition-all duration-300 flex flex-col h-full cursor-pointer">
      {/* ── BOTÓN AÑADIR AL CARRITO ── */}
      <button
        className="absolute top-2.5 right-2.5 z-20 bg-[#42BC0D] text-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-[#38a00b]"
        onClick={(e) => {
          e.preventDefault();
          console.log(`Añadido al carrito: ${product.id}`);
        }}
        aria-label="Añadir al carrito"
      >
        <ShoppingCart size={16} />
      </button>

      {/* ── CONTENEDOR DE IMAGEN ── */}
      <div className="relative w-full aspect-square mb-3 overflow-hidden bg-white flex items-center justify-center rounded-md">
        <img
          src={product.imageMain}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* ── INFORMACIÓN DEL PRODUCTO ── */}
      <div className="flex flex-col grow">
        {/* Marca */}
        <span className="text-gray-500 text-[12px] font-normal mb-1">
          {product.brand}
        </span>

        {/* Título */}
        <h3 className="font-bold text-[#313131] text-[13px] leading-snug mb-3 line-clamp-2 min-h-[38px]">
          {product.title}
        </h3>

        {/* ── PRECIOS ── */}
        <div className="mt-auto flex flex-col">
          {product.oldPrice && (
            <span className="text-gray-600 line-through text-[12px] mb-0.5">
              S/{product.oldPrice.toFixed(2)}
            </span>
          )}

          <div className="flex items-baseline gap-1.5">
            <span className="text-[#42BC0D] font-bold text-[20px]">
              S/{product.price.toFixed(2)}
            </span>
            {product.discount && (
              <span className="text-[#42BC0D] text-[11px] font-medium uppercase">
                {product.discount} DSCTO
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
