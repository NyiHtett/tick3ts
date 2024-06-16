import React from "react";
import img from "../assets/logos.png";
import Main from "../pages/Main";
import { Router, Route, Routes, Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Nav = () => {
  const {items} = useCart();
  return (
    <nav>
      {/* logo image */}
      <Link to="/" class = "lemonLogo">
        <img src={img} width={200} style={{padding: "20px"}} alt="little lemon logo image" />
      </Link>

      {/* navigation links */}
      <div className="nav-links-group">
        <Link to="/" class="nav-item">
          Home
        </Link>
        <Link to="/About" className="nav-item">
          Attendees
        </Link>
        <Link to="/Menu" className="nav-item">
          List of Events
        </Link>
        <Link to="/Reserve" className="nav-item">
          Sign Up
        </Link>
        <Link to="/Metamask" className="nav-item">
          Metamask
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
