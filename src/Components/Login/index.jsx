import React from "react";
import "./login.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";

const Login = () => {
  return (
    <div className="login">
      <div className="login__link flex">
        <Link to="/" className="button flex">
          <FaArrowLeft />
        </Link>
        HOME
      </div>
      <div className="login__main">
        <h3>LOG IN</h3>
        <form action="" className="login__form">
          <input type="email" name="" placeholder="E-MAIL ADRESS" />
          <input type="password" name="" placeholder="PASSWORD" />
          <Link className="login__form-link">Forgot password?</Link>
          <Buttons text="LOG IN" link="/account/personel" />
        </form>
      </div>
      <div className="login__last flex">
        Don’t have an account? <Link>Register</Link>
      </div>
    </div>
  );
};

export default Login;
