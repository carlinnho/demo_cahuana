/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Search, Users, Settings, FileText, Gavel, Truck, HeartHandshake } from 'lucide-react';

const Item = ({ title, delay, icon: Icon, isActive }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4, ease: "easeOut" }}
    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 border ${
      isActive 
        ? 'bg-white shadow-lg shadow-brand-primary/10 border-brand-primary/30 scale-[1.02]' 
        : 'bg-brand-bg/50 border-transparent'
    } cursor-default`}
  >
    <div className={`p-2.5 rounded-xl transition-all duration-500 ${
      isActive ? 'bg-brand-primary text-white scale-110 shadow-lg shadow-brand-primary/30' : 'bg-brand-primary/10 text-brand-primary'
    }`}>
      {Icon ? <Icon size={20} /> : <CheckCircle2 size={20} />}
    </div>
    <span className={`font-bold text-base leading-tight transition-colors duration-500 ${
      isActive ? 'text-brand-primary' : 'text-brand-text/70'
    }`}>{title}</span>
  </motion.div>
);

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    { title: "Análisis y costeo de viabilidad", icon: Search },
    { title: "Gestión y negociación con proveedores", icon: Users },
    { title: "Coordinación operativa completa", icon: Settings },
    { title: "Gestión documental internacional", icon: FileText },
    { title: "Trámites y despacho aduanero", icon: Gavel },
    { title: "Logística internacional a Perú", icon: Truck },
    { title: "Soporte post-importación", icon: HeartHandshake }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2500); // Highlight each item for 2.5 seconds
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="servicios" className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-brand-primary/10 rounded-full text-brand-primary font-bold text-xs mb-4">
            PROCESO INTEGRAL
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6 text-brand-text leading-tight tracking-tight max-w-3xl mx-auto">
            ¿Quieres importar pero no sabes <br className="hidden sm:block" />
            <span className="text-brand-primary italic">por dónde empezar?</span>
          </h2>
          <p className="text-base lg:text-lg text-brand-text/50 max-w-2xl mx-auto font-medium">
            Te acompañamos en cada etapa para eliminar riesgos y maximizar tu rentabilidad en cada importación.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white">
               <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
                alt="Gestión de importaciones"
                className="w-full h-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply opacity-30" />
              
              <div className="absolute bottom-6 right-6 bg-brand-text text-white p-6 rounded-3xl shadow-2xl border-2 border-white">
                <div className="text-2xl font-bold text-brand-primary">100%</div>
                <div className="text-[10px] font-medium opacity-60 uppercase tracking-widest leading-none mt-1">Seguridad</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid gap-3">
            {steps.map((step, i) => (
              <Item 
                key={i} 
                title={step.title} 
                icon={step.icon} 
                delay={0.1 + (i * 0.05)} 
                isActive={activeIndex === i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};