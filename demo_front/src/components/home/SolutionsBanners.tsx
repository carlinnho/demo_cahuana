import React from "react";

const solutions = [
  {
    id: 1,
    title: "Repuestos para laptops y Accesorios",
    description:
      "Baterías, cargadores, pantallas, teclados y accesorios compatibles para técnicos y usuarios.",
    image: "https://i.redd.it/2pnbbrvmvz6d1.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "Vehículos Eléctricos",
    description:
      "Descubre nuestras motos, bicimotos y trimotos eléctricas para una movilidad moderna y eficiente.",
    image:
      "https://www.businessempresarial.com.pe/wp-content/uploads/2021/07/Mujeres-en-Moto-Scooter.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Servicio de Importación",
    description:
      "Te ayudamos a importar tus productos de tecnología directo desde China de forma segura.",
    image:
      "https://importafacil.pe/wp-content/uploads/2021/04/aprende_a_importar_de_china_y_el_mundo_empezando_con_bajo_presupuesto_importafacil_peru_00.jpg",
    link: "#",
  },
];

const SolutionsBanners: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <div className="text-center mb-10">
        <h2 className="text-[28px] font-black text-[#313131] uppercase tracking-tight mb-2">
          Soluciones Cahuana
        </h2>
        <p className="text-gray-500 text-[15px] font-medium">
          Tecnología, movilidad e importación en un solo lugar.
        </p>
      </div>

      {/* ── GRID DE TARJETAS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="relative h-[250px] rounded-2xl overflow-hidden group block shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-transparent opacity-90 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="absolute inset-0 p-4 flex flex-col justify-end text-center">
              <div className="transform translate-y-[90px] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Título: Reducido a text-[18px] para encajar mejor en la altura de 250px */}
                <h3 className="text-[18px] font-bold text-white mb-2 leading-snug drop-shadow-md px-2 line-clamp-2">
                  {item.title}
                </h3>

                {/* Descripción y Botón */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-in-out">
                  <p className="text-gray-200 text-[12px] leading-snug mb-4 px-2 line-clamp-2">
                    {item.description}
                  </p>

                  <span className="inline-block border border-white text-white px-6 py-2 rounded-md text-[12px] font-bold uppercase tracking-wider hover:bg-[#42BC0D] hover:border-[#42BC0D] transition-colors duration-300">
                    Ver más
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SolutionsBanners;
