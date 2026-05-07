import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logoPrincipal from "../assets/logo-principal.png";

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

const complaintsBookRoute = "/libro-reclamaciones";
const storeAddress =
  "Compuplaza, Tienda 315, Av. Garcilaso de la Vega 1251, Lima";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  storeAddress,
)}`;
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  storeAddress,
)}&output=embed`;

const whatsappUrl = (phone: string, message: string) =>
  `https://wa.me/51${phone}?text=${encodeURIComponent(message)}`;

const menuLinks = [
  { label: "Nuestra historia", to: "/" },
  { label: "Repuestos para laptop", to: "/catalogo" },
  { label: "Servicio de importación", to: "/b2b" },
  { label: "Entrega nacional", to: "/checkout" },
  { label: "Ventas corporativas", to: "/b2b" },
];

const contactLinks = [
  {
    label: "Venta General: 998 904 830",
    phone: "998904830",
    message: "Hola Cahuana, quiero información sobre una compra.",
  },
  {
    label: "Mayoristas Lima: 968 851 302",
    phone: "968851302",
    message: "Hola Cahuana, quiero información para compras mayoristas en Lima.",
  },
  {
    label: "WhatsApp: 983 300 054",
    phone: "983300054",
    message: "Hola Cahuana, quiero recibir asesoría por WhatsApp.",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CahuanaPeru?locale=es_ES",
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
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="relative mx-auto w-full max-w-[1480px] px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_0.72fr_0.9fr_2.25fr] lg:items-start lg:gap-12 xl:gap-16">
          <section className="space-y-5">
            <Link to="/" aria-label="Cahuana" className="inline-block transition-transform duration-300 hover:-translate-y-0.5">
              <img
                src={logoPrincipal}
                alt="Cahuana"
                className="h-auto w-64 max-w-full object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              Tecnología, repuestos e importación para clientes que buscan
              calidad, respaldo y atención especializada.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-white">
              <span className="flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5">
                <ShieldCheck className="h-4 w-4 text-[#62c934]" />
                Garantía real
              </span>
              <span className="flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5">
                <Sparkles className="h-4 w-4 text-[#62c934]" />
                Stock confiable
              </span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white transition-all duration-200 hover:-translate-y-1 hover:border-[#62c934] hover:bg-[#62c934] hover:text-black hover:shadow-lg hover:shadow-[#62c934]/20 active:translate-y-0"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </section>

          <section>
            <Link
              to="/"
              className="mb-4 block text-lg font-bold transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Nosotros
            </Link>
            <ul className="space-y-3 text-sm text-white/80">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <a
              href={whatsappUrl(
                "998904830",
                "Hola Cahuana, quiero contactar con un asesor.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mb-4 block text-lg font-bold transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Contacto
            </a>
            <div className="space-y-3 text-sm text-white/85">
              <a
                href="mailto:ditec@cahuana.pe"
                className="flex items-center gap-2 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#62c934]" />
                ditec@cahuana.pe
              </a>
              {contactLinks.map((contact) => (
                <a
                  key={contact.phone}
                  href={whatsappUrl(contact.phone, contact.message)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#62c934]" />
                  {contact.label}
                </a>
              ))}
            </div>
          </section>

          <section className="lg:min-w-0">
            <div className="grid gap-5 xl:grid-cols-[minmax(190px,0.52fr)_minmax(500px,1.48fr)] xl:items-start">
              <div className="space-y-3 text-sm text-white/85">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-bold text-white transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Nuestra Tienda
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 fill-[#62c934] text-[#62c934]" />
                  {storeAddress}
                </a>
                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#62c934]" />
                  L a S: 9:00am - 7:00pm
                </p>
                <Link
                  to={complaintsBookRoute}
                  className="flex w-fit flex-col items-center gap-2 pt-2 text-center text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:text-white"
                >
                  <BookOpen className="h-11 w-11 text-[#dff5d7]" />
                  Libro de Reclamaciones
                </Link>
              </div>
              <div className="group relative h-48 overflow-hidden rounded-md border border-white/30 bg-black shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)] sm:h-52 xl:h-48">
                <iframe
                  title="Mapa de Cahuana en Compuplaza"
                  src={mapsEmbedUrl}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir ubicación de Cahuana en Google Maps"
                  className="absolute inset-0 flex items-end justify-end bg-transparent p-2"
                >
                  <span className="rounded bg-white px-2 py-1 text-[11px] font-bold text-black transition-colors duration-200 group-hover:bg-[#62c934]">
                    Cómo llegar
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-9 border-t border-white/15 pt-5 text-center text-xs font-semibold text-white md:flex md:items-center md:justify-between md:text-left">
          <p>
            Tu tienda especialista en repuestos, accesorios y productos de
            tecnología con envío a todo el Perú.
          </p>
          <p className="mt-3 md:mt-0">
            © 2026 Cahuana Sac. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
