import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Truck, Clock, ShieldCheck,
  Heart, ShoppingCart, ChevronRight,
  Shield, Minus, Plus, Zap, Battery, Wind, Move, Package,
  ChevronLeft, Smartphone, Check, ChevronDown
} from "lucide-react";
import { products } from "../data/products";

// Icon mapping helper
interface ProductIconMap {
  [key: string]: LucideIcon;
}

const getIcon = (name: string, size = 20, className = "text-[#42bc0d]") => {
  const icons: ProductIconMap = {
    Truck, Clock, ShieldCheck, Heart, ShoppingCart,
    Shield, Minus, Plus, Zap, Battery, Wind, Move, Package, Smartphone, Check
  };
  const IconComponent = icons[name] || Package;
  return <IconComponent size={size} className={className} />;
};

const DetalleProducto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState("Descripción");

  const product = useMemo(
    () => products.find(p => p.id === id || p.slug === id) || products[0],
    [id],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;

  const relatedProducts = products.filter(p => product.relatedProductIds.includes(p.id));

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-10">

      {/* Breadcrumbs */}
      <div className="max-w-[1300px] mx-auto px-4 pt-6 pb-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="cursor-pointer hover:text-[#42bc0d]">Inicio</Link>
          <ChevronRight size={12} />
          <span className="cursor-pointer hover:text-[#42bc0d]">Accesorios</span>
          <ChevronRight size={12} />
          <span className="cursor-pointer hover:text-[#42bc0d]">Ventiladores</span>
          <ChevronRight size={12} />
          <span className="text-gray-400">{product.name}</span>
        </div>
      </div>

      <main className="max-w-[1300px] mx-auto px-4">

        {/* Product Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12 items-start">

          {/* Image Gallery */}
          <div className="flex-1 flex gap-4 min-w-0">
            <div className="flex flex-col gap-3 w-20">
              {product.thumbnails.length > 0 ? product.thumbnails.map((img, i) => (
                <div key={i} className={`aspect-square rounded-md border flex items-center justify-center p-1 cursor-pointer transition-all ${i === 0 ? 'border-[#42bc0d]' : 'border-gray-200 hover:border-gray-300'}`}>
                  <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-contain" />
                </div>
              )) : (
                <div className="aspect-square rounded-md border border-[#42bc0d] flex items-center justify-center p-1 cursor-pointer">
                  <img src={product.mainImage} alt="Main Thumbnail" className="w-full h-full object-contain" />
                </div>
              )}
              <div className="flex items-center justify-center mt-1 w-full h-8 bg-gray-50 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100">
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>

            <div className="flex-1 relative aspect-square bg-white rounded-lg flex items-center justify-center p-8 group border border-gray-100">
              {/* Brand tag */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-[#0070e0] text-white text-sm font-bold px-4 py-1.5 rounded-md shadow-sm">
                  {product.brand}
                </div>
              </div>

              {/* Battery tag if exists */}
              {product.id === "1" && (
                <div className="absolute bottom-8 left-8 z-10 flex flex-col items-center gap-1 text-[#42bc0d]">
                  <Battery size={36} strokeWidth={1.5} />
                  <span className="text-sm font-bold">5000mAh</span>
                </div>
              )}

              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info & Actions */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="mb-3">
              <span className="bg-[#f1fbe9] text-[#42bc0d] text-[11px] font-semibold px-2.5 py-1 rounded-full">¡Oferta!</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-lg text-gray-400 line-through font-medium">S/ {product.oldPrice}</span>
              <span className="text-4xl font-bold text-[#42bc0d]">S/ {product.price}</span>
              <span className="bg-[#ff0000] text-white text-[11px] font-bold px-2 py-0.5 rounded-full ml-1">{product.discount}</span>
            </div>

            <div className="flex items-center gap-2 mb-8 text-sm">
              <Check size={18} className="text-[#42bc0d]" />
              <span className="font-semibold text-gray-800">Disponibilidad:</span>
              <span className="text-[#42bc0d] font-medium">{product.stock} disponibles</span>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="flex items-center border border-gray-300 rounded-md bg-white w-[120px] h-12">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50"><Minus size={16} /></button>
                <span className="flex-1 flex items-center justify-center font-semibold text-gray-800">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50"><Plus size={16} /></button>
              </div>
              <button className="flex-1 bg-[#42bc0d] hover:bg-[#369b0a] transition-colors text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2 h-12">
                <ShoppingCart size={18} />
                Agregar al carrito
              </button>
            </div>

            <button className="w-full border border-[#42bc0d] bg-white text-[#42bc0d] hover:bg-[#f1fbe9] transition-colors font-semibold text-sm rounded-md py-3 mb-8 flex items-center justify-center gap-2">
              <Zap size={18} />
              Comprar ahora
            </button>

            {/* Trust Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-gray-200">
              {[
                { label: "Envíos a todo\nel Perú", icon: <Truck size={22} className="text-[#42bc0d]" /> },
                { label: "Entrega en\n72 horas*", icon: <Clock size={22} className="text-[#42bc0d]" /> },
                { label: "Compra segura\nSSL protegida", icon: <ShieldCheck size={22} className="text-[#42bc0d]" /> },
                { label: "Garantía de\n6 meses", icon: <Shield size={22} className="text-[#42bc0d]" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-0.5">{item.icon}</div>
                  <span className="text-[10px] font-medium text-gray-600 whitespace-pre-line leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="mt-2 pt-6 border-t border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Medios de pago aceptados</span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 w-auto" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto" />
                <img src="https://logodownload.org/wp-content/uploads/2021/11/bbva-logo.png" alt="BBVA" className="h-3 w-auto" />
                <span className="text-[12px] font-black text-blue-900 tracking-tighter leading-none">BCP</span>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 rounded bg-[#5d2e8e] text-white text-[9px] font-bold shadow-sm">Yape</div>
                  <div className="px-2 py-0.5 rounded bg-[#00d1c1] text-white text-[9px] font-bold shadow-sm">Plin</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Highlight Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-12 border border-gray-200 rounded-lg overflow-hidden bg-[#fbfdfb]">
          {product.highlights.map((item, i) => (
            <div key={i} className={`p-5 flex items-center gap-4 ${i !== 3 ? 'border-r border-gray-200' : ''}`}>
              <div className="shrink-0">{getIcon(item.iconName, 24)}</div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</span>
                <span className="text-xs text-gray-500">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Headers */}
        <div className="border-b border-gray-200 mb-8 flex items-center gap-8 overflow-x-auto whitespace-nowrap">
          {["Descripción", "Características", "Especificaciones"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-semibold relative transition-colors ${activeTab === tab ? 'text-[#42bc0d] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#42bc0d]' : 'text-gray-500 hover:text-gray-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content: Descripción */}
        {activeTab === "Descripción" && product.description.title && (
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-16 animate-in fade-in duration-300">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{product.description.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {product.description.content}
              </p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {product.description.features.map((feat, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 shrink-0">{getIcon(feat.iconName)}</div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 mb-0.5">{feat.title}</span>
                      <span className="text-xs text-gray-500">{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto relative rounded-2xl overflow-hidden">
              <img src={product.description.image} alt="Product description" className="w-full h-auto object-cover" />
              <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col items-center justify-center text-white bg-[#42bc0d] w-24 h-24 rounded-full shadow-lg">
                <span className="text-2xl font-bold">{product.description.badgeValue}</span>
                <span className="text-[10px] font-semibold">{product.description.badgeLabel}</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Características */}
        {activeTab === "Características" && (
          <div className="mb-16 animate-in fade-in duration-300">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Características Destacadas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#42bc0d] shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Carga Ultra Rápida</h4>
                      <p className="text-sm text-gray-600">Tecnología avanzada para que el producto esté listo en el menor tiempo posible.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#42bc0d] shrink-0">
                      <Wind size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Rendimiento Pro</h4>
                      <p className="text-sm text-gray-600">Componentes de alta calidad para un funcionamiento eficiente y duradero.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#42bc0d] shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Garantía Total</h4>
                      <p className="text-sm text-gray-600">Soporte y respaldo directo para tu tranquilidad en cada compra.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#42bc0d] shrink-0">
                      <Move size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Diseño Ergonómico</h4>
                      <p className="text-sm text-gray-600">Pensado en la comodidad del usuario y la facilidad de transporte.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Especificaciones */}
        {activeTab === "Especificaciones" && (
          <div className="flex flex-col lg:flex-row gap-12 mb-16 animate-in fade-in duration-300">
            <div className="lg:w-2/3">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Especificaciones técnicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {product.specs.length > 0 ? product.specs.map((spec, i) => (
                  <div key={i} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 text-sm">
                    <span className="font-semibold text-gray-700 w-1/2">{spec.label}</span>
                    <span className="text-gray-600 w-1/2">{spec.value}</span>
                  </div>
                )) : <p className="text-gray-500">No hay especificaciones disponibles.</p>}
              </div>
            </div>
            <div className="lg:w-1/3">
              <h3 className="text-lg font-bold text-gray-900 mb-6">¿Qué incluye tu compra?</h3>
              <ul className="space-y-4">
                {product.includes.length > 0 ? product.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="text-gray-400">{getIcon(inc.iconName, 18, "text-gray-400")}</div>
                    <span className="font-medium text-gray-800">{inc.item}</span>
                  </li>
                )) : <p className="text-gray-500 text-sm">Información no disponible.</p>}
              </ul>
            </div>
          </div>
        )}

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mb-16 relative">
            <h3 className="text-xl font-bold text-gray-900 mb-6">También te puede interesar</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {relatedProducts.map((p, i) => (
                <Link to={`/producto/${p.id}`} key={i} className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square rounded-md bg-gray-50 flex items-center justify-center p-4 mb-4">
                    <span className="absolute top-2 left-2 z-10 bg-[#42bc0d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{p.discount}</span>
                    <button className="absolute top-2 right-2 z-10 text-gray-400 hover:text-red-500" onClick={(e) => { e.preventDefault(); /* Like logic */ }}><Heart size={18} /></button>
                    <img src={p.mainImage} alt={p.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h4 className="text-xs font-semibold text-gray-800 leading-snug mb-2 line-clamp-2 h-8">{p.name}</h4>
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-bold text-[#42bc0d]">S/ {p.price}</span>
                      <span className="text-[10px] text-gray-400 line-through">S/ {p.oldPrice}</span>
                    </div>
                    <button className="w-full py-1.5 bg-white border border-[#42bc0d] text-[#42bc0d] hover:bg-[#42bc0d] hover:text-white transition-colors text-xs font-semibold rounded-md">Agregar</button>
                  </div>
                </Link>
              ))}
            </div>

            <div className="absolute top-0 right-0 flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#42bc0d] hover:text-[#42bc0d] bg-white"><ChevronLeft size={16} /></button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#42bc0d] hover:text-[#42bc0d] bg-white"><ChevronRight size={16} /></button>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};

export default DetalleProducto;
