import React from "react";
import {
  AlertTriangle,
  BatteryCharging,
  CheckCircle2,
  FileText,
  PackageCheck,
  ShieldCheck,
  Truck,
  ChevronRight,
  Info,
  Coins,
  ArrowUpRight
} from "lucide-react";
import heroFallback from "../assets/imagen-tienda.png";

// --- COMPONENTES AUXILIARES ---

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#42BC0D]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#42BC0D] border border-[#42BC0D]/20">
    {children}
  </span>
);

const BulletList = ({ items, dark = false }: { items: string[]; dark?: boolean }) => (
  <ul className="space-y-3 text-sm leading-relaxed">
    {items.map((item, idx) => (
      <li key={idx} className="flex gap-3 items-start group">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#42BC0D] shadow-[0_0_8px_#42BC0D]" />
        <span className={`${dark ? 'text-slate-400 group-hover:text-white' : 'text-gray-600 group-hover:text-black'} transition-colors`}>
          {item}
        </span>
      </li>
    ))}
  </ul>
);

const PoliticaCambiosDevoluciones: React.FC = () => {
  const handleHeroError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = heroFallback;
  };

  return (
    <div className="bg-[#F8FAFC] text-[#313131] font-sans selection:bg-[#42BC0D] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[400px] w-full overflow-hidden bg-[#1a1a1a] sm:h-[500px] border-t-[6px] border-[#42BC0D]">
        <img
          src="/imagen-tienda.png"
          alt="Cahuana SAC Tienda"
          onError={handleHeroError}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-[2px] w-8 bg-[#42BC0D]" />
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#42BC0D]">
              Cahuana SAC
            </span>
          </div>

          <h1 className="text-6xl font-black leading-[1.1] text-white sm:text-7xl md:text-8xl tracking-tight">
            Políticas y <br />
            <span className="text-[#42BC0D]">Recomendaciones</span>
          </h1>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 -mt-10 relative z-10">

        {/* INTRODUCCIÓN Y ACCESO RÁPIDO */}
        <div className="mb-24 grid gap-8 lg:grid-cols-12">
          <section className="lg:col-span-7 flex flex-col justify-center rounded-[2.5rem] border border-gray-200 bg-white p-12 shadow-xl shadow-gray-200/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-5 transition-opacity">
               <ShieldCheck size={180} />
            </div>
            
            <h2 className="mb-8 text-3xl font-black text-black italic flex items-center gap-3">
              <div className="h-8 w-2 bg-[#42BC0D] rounded-full" />
              Introducción
            </h2>
            
            <p className="mb-6 text-base leading-relaxed text-gray-600">
              Esta política establece las condiciones para cambios y devoluciones de productos adquiridos a través de nuestra tienda online en <span className="font-black text-black">CAHUANA SAC</span>.
            </p>
            
            <p className="text-sm leading-relaxed text-gray-500 italic border-l-2 border-gray-100 pl-4">
              Garantizamos la transparencia y el respaldo técnico en cada una de sus adquisiciones.
            </p>
          </section>

          <div className="lg:col-span-5 grid gap-4">
            <div className="bg-[#42BC0D] p-10 rounded-[2.5rem] text-white shadow-2xl shadow-[#42BC0D]/30 group hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <FileText size={32} strokeWidth={2.5} />
                <ArrowUpRight size={24} className="opacity-50 group-hover:opacity-100" />
              </div>
              <h3 className="font-black text-2xl mb-2 tracking-tight">Formulario Oficial</h3>
              <p className="text-sm mb-8 opacity-90 font-medium leading-snug">Registro obligatorio para procesar cualquier RMA.</p>
              <a href="https://forms.gle/iMNQerc56KnpVnZGA" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-black px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-zinc-900 transition-colors shadow-lg">
                Abrir Formulario <ChevronRight size={16} />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-gray-200 flex items-center gap-5">
              <div className="h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#42BC0D]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Soporte Técnico</p>
                <p className="text-sm font-black text-black">ditec@cahuana.pe / 922 045 827</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN 1: GESTIÓN DE RETORNOS */}
        <section className="mb-32">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <TechBadge>Logistics & Returns</TechBadge>
              <h2 className="text-4xl font-black text-black mt-2 tracking-tighter italic uppercase">Gestión de Retornos</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: PackageCheck, title: "Condiciones", items: ["Empaque original intacto.", "Sin trazas de soldadura.", "Sellos de garantía íntegros."] },
              { icon: Coins, title: "Reembolsos", items: ["Efectivo o saldo a favor.", "Cambio por igual valor.", "Sujeto a peritaje técnico."] },
              { icon: Truck, title: "Costos de Envío", items: ["Falla fábrica: Cahuana SAC.", "Error cliente: Usuario final.", "Tiempos según ubicación."] }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="h-14 w-14 bg-gray-50 text-[#42BC0D] rounded-2xl flex items-center justify-center mb-8">
                  <card.icon size={28} />
                </div>
                <h3 className="font-black text-xl mb-6 text-black">{card.title}</h3>
                <BulletList items={card.items} />
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 2: POLÍTICA DE GARANTÍAS */}
        <section className="mb-32 bg-[#0A0A0B] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-12 bg-zinc-900/50 border-r border-white/5">
              <h2 className="text-4xl font-black text-white mb-8 tracking-tighter italic uppercase">Garantía<br/><span className="text-[#42BC0D]">Hardware</span></h2>
              <div className="p-6 bg-black/50 rounded-2xl border border-[#42BC0D]/30">
                <p className="text-[10px] font-black uppercase text-[#42BC0D] mb-3 tracking-widest">Matriz de Tiempos</p>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between"><span className="text-slate-400">Placas, RAM</span><span className="text-white font-mono">12 MESES</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Cargadores</span><span className="text-white font-mono">06 MESES</span></div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 p-12 lg:p-16 grid sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="font-black text-white text-lg flex items-center gap-3 uppercase tracking-tighter italic">
                  <Info size={20} className="text-[#42BC0D]" /> Requisitos
                </h4>
                <BulletList dark items={["Ticket de venta.", "Cubre solo fallas de fábrica.", "Embalaje con sello frágil."] } />
              </div>
              <div className="space-y-6">
                <h4 className="font-black text-white text-lg flex items-center gap-3 uppercase tracking-tighter italic">
                  <AlertTriangle size={20} className="text-[#42BC0D]" /> Restricciones
                </h4>
                <BulletList dark items={["Stock agotado: Nota de crédito.", "Vigencia nota: 30 días.", "Manipulación anula garantía."] } />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: BATERÍAS Y PRECAUCIONES ACTUALIZADAS */}
        <section id="bateria" className="bg-[#42BC0D] p-12 md:p-20 rounded-[4rem] text-black shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20">
            {/* Protocolo de Energía */}
            <div className="space-y-10">
              <div className="flex items-center gap-5">
                <div className="h-16 w-16 bg-black text-[#42BC0D] rounded-[2rem] flex items-center justify-center shadow-2xl">
                  <BatteryCharging size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-[0.9]">Power<br/>Protocol</h2>
              </div>
              
              <div className="grid gap-3">
                {[
                  "Optimización térmica: 5°C - 25°C.",
                  "Almacenaje: Carga al 80% cada 90 días.",
                  "Calibración de ciclo completo (Bimensual).",
                  "Prevención de descarga crítica.",
                  "Retiro preventivo tras 24 meses."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center bg-black/5 p-5 rounded-[1.5rem] border border-black/5">
                    <CheckCircle2 size={20} className="shrink-0" />
                    <p className="text-sm font-black italic tracking-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Precauciones (Versión Actualizada: Círculos y sin //) */}
            <div className="bg-black p-12 rounded-[3.5rem] text-white shadow-2xl relative group">
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Aviso Crítico</div>
              
              <h3 className="text-3xl font-black mb-12 flex items-center gap-4 text-[#42BC0D] italic uppercase tracking-tighter">
                <AlertTriangle size={30} /> Precauciones
              </h3>
              
              <div className="space-y-8">
                {[
                  "No extraiga la unidad durante los procesos de carga activa.",
                  "Prohibido contacto con agentes líquidos o ígneos.",
                  "Fin de vida útil: 18 meses o 300 ciclos registrados.",
                  "Remoción obligatoria si se usa cargador permanente.",
                  "Proteger contra impactos mecánicos y manipulación infantil."
                ].map((text, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    {/* Número encerrado en círculo */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#42BC0D] flex items-center justify-center text-[#42BC0D] font-black text-sm">
                      {i + 1}
                    </div>
                    {/* Texto limpio sin // */}
                    <p className="text-sm font-medium text-slate-200 leading-relaxed pt-1">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};

export default PoliticaCambiosDevoluciones;