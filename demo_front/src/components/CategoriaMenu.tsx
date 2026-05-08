import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Monitor, Headphones, Zap } from "lucide-react";

interface CategoriaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoriaMenu: React.FC<CategoriaMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-60"
          />

          {/* Contenedor del Menú Lateral */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-[85%] max-w-[400px] bg-white z-70 shadow-2xl flex flex-col font-sans text-[#313131]"
          >
            {/* Cabecera del Menú */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-[#F4F6FB]">
              <h2 className="text-[22px] font-bold text-[#313131]">
                Categorías
              </h2>
              <button
                onClick={onClose}
                className="p-1 rounded-md hover:bg-white transition-colors text-gray-500 hover:text-[#313131] shadow-sm border border-transparent hover:border-gray-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Contenido del Menú */}
            <div className="flex-1 overflow-y-auto py-4">
              {/* Sección: Repuestos */}
              <div className="mb-6 px-5">
                <h3 className="text-[13px] font-black text-gray-400 uppercase tracking-wider mb-3">
                  Repuestos
                </h3>
                <ul className="space-y-1">
                  {["Baterías", "Pantallas", "Cargadores", "Teclados"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#F4F6FB] hover:text-[#42BC0D] transition-colors text-[15px] font-medium group"
                        >
                          <span className="flex items-center gap-3">
                            <Zap
                              size={18}
                              className="text-gray-400 group-hover:text-[#42BC0D] transition-colors"
                            />
                            {item}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-gray-300 group-hover:text-[#42BC0D] transition-colors"
                          />
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="w-full h-px bg-gray-100 my-4"></div>

              {/* Sección: Accesorios */}
              <div className="mb-6 px-5">
                <h3 className="text-[13px] font-black text-gray-400 uppercase tracking-wider mb-3">
                  Accesorios
                </h3>
                <ul className="space-y-1">
                  {["Teclados", "Parlantes", "Auriculares"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#F4F6FB] hover:text-[#42BC0D] transition-colors text-[15px] font-medium group"
                      >
                        <span className="flex items-center gap-3">
                          <Headphones
                            size={18}
                            className="text-gray-400 group-hover:text-[#42BC0D] transition-colors"
                          />
                          {item}
                        </span>
                        <ChevronRight
                          size={16}
                          className="text-gray-300 group-hover:text-[#42BC0D] transition-colors"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-gray-100 my-4"></div>

              {/* Sección: Marcas */}
              <div className="mb-6 px-5">
                <h3 className="text-[13px] font-black text-gray-400 uppercase tracking-wider mb-3">
                  Marcas
                </h3>
                <ul className="space-y-1">
                  {["Apple", "Samsung", "HP", "Lenovo", "Asus", "Logitech"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#F4F6FB] hover:text-[#42BC0D] transition-colors text-[15px] font-medium group"
                        >
                          <span className="flex items-center gap-3">
                            <Monitor
                              size={18}
                              className="text-gray-400 group-hover:text-[#42BC0D] transition-colors"
                            />
                            {item}
                          </span>
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CategoriaMenu;
