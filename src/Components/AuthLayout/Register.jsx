import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      id: Date.now(),
      fullname: fullname,
      email: email,
      password: password,
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (res.ok) {
        // Data added successfully
        setLoading(false);
        console.log("Data added successfully!");
      } else {
        // Handle errors if the request fails
        setLoading(false);
        throw new Error("Failed to add data!!!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <h1>LOADING......</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="authentication">
      <div className="auth__link flex">
        <Link to="/" className="button flex">
          <FaArrowLeft />
        </Link>
        HOME
      </div>
      <div className="auth__main">
        <h3>REGISTER</h3>
        <form onSubmit={handleSubmit} action="" className="auth__form">
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            name=""
            placeholder="NAME, SURNAME"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name=""
            placeholder="E-MAIL ADDRESS"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name=""
            placeholder="PASSWORD"
          />
          <input type="password" name="" placeholder="REPEAT PASSWORD" />
          <button className="btn flex" type="submit">
            LOG IN
          </button>
        </form>
      </div>
      <div className="auth__last flex">
        Already have an account? <Link to="/auth/login">Log in</Link>
      </div>
    </div>
  );
};

export default Register;
