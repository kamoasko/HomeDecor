import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/images/Header/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

function Nav({ menu, setMenu }) {
  let menuClass = menu ? "nav__menu active" : "nav__menu";
  let hamburgerClass = menu ? "hamburger active" : "hamburger";
  let cartClass = menu ? "nav__icon1 active" : "nav__icon1";
  let userClass = menu ? "nav__icon2 active" : "nav__icon2";
  let langsClass = menu ? "hamburger__langs active" : "hamburger__langs";
  let logoClass = menu ? "navtop__logo active" : "navtop__logo";
  let searchClass = menu ? "search active" : "search";
  // let openMobMenu = () => {};

  return (
    <header className="header container">
      <div className="navtop flex">
        <div className="navtop__left flex">
          <button className="lang">Az</button>
          <button className="search">
            <CiSearch />
          </button>
        </div>
        <div className={logoClass}>
          <img src={logo} />
        </div>
        <div className="navtop__right flex">
          <button className={searchClass}>
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
    </header>
  );
}

export default Nav;
