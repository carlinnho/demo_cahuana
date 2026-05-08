import React from "react";

const categories = [
  {
    name: "Cargadores",
    image:
      "https://pcsforall.co/cdn/shop/products/ADA-LXH-0897-Side_600x_crop_center.png?v=1739486204",
    link: "#",
  },
  {
    name: "Baterías",
    image:
      "https://www.lapsdepot.com/wp-content/uploads/lapsdepot-baterias-dell.png",
    link: "#",
  },
  {
    name: "Teclados",
    image:
      "https://www.altercomx.com/cdn/shop/files/TEC574_550x_crop_center.png?v=1757090707",
    link: "#",
  },
  {
    name: "Pantallas",
    image:
      "https://repuestospc.com/wp-content/uploads/2025/01/ProductoPantalla-300x300.png",
    link: "#",
  },
  {
    name: "Accesorios",
    image:
      "https://dlcdnwebimgs.asus.com/gain/BB5CFB46-150B-468C-AAD4-A16811BDA7E8/w717/h525/fwebp",
    link: "#",
  },
];

const CategoryHighlights: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <h2 className="text-[28px] font-black text-[#313131] text-center mb-8 tracking-tight">
        Conoce lo que tenemos para ti
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 text-center">
        {categories.map((cat) => (
          <a key={cat.name} href={cat.link} className="group block">
            {/* Contenedor: Cambiamos sombra y borde a colores neutros (gray) */}
            <div className="relative w-full aspect-square bg-white rounded-2xl flex flex-col items-center justify-between p-4 transition-all duration-300 border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] group-hover:border-gray-300 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Imagen (mantiene el zoom) */}
              <div className="flex-1 w-full flex items-center justify-center min-h-0 mb-3">
                <img
                  src={cat.image}
                  alt={`Categoría ${cat.name}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Título: Quitamos el hover verde, ahora se mantiene gris oscuro */}
              <span className="text-[12px] font-bold text-[#313131] transition-colors leading-none">
                {cat.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryHighlights;
