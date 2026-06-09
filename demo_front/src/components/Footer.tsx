import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logoBlanco from "../assets/Logo-blanco.png";

type SocialIconProps = {
  className?: string;
};

// --- ICONOS SOCIALES SVG (Mantenidos para personalización exacta) ---
const FacebookIcon = ({ className }: SocialIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 8.4V6.7c0-.8.6-1.1 1.2-1.1h1.6V2.9c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5v1.2H7v3h2.9v7.8h3.4v-7.8h2.8l.4-3H14Z" />
  </svg>
);

const InstagramIcon = ({ className }: SocialIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = ({ className }: SocialIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31 0 2.591.35 3.716 1.018a7.51 7.51 0 0 0 2.22 1.018c.033.008.067.016.1.025v3.42c-.46-.118-.912-.275-1.35-.472a4.423 4.423 0 0 1-2.486-3.141V13.84c0 3.23-2.62 5.85-5.85 5.85a5.857 5.857 0 0 1-5.85-5.85c0-3.14 2.47-5.7 5.57-5.84V11.4c-1.63.14-2.92 1.5-2.92 3.15a3.2 3.2 0 0 0 3.2 3.2 3.2 3.2 0 0 0 3.2-3.15V0h3.57Z" />
  </svg>
);

// --- CONFIGURACIÓN DE RUTAS Y LINKS ---
const storeAddress =
  "Compuplaza, Tienda 315, Av. Garcilaso de la Vega 1251, Lima";
const whatsappUrl = (phone: string, message: string) =>
  `https://wa.me/51${phone}?text=${encodeURIComponent(message)}`;

const menuLinks = [
  { label: "Nosotros", to: "/sobre-nosotros" },
  { label: "Contacto", to: "/contacto" },
  { label: "¿Cómo comprar?", to: "/como-comprar" },
  { label: "Entrega", to: "/checkout" },
  { label: "Términos y condiciones", to: "/terminos-y-condiciones" },
  { label: "Política de Cambios", to: "/politica-de-cambios" },
];

const contactLinks = [
  { label: "ditec@cahuana.pe", icon: Mail, isEmail: true },
  {
    label: "Atención web: 998 904 830",
    phone: "998904830",
    message: "Hola Cahuana, deseo información sobre una compra web.",
  },
  {
    label: "Mayoristas Lima: 968 851 302",
    phone: "968851302",
    message: "Hola Cahuana, deseo información para mayoristas.",
  },
  {
    label: "Mayoristas Prov.: 983 300 054",
    phone: "983300054",
    message: "Hola Cahuana, deseo información para provincias.",
  },
  {
    label: "Ventas Extranjeras: 960 706 162",
    phone: "960706162",
    message: "Hola Cahuana, información para ventas internacionales.",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/CahuanaPeru",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/cahuana_sac/",
    icon: InstagramIcon,
  },
  { label: "TikTok", href: "https://tiktok.com/@cahuanasac", icon: TikTokIcon },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#292929] text-white">
      {/* Línea de neón superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#62c934] to-transparent opacity-50" />

      <div className="relative mx-auto w-full max-w-[1480px] px-6 py-12 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:gap-8">
          {/* BLOQUE 1: Branding y Certificaciones (Replica exacta de la imagen) */}
          <section className="space-y-6 rounded-2xl border border-white/5 bg-white/[0.06] p-8 shadow-2xl">
            <Link to="/" className="block">
              <img
                src={logoBlanco}
                alt="Cahuana Logo"
                className="h-auto w-44"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Tecnología, repuestos e importación para clientes que buscan
              calidad, respaldo y atención especializada.
            </p>

            {/* Badges de Garantía */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all hover:border-[#62c934]/40 hover:bg-white/[0.05]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#62c934]" /> Garantía
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all hover:border-[#62c934]/40 hover:bg-white/[0.05]">
                <Sparkles className="h-3.5 w-3.5 text-[#62c934]" /> Existencias
              </div>
            </div>

            {/* Redes Sociales con efecto Hover */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05] text-white/70 transition-all hover:-translate-y-1 hover:bg-[#62c934] hover:text-black hover:shadow-[0_4px_12px_rgba(98,201,52,0.3)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </section>

          {/* BLOQUE 2: Menú con Hover */}
          <section>
            <h4 className="mb-6 text-sm font-black uppercase tracking-[3px]">
              Menú
              <span className="mt-2 block h-1 w-8 rounded-full bg-[#62c934]" />
            </h4>
            <ul className="space-y-4">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* BLOQUE 3: Contacto con Hover */}
          <section>
            <h4 className="mb-6 text-sm font-black uppercase tracking-[3px]">
              Contacto
              <span className="mt-2 block h-1 w-8 rounded-full bg-[#62c934]" />
            </h4>
            <div className="space-y-5">
              {contactLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={
                    item.isEmail
                      ? `mailto:${item.label}`
                      : whatsappUrl(item.phone!, item.message!)
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <span className="text-[#62c934] transition-transform group-hover:scale-110">
                    {item.isEmail ? (
                      <Mail className="h-4 w-4" />
                    ) : (
                      <Phone className="h-4 w-4" />
                    )}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          {/* BLOQUE 4: Ubicación y Botones Finales */}
          <section className="space-y-6">
            <div>
              <h4 className="mb-6 text-sm font-black uppercase tracking-[3px]">
                Ubicación
                <span className="mt-2 block h-1 w-8 rounded-full bg-[#62c934]" />
              </h4>
              <div className="flex gap-3 text-sm text-white/50">
                <MapPin className="h-5 w-5 shrink-0 text-[#62c934]" />
                <span>{storeAddress}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-white/40">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[#62c934]" />
                <span>Tienda: Lun-Sáb 9am-7pm</span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span>En línea: Lun-Sáb 9am-6pm</span>
              </div>
            </div>

            {/* Botón Cómo Llegar con efecto */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-xl bg-[#62c934] py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-white hover:shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
            >
              Cómo llegar
            </a>

            {/* Libro Reclamaciones con efecto */}
            <Link
              to="/reclamaciones"
              className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-[#62c934]" />
                <span className="text-xs font-bold uppercase tracking-tighter">
                  Libro Reclamaciones
                </span>
              </div>
              <ChevronRight className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-1" />
            </Link>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
