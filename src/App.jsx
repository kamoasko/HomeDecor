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
import Wishlist from "./Components/Wishlist";
import Login from "./Components/AuthLayout/Login";
import Password from "./Components/AuthLayout/Password";
import Verification from "./Components/AuthLayout/verification";
import NewPassword from "./Components/AuthLayout/NewPassword";
import Register from "./Components/AuthLayout/Register";
import Details from "./Pages/CollectionsPage/Details";

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

          <Route path="collections">
            <Route index element={<CollectionsPage />} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />

          <Route path="account" element={<MyAccount />}>
            <Route path="personal" element={<AccountForm />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="products">
            <Route index element={<ProductsPage />} />
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
