/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Globe, Ship, TrendingUp, CheckCircle, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const Hero = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=51960706162&text=Hola.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20importaci%C3%B3n.";

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Background with full-width image/visual */}
      <div className="absolute inset-0 z-0">
        {/* Stronger overlay for mobile (top-to-bottom and side-to-side) */}
        <div className="absolute inset-0 bg-brand-bg/40 lg:hidden z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/80 to-transparent lg:hidden z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/95 to-transparent hidden lg:block z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Logistics" 
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
        />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-20">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl bg-white/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 md:p-10 lg:p-0 rounded-3xl lg:rounded-none border border-white/20 lg:border-none text-center lg:text-left"
          >

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] lg:leading-[0.9] tracking-tighter mb-6 lg:mb-8 text-brand-text">
              Importa Desde China <br className="hidden lg:block" />
              <span className="text-brand-primary italic">Sin Complicaciones</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-base lg:text-2xl text-brand-text/70 mb-8 lg:mb-10 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0"
            >
              Te acompañamos desde el análisis de viabilidad hasta la entrega final en Perú, garantizando rentabilidad y seguridad total.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center lg:justify-start">
              <motion.a 
                href="https://bookings.cloud.microsoft/book/Reserva@cahuana.pe/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-3 transition-all hover:bg-brand-primary/90"
              >
                <Calendar className="w-6 h-6" />
                Agenda una reunión
              </motion.a>
              
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-md text-black border-2 border-black/10 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
              >
                <div className="grayscale">
                  <FaWhatsapp size={28} />
                </div>
                Convercemos
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};