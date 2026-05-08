/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Cpu, BarChart3, Heart } from 'lucide-react';

const AudienceCard = ({ icon: Icon, title, description, image, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -10 }}
    className="bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(66,188,13,0.05)] flex flex-col group transition-all duration-500 border border-gray-100 hover:border-brand-primary/30 relative overflow-hidden"
  >
    <div className="h-40 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
        <h3 className="text-lg font-display font-bold text-white leading-tight">{title}</h3>
      </div>
    </div>
    
    <div className="p-6 text-left">
      <div className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 text-brand-primary">
        <Icon size={20} />
      </div>
      <p className="text-brand-text/60 text-sm leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

export const TargetAudience = () => {
  const audiences = [
    {
      title: "Pymes que Buscan Importar",
      description: "Pequeñas y medianas empresas que desean escalar su negocio trayendo mercadería directamente desde origen sin intermediarios.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      delay: 0.1
    },
    {
      title: "Emprendedores de Tecnología",
      description: "Visiónarios tecnológicos que necesitan traer hardware o gadgets innovadores con total seguridad documental y logística.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
      delay: 0.2
    },
    {
      title: "Empresas Corporativas",
      description: "Organizaciones consolidadas que requieren una gestión logística de alta precisión, transparencia y trámites aduaneros impecables.",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-brand-text mb-4">
            ¿A quiénes <span className="text-brand-primary">podemos ayudar?</span>
          </h2>
          <div className="h-1.5 w-20 bg-brand-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <AudienceCard 
              key={i}
              {...audience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};