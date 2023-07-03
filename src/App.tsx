import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Products from "./routes/products/Products";
import ProductDescription from "./routes/products/ProductDescription";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import './App.css'
import Cart from "./routes/cart/Cart";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDescription />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

      <Footer />

    </MantineProvider>
  )
}