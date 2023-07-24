import React, { useState } from "react";
import "./contact-form.css";
import Buttons from "../Buttons";
import Overlay from "../Overlay";
import { GrClose } from "react-icons/gr";
import { useLocation } from "react-router-dom";

function ContacForm() {
  const [isvisible, setIsvisible] = useState(false);

  return (
    <>
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
        <button
          type="button"
          onClick={() => {
            setIsvisible(true);
          }}
          className="btn flex"
        >
          LOGIN
        </button>
      </form>

      {isvisible && (
        <Overlay isModal={true}>
          <div className="modal__cont">
            <div className="modal">
              <button
                onClick={() => setIsvisible(false)}
                className="modal__close"
              >
                <GrClose />
              </button>
              <p>THANK YOU!</p>
              <span>
                Your message has been received and we will contact you as soon
                as possible.
              </span>
              <div className="homepage flex">
                <Buttons text="HOME PAGE" icon={false} link="/" />
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
}

export default ContacForm;
