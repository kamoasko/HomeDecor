import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";

const Login = () => {
  return (
    <div className="authentication">
      <div className="auth__link flex">
        <Link to="/" className="button flex">
          <FaArrowLeft />
        </Link>
        HOME
      </div>
      <div className="auth__main">
        <h3>LOG IN</h3>
        <form action="" className="auth__form">
          <input type="email" name="" placeholder="E-MAIL ADRESS" />
          <input type="password" name="" placeholder="PASSWORD" />
          <Link to="/auth/password" className="auth__form-link">
            Forgot password?
          </Link>
          <Buttons text="LOG IN" link="/account/personel" />
        </form>
      </div>
      <div className="auth__last flex">
        Don’t have an account? <Link to="/auth/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
