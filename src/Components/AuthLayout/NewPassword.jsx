import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";

const NewPassword = () => {
  return (
    <div className="authentication">
      <div className="auth__link flex">
        <Link to={-1} className="button flex">
          <FaArrowLeft />
        </Link>
        BACK
      </div>
      <div className="auth__main">
        <h3>NEW PASSWORD</h3>
        <form action="" className="auth__form">
          <input type="password" name="" placeholder="ENTER NEW PASSWORD" />
          <input type="password" name="" placeholder="CONFIRM PASSWORD" />
          <Buttons text="SUBMIT" link="/auth/login" />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
