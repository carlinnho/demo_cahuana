import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SearchMiniCard, { type MiniProduct } from "./ui/SearchMiniCard";

const BuscadorHeader: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const mockSearchResults: MiniProduct[] = [
    {
      id: 1,
      title: "Cargador Original HP Tipo C 65W",
      price: 95,
      image: "https://placehold.co/100x100/ffffff/313131?text=HP",
    },
    {
      id: 2,
      title: "Cargador Macbook Magsafe 2 85W",
      price: 180,
      discount: "10%",
      image: "https://placehold.co/100x100/ffffff/313131?text=Mac",
    },
    {
      id: 3,
      title: "Cargador Lenovo 20V 3.25A Punta Cuadrada",
      price: 65,
      discount: "15%",
      image: "https://placehold.co/100x100/ffffff/313131?text=Lenovo",
    },
    {
      id: 4,
      title: "Cargador Asus 19V 3.42A",
      price: 70,
      image: "https://placehold.co/100x100/ffffff/313131?text=Asus",
    },
  ];

  return (
    <>
      {/* ── OVERLAY INVISIBLE PARA CERRAR EL BUSCADOR ── */}
      {isSearchFocused && (
        <div
          className="fixed inset-0 z-45 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setIsSearchFocused(false)}
        />
      )}

      {/* ── CONTENEDOR PRINCIPAL DEL BUSCADOR ── */}
      <div
        className={`w-full relative transition-all ${
          isSearchFocused ? "z-60" : "z-10"
        }`}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          placeholder="Buscar productos, marcas y más..."
          className={`w-full border py-2.5 px-5 text-[14px] font-medium text-[#313131] focus:outline-none transition-all ${
            isSearchFocused
              ? "border-[#42BC0D] rounded-t-xl rounded-b-none shadow-[0_0_15px_rgba(66,188,13,0.1)]"
              : "border-gray-300 rounded-full hover:border-gray-400"
          } placeholder:text-gray-400 bg-white`}
        />

        {/* Botón de limpiar o buscar */}
        {searchQuery ? (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-[22px] -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-white pl-2"
          >
            <X size={18} />
          </button>
        ) : (
          <button className="absolute right-4 top-[22px] -translate-y-1/2 text-gray-500 hover:text-[#42BC0D] bg-white pl-2">
            <Search size={18} />
          </button>
        )}

        {/* ── MENÚ DESPLEGABLE DE RESULTADOS ── */}
        <AnimatePresence>
          {isSearchFocused && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border border-[#42BC0D] border-t-0 rounded-b-xl shadow-2xl overflow-hidden flex"
            >
              {searchQuery.trim().length > 0 ? (
                /* VISTA 1: ESCRIBIENDO BÚSQUEDA */
                <>
                  {/* Cambiamos fondo a bg-white puro */}
                  <div className="w-1/3 border-r border-gray-100 p-4 bg-white">
                    <h4 className="text-[12px] font-bold text-gray-400 uppercase mb-3">
                      Sugerencias
                    </h4>
                    <ul className="flex flex-col gap-1">
                      {[
                        "Cargador Asus",
                        "Cargador Lenovo",
                        "Cargador HP",
                        "Cargador Original",
                        "Cargador Universal",
                      ].map((sug, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            // Quitamos el hover verde y añadimos hover:bg-gray-100
                            className="text-[14px] font-medium text-[#313131] flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <Search size={14} className="text-gray-400" />
                            <span>
                              <b>Cargador</b> {sug.replace("Cargador ", "")}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-2/3 p-4 flex flex-col bg-white">
                    <h4 className="text-[12px] font-bold text-gray-400 uppercase mb-3">
                      Productos para "{searchQuery}"
                    </h4>

                    {/* Grilla de 3 columnas */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {/* Usamos slice(0,3) para mostrar solo 3 cards como pediste */}
                      {mockSearchResults.slice(0, 3).map((prod) => (
                        <SearchMiniCard key={prod.id} product={prod} />
                      ))}
                    </div>

                    <Link
                      to={`/catalogo?q=${searchQuery}`}
                      onClick={() => setIsSearchFocused(false)}
                      className="mt-auto text-center text-[12px] text-[#313131] hover:underline pt-3 border-t border-gray-100"
                    >
                      Ver todos los resultados
                    </Link>
                  </div>
                </>
              ) : (
                /* VISTA 2: SIN ESCRIBIR (Términos más buscados) */
                <div className="w-full p-4">
                  <h4 className="text-[12px] font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                    <TrendingUp size={15} /> Lo más buscado
                  </h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {[
                      "Laptop gamer",
                      "Laptop i5",
                      "Memoria RAM",
                      "Disco duro",
                      "Audífonos Bluetooth",
                      "Case PC",
                    ].map((term, i) => (
                      <a
                        key={i}
                        href="#"
                        // Quitamos los hovers verdes de esta vista también y usamos bg-gray-100
                        className="flex items-center justify-between py-2.5 px-3 text-[14px] text-[#313131] hover:bg-gray-100 rounded-md group transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <Search size={16} className="text-gray-400" /> {term}
                        </span>
                        <ArrowUpRight size={16} className="text-gray-300" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default BuscadorHeader;
