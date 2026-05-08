import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  MonitorSmartphone,
  Settings2,
  Wrench,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  value: string;
  label: string;
}

const marcas: Option[] = [
  { value: "hp", label: "HP" },
  { value: "lenovo", label: "Lenovo" },
  { value: "asus", label: "Asus" },
  { value: "apple", label: "Apple" },
];

const modelos: Option[] = [
  { value: "pavilion", label: "Pavilion" },
  { value: "thinkpad", label: "ThinkPad" },
  { value: "vivobook", label: "VivoBook" },
  { value: "macbook", label: "MacBook Pro" },
];

const repuestos: Option[] = [
  { value: "bateria", label: "Batería" },
  { value: "teclado", label: "Teclado" },
  { value: "pantalla", label: "Pantalla" },
  { value: "cargador", label: "Cargador" },
];

const CompatibilitySelector: React.FC = () => {
  // Estados para guardar los valores seleccionados
  const [marca, setMarca] = useState<Option | null>(null);
  const [modelo, setModelo] = useState<Option | null>(null);
  const [repuesto, setRepuesto] = useState<Option | null>(null);

  // Estado para controlar qué dropdown está abierto
  const [openDropdown, setOpenDropdown] = useState<
    "marca" | "modelo" | "repuesto" | null
  >(null);

  // Ref para cerrar al hacer clic afuera
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown: "marca" | "modelo" | "repuesto") => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // --- Componente interno para reciclar el diseño del Select ---
  const CustomSelect = ({
    icon: Icon,
    placeholder,
    options,
    value,
    setValue,
    isOpen,
    onToggle,
  }: {
    icon: any;
    placeholder: string;
    options: Option[];
    value: Option | null;
    setValue: (val: Option) => void;
    isOpen: boolean;
    onToggle: () => void;
  }) => (
    <div className="relative flex-1 w-full">
      {/* Botón Píldora del Select */}
      <button
        type="button"
        onClick={onToggle}
        className={`w-full bg-white border ${
          isOpen ? "border-[#42BC0D] ring-1 ring-[#42BC0D]" : "border-gray-200"
        } hover:border-[#42BC0D] text-[#313131] text-[14px] font-medium rounded-full py-2.5 pl-10 pr-4 outline-none transition-all shadow-sm flex items-center justify-between group`}
      >
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#42BC0D] transition-colors">
          <Icon size={18} className={isOpen ? "text-[#42BC0D]" : ""} />
        </div>
        <span className={value ? "text-[#313131]" : "text-gray-500"}>
          {value ? value.label : placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#42BC0D]" : ""
          }`}
        />
      </button>

      {/* Menú Desplegable Animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50 py-2"
          >
            <ul className="max-h-60 overflow-y-auto scrollbar-hide">
              {options.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    onClick={() => {
                      setValue(option);
                      setOpenDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2.5 text-[14px] hover:bg-[#F4F6FB] hover:text-[#42BC0D] transition-colors flex items-center justify-between"
                  >
                    <span>{option.label}</span>
                    {value?.value === option.value && (
                      <Check size={16} className="text-[#42BC0D]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    // Contenedor Píldora
    <div
      ref={containerRef}
      className="bg-white rounded-2xl lg:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2.5 flex flex-col lg:flex-row items-center gap-3 border border-gray-100 w-full"
    >
      <CustomSelect
        icon={MonitorSmartphone}
        placeholder="Elige la Marca"
        options={marcas}
        value={marca}
        setValue={setMarca}
        isOpen={openDropdown === "marca"}
        onToggle={() => toggleDropdown("marca")}
      />

      {/* Separador Desktop */}
      <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

      <CustomSelect
        icon={Settings2}
        placeholder="Elige el Modelo"
        options={modelos}
        value={modelo}
        setValue={setModelo}
        isOpen={openDropdown === "modelo"}
        onToggle={() => toggleDropdown("modelo")}
      />

      {/* Separador Desktop */}
      <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

      <CustomSelect
        icon={Wrench}
        placeholder="Tipo de Repuesto"
        options={repuestos}
        value={repuesto}
        setValue={setRepuesto}
        isOpen={openDropdown === "repuesto"}
        onToggle={() => toggleDropdown("repuesto")}
      />

      {/* ── Botón Buscar Píldora ── */}
      <button
        className="w-full lg:w-auto bg-[#42BC0D] hover:bg-[#38a00b] text-white font-bold text-[14px] py-2.5 px-8 rounded-full transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 shrink-0"
        onClick={() => {
          console.log("Buscando...", { marca, modelo, repuesto });
        }}
      >
        <Search size={18} />
        <span>Buscar</span>
      </button>
    </div>
  );
};

export default CompatibilitySelector;
