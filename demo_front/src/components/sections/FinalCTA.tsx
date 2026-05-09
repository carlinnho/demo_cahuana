/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const FinalCTA = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=51960706162&text=Hola.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20importaci%C3%B3n.";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl group min-h-[500px] flex items-center justify-center bg-[#252525]">
          {/* Background with diffused colors and image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1494412574743-01927c4586b2?auto=format&fit=crop&q=80&w=2000" 
              alt="Logística de Importación"
              className="w-full h-full object-cover opacity-10 transition-transform duration-[4s] group-hover:scale-105 ease-out"
            />
            
            {/* Diffused Color Glows */}
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] bg-brand-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[60%] bg-brand-primary/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />

            {/* Glossy Overlays */}
            <div className="absolute inset-0 bg-[#313131]/40 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#313131] via-transparent to-[#313131]/40" />
          </div>

          <div className="relative z-10 p-10 lg:p-16 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl lg:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tight drop-shadow-2xl text-brand-primary">
                ¿Quieres comenzar <br className="hidden sm:block" />
                <span className="italic">a importar?</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Agenda una consultoría gratuita hoy mismo y descubre cómo podemos potenciar el margen de tu negocio importando desde origen.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <motion.a 
                  href="https://bookings.cloud.microsoft/book/Reserva@cahuana.pe/?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-primary text-white px-10 py-5 rounded-[1.5rem] font-bold text-xl flex items-center gap-3 w-full sm:w-auto justify-center transition-all shadow-xl shadow-brand-primary/20"
                >
                  <Calendar className="w-5 h-5" />
                  Agenda una reunión
                </motion.a>
                
                <motion.a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#000000" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-[1.5rem] font-bold text-xl w-full sm:w-auto flex items-center justify-center gap-3 transition-all"
                >
                <div className="grayscale">
                  <FaWhatsapp size={24} />
                </div>
                Convercemos
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>
    </section>
  );
};
