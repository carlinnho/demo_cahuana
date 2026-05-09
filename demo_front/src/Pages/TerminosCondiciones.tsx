import React from "react";
import {
  Building2,
  CreditCard,
  FileCheck2,
  Gavel,
  Headphones,
  LockKeyhole,
  Package,
  ShieldCheck,
  Truck,
  UserRoundCheck,
  ArrowUpRight,
  ExternalLink
} from "lucide-react";

// --- COMPONENTES AUXILIARES ---

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#42BC0D]/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#42BC0D] border border-[#42BC0D]/20">
    {children}
  </span>
);

const sections = [
  {
    title: "Aceptación de Términos",
    icon: FileCheck2,
    items: [
      "El uso de esta plataforma implica la aceptación total de los presentes Términos y Condiciones.",
      "Cahuana SAC se reserva el derecho de actualizar estos términos en cualquier momento para mejorar el servicio.",
    ],
  },
  {
    title: "Registro y Usuario",
    icon: UserRoundCheck,
    items: [
      "El usuario debe proporcionar datos verídicos y ser mayor de edad legalmente.",
      "La confidencialidad de las credenciales de acceso es responsabilidad exclusiva del titular.",
    ],
  },
  {
    title: "Productos y Stock",
    icon: Package,
    items: [
      "Descripciones detalladas y precios claros. El stock está sujeto a variaciones en tiempo real.",
      "Pueden aplicarse restricciones de venta por volumen según la política comercial vigente.",
    ],
  },
  {
    title: "Pagos y Seguridad",
    icon: CreditCard,
    items: [
      "Transacciones en Soles (S/.) o Dólares (USD). Métodos: Tarjetas, Transferencias y Billeteras.",
      "Protocolos SSL activos para garantizar la integridad de su información financiera.",
    ],
  },
  {
    title: "Envíos y Logística",
    icon: Truck,
    items: [
      "Despachos locales y nacionales. Tiempos estimados calculados según zona geográfica.",
      "Costos de envío transparentes, indicados antes de la confirmación final de su orden.",
    ],
  },
  {
    title: "Protección de Datos",
    icon: LockKeyhole,
    items: [
      "Cumplimiento estricto de la Ley N° 29733 de Protección de Datos Personales en Perú.",
      "Uso exclusivo de datos para fines comerciales, soporte y promociones autorizadas.",
    ],
  },
  {
    title: "Propiedad Intelectual",
    icon: ShieldCheck,
    items: [
      "Todo el contenido visual y textual es propiedad intelectual exclusiva de Cahuana SAC.",
      "Queda prohibida la reproducción parcial o total sin autorización escrita previa.",
    ],
  },
  {
    title: "Legislación y Conflictos",
    icon: Gavel,
    items: [
      "Marco legal regido por la legislación peruana vigente.",
      "Resolución de controversias mediante conciliación o ante instancias judiciales de Lima.",
    ],
  },
];

const TerminosCondiciones: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] text-[#313131] font-sans selection:bg-[#42BC0D] selection:text-white">
      
      {/* 1. HERO SECTION TECNOLÓGICO */}
      <section className="relative h-[400px] w-full overflow-hidden bg-[#0A0A0B] border-t-[6px] border-[#42BC0D]">
        {/* Patrón de fondo (Dots) */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #42BC0D 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0B]/80" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-[2px] w-8 bg-[#42BC0D]" />
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#42BC0D]">
              Legal & Compliance
            </span>
          </div>
          <h1 className="text-5xl font-black leading-[1.1] text-white sm:text-6xl md:text-8xl tracking-tighter italic uppercase">
            Términos y <br />
            <span className="text-[#42BC0D]">Condiciones</span>
          </h1>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 -mt-20 relative z-10">
        
        {/* TARJETA DE INFORMACIÓN COMERCIAL */}
        <section className="mb-16 rounded-[2.5rem] border border-gray-200 bg-white p-8 md:p-12 shadow-2xl shadow-gray-200/50">
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 bg-[#42BC0D] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#42BC0D]/30">
                <Building2 size={28} />
              </div>
              <div>
                <TechBadge>Identidad Legal</TechBadge>
                <h2 className="text-3xl font-black text-black uppercase italic tracking-tight mt-1">Datos del Comercio</h2>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Última actualización</p>
              <p className="text-sm font-black text-black">Mayo 2026</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Razón Social", val: "Cahuana Sociedad Anónima" },
              { label: "RUC", val: "20478121513" },
              { label: "Dirección", val: "Av. Garcilazo de la Vega 1251 Int. 315" },
              { label: "Teléfono", val: "932 325 797" },
              { label: "Email Oficial", val: "ditec@cahuana.pe" },
              { label: "Soporte", val: "922 045 827" },
            ].map((info, i) => (
              <div key={i} className="group p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#42BC0D]/40 transition-all duration-300">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-[#42BC0D] transition-colors">{info.label}</p>
                <p className="text-sm font-black text-black">{info.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CUADRÍCULA DE CLÁUSULAS */}
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section 
                key={idx} 
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Icon size={120} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 bg-gray-50 text-[#42BC0D] rounded-xl flex items-center justify-center group-hover:bg-[#42BC0D] group-hover:text-white transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-black text-xl text-black leading-tight uppercase italic">{section.title}</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start group/item">
                        <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#42BC0D] shadow-[0_0_8px_#42BC0D]" />
                        <p className="text-sm font-medium text-gray-600 leading-relaxed group-hover/item:text-black transition-colors italic">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        {/* BANNER DE CONTACTO FINAL */}
        <section className="mt-20 bg-black p-12 md:p-20 rounded-[4rem] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Headphones size={250} />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
                ¿Dudas sobre <br />nuestras <span className="text-[#42BC0D]">Políticas?</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Nuestro equipo está listo para asistirte en cualquier consulta legal o técnica sobre tu experiencia en Cahuana SAC.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 font-mono text-sm">
                <div className="flex items-center gap-2 text-[#42BC0D]">
                  <ExternalLink size={18} /> 
                  <span className="font-black uppercase tracking-widest">Soporte 24/7 vía Web</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto bg-[#42BC0D] p-10 rounded-[3rem] text-black">
              <h3 className="text-2xl font-black uppercase italic mb-2">Contacto Directo</h3>
              <p className="text-sm font-bold opacity-80 mb-8">Resolución de reclamos y soporte técnico especializado.</p>
              
              <div className="space-y-4">
                <a href="mailto:ditec@cahuana.pe" className="flex items-center justify-between bg-black text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-xl">
                  Enviar Correo <ArrowUpRight size={18} />
                </a>
                <div className="text-center pt-2">
                  <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">Atención Lun-Sáb</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};

export default TerminosCondiciones;