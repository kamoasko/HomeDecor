import React from "react";
import "./contact.css";
import SectionTitle from "../SectionTitle";
import ContacForm from "../ContactForm";
import { useState, useEffect } from "react";

function Contact() {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getContact = async () => {
    try {
      const res = await fetch("http://localhost:5000/contact");
      if (res.ok) {
        const contactData = await res.json();
        setContact(() => contactData);
        setLoading(false);
      } else {
        setLoading(false);
        throw Error("Networ error!!!");
      }
    } catch (e) {
      setError(() => e.message);
    }
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
    <section className="contact">
      <div className="container">
        <SectionTitle text="CONTACT" isLink={false} />
        <div className="contact__content flex">
          <div className="contact__form">
            <ContacForm />
          </div>
          <div className="contact__image">
            <img src={contact && contact.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
