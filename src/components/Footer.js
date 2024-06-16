import React from "react";
import logo from "../assets/Footer.png";
import facebookLogo from "../assets/socialLogos/facebook.png";
import InstagramLogo from "../assets/socialLogos/instagram.png";
import linkedInLogo from "../assets/socialLogos/linkedIn.png";
import githubLogo from "../assets/socialLogos/github.png";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="footer">
      <img src={logo} alt="little lemon logo" />
      <div class="footer-nav-group">
        <div class="navbar">
          <h5>Doormat Navigation</h5>
          <Link to="/" class="footer-nav-item">
            Home
          </Link>
          <Link to="/About" class="footer-nav-item">
            About
          </Link>
          <Link to="/Menu" class="footer-nav-item">
            Menu
          </Link>
          <Link to="/Reserve" class="footer-nav-item">
            Reserve
          </Link>
        </div>
        <div class="navbar">
          <h5>Contact</h5>
          <Link to="/" class="footer-nav-item">
            Address
          </Link>
          <Link to="/About" class="footer-nav-item">
            Phone
          </Link>
          <Link to="/Menu" class="footer-nav-item">
            Email
          </Link>
          <Link to="/Menu" class="footer-nav-item">
            Appointment
          </Link>
        </div>
        <div class="navbar">
          <h5>Social Media Links</h5>
          <div class="logoGroup">
          <Link to="https://www.facebook.com/profile.php?id=100038146481288" class="footer-nav-item" target="_blank">
            <img src={facebookLogo} alt="facebook link"/>
          </Link>
          <Link to="https://www.instagram.com/sam_oayi/" class="footer-nav-item" target="_blank">
            <img src={InstagramLogo} alt="instagram link"/>
          </Link>
          <Link to="https://www.linkedin.com/in/nyi-htet-a10469261/" class="footer-nav-item" target="_blank">
            <img src={linkedInLogo} alt="linkedIn link" />
          </Link>
          <Link to="https://github.com/NyiHtett" class="footer-nav-item" target="_blank">
            <img src={githubLogo} alt="github link"/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
