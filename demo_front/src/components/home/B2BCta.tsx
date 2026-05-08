import React from "react";
import { ArrowRight } from "lucide-react";

const B2BCta: React.FC = () => {
  return (
    // Redujimos los márgenes verticales exteriores (my-10 md:my-12)
    <section className="w-full max-w-7xl mx-auto px-4 my-10 md:my-12">
      {/* ── CONTENEDOR FLOTANTE ── */}
      {/* Redujimos el padding vertical interno (py-10 md:py-12) para quitar altura innecesaria */}
      <div className="relative bg-linear-to-br from-[#313131] via-[#222222] to-[#111111] overflow-hidden py-10 md:py-12 rounded-[32px] shadow-2xl">
        {/* ── FONDOS DECORATIVOS (GLOW EFECT) ── */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#42BC0D] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] bg-[#42BC0D] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none"></div>

        {/* ── CONTENIDO PRINCIPAL ── */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          {/* Título un poco más compacto (text-[36px]) y con menos margen inferior (mb-4) */}
          <h2 className="text-[26px] md:text-[36px] font-black text-white mb-4 tracking-tight leading-tight">
            ¿Deseas realizar{" "}
            <span className="text-[#42BC0D]">Compras al Por Mayor</span> para tu
            negocio?
          </h2>

          {/* Menos margen inferior en el texto (mb-7) */}
          <p className="text-gray-300 text-[15px] md:text-[16px] mb-7 max-w-2xl font-medium leading-relaxed">
            Estamos listos para abastecerte. Cotiza tus compras al por mayor con
            nosotros y descubre los beneficios exclusivos al comunicarte con un
            asesor especializado.
          </p>

          {/* Botón ajustado proporcionalmente (py-3.5) */}
          <button
            className="bg-[#42BC0D] hover:bg-[#38a00b] text-white px-8 py-3.5 rounded-full font-bold text-[15px] transition-all duration-300 shadow-[0_4px_20px_rgba(66,188,13,0.3)] hover:shadow-[0_8px_30px_rgba(66,188,13,0.5)] flex items-center gap-2.5 hover:-translate-y-1"
            onClick={() =>
              console.log("Abriendo modal o redirigiendo a WhatsApp...")
            }
          >
            Saber más información
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default B2BCta;
