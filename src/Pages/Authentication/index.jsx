import React from "react";
import "./auth-layout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

const AuthLayout = () => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isMobile = window.innerWidth <= 768;

  const getAuth = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication");
      if (res.ok) {
        const authImg = await res.json();
        setAuth(() => authImg);
        setLoading(false);
      } else {
        setLoading(false);
        throw Error("Network error!!!");
      }
    } catch (e) {
      setError(() => e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("isLogged")) {
      navigate("/account/personal");
    } else {
      navigate("/auth/login");
    }
    getAuth();
  }, []);

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
          style={{ backgroundImage: `url(${auth.image})` }}
        ></div>
      </div>
      {isMobile && <Footer />}
    </>
  );
};

export default AuthLayout;
