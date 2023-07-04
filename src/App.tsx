import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Products from "./routes/products/Products";
import ProductDescription from "./routes/products/ProductDescription";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import './App.css'
import Cart from "./routes/cart/Cart";
import Checkout from "./routes/checkout/Checkout";

export default function App() {
  return (
    <MantineProvider 
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          sm: '480px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        }
      }}
    >

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDescription />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>

      <Footer />

    </MantineProvider>
  )
}