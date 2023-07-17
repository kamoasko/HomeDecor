import React from "react";
import "./auth-layout.css";
import { Outlet } from "react-router-dom";
import loginBg from "../../assets/images/Login/login.png";

const AuthLayout = () => {
  return (
    <div className="auth ">
      <Outlet />
      <div
        className="auth__image"
        style={{ backgroundImage: `url(${loginBg})` }}
      ></div>
    </div>
  );
};

export default AuthLayout;
