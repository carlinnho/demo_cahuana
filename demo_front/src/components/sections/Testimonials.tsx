/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Mendoza",
    role: "CEO, ImportPeru Tech",
    comment: "La rapidez en la gestión aduanera de Cahuana nos ha permitido ahorrar miles de soles en sobrecostos. Su asesoría es de primer nivel.",
    photo: "https://cahuana.com.pe/wp-content/uploads/2023/02/cropped-logo-2.png"
  },
  {
    name: "Elena Vasquez",
    role: "Directora Logística, Modas Lima",
    comment: "Importar textiles antes era un dolor de cabeza. Con Cahuana, todo el proceso desde China hasta nuestro almacén es fluido y transparente.",
    photo: "https://cahuana.com.pe/wp-content/uploads/2023/02/cropped-logo-2.png"
  },
  {
    name: "Carlos Durand",
    role: "Distribuidora Master",
    comment: "La seguridad que brindan en el transporte internacional de carga pesada es inigualable. Siempre cumplen con los tiempos prometidos.",
    photo: "https://cahuana.com.pe/wp-content/uploads/2023/02/cropped-logo-2.png"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-bg/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-text mb-4">
            Clientes que <span className="text-brand-primary">confían</span> en nosotros
          </h2>
          <div className="h-1.5 w-20 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-xl shadow-brand-primary/5 border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative mb-6">
                <div className="w-24 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center p-2">
                  <img 
                    src={t.photo} 
                    alt="Cahuana Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-primary text-white p-1.5 rounded-md shadow-lg">
                  <Quote size={12} />
                </div>
              </div>
              
              <p className="text-brand-text/70 italic text-sm leading-relaxed mb-6">
                "{t.comment}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-brand-text text-base leading-none mb-1">{t.name}</h4>
                <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};