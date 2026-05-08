import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/home";
import Catalogo from "./Pages/Catalogo";
import DetalleProducto from "./Pages/DetalleProducto";
import Checkout from "./Pages/checkout";
import SeccionB2B from "./Pages/seccionB2B";
import Contacto from "./Pages/contacto";
import Nosotros from "./Pages/nosotros";

/* TU IMPORT */
import Inventario from "./Pages/Inventario";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/b2b" element={<SeccionB2B />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/sobre-nosotros" element={<Nosotros />} />

            {/* TU APARTADO */}
            <Route path="/inventario" element={<Inventario />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;