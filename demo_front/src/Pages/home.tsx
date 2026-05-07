import React from "react";
import heroImg from "../assets/hero.png";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={heroImg}
          alt="Cahuana Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Todo en Repuestos <br /> y Accesorios
          </h2>
          <p className="text-lg md:text-xl max-w-xl mb-8">
            Encuentra las mejores marcas y calidad garantizada para tu vehículo.
            Importación directa y ventas al por mayor.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg w-fit transition-colors">
            Ver Catálogo
          </button>
        </div>
      </section>

      {/* Secciones rápidas */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <h3 className="text-xl font-bold mb-2">Garantía Real</h3>
          <p className="text-gray-600 text-sm">
            Todos nuestros productos cuentan con respaldo técnico.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <h3 className="text-xl font-bold mb-2">Envíos Rápidos</h3>
          <p className="text-gray-600 text-sm">
            Llegamos a todo el Perú en tiempo récord.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <h3 className="text-xl font-bold mb-2">Soporte B2B</h3>
          <p className="text-gray-600 text-sm">
            Atención especializada para empresas y flotas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
