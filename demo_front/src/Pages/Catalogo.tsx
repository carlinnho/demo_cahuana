import React from "react";

const Catalogo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Nuestro Catálogo</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Aquí irán tus CardProducts más adelante */}
        <p className="text-gray-500">Cargando productos...</p>
      </div>
    </div>
  );
};

export default Catalogo;
