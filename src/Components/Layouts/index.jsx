import React, { useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  let [menu, setMenu] = useState(false);
  let layoutClass = menu ? "layout__active" : "";

  return (
    <div className={layoutClass}>
      <Nav menu={menu} setMenu={setMenu} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
