import React from "react";

const PromoTripleBanners: React.FC = () => {
  // Arreglo de banners para que solo tengas que reemplazar las rutas en "image"
  const banners = [
    {
      id: 1,
      image:
        "https://img.magnific.com/foto-gratis/lugar-trabajo-moderno-comodo-casa-hay-computadora-computadora-portatil-mesa_613910-13268.jpg?t=st=1778183009~exp=1778186609~hmac=7d6d7b6a08f93380de97ea900291b2266f02c27b3b1aeb09790bd66664a5045d&w=2000",
      alt: "Promoción 1",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://img.magnific.com/foto-gratis/lugar-trabajo-moderno-comodo-casa-hay-computadora-computadora-portatil-mesa_613910-13268.jpg?t=st=1778183009~exp=1778186609~hmac=7d6d7b6a08f93380de97ea900291b2266f02c27b3b1aeb09790bd66664a5045d&w=2000",
      alt: "Promoción 2",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://img.magnific.com/foto-gratis/lugar-trabajo-moderno-comodo-casa-hay-computadora-computadora-portatil-mesa_613910-13268.jpg?t=st=1778183009~exp=1778186609~hmac=7d6d7b6a08f93380de97ea900291b2266f02c27b3b1aeb09790bd66664a5045d&w=2000",
      alt: "Promoción 3",
      link: "#",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      {banners.map((banner) => (
        <a
          key={banner.id}
          href={banner.link}
          // El mismo borde, redondeado y sombra sutil en hover que las CardProducts
          className="relative w-full h-[180px] bg-white border border-gray-200 rounded-xl overflow-hidden group block transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        >
          {/* Imagen con zoom (scale-110) en hover */}
          <img
            src={banner.image}
            alt={banner.alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </a>
      ))}
    </section>
  );
};

export default PromoTripleBanners;
