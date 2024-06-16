import React from "react";
import img from "../assets/restaurantfood.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div class="HeroSection" style={{backgroundImage:{img}}}>
      <div class="HeroTextRegion d-flex flex-column">
        <h2>Little Lemon</h2>
        <h3>California</h3>
        <p>
          A family bussiness serving clients with authentic American foods,
          coupled with modern dishes !
        </p>
        <Link to="/Reserve">
        <button type="button" class="btn btn-warning">
          Reserve a table
        </button>
        </Link>
      </div>

        <img
          class="restaurantImage"
          src={img}
          alt="restaurant indoor image"
          height={300}
        />
    </div>
  );
};

export default HeroSection;
