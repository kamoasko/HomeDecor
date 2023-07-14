import React from "react";
import "./contact.css";
import SectionTitle from "../SectionTitle";
import ContacForm from "../ContactForm";
import contact from "../../assets/images/Contact/contact.png";
import Modal from "../Modals";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <SectionTitle text="CONTACT" isLink={false} />
        <div className="contact__content flex">
          <div className="contact__form">
            <ContacForm />
          </div>
          <div className="contact__image">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
      {/* <Modal /> */}
    </section>
  );
}

export default Contact;
