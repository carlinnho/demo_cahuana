import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full text-center">
      <h2 className="text-2xl font-bold mb-6">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-50 rounded-xl border text-left">
          Testimonio 1
        </div>
        <div className="p-6 bg-gray-50 rounded-xl border text-left">
          Testimonio 2
        </div>
        <div className="p-6 bg-gray-50 rounded-xl border text-left">
          Testimonio 3
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
