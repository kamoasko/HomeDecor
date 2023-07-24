import React, { useState } from "react";
import "./card-info.css";
import Buttons from "../../Components/Buttons";
import Overlay from "../Overlay";
import { GrClose } from "react-icons/gr";

const CardInfo = () => {
  const [isvisible, setIsvisible] = useState(false);

  return (
    <>
      <p className="subtitle">CARD INFORMATION</p>
      <form action="" className="card__form">
        <input type="number" placeholder="CARD NUMBER" />
        <input type="date" placeholder="EXPIRY DATE" />
        <input type="number" placeholder="CW" />
        <button
          type="button"
          onClick={() => {
            setIsvisible(true);
          }}
          className="btn flex"
        >
          FINISH ORDER
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
              <p>YOUR ORDER IS COMPLETE!</p>
              <span>
                You will be receiving a confirmation email with order details.
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
};

export default CardInfo;
