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
  badge?: string;
  badgeType?: 'discount' | 'new' | 'hot' | 'unspecified';
}

interface CardProductButtonProps {
  product: Product;
  onClick?: () => void;
  className?: string;
}

const CardProductButton: React.FC<CardProductButtonProps> = ({ product, onClick, className }) => {
  return (
    // Igualado a CardProducts: Quitamos 'border', 'hover:shadow', usamos 'rounded-none' y 'p-4'
    <div
      className={`relative group bg-white rounded-none p-4 transition-all duration-300 flex flex-col h-full cursor-pointer ${className || ""}`}
      onClick={onClick}
    >
      {/* ── BADGES (Superior Izquierda) ── */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${product.badgeType === 'discount'
            ? 'bg-[#42bc0d] text-white'
            : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}>
            {product.badge}
          </span>
        </div>
      )}

      {/* ── BOTÓN AÑADIR AL CARRITO (Superior Derecha) ── */}
      <button
        className="absolute top-3 right-3 z-20 bg-[#42BC0D] text-white p-2.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-[#38a00b]"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(`Añadido al carrito: ${product.id}`);
        }}
        aria-label="Añadir al carrito"
      >
        <ShoppingCart size={18} />
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

        {/* Título: Cambiado a line-clamp-2 y min-height para mantener alineación */}
        <h3 className="font-bold text-[#313131] text-[13px] leading-snug mb-3 line-clamp-2 min-h-[38px]">
          {product.title}
        </h3>

        {/* ── ZONA INFERIOR: PRECIOS ── */}
        <div className="mt-auto flex flex-col gap-3">
          {/* Contenedor de Precios */}
          <div className="flex flex-col">
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


        {/* ── BOTÓN FIJO AÑADIR AL CARRITO ── */}
        <button
          className="w-full bg-[#42BC0D] hover:bg-[#38a00b] text-white py-2.5 rounded-md text-[13px] font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
          onClick={(e) => {
            e.preventDefault();
            console.log(`Añadido al carrito desde botón: ${product.id}`);
          }}
        >
          <ShoppingCart size={16} />
          Agregar
        </button>
      </div>
    </div>
  );
};

export default CardProductButton;
