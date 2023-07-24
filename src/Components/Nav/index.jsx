import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/images/Header/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import Overlay from "../Overlay";
import { GrClose } from "react-icons/gr";

function Nav({ menu, setMenu }) {
  let menuClass = menu ? "nav__menu active" : "nav__menu";
  let hamburgerClass = menu ? "hamburger active" : "hamburger";
  let cartClass = menu ? "nav__icon1 active" : "nav__icon1";
  let userClass = menu ? "nav__icon2 active" : "nav__icon2";
  let langsClass = menu ? "hamburger__langs active" : "hamburger__langs";
  let logoClass = menu ? "navtop__logo active" : "navtop__logo";
  let searchClass = menu ? "search active" : "search";
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="header">
      {isVisible && (
        <Overlay>
          <div className="search__area">
            <span className="search__icon">
              <CiSearch />
            </span>
            <input
              type="search"
              className="search__active"
              placeholder="SEARCH OUR STORE"
            />
            <button
              onClick={() => setIsVisible(false)}
              className="search__close"
            >
              <GrClose />
            </button>
          </div>
        </Overlay>
      )}
      <div className="container">
        <div className="navtop flex">
          <div className="navtop__left flex">
            <button className="lang">Az</button>
            <button onClick={() => setIsVisible(true)} className="search">
              <CiSearch />
            </button>
          </div>
          <Link to="/" className={logoClass}>
            <img src={logo} />
          </Link>
          <div className="navtop__right flex">
            <button onClick={() => setIsVisible(true)} className={searchClass}>
              <CiSearch />
            </button>
            <div
              className={hamburgerClass}
              onClick={() => setMenu((prev) => !prev)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <Link className={cartClass} to="/shopping-cart">
              <BsCart2 />
            </Link>
            <Link className={userClass} to="/auth/login">
              <FaRegUser />
            </Link>
          </div>
        </div>
        <nav className="nav">
          <ul className={`flex ${menuClass}`}>
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
        <div className={langsClass}>
          <NavLink to="/">Az</NavLink>
          <NavLink to="/about">En</NavLink>
          <NavLink to="/contact">Ru</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Nav;
