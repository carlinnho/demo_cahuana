import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  ShoppingBag,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Truck,
  Lock,
  ShieldCheck,
  Zap,
  Headphones,
  Monitor,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

import logoCahuana from "../assets/logocahuana.png";
import CategoriaMenu from "./CategoriaMenu";
import Carrito from "./carrito";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const cartCount = 3;

  const mobileCategories = [
    {
      name: "Repuestos",
      icon: <Zap size={17} />,
      items: ["Baterías", "Pantallas", "Cargadores", "Teclados"],
    },
    {
      name: "Accesorios",
      icon: <Headphones size={17} />,
      items: ["Teclados", "Parlantes", "Auriculares"],
    },
    {
      name: "Vehículos",
      icon: <Monitor size={17} />,
      items: ["Motos", "Autos", "Bicicletas"],
    },
  ];

  return (
    <header className="w-full font-sans border-b border-gray-100">
      {/* ── BARRA SUPERIOR INFO (solo desktop lg+) ── */}
      <div className="bg-[#F4F6FB] text-[#313131] text-[12px] font-normal py-1.5 px-4 hidden lg:flex justify-between items-center border-b border-gray-200">
        <div className="flex gap-5">
          <span className="flex items-center gap-1.5">
            <Truck size={14} /> Envíos a Todo el Perú
          </span>
          <span className="flex items-center gap-1.5">
            <Lock size={14} /> Compra 100% segura
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} /> Garantía de 6 meses
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <a href="#" className="hover:text-[#42BC0D] transition-colors">
            <FaFacebook size={14} />
          </a>
          <a href="#" className="hover:text-[#42BC0D] transition-colors">
            <FaInstagram size={14} />
          </a>
          <a href="#" className="hover:text-[#42BC0D] transition-colors">
            <FaTiktok size={14} />
          </a>
        </div>
      </div>

      {/* ── CONTENEDOR STICKY ── */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
        {/* ════ BARRA MOBILE + TABLET (< lg): [☰]  [LOGO]  [🔍] ════ */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-gray-100 relative">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-[#313131] hover:text-[#42BC0D] transition-colors p-1"
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>

          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={logoCahuana}
              alt="Cahuana Logo"
              className="h-7 object-contain"
            />
          </a>

          <button
            onClick={() => setIsMobileSearchOpen((v) => !v)}
            className="text-[#313131] hover:text-[#42BC0D] transition-colors p-1"
            aria-label="Buscar"
          >
            <Search size={22} />
          </button>
        </div>

        {/* Buscador expandible (mobile + tablet) */}
        {isMobileSearchOpen && (
          <div className="lg:hidden px-4 pb-3 pt-1 border-b border-gray-100">
            <div className="relative">
              <input
                autoFocus
                type="text"
                placeholder="Buscar productos, marcas y más..."
                className="w-full border border-gray-300 rounded-full py-2.5 px-4 pr-10 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#42BC0D] placeholder:text-gray-400"
              />
              <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={17}
              />
            </div>
          </div>
        )}

        {/* ════ BARRA DESKTOP (≥ lg) FIX OVERLAP ════ */}
        <div className="hidden lg:flex py-4 px-4 xl:px-8 items-center justify-between gap-4 xl:gap-8 max-w-[1600px] mx-auto">
          {/* IZQUIERDA: Uso de shrink-0 para evitar que el input lo aplaste */}
          <div className="flex items-center gap-4 xl:gap-6 shrink-0">
            <a href="/" className="shrink-0">
              <img
                src={logoCahuana}
                alt="Cahuana Logo"
                className="h-9 xl:h-10 object-contain"
              />
            </a>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-2 bg-[#42BC0D] text-white hover:bg-[#38a00b] px-4 py-2.5 rounded-md font-bold text-[14px] transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              <Menu size={18} />
              Categorías
            </button>
            <CategoriaMenu
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            />
          </div>

          {/* CENTRO: Buscador ocupa el espacio sobrante con flex-1 */}
          <div className="flex-1 flex justify-center max-w-3xl px-2 xl:px-4">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Buscar productos, marcas y más..."
                className="w-full border border-gray-300 rounded-full py-2.5 px-5 pr-12 text-[14px] font-medium text-[#313131] focus:outline-none focus:ring-1 focus:ring-[#42BC0D] focus:border-transparent placeholder:text-gray-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#42BC0D] transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* DERECHA: Acciones (shrink-0 para que mantenga su tamaño) */}
          <div className="flex items-center gap-4 xl:gap-6 text-[#313131] shrink-0 justify-end">
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#42BC0D] transition-colors">
              <User size={22} className="text-black" />
              <div className="flex flex-col text-[12px] leading-tight">
                <span>Iniciar</span>
                <span className="font-bold">Sesión</span>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-200" />

            <div className="flex items-center gap-2 cursor-pointer hover:text-[#42BC0D] transition-colors">
              <ShoppingBag size={22} className="text-black" />
              <div className="flex flex-col text-[12px] leading-tight">
                <span>Mis</span>
                <span className="font-bold">Compras</span>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-200" />

            <div
              onClick={() => setIsCartOpen(true)}
              className="relative cursor-pointer hover:text-[#42BC0D] transition-colors"
            >
              <ShoppingCart size={26} className="text-black" />
              <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            </div>
          </div>
        </div>

        {/* ── NAVBAR VERDE (solo desktop lg+) ── */}
        <nav className="bg-[#42BC0D] text-white overflow-x-auto whitespace-nowrap scrollbar-hide hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8 py-1 text-[14px] font-medium">
            {[
              { name: "Repuestos", hasDropdown: true },
              { name: "Accesorios", hasDropdown: true },
              { name: "Vehículos", hasDropdown: true },
              { name: "Servicios de Importacion", hasDropdown: false },
              { name: "Ventas Corporativas", hasDropdown: false },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center gap-1 hover:bg-black/10 px-3 py-1.5 rounded-md transition-all group"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    size={15}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* ════ PANEL LATERAL MOBILE + TABLET CON FRAMER MOTION ════ */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 bg-black/50 z-60"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Panel deslizante desde la izquierda */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden fixed top-0 left-0 h-full w-[85%] max-w-[360px] bg-white z-70 shadow-2xl flex flex-col overflow-y-auto"
              >
                {/* Cabecera */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-[#F4F6FB] sticky top-0 z-10">
                  <img
                    src={logoCahuana}
                    alt="Cahuana Logo"
                    className="h-7 object-contain"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 rounded-md hover:bg-white transition-colors text-gray-500 hover:text-[#313131] border border-transparent hover:border-gray-200"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* 2 botones: Sesión + Carrito */}
                <div className="px-4 py-3 flex gap-3 border-b border-gray-100">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#42BC0D] text-white rounded-lg py-2.5 text-[13px] font-semibold hover:bg-[#38a00b] transition-colors"
                  >
                    <User size={17} /> Iniciar Sesión
                  </a>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-[#42BC0D] text-[#42BC0D] rounded-lg py-2.5 text-[13px] font-semibold hover:bg-[#F0FDE8] transition-colors relative"
                  >
                    <ShoppingCart size={17} />
                    Mi Carrito
                    {cartCount > 0 && (
                      <span className="absolute top-1.5 right-6 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* Categorías con acordeón */}
                <div className="flex-1 py-2">
                  <p className="px-4 py-2 text-[11px] font-black text-gray-400 uppercase tracking-wider">
                    Categorías
                  </p>

                  {mobileCategories.map((cat) => (
                    <div key={cat.name}>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#F4F6FB] transition-colors"
                        onClick={() =>
                          setOpenCategory(
                            openCategory === cat.name ? null : cat.name,
                          )
                        }
                      >
                        <span className="flex items-center gap-3 text-[15px] font-semibold text-[#313131]">
                          <span className="text-[#42BC0D]">{cat.icon}</span>
                          {cat.name}
                        </span>
                        <ChevronDown
                          size={17}
                          className={`text-gray-400 transition-transform duration-200 ${
                            openCategory === cat.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openCategory === cat.name && (
                        <div className="bg-[#F9FAFB] py-1">
                          {cat.items.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="flex items-center gap-2 px-10 py-2.5 text-[14px] text-gray-600 hover:text-[#42BC0D] transition-colors"
                            >
                              <ChevronRight
                                size={13}
                                className="text-gray-300"
                              />
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Resto de nav */}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-[15px] font-medium text-[#313131] hover:bg-[#F4F6FB] hover:text-[#42BC0D] transition-colors"
                    >
                      Servicios de Importación
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-[15px] font-semibold text-[#42BC0D] hover:bg-[#F4F6FB] transition-colors"
                    >
                      Ventas Corporativas
                    </a>
                  </div>
                </div>

                {/* Footer: info + redes */}
                <div className="border-t border-gray-100 p-4 bg-[#F4F6FB]">
                  <div className="flex flex-col gap-2 text-[12px] text-gray-500 mb-3">
                    <span className="flex items-center gap-2">
                      <Truck size={13} /> Envíos a Todo el Perú
                    </span>
                    <span className="flex items-center gap-2">
                      <Lock size={13} /> Compra 100% segura
                    </span>
                    <span className="flex items-center gap-2">
                      <ShieldCheck size={13} /> Garantía de 6 meses
                    </span>
                  </div>
                  <div className="flex gap-4 pt-1">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#42BC0D] transition-colors"
                    >
                      <FaFacebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#42BC0D] transition-colors"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#42BC0D] transition-colors"
                    >
                      <FaTiktok size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <Carrito isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
