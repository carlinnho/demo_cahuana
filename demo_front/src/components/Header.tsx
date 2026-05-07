import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Music2, // Para TikTok
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* SECCIÓN 1: SUPERIOR (Pequeña - Info & Social) */}
      <div className="bg-[#f3f4f6] text-[11px] py-1 px-4 hidden md:flex justify-between items-center border-b border-gray-200">
        <div className="flex gap-4 text-gray-600">
          <span className="flex items-center gap-1">
            🚚 Envíos a Todo el Perú
          </span>
          <span className="flex items-center gap-1">🔒 Compra 100% segura</span>
          <span className="flex items-center gap-1">
            🛡️ Garantía de 6 meses
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <a href="#" className="hover:text-green-600 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="hover:text-green-600 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" className="hover:text-green-600 transition-colors">
            <Music2 size={14} />
          </a>
        </div>
      </div>

      {/* SECCIÓN 2: MEDIO (Logo, Search, Actions) */}
      <div className="bg-white py-4 px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tighter flex items-center">
            <span className="text-green-600 mr-1">●</span>CAHUANA
          </h1>
        </div>

        {/* Buscador - Desktop */}
        <div className="hidden md:flex flex-1 max-w-2xl relative">
          <input
            type="text"
            placeholder="Buscar producto"
            className="w-full border border-gray-300 rounded-full py-2 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600">
            <Search size={20} />
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4 md:gap-8 text-gray-700">
          <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors">
            <User size={24} />
            <div className="flex flex-col text-xs font-semibold leading-tight">
              <span>Iniciar</span>
              <span>Sesion</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors text-xs font-semibold leading-tight">
            <ShoppingBag size={24} />
            <div className="flex flex-col">
              <span>Mis</span>
              <span>Compras</span>
            </div>
          </div>

          <div className="relative cursor-pointer bg-black text-white p-2 rounded-lg">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              0
            </span>
          </div>

          {/* Menú Hamburguesa - Mobile */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* SECCIÓN 3: BANNER DE NAVEGACIÓN (Verde) */}
      <nav className="bg-green-500 text-white overflow-x-auto whitespace-nowrap scrollbar-hide hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8 py-3 font-medium text-sm">
          {[
            "Repuestos",
            "Accesorios",
            "Vehículos",
            "Servicios de Importacion",
            "Ventas Corporativas",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center gap-1 hover:bg-green-600 px-3 py-1 rounded transition-colors group"
            >
              {item}{" "}
              <ChevronDown
                size={14}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
          ))}
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full z-50 animate-in slide-in-from-top duration-300">
          <div className="p-4 flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar producto..."
                className="w-full border border-gray-200 rounded-lg py-2 px-4"
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            <div className="flex flex-col gap-3 font-medium">
              <a href="#" className="py-2 border-b border-gray-50">
                Repuestos
              </a>
              <a href="#" className="py-2 border-b border-gray-50">
                Accesorios
              </a>
              <a href="#" className="py-2 border-b border-gray-50">
                Vehículos
              </a>
              <a href="#" className="py-2 border-b border-gray-50">
                Servicios
              </a>
              <a href="#" className="py-2 text-green-600">
                Ventas Corporativas
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
