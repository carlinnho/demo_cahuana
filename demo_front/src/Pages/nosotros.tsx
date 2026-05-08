import React from 'react';
import { 
  Package, 
  Wrench, 
  Rocket, 
  Eye, 
  CheckCircle2, 
  Zap, 
  Award
} from 'lucide-react';

const Nosotros: React.FC = () => {
  return (
    <div className="font-sans text-[#313131] bg-[#F4F6FB] min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[300px] flex items-center justify-center">
        {/* Fondo oscuro con imagen de servidores/almacén */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-[#313131]/80"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Nosotros
          </h1>
          <p className="text-white text-sm font-bold tracking-widest uppercase">
            Inicio <span className="mx-2 font-normal">/</span> <span className="text-[#42BC0D]">Nosotros</span>
          </p>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: Información de la Empresa */}
          <div className="lg:col-span-7">
            <p className="text-[#42BC0D] font-bold text-xs tracking-widest uppercase mb-4">
              Liderazgo Tecnológico
            </p>
            <h2 className="text-4xl font-black text-[#313131] mb-6">
              Somos Cahuana
            </h2>
            
            <div className="text-[#313131]/80 space-y-5 mb-10 text-base leading-relaxed">
              <p>
                Con más de 16 años de trayectoria ininterrumpida en el mercado tecnológico peruano, <strong className="text-[#313131]">Cahuana S.A.C.</strong> se ha consolidado como el socio estratégico indiscutible para empresas y usuarios exigentes en búsqueda de hardware de alto rendimiento.
              </p>
              <p>
                Nuestra especialización en repuestos exclusivos para laptops y servidores nos permite ofrecer una precisión técnica sin precedentes. No solo vendemos componentes; entregamos soluciones de ingeniería respaldadas por un equipo de expertos dedicados al soporte post-venta y la asesoría técnica personalizada.
              </p>
            </div>

            {/* Tarjetas de Beneficios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="text-[#42BC0D] mt-1 shrink-0">
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#313131] mb-1">Venta al por mayor</h4>
                  <p className="text-[#313131]/70 text-sm leading-relaxed">Distribución nacional para centros técnicos y retailers.</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="text-[#42BC0D] mt-1 shrink-0">
                  <Wrench size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#313131] mb-1">Soporte Certificado</h4>
                  <p className="text-[#313131]/70 text-sm leading-relaxed">Laboratorio especializado en diagnóstico de hardware.</p>
                </div>
              </div>
            </div>

            {/* Imagen ilustrativa */}
            <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Técnico de Cahuana trabajando" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjeta de Misión, Visión y Pilares */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
              
              <span className="inline-block bg-[#1A5319] text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider mb-8">
                COMPROMISO CAHUANA
              </span>

              {/* Misión */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="text-[#42BC0D]" size={24} />
                  <h3 className="text-xl font-bold text-[#313131]">Misión</h3>
                </div>
                <p className="text-[#313131]/70 italic leading-relaxed text-sm">
                  Impulsar la productividad tecnológica en el Perú proveyendo repuestos originales y soporte de clase mundial con la mayor eficiencia del mercado.
                </p>
              </div>

              {/* Visión */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="text-[#42BC0D]" size={24} />
                  <h3 className="text-xl font-bold text-[#313131]">Visión</h3>
                </div>
                <p className="text-[#313131]/70 leading-relaxed text-sm">
                  Ser la referencia nacional en suministro de hardware, reconocidos por nuestra integridad, innovación logística y servicio al cliente excepcional para el 2026.
                </p>
              </div>

              <div className="w-full h-px bg-gray-100 mb-8"></div>

              {/* Pilares */}
              <div className="mb-10">
                <h4 className="text-sm font-bold text-[#313131]/50 tracking-widest uppercase mb-5">
                  Nuestros Pilares
                </h4>
                <div className="space-y-3">
                  <div className="bg-[#F4F6FB] px-5 py-4 rounded-xl flex items-center justify-between">
                    <span className="font-bold text-[#313131] text-sm">Sinceridad Técnica</span>
                    <CheckCircle2 size={20} className="text-[#42BC0D]" />
                  </div>
                  <div className="bg-[#F4F6FB] px-5 py-4 rounded-xl flex items-center justify-between">
                    <span className="font-bold text-[#313131] text-sm">Respuesta Rápida</span>
                    <Zap size={20} className="text-[#42BC0D]" />
                  </div>
                  <div className="bg-[#F4F6FB] px-5 py-4 rounded-xl flex items-center justify-between">
                    <span className="font-bold text-[#313131] text-sm">Calidad Certificada</span>
                    <Award size={20} className="text-[#42BC0D]" />
                  </div>
                </div>
              </div>

              {/* Botón */}
              <button className="w-full bg-[#313131] text-white font-bold text-sm tracking-widest uppercase py-5 rounded-xl hover:bg-[#42BC0D] transition-colors duration-300 shadow-md">
                Habla con un especialista
              </button>
              
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN DE ESTADÍSTICAS */}
      <section className="bg-[#42BC0D]/10 py-16 border-t border-[#42BC0D]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#313131] mb-2">+16</p>
              <p className="text-[#313131]/60 text-xs font-bold tracking-widest uppercase">Años de Experiencia</p>
            </div>
            
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#313131] mb-2">5k</p>
              <p className="text-[#313131]/60 text-xs font-bold tracking-widest uppercase">Clientes Satisfechos</p>
            </div>
            
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#313131] mb-2">12k+</p>
              <p className="text-[#313131]/60 text-xs font-bold tracking-widest uppercase">Productos en Stock</p>
            </div>
            
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#313131] mb-2">24h</p>
              <p className="text-[#313131]/60 text-xs font-bold tracking-widest uppercase">Soporte Activo</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;