import React from "react";
import img from "../assets/restaurantfood.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div class="HeroSection" style={{backgroundImage:{img}}}>
      <div class="HeroTextRegion d-flex flex-column">
        <h2>Tick3ts</h2>
        <h3>Modern Web3 Social app</h3>
        <p>
         A modern fancy website where you can purchase tickets while connecting with potential contacts and relationships!
        </p>
        <Link to="/Menu">
        <button type="button" class="btn btn-warning">
          Explore events
        </button>
        </Link>
      </div>

        
    </div>
  );
};

export default HeroSection;
