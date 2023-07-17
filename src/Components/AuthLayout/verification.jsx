import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";

const Verification = () => {
  return (
    <div className="authentication">
      <div className="auth__link flex">
        <Link to={-1} className="button flex">
          <FaArrowLeft />
        </Link>
        BACK
      </div>
      <div className="auth__main">
        <h3>VERIFICATION</h3>
        <form action="" className="auth__form">
          <input
            type="number"
            name=""
            placeholder="ENTER VERIFICATION NUMBER"
          />
          <div className="auth__last flex">
            Didn’t receive a code? <Link to="/auth/verification">Resend</Link>
          </div>
          <Buttons text="VERIFY" link="/auth/newpassword" />
        </form>
      </div>
    </div>
  );
};

export default Verification;
