import React from "react";
import "./contact-form.css";
import Buttons from "../Buttons";

function ContacForm() {
  return (
    <form action="" className="form">
      <div className="form__inputs">
        <input
          type="text"
          name=""
          placeholder="NAME, SURNAME"
          className="contact__inp ci"
        />
        <input
          type="email"
          name=""
          placeholder="E-MAIL ADRESS"
          className="contact__inp ci"
        />
        <input
          type="text"
          name=""
          placeholder="THEME"
          className="contact__inp ci"
        />
        <textarea
          name=""
          className="contact__inp "
          cols="50"
          rows="5"
          placeholder="YOUR MESSAGE"
        ></textarea>
      </div>
      <Buttons text="LOGIN" icon={false} />
    </form>
  );
}

export default ContacForm;
