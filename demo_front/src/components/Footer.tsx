import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ChevronRight,
  Clock3,
  History,
  Laptop,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import logoBlanco from "../assets/Logo-blanco.png";

type SocialIconProps = {
  className?: string;
};

const FacebookIcon = ({ className }: SocialIconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M14 8.4V6.7c0-.8.6-1.1 1.2-1.1h1.6V2.9c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5v1.2H7v3h2.9v7.8h3.4v-7.8h2.8l.4-3H14Z"
    />
  </svg>
);

const InstagramIcon = ({ className }: SocialIconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 7.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.1-8.3a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
    />
    <path
      fill="currentColor"
      d="M16.1 3.3H7.9a4.6 4.6 0 0 0-4.6 4.6v8.2a4.6 4.6 0 0 0 4.6 4.6h8.2a4.6 4.6 0 0 0 4.6-4.6V7.9a4.6 4.6 0 0 0-4.6-4.6Zm2.8 12.8a2.8 2.8 0 0 1-2.8 2.8H7.9a2.8 2.8 0 0 1-2.8-2.8V7.9a2.8 2.8 0 0 1 2.8-2.8h8.2a2.8 2.8 0 0 1 2.8 2.8v8.2Z"
    />
  </svg>
);

const TikTokIcon = ({ className }: SocialIconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M15.5 3.2c.3 2.1 1.5 3.5 3.6 3.7v3.2a6.5 6.5 0 0 1-3.5-1.1v5.7c0 3.6-2.3 5.9-5.6 5.9a5.2 5.2 0 0 1-5.3-5.2c0-3.1 2.3-5.3 5.5-5.3.4 0 .8 0 1.1.1v3.3a3 3 0 0 0-1.2-.2c-1.3 0-2.2.8-2.2 2 0 1.1.9 2 2.1 2 1.3 0 2.1-.8 2.1-2.4V3.2h3.4Z"
    />
  </svg>
);

const complaintsBookRoute = "/reclamaciones";
const storeAddress = "Compuplaza, Tienda 315, Av. Garcilaso de la Vega 1251, Lima";
const mapsUrl = "https://maps.google.com"; // Simplificado para evitar errores de codificación

const whatsappUrl = (phone: string, message: string) =>
  `https://wa.me/51${phone}?text=${encodeURIComponent(message)}`;

const menuLinks = [
  { label: "Nuestra historia", to: "/sobre-nosotros", icon: History },
  { label: "Repuestos para laptop", to: "/catalogo", icon: Laptop },
  { label: "Servicio de importacion", to: "/b2b", icon: PackageCheck },
  { label: "Entrega nacional", to: "/checkout", icon: Truck },
  { label: "Ventas corporativas", to: "/b2b", icon: Users },
];

