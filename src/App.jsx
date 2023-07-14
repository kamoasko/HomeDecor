import { useEffect } from "react";
import "./App.css";
import WebFont from "webfontloader";
import Layout from "./Components/Layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import CollectionsPage from "./Pages/CollectionsPage";
import ContactPage from "./Pages/ContactPage";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductsPage/ProductDetails";
import MyAccount from "./Pages/MyAccount";
import ShoppingCart from "./Pages/ShoppingCart";
import Checkout from "./Pages/Checkout";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["GFS Didot", "Raleway"],
      },
    });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/grayson-premium-grey-wash-nest-of-tables"
          element={<ProductDetails />}
        />

        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
