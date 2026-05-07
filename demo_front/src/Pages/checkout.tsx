import React from "react";

const Checkout: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold border-b pb-4 mb-6">
        Finalizar Compra
      </h2>
      <div className="bg-white p-6 rounded-lg border">
        <p className="text-gray-500 italic">Tu carrito está vacío.</p>
      </div>
    </div>
  );
};

export default Checkout;
