import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";

const Register = () => {
  return (
    <div className="authentication">
      <div className="auth__link flex">
        <Link to="/" className="button flex">
          <FaArrowLeft />
        </Link>
        HOME
      </div>
      <div className="auth__main">
        <h3>REGISTER</h3>
        <form action="" className="auth__form">
          <input type="text" name="" placeholder="NAME, SURNAME" />
          <input type="email" name="" placeholder="E-MAIL ADRESS" />
          <input type="password" name="" placeholder="PASSWORD" />
          <input type="password" name="" placeholder="REPEAT PASSWORD" />
          <Buttons text="LOG IN" link="/account/personel" />
        </form>
      </div>
      <div className="auth__last flex">
        Already have an account? <Link to="/auth/login">Log in</Link>
      </div>
    </div>
  );
};

export default Register;
