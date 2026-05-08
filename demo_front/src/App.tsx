import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/home";
import DetalleProducto from "./Pages/DetalleProducto";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/detalle-producto" element={<DetalleProducto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
