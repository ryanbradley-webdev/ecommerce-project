import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Products from "./routes/products/Products";
import ProductDescription from "./routes/products/ProductDescription";
import './App.css'
import Cart from "./routes/cart/Cart";
import Checkout from "./routes/checkout/Checkout";
import Confirmation from "./routes/confirmation/Confirmation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./routes/login/Login";
import Account from "./routes/account/Account";

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

        <Route path="/confirmation" element={<Confirmation />} />

        <Route path="/login" element={<Login />} />

        <Route path="/account" element={<Account />} />

        <Route path="/*" element={'Not Found'} />

      </Routes>

      <Footer />

    </MantineProvider>
  )
}