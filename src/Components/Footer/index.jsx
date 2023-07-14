import React from "react";
import "./footer.css";
import footerLogo from "../../assets/images/Footer/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top flex">
          <div className="footer__logo">
            <img src={footerLogo} />
          </div>
          <p className="footer__info">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui{" "}
          </p>
          <span>+994 50 555 55 55</span>
          <span>youremailhere@gmail.com</span>
        </div>
        <div className="footer__copyrights">
          &copy; 2022 All Right Reserved. Developed by Webcoder Agency
        </div>
      </div>
    </footer>
  );
}

export default Footer;
