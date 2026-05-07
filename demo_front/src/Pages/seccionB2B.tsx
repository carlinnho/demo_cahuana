import React from "react";

const SeccionB2B: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-4xl text-center p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Ventas Corporativas
        </h2>
        <p className="text-gray-600 mb-6">
          Ofrecemos precios especiales y logística personalizada para pedidos
          por mayor e importaciones directas.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold">
          Contactar a un Asesor
        </button>
      </div>
    </div>
  );
};

export default SeccionB2B;
