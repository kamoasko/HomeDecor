import React from "react";
import "./contact-page.css";
import Breadcrumb from "../../Components/Breadcrumb";
import contact from "../../assets/images/Contact/contact.png";
import ContacForm from "../../Components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb />
      <section className="contact-page">
        <div className="container">
          <h2>CONTACT</h2>
          <div className="contact__content flex">
            <div className="contact__form">
              <ContacForm />
            </div>
            <div className="contact__image">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
