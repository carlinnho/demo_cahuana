import React from 'react';
import { Headset, MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const Contacto: React.FC = () => {
  return (
    <div className="font-sans text-[#313131] bg-[#F4F6FB] min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[300px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-[#111111]/80"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-white/70 text-sm font-medium tracking-wide">
            Inicio <span className="mx-2">/</span> <span className="text-[#42BC0D]">Contacto</span>
          </p>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: Información de Contacto */}
          <div>
            <p className="text-[#42BC0D] font-bold text-xs tracking-widest uppercase mb-3">
              Atención al cliente
            </p>
            <h2 className="text-4xl font-black text-[#313131] mb-6">
              ¿Tienes consultas?
            </h2>
            <p className="text-[#313131]/70 mb-10 text-base leading-relaxed">
              Nuestro equipo de expertos está listo para asesorarte en la búsqueda del repuesto o accesorio ideal para tu vehículo. Escríbenos y resolveremos todas tus dudas a la brevedad.
            </p>

            <div className="space-y-8 mb-12">
              {/* Ítem: Atención Web */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#42BC0D]/10 flex items-center justify-center shrink-0">
                  <Headset className="text-[#42BC0D]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#313131] text-lg mb-1">Atención Web</h4>
                  <a 
                    href="https://wa.me/51998904830" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#313131]/70 font-medium hover:text-[#42BC0D] transition-colors"
                  >
                    998 904 830
                  </a>
                </div>
              </div>

              {/* Ítem: Dirección */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#42BC0D]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#42BC0D]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#313131] text-lg mb-1">Estamos en Compuplaza</h4>
                  <p className="text-[#313131]/70 font-medium leading-relaxed">
                    Tienda 315 Av. Garcilaso de la Vega 1251, Lima
                  </p>
                </div>
              </div>

              {/* Ítem: Horario */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#42BC0D]/10 flex items-center justify-center shrink-0">
                  <Clock className="text-[#42BC0D]" size={24} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-[#313131] text-lg mb-2">Horario de Atención</h4>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-sm">
                    <div>
                      <p className="font-bold text-[#313131]">Tienda:</p>
                      <p className="text-[#313131]/70">Lun - Sáb: 9:00 am a 7:00 pm</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#313131]">En línea:</p>
                      <p className="text-[#313131]/70">Lun - Sáb: 9:00 am a 6:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa de Google Embebido */}
            {/* Mapa de Google Embebido */}
<div className="w-full h-[300px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.890635443914!2d-77.0387532!3d-12.0510619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c6d48e8957%3A0x1921319c72c2194b!2sCompuplaza!5e0!3m2!1ses-419!2spe!4v1715110000000!5m2!1ses-419!2spe" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen={false} 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Ubicación Compuplaza"
  ></iframe>
</div>
          </div>

          {/* COLUMNA DERECHA: Tarjeta Blanca con Info Mayorista y Formulario */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
            
            {/* Botón flotante WhatsApp principal */}
            <a 
              href="https://wa.me/51998904830" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#42BC0D] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hidden md:flex"
            >
              <MessageCircle size={28} />
            </a>

            {/* Bloque: Ventas al por mayor */}
            <div className="mb-12">
              <span className="inline-block bg-[#42BC0D] text-white px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider mb-6 shadow-sm">
                VENTAS AL POR MAYOR
              </span>
              <p className="text-[#313131]/80 text-sm mb-6 leading-relaxed">
                ¿Buscas precios de distribuidor? Contáctate con nuestros especialistas según tu ubicación:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Contacto Lima */}
                <a 
                  href="https://wa.me/51978398663" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#F4F6FB] p-5 rounded-xl border border-gray-100 hover:border-[#42BC0D]/30 transition-colors group"
                >
                  <p className="text-xs font-bold text-[#313131]/50 uppercase tracking-wide mb-2">Lima</p>
                  <p className="font-black text-[#313131] text-lg flex items-center gap-2 group-hover:text-[#42BC0D] transition-colors">
                    <Phone size={18} className="text-[#42BC0D]" /> 
                    978 398 663
                  </p>
                </a>
                {/* Contacto Provincia */}
                <a 
                  href="https://wa.me/51960827959" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#F4F6FB] p-5 rounded-xl border border-gray-100 hover:border-[#42BC0D]/30 transition-colors group"
                >
                  <p className="text-xs font-bold text-[#313131]/50 uppercase tracking-wide mb-2">Provincia</p>
                  <p className="font-black text-[#313131] text-lg flex items-center gap-2 group-hover:text-[#42BC0D] transition-colors">
                    <Phone size={18} className="text-[#42BC0D]" /> 
                    960 827 959
                  </p>
                </a>
              </div>
              {/* Contacto Extranjero */}
              <a 
                href="https://wa.me/51960706162" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#F4F6FB] p-5 rounded-xl border border-gray-100 hover:border-[#42BC0D]/30 transition-colors w-full block group"
              >
                <p className="text-xs font-bold text-[#313131]/50 uppercase tracking-wide mb-2">Extranjero</p>
                <p className="font-black text-[#313131] text-lg flex items-center gap-2 group-hover:text-[#42BC0D] transition-colors">
                  <Phone size={18} className="text-[#42BC0D]" /> 
                  +51 960 706 162
                </p>
              </a>
            </div>

            {/* Separador */}
            <div className="w-full h-px bg-gray-100 mb-10"></div>

            {/* Bloque: Formulario */}
            <div>
              <h3 className="text-2xl font-black text-[#313131] mb-6">
                Envíanos un mensaje
              </h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="w-full bg-[#F4F6FB] border border-transparent rounded-xl p-4 text-sm focus:outline-none focus:border-[#42BC0D] focus:bg-white transition-all text-[#313131]" 
                  />
                  <input 
                    type="text" 
                    placeholder="Teléfono / Correo" 
                    className="w-full bg-[#F4F6FB] border border-transparent rounded-xl p-4 text-sm focus:outline-none focus:border-[#42BC0D] focus:bg-white transition-all text-[#313131]" 
                  />
                </div>
                
                <input 
                  type="text" 
                  placeholder="Asunto (Ej: Repuesto para Toyota)" 
                  className="w-full bg-[#F4F6FB] border border-transparent rounded-xl p-4 text-sm focus:outline-none focus:border-[#42BC0D] focus:bg-white transition-all text-[#313131]" 
                />
                
                <textarea 
                  placeholder="¿En qué podemos ayudarte?" 
                  rows={4}
                  className="w-full bg-[#F4F6FB] border border-transparent rounded-xl p-4 text-sm focus:outline-none focus:border-[#42BC0D] focus:bg-white transition-all text-[#313131] resize-none" 
                ></textarea>

                <button className="w-full bg-[#313131] text-white font-bold text-sm tracking-widest uppercase py-5 rounded-xl mt-2 hover:bg-[#42BC0D] transition-colors duration-300 shadow-md">
                  Enviar Mensaje
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;