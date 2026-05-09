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
import Inventario from "./Pages/inventario";

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
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/contacto" element={<Contacto />} /> {/* <-- 2. Añadimos la ruta */}
            <Route path="/sobre-nosotros" element={<Nosotros />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;