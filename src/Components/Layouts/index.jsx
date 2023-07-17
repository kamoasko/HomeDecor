import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
