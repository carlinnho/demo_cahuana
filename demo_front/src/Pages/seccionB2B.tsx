import React, { useState } from 'react';
import { 
  Wrench, Store, Building2, 
  Tag, Truck, Wallet, ArrowRight,
  Phone, Star, ChevronDown, ChevronUp, 
  MessageCircle, Zap, Box 
} from 'lucide-react';

const SeccionB2B: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      pregunta: "¿Cuál es el monto mínimo de compra mayorista?",
      respuesta: "Manejamos escalas de descuento por volumen, empezando con una inversión inicial flexible para que pueda probar nuestra rentabilidad. Un asesor le indicará la tabla exacta al contactarnos."
    },
    {
      pregunta: "¿Cómo funcionan los envíos a provincias?",
      respuesta: "Trabajamos con las agencias de transporte más seguras del país. Despachamos su mercadería en un máximo de 24 horas después de confirmado su pedido."
    },
    {
      pregunta: "¿Ofrecen garantía sobre repuestos alternativos?",
      respuesta: "Sí, tanto nuestros repuestos originales como los alternativos de alta gama (OEM) cuentan con garantía directa de fábrica contra defectos de manufactura."
    },
    {
      pregunta: "¿Puedo solicitar productos que no están en el catálogo?",
      respuesta: "Absolutamente. A través de nuestro servicio de importación directa, podemos traer repuestos específicos bajo pedido directo desde Asia o Norteamérica."
    }
  ];

  // Arreglo para la sección de Beneficios (Tarjetas Blancas)
  const beneficios = [
    {
      titulo: 'Precios Competitivos',
      descripcion: 'Ahorros del 10% al 40% en repuestos originales y alternativos certificados.',
      icono: Tag
    },
    {
      titulo: 'Logística Just-in-Time',
      descripcion: 'Entregas garantizadas en 24 horas para mantener la operatividad de tu taller.',
      icono: Truck
    },
    {
      titulo: 'Soporte Técnico Pro',
      descripcion: 'Ingenieros especializados para asegurar compatibilidad exacta basada en el VIN.',
      icono: Wrench
    },
    {
      titulo: 'Líneas de Crédito',
      descripcion: 'Opciones de financiamiento flexibles de 30 a 90 días para clientes recurrentes.',
      icono: Wallet
    }
  ];

  // Arreglo de categorías con imágenes HD de estilo fotográfico
  const categorias = [
    { 
      nombre: 'Baterías', 
      img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      nombre: 'Pantallas', 
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      nombre: 'Cargadores', 
      img: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=800&q=80' 
    }, 
    { 
      nombre: 'Teclados', 
      img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80' 
    }, 
    { 
      nombre: 'Accesorios', 
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' 
    }, 
    { 
      nombre: 'Movilidad Eléctrica', 
      img: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80' 
    }
  ];

  return (
    <div className="font-sans text-[#313131] bg-[#F4F6FB] min-h-screen flex flex-col items-center overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[500px] flex items-center px-4 md:px-16 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-[#313131]/80"></div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Soluciones mayoristas para<br />técnicos, tiendas y empresas
          </h1>
          <p className="text-lg text-[#F4F6FB] mb-8 font-medium">
            Accede a precios especiales, atención personalizada y logística de alto volumen. 
            Potenciamos la rentabilidad de tu negocio o flota.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#42BC0D] text-white px-8 py-4 rounded-lg font-black shadow-md hover:bg-[#42BC0D]/90 transition-all text-base">
              Solicitar cotización
            </button>
            <button className="bg-white text-[#42BC0D] border-2 border-[#42BC0D] px-8 py-4 rounded-lg font-black shadow-sm hover:bg-[#F4F6FB] transition-all text-base">
              Hablar con un asesor
            </button>
          </div>
        </div>
      </section>

      {/* 2. CARDS ALINEADAS (Técnicos, Tiendas, Empresas) */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="bg-[#F4F6FB] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Wrench className="text-[#42BC0D]" size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#313131]">Técnicos</h3>
            <p className="text-[#313131]/70 text-sm leading-relaxed">
              Repuestos de alta calidad y herramientas especializadas con garantía extendida para profesionales del servicio técnico.
            </p>
          </div>
          <div className="bg-[#313131] p-8 rounded-xl shadow-md">
            <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Store className="text-[#42BC0D]" size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-white">Tiendas</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Catálogo actualizado constantemente y precios competitivos para retail. Abastecimiento eficaz para su stock de ventas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="bg-[#F4F6FB] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="text-[#42BC0D]" size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#313131]">Empresas</h3>
            <p className="text-[#313131]/70 text-sm leading-relaxed">
              Suministro corporativo escalable, facturación inmediata y soporte dedicado para flotas de transporte e industrias.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE BENEFICIOS MAYORISTAS (Diseño de 4 Tarjetas Blancas) */}
      <section className="w-full py-24 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Encabezado de la sección */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#42BC0D] font-bold tracking-widest uppercase text-sm mb-3">
              Oportunidad Comercial
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#313131]">
              Beneficios de ser Aliado Mayorista
            </h2>
          </div>

          {/* Grid de Tarjetas Blancas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icono = beneficio.icono;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-[1.5rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(66,188,13,0.1)] border border-transparent hover:border-[#42BC0D]/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start"
                >
                  {/* Contenedor del Ícono interactivo */}
                  <div className="w-14 h-14 rounded-2xl bg-[#42BC0D]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#42BC0D] transition-all duration-300">
                    <Icono className="text-[#42BC0D] group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  
                  {/* Textos de la tarjeta */}
                  <h3 className="text-xl font-black text-[#313131] mb-3">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-[#313131]/70 leading-relaxed font-medium text-sm md:text-base">
                    {beneficio.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CATEGORÍAS PRINCIPALES (Diseño Moderno y Animado) */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#313131]">Categorías principales</h2>
              <p className="text-[#313131]/60 mt-2 text-lg font-medium">Explora nuestro catálogo tecnológico</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#42BC0D] font-bold hover:gap-3 transition-all">
              Ver todo el catálogo <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat, i) => (
              <div 
                key={i} 
                className="group relative h-80 w-full rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Imagen de fondo con efecto de zoom al hacer hover */}
                <img 
                  src={cat.img} 
                  alt={cat.nombre} 
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                
                {/* Gradiente oscuro inferior para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#313131]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Contenedor de Texto y Animaciones */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-[#42BC0D] transition-colors duration-300 drop-shadow-md">
                      {cat.nombre}
                    </h3>
                    {/* Texto secundario que aparece suavemente */}
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-75 font-medium">
                      Ver productos
                    </p>
                  </div>
                  
                  {/* Botón circular que entra desde la derecha */}
                  <div className="w-12 h-12 rounded-full bg-[#42BC0D] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-8 group-hover:translate-x-0 transition-all duration-500 shadow-lg">
                    <ArrowRight className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Botón visible solo en móviles */}
          <button className="w-full mt-8 md:hidden bg-white border border-gray-200 text-[#313131] font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
            Ver todo el catálogo <ArrowRight size={20} className="text-[#42BC0D]" />
          </button>
        </div>
      </section>

      {/* 5. NUESTRO PROCESO DE COMPRA */}
      <section className="w-full py-20 bg-[#313131] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-16 text-center">Nuestro Proceso de Compra</h2>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-white/20 z-0"></div>
            
            {[
              { num: "1", title: "Solicita cotización", desc: "Envíanos tu lista de requerimientos por WhatsApp o correo corporativo." },
              { num: "2", title: "Un asesor te atiende", desc: "Recibe una propuesta económica y disponibilidad de stock." },
              { num: "3", title: "Confirma tu pedido", desc: "Realiza el pago y validamos tu facturación electrónica de inmediato." },
              { num: "4", title: "Recibe tu compra", desc: "Despachamos tu pedido a nivel nacional en tiempo récord." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 w-full md:w-1/4 px-4 mb-8 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-[#42BC0D] text-white flex items-center justify-center font-black text-xl mb-4 shadow-[0_0_15px_rgba(66,188,13,0.5)]">
                  {step.num}
                </div>
                <h4 className="font-black text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMPORTACIÓN DIRECTA Y FORMULARIO */}
      <section className="w-full py-24 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <p className="text-[#42BC0D] font-bold text-xs tracking-widest uppercase mb-4">Importación Directa</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#313131] mb-6 leading-tight">
              Traemos el mundo a tu negocio directamente desde China
            </h2>
            <p className="text-[#313131]/70 mb-8 text-base leading-relaxed">
              Nuestro servicio de importación personalizada elimina intermediarios y reduce costos significativamente. 
              Gestionamos toda la cadena logística, desde la auditoría de fábrica en origen hasta el desaduanaje 
              y entrega en tus almacenes en Perú.
            </p>
            
            <div className="bg-white border-l-4 border-[#42BC0D] p-6 shadow-sm rounded-r-lg mb-10">
              <p className="italic text-[#313131] font-medium">
                "Garantizamos transparencia total en costos y tiempos de tránsito."
              </p>
            </div>

            <p className="font-black text-[#313131] mb-4">Contactos WhatsApp Región:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white p-4 rounded-lg flex items-center gap-3 border border-gray-200 shadow-sm">
                <Phone className="text-[#42BC0D]" size={20} />
                <div>
                  <p className="text-xs text-[#313131]/60 uppercase font-bold">Sede Sur / Lima</p>
                  <p className="font-black text-[#313131]">+51 987 654 321</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg flex items-center gap-3 border border-gray-200 shadow-sm">
                <Phone className="text-[#42BC0D]" size={20} />
                <div>
                  <p className="text-xs text-[#313131]/60 uppercase font-bold">Provincias</p>
                  <p className="font-black text-[#313131]">+51 912 345 678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-black text-[#313131] mb-6">Solicitar cotización mayorista</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#313131] mb-1">Nombre Completo</label>
                  <input type="text" placeholder="Ej. Juan Pérez" className="w-full bg-[#F4F6FB] border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#42BC0D]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#313131] mb-1">Empresa / Razón Social</label>
                  <input type="text" placeholder="Autopartes El Rápido S.A.C." className="w-full bg-[#F4F6FB] border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#42BC0D]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#313131] mb-1">RUC</label>
                  <input type="text" placeholder="20..." className="w-full bg-[#F4F6FB] border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#42BC0D]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#313131] mb-1">Teléfono</label>
                  <input type="text" placeholder="+51" className="w-full bg-[#F4F6FB] border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#42BC0D]" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#313131] mb-1">Productos de interés</label>
                <select className="w-full bg-[#F4F6FB] border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#42BC0D] text-[#313131]">
                  <option>Repuestos de Suspensión</option>
                  <option>Repuestos Eléctricos</option>
                  <option>Accesorios y Herramientas</option>
                  <option>Otros</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#313131] mb-1">Correo Electrónico</label>
                <input type="email" placeholder="Ej. info@empresa.com" className="w-full bg-[#F4F6FB] border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#42BC0D]" />
              </div>

              <button className="w-full bg-[#42BC0D] text-white font-black text-base py-4 rounded-lg shadow-md mt-4 hover:bg-[#42BC0D]/90 transition-all">
                Solicitar cotización mayorista
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIOS */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#313131] mb-12 text-center">Lo que dicen nuestros aliados comerciales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "\"Cahuana ha sido clave para nuestro taller. El sistema de importación directa nos ahorró un 25% en costos y la logística de entrega a provincias es excelente.\"",
                name: "Raúl Alarcón", role: "Gerente, Automotores del Sur"
              },
              {
                text: "\"Tener un catálogo tan amplio en un solo lugar nos simplifica el trabajo. La atención de los asesores por WhatsApp es inmediata ante cualquier duda técnica.\"",
                name: "Carlos Ruiz", role: "Dueño, Repuestos Ruiz EIRL"
              },
              {
                text: "\"Muy satisfecho con el servicio corporativo. La calidad de las piezas alternativas (OEM) ha superado nuestras expectativas y tienen muy buenos margin.\"",
                name: "Marco Quispe", role: "Jefe de Flota, TransNacional"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#F4F6FB] p-8 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => <Star key={s} size={16} className="text-[#42BC0D] fill-current" />)}
                  </div>
                  <p className="text-[#313131]/80 text-sm italic mb-8 leading-relaxed">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#42BC0D]/20 rounded-full flex items-center justify-center font-bold text-[#42BC0D]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-sm text-[#313131]">{testimonial.name}</p>
                    <p className="text-xs text-[#313131]/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PREGUNTAS FRECUENTES */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#313131] mb-10 text-center">Preguntas Frecuentes</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <button 
                  className="w-full p-5 flex justify-between items-center bg-white hover:bg-[#F4F6FB] transition-colors text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-[#313131] text-sm md:text-base pr-4">{faq.pregunta}</span>
                  {faqOpen === index ? (
                    <ChevronUp className="text-[#313131]/50 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-[#313131]/50 flex-shrink-0" size={20} />
                  )}
                </button>
                {faqOpen === index && (
                  <div className="p-5 pt-0 text-sm text-[#313131]/70 leading-relaxed bg-white border-t border-gray-100">
                    {faq.respuesta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BANNER FINAL CTA (Diseño Tech Premium con Animaciones) */}
      <section className="relative w-full py-24 px-4 overflow-hidden bg-[#111111] flex items-center justify-center">
        
        {/* Efectos de luces de fondo (Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[#42BC0D]/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#42BC0D]/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Contenido principal */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6 leading-tight tracking-tight">
            Impulsa tu negocio con un <br className="hidden md:block" /> 
            proveedor tecnológico confiable
          </h2>
          
          <p className="text-white/60 mb-10 text-lg max-w-2xl font-medium">
            Únete a nuestra red de aliados comerciales. Accede a precios de importador directo, 
            asesoría técnica y potencia la rentabilidad de tu empresa hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
            {/* Botón Principal Animado */}
            <button className="group relative px-8 py-4 bg-[#42BC0D] text-white font-black text-base rounded-xl overflow-hidden shadow-[0_0_20px_rgba(66,188,13,0.2)] hover:shadow-[0_0_40px_rgba(66,188,13,0.6)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Comenzar ahora <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Brillo interno al hacer hover */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>

            {/* Botón Secundario (Glassmorphism) */}
            <button className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
              <MessageCircle size={20} className="text-[#42BC0D] group-hover:scale-110 transition-transform" />
              Escribir por WhatsApp
            </button>
          </div>

          {/* Insignias de confianza en la parte inferior */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full border-t border-white/10 pt-10">
            <div className="flex flex-col items-center justify-center gap-2 text-white/70">
              <Zap size={20} className="text-[#42BC0D]" />
              <span className="text-xs font-bold uppercase tracking-wider">Respuesta Inmediata</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-white/70">
              <Box size={20} className="text-[#42BC0D]" />
              <span className="text-xs font-bold uppercase tracking-wider">Stock 100% Garantizado</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-white/70">
              <Truck size={20} className="text-[#42BC0D]" />
              <span className="text-xs font-bold uppercase tracking-wider">Logística Nacional</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SeccionB2B;