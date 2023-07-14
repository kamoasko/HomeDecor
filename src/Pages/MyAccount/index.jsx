import React from "react";
import "./my-account.css";
import Breadcrumb from "../../Components/Breadcrumb";
import { FaUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import AccountForm from "../../Components/AccountForm";
import WishlistCard from "../../Components/WishlistCard";

const MyAccount = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container">
        <section className="account flex">
          <div className="account__left">
            <p className="my-account">MY ACCOUNT</p>
            <ul className="account__items">
              <li>
                <NavLink className="account__items-list flex">
                  <FaUser /> PERSONAL INFORMATION
                </NavLink>
              </li>
              <li>
                <NavLink className="account__items-list flex">
                  <AiOutlineHeart /> WISHLIST
                </NavLink>
              </li>
              <li>
                <NavLink className="account__items-list ail flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17"
                      stroke="#2D2D2B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                      stroke="#2D2D2B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  LOG OUT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="account__right">
            {/* <AccountForm /> */}
            <WishlistCard />
            {/* {useLocation().pathname == "/my-account" ? (
              <AccountForm />
            ) : (
              <WishlistCard />
            )} */}
          </div>
        </section>
      </div>
    </>
  );
};

export default MyAccount;
