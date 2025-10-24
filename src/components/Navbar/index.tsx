import { useState } from "react";
import SCLogo from "../../images/SCLogo.png";

import "./style.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <div className="logo-container">
          <img src={SCLogo} className="logo" alt="Super Clean logo" />
        </div>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsExpanded((prev) => !prev);
        }}
      >
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>
      <div
        className={isExpanded ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li onClick={() => setIsExpanded(false)}>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li onClick={() => setIsExpanded(false)}>
            <NavLink to="/services">SERVICES</NavLink>
          </li>
          <li onClick={() => setIsExpanded(false)}>
            <NavLink to="/clients">OUR CLIENTS</NavLink>
          </li>
          <li onClick={() => setIsExpanded(false)}>
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
