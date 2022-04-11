// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
// components
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
