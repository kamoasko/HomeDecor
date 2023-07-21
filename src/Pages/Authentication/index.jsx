import React from "react";
import "./auth-layout.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

const AuthLayout = () => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const isMobile = window.innerWidth <= 768;

  const getAuth = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication");
      if (res.ok) {
        const authImg = await res.json();
        setAuth(() => authImg);
      }
    } catch (e) {
      setError(() => e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAuth().then();
  }, []);

  const loginBg = { backgroundImage: `url(${auth.image})` };

  if (loading) {
    return <h3>LOADING......</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      {isMobile && <Nav />}
      <div className="auth ">
        <Outlet />
        <div
          className="auth__image"
          style={{ backgroundImage: `url(${loginBg})` }}
        ></div>
      </div>
      {isMobile && <Footer />}
    </>
  );
};

export default AuthLayout;
