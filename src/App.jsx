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
import AuthLayout from "./Pages/Authentication";
import AccountForm from "./Components/AccountForm";
import WishlistCard from "./Components/WishlistCard";
import Login from "./Components/AuthLayout/Login";
import Password from "./Components/AuthLayout/Password";
import Verification from "./Components/AuthLayout/verification";
import NewPassword from "./Components/AuthLayout/NewPassword";
import Register from "./Components/AuthLayout/Register";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["GFS Didot", "Raleway"],
      },
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />

          <Route path="collections" element={<CollectionsPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="account" element={<MyAccount />}>
            <Route path="personel" element={<AccountForm />} />
            <Route path="wishlist" element={<WishlistCard />} />
          </Route>
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="products" element={<ProductsPage />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="password" element={<Password />} />
          <Route path="verification" element={<Verification />} />
          <Route path="newpassword" element={<NewPassword />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
