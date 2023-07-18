import React from "react";
import "./contact-page.css";
import Breadcrumb from "../../Components/Breadcrumb";
import ContacForm from "../../Components/ContactForm";
import { useState } from "react";
import { useEffect } from "react";

const ContactPage = () => {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getContact = async () => {
    try {
      const res = await fetch("http://localhost:5000/contact");
      if (res.ok) {
        const contactImg = await res.json();
        setContact(() => contactImg);
      }
    } catch (e) {
      setError(() => e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getContact().then();
  }, []);

  if (loading) {
    return <h3>LOADING......</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

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
              <img src={contact.image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
