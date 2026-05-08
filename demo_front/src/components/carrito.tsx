import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom"; // <-- Importamos Link

interface CarritoProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockCartItems = [
  {
    id: 1,
    brand: "Sony",
    title:
      "TECLADO PARA SONY SVE14 SVE141 SVE1411 SVE1412 SVE1413 ESP E-B S/N EXT",
    oldPrice: 58.0,
    price: 48.0,
    qty: 1,
  },
  {
    id: 2,
    brand: "Asus",
    title: "BATERÍA ORIGINAL ASUS VIVOBOOK X540 X540L X540LA X540S 3 CELDAS",
    oldPrice: 120.0,
    price: 95.0,
    qty: 2,
  },
  {
    id: 3,
    brand: "Logitech",
    title: "MOUSE INALÁMBRICO LOGITECH M170 NEGRO CONEXIÓN USB",
    oldPrice: 45.0,
    price: 35.0,
    qty: 1,
  },
];

const Carrito: React.FC<CarritoProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-60"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-70 shadow-2xl flex flex-col font-sans text-[#313131]"
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-[#F4F6FB]">
              <h2 className="text-[22px] font-bold text-[#313131]">
                Mi Carrito
              </h2>
              <button
                onClick={onClose}
                className="p-1 rounded-md hover:bg-white transition-colors text-gray-500 hover:text-[#313131] shadow-sm border border-transparent hover:border-gray-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {mockCartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border-b border-gray-100 flex gap-4 relative hover:bg-gray-50 transition-colors group"
                >
                  <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                  <div className="w-20 h-20 bg-gray-100 border border-gray-200 rounded-md shrink-0 flex items-center justify-center overflow-hidden">
                    <span className="text-[10px] text-gray-400 font-medium">
                      IMG
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="pr-6">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        {item.brand}
                      </span>
                      <h3 className="text-[13px] font-bold leading-snug mt-0.5 text-[#313131] line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-end justify-between mt-3">
                      <div className="flex flex-col">
                        <span className="text-[11px] text-gray-400 line-through leading-none mb-1">
                          S/ {item.oldPrice.toFixed(2)}
                        </span>
                        <span className="text-[16px] font-black text-[#42BC0D] leading-none">
                          S/ {item.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center border border-gray-200 rounded-md bg-white">
                        <button className="px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-[#42BC0D] transition-colors rounded-l-md">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-[13px] font-medium text-[#313131]">
                          {item.qty}
                        </span>
                        <button className="px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-[#42BC0D] transition-colors rounded-r-md">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white border-t border-gray-200 mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-center text-[14px] text-gray-500 mb-2">
                <span>Subtotal:</span>
                <span className="font-medium text-[#313131]">S/ 324.00</span>
              </div>
              <div className="flex justify-between items-center text-[14px] text-gray-500 mb-4">
                <span>Descuentos:</span>
                <span className="font-medium text-[#42BC0D]">- S/ 0.00</span>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[18px] font-bold text-[#313131]">
                  Total:
                </span>
                <span className="text-[22px] font-black text-[#313131]">
                  S/ 324.00
                </span>
              </div>

              {/* ── AQUÍ CONECTAMOS AL CHECKOUT ── */}
              <Link
                to="/checkout"
                onClick={onClose} // Cierra el carrito al cambiar de página
                className="w-full bg-[#42BC0D] hover:bg-[#38a00b] text-white font-bold py-3.5 rounded-md text-[15px] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Finalizar Compra
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Carrito;
