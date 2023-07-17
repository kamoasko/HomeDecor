import React from "react";
import "./nav.css";
import logo from "../../assets/images/Header/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

function Nav() {
  return (
    <header className="header container">
      <div className="navtop flex">
        <div className="navtop__left flex">
          <button className="lang">Az</button>
          <button className="search">
            <CiSearch />
          </button>
        </div>
        <div className="navtop__logo">
          <img src={logo} />
        </div>
        <div className="navtop__right flex">
          <button className="search">
            <CiSearch />
          </button>
          <div className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <Link to="/shopping-cart">
            <BsCart2 />
          </Link>
          <Link to="/auth/login">
            <FaRegUser />
          </Link>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav__menu flex">
          <li className="nav__menu-item ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/collections">Collections</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
