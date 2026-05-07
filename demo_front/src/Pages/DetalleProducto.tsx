import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">CAHUANA</h3>
          <p className="text-sm">
            Líderes en repuestos y accesorios automotrices en Perú.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Empresa</h4>
          <ul className="text-sm space-y-2">
            <li>Sobre Nosotros</li>
            <li>Tiendas</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Ayuda</h4>
          <ul className="text-sm space-y-2">
            <li>Términos y Condiciones</li>
            <li>Políticas de Privacidad</li>
            <li>Libro de Reclamaciones</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Suscríbete</h4>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-800 border-none rounded px-3 py-2 text-sm w-full"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
              Ir
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        © 2026 Cahuana SAC. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