const contactLinks = [
  {
    label: "Venta General: 998 904 830",
    phone: "998904830",
    message: "Hola Cahuana, quiero informacion sobre una compra.",
  },
  {
    label: "Mayoristas Lima: 968 851 302",
    phone: "968851302",
    message: "Hola Cahuana, quiero informacion para compras mayoristas en Lima.",
  },
  {
    label: "WhatsApp: 983 300 054",
    phone: "983300054",
    message: "Hola Cahuana, quiero recibir asesoria por WhatsApp.",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CahuanaPeru",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cahuana_sac/",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@cahuanasac",
    icon: TikTokIcon,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#62c934] to-transparent" />

      <div className="relative mx-auto w-full max-w-[1480px] px-4 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[minmax(320px,1.18fr)_minmax(190px,0.68fr)_minmax(290px,1fr)_minmax(290px,1fr)] xl:items-stretch xl:gap-12">
          
          {/* Branding */}
          <section className="flex h-full flex-col justify-between rounded-md border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#62c934]/35 hover:bg-white/[0.045] hover:shadow-[0_22px_52px_rgba(0,0,0,0.34)]">
            <div className="space-y-5">
              <Link to="/" className="mx-auto block w-fit transition-transform duration-300 hover:-translate-y-0.5 xl:mx-0">
                <img src={logoBlanco} alt="Cahuana" className="h-auto w-40 object-contain sm:w-48" />
              </Link>
              <p className="mx-auto max-w-sm text-center text-sm leading-relaxed text-white/75 md:text-left xl:text-left">
                Tecnología, repuestos e importación para clientes que buscan calidad y atención especializada.
              </p>
              <div className="grid grid-cols-1 gap-3 text-xs font-semibold text-white min-[380px]:grid-cols-2">
                <span className="flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-2 transition-all hover:border-[#62c934]/50">
                  <ShieldCheck className="h-4 w-4 text-[#62c934]" /> Garantía real
                </span>
                <span className="flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-2 transition-all hover:border-[#62c934]/50">
                  <Sparkles className="h-4 w-4 text-[#62c934]" /> Stock confiable
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1 md:justify-start">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-white/20 bg-black/35 transition-all hover:-translate-y-1 hover:border-[#62c934] hover:text-black">
                      <span className="absolute inset-0 translate-y-full bg-[#62c934] transition-transform group-hover:translate-y-0" />
                      <Icon className="relative z-10 h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Sección Nosotros */}
          <section className="pt-1 lg:pt-2">
            <Link to="/sobre-nosotros" className="group mb-4 block w-fit text-lg font-bold hover:text-white">
              Nosotros
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-[#62c934] transition-all group-hover:w-full" />
            </Link>
            <ul className="space-y-2 text-sm text-white/80">
              {menuLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link to={link.to} className="group flex items-center justify-between gap-3 rounded-md px-2 py-1.5 transition-all hover:translate-x-1 hover:bg-white/[0.05]">
                      <span className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#62c934]/15 text-[#62c934] group-hover:bg-[#62c934] group-hover:text-black">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{link.label}</span>
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Sección Contacto */}
          <section className="pt-1 lg:pt-2">
            <Link to="/contacto" className="group mb-4 block w-fit text-lg font-bold hover:text-white">
              Contacto
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-[#62c934] transition-all group-hover:w-full" />
            </Link>
            <div className="space-y-2.5 text-sm text-white/85">
              <a href="mailto:ditec@cahuana.pe" className="group flex items-center gap-3 rounded-md px-2 py-1.5 hover:translate-x-1 hover:bg-white/[0.05]">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#62c934]/15 text-[#62c934] group-hover:bg-[#62c934] group-hover:text-black">
                  <Mail className="h-4 w-4" />
                </span>
                <span>ditec@cahuana.pe</span>
              </a>
              {contactLinks.map((contact) => (
                <a key={contact.phone} href={whatsappUrl(contact.phone, contact.message)} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-md px-2 py-1.5 hover:translate-x-1 hover:bg-white/[0.05]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#62c934]/15 text-[#62c934] group-hover:bg-[#62c934] group-hover:text-black">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>
          </section>

          {/* Sección Tienda */}
          <section className="space-y-4 pt-1 lg:pt-2">
            <h4 className="text-lg font-bold">Nuestra Tienda</h4>
            <div className="flex items-start gap-3 text-sm text-white/85">
              <MapPin className="h-5 w-5 text-[#62c934] shrink-0" />
              <span>{storeAddress}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/85">
              <Clock3 className="h-5 w-5 text-[#62c934] shrink-0" />
              <span>L a S: 9:00am - 7:00pm</span>
            </div>
            <Link to="/reclamaciones" className="group flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-[#62c934]/45">
              <BookOpen className="h-7 w-7 text-[#62c934]" />
              <span className="text-left font-bold">Libro de Reclamaciones</span>
            </Link>
          </section>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-center text-xs font-semibold text-white/60 md:flex md:justify-between">
          <p>© 2026 Cahuana Sac. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;