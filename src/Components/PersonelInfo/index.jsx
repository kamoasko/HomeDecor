import React from "react";
import "./personel-info.css";

const PersonelInfo = () => {
    return (
    <>
      <p className="subtitle">PERSONAL INFORMATION</p>
      <div className="personel__form flex">
        <form className="personel__form-side">
          <input type="text" className="personel__inp" placeholder="NAME" />
          <input
            type="email"
            className="personel__inp"
            placeholder="youremailhere@gmail.com"
          />
          <input
            type="text"
            className="personel__inp"
            placeholder="CITY, STREET"
          />
        </form>
        <form className="personel__form-side">
          <input type="text" className="personel__inp" placeholder="SURNAME" />
          <input
            type="tel"
            className="personel__inp"
            placeholder="+ 994 (__) ___ __ __"
          />
          <input
            type="text"
            className="personel__inp"
            placeholder="POSTAL CODE"
          />
        </form>
      </div>
    </>
  );
};

export default PersonelInfo;
