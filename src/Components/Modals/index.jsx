import React from "react";
import "./modal.css";
import Buttons from "../Buttons";
import { GrClose } from "react-icons/gr";

const Modal = () => {
  return (
    <div className="modal">
      <button className="modal__close">
        <GrClose />
      </button>
      <p>THANK YOU!</p>
      <span>
        Your message has been received and we will contact you as soon as
        possible.
      </span>
      <div className="homepage flex">
        <Buttons text="HOME PAGE" icon={false} />
      </div>
    </div>
  );
};

export default Modal;
