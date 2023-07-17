import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Buttons from "../Buttons";

const Password = () => {
  return (
    <div className="authentication">
      <div className="auth__link flex">
        <Link to={-1} className="button flex">
          <FaArrowLeft />
        </Link>
        BACK
      </div>
      <div className="auth__main">
        <h3>RESET PASSWORD</h3>
        <form action="" className="auth__form">
          <input type="email" name="" placeholder="E-MAIL ADRESS" />
          <Buttons text="SEND" link="/auth/verification" />
        </form>
      </div>
      <div className="auth__last flex">
        Don’t have an account? <Link to="/auth/register">Register</Link>
      </div>
    </div>
  );
};

export default Password;
