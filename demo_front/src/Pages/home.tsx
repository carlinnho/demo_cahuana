import React from "react";
import {
  Truck, Clock, ChevronDown, Search, ArrowRight,
  ChevronRight, Shield, Home as HomeIcon, Check,
  ShoppingCart, Heart, Grid, List
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Accesorios para laptop", count: 234, active: true },
    { name: "Audífonos", count: 85, active: false },
    { name: "Mouse", count: 43, active: false },
    { name: "Teclados", count: 28, active: false },
    { name: "Cargadores", count: 32, active: false },
    { name: "Bolsos y mochilas", count: 16, active: false },
    { name: "Soportes y bases", count: 17, active: false },
    { name: "Ventiladores", count: 11, active: false },
  ];

  const brands = [
    { name: "Logitech", count: 45 },
    { name: "HP", count: 32 },
    { name: "Xiaomi", count: 28 },
    { name: "JBL", count: 26 },
    { name: "Anker", count: 20 },
  ];

  const handleProductClick = (id: string) => {
    navigate(`/producto/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 py-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
          <span className="flex items-center gap-1.5 cursor-pointer hover:text-gray-800"><HomeIcon size={14} /> Inicio</span>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="cursor-pointer hover:text-gray-800">Accesorios</span>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="text-[#1b873e]">Accesorios para laptop</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[#123A1E] rounded-2xl overflow-hidden mb-8 relative flex min-h-[260px] md:min-h-[300px] shadow-sm">
          {/* Image */}
          <div className="absolute right-0 top-0 w-full md:w-[60%] h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#123A1E] via-[#123A1E]/80 to-transparent z-10 hidden md:block"></div>
            <div className="absolute inset-0 bg-[#123A1E]/80 z-10 md:hidden"></div>
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Laptop desk"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-20 flex flex-col justify-center p-8 md:p-14 max-w-lg w-full md:w-auto">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
              Accesorios <br /> para laptop
            </h1>
            <p className="text-gray-200 text-sm md:text-base mb-8 max-w-sm font-medium">
              Mejora tu experiencia al máximo con nuestros accesorios tecnológicos.
            </p>
            <button className="bg-white text-[#123A1E] font-bold text-sm py-3 px-6 rounded-lg w-fit flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-sm">
              Ver ofertas <ArrowRight size={16} />
            </button>
          </div>

          <div className="absolute bottom-6 right-6 z-20 gap-6 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 hidden lg:flex shadow-lg">
            <div className="flex items-center gap-3 text-white">
              <Truck size={20} className="text-green-400" />
              <span className="text-xs font-medium leading-snug">Envíos rápidos <br /> a todo el Perú</span>
            </div>
            <div className="w-px h-8 bg-white/20 self-center"></div>
            <div className="flex items-center gap-3 text-white">
              <Shield size={20} className="text-green-400" />
              <span className="text-xs font-medium leading-snug">Compra segura <br /> y protegida</span>
            </div>
            <div className="w-px h-8 bg-white/20 self-center"></div>
            <div className="flex items-center gap-3 text-white">
              <Clock size={20} className="text-green-400" />
              <span className="text-xs font-medium leading-snug">Garantía <br /> 6 meses</span>
            </div>
          </div>


        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full lg:w-[260px] flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Filtros</h2>
              <button className="text-sm font-semibold text-[#1b873e] hover:underline">Limpiar todo</button>
            </div>

            {/* Categorías */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3 cursor-pointer">
                <h3 className="font-bold text-sm text-gray-800">Categorías</h3>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
              <ul className="space-y-2.5">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm group cursor-pointer">
                    <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${cat.active ? 'bg-[#1b873e] border-[#1b873e]' : 'border-gray-300 group-hover:border-[#1b873e]'}`}>
                      {cat.active && <Check size={12} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className={`flex-1 ${cat.active ? 'text-[#1b873e] font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                      {cat.name}
                    </span>
                    <span className="text-gray-400 text-xs">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-gray-200 w-full mb-6"></div>

            {/* Marca */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3 cursor-pointer">
                <h3 className="font-bold text-sm text-gray-800">Marca</h3>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Buscar marca"
                  className="w-full border border-gray-200 rounded-lg py-2 pl-8 pr-3 text-sm outline-none focus:border-[#1b873e] transition-colors"
                />
                <Search size={14} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <ul className="space-y-2.5 mb-2">
                {brands.map((brand, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm group cursor-pointer">
                    <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-[#1b873e] transition-colors"></div>
                    <span className="flex-1 text-gray-600 group-hover:text-gray-900">
                      {brand.name}
                    </span>
                    <span className="text-gray-400 text-xs">({brand.count})</span>
                  </li>
                ))}
              </ul>
              <button className="text-sm font-semibold text-[#1b873e] hover:underline mt-1">Ver más</button>
            </div>

            <div className="h-px bg-gray-200 w-full mb-6"></div>

            {/* Precio */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h3 className="font-bold text-sm text-gray-800">Precio</h3>
                <ChevronDown size={16} className="text-gray-400" />
              </div>

              <div className="px-2 mb-4 mt-2">
                <div className="h-1 bg-gray-200 rounded-full relative">
                  <div className="absolute left-[15%] right-[30%] h-full bg-[#1b873e] rounded-full"></div>
                  <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#1b873e] rounded-full border-2 border-white shadow-sm cursor-pointer"></div>
                  <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#1b873e] rounded-full border-2 border-white shadow-sm cursor-pointer"></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                <span>S/ 10</span>
                <span>S/ 500</span>
              </div>
            </div>

            <div className="h-px bg-gray-200 w-full mb-6"></div>

            {/* Switches */}
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-gray-800">Ofertas</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-medium border border-gray-200 px-2 py-0.5 rounded">Solo ofertas</span>
                  <div className="w-8 h-4.5 bg-gray-200 rounded-full relative cursor-pointer">
                    <div className="absolute left-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-gray-800">Stock disponible</h3>
                <div className="w-8 h-4.5 bg-[#1b873e] rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>

          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <p className="text-sm font-medium text-gray-800">{products.length} productos encontrados</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Ordenar por:</span>
                  <div className="flex items-center gap-8 border border-gray-200 rounded-lg px-3 py-1.5 cursor-pointer hover:border-gray-300 transition-colors bg-white font-medium">
                    <span>Relevancia</span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </div>

                <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 bg-white">
                  <div className="p-1.5 bg-[#1b873e] text-white rounded cursor-pointer">
                    <Grid size={16} />
                  </div>
                  <div className="p-1.5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                    <List size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 gap-5 mb-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#1b873e] hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full cursor-pointer"
                >

                  {/* Badges */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${product.badgeType === 'discount' ? 'bg-[#1b873e] text-white' : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Favorite */}
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 z-10 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Heart size={20} />
                  </button>

                  {/* Image */}
                  <div className="h-[160px] flex items-center justify-center mb-4 mt-2">
                    <img src={product.mainImage} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-1">
                    <span className="text-[11px] font-semibold text-gray-400 mb-1 tracking-wider uppercase">{product.brand}</span>
                    <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 line-clamp-2 min-h-[40px] group-hover:text-[#1b873e] transition-colors">
                      {product.name}
                    </h3>



                    <div className="mt-auto">
                      {/* Price */}
                      <div className="flex items-end gap-2 mb-1 h-6">
                        {product.oldPrice ? (
                          <>
                            <span className="text-xs text-gray-400 line-through font-medium mb-[2px]">S/ {product.oldPrice}</span>
                            <span className="text-[17px] font-bold text-gray-900 leading-none">S/ {product.price}</span>
                          </>
                        ) : (
                          <span className="text-[17px] font-bold text-gray-900 leading-none">S/ {product.price}</span>
                        )}
                      </div>

                      {/* Delivery */}
                      <p className="text-xs font-bold text-[#1b873e] mb-4 h-4">
                        {product.deliveryInfo || "Envío disponible"}
                      </p>

                      {/* Add to cart */}
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2 border border-[#1b873e] text-[#1b873e] rounded-lg flex items-center justify-center gap-2 hover:bg-[#1b873e] hover:text-white transition-colors font-bold text-sm"
                      >
                        <ShoppingCart size={16} />
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1.5 mb-12">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 transition-colors">
                <ChevronRight size={16} className="rotate-180" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1b873e] text-white font-medium text-sm shadow-sm">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">3</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </main>

      {/* Brands Bar */}
      <div className="bg-white border-y border-gray-200 py-6">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-bold text-gray-900 whitespace-nowrap">Marcas destacadas</h3>
          <div className="flex-1 flex flex-wrap items-center justify-center md:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300 ml-4">
            <span className="font-bold text-xl tracking-tighter">logitech</span>
            <span className="font-bold text-2xl tracking-tighter text-blue-600 italic">hp</span>
            <span className="font-bold text-xl text-orange-500">xiaomi</span>
            <span className="font-bold text-2xl text-red-600 italic">JBL</span>
            <span className="font-bold text-xl text-blue-500">ANKER</span>
            <span className="font-bold text-2xl text-green-600 italic">acer</span>
            <span className="font-bold text-xl text-blue-800">ASUS</span>
            <span className="font-bold text-xl text-blue-600">DELL</span>
            <span className="font-bold text-xl text-blue-700">SAMSUNG</span>
          </div>
          <button className="text-sm font-bold text-[#1b873e] whitespace-nowrap flex items-center gap-1 hover:underline">
            Ver todas <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
