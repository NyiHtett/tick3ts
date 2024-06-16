import React, { useEffect } from "react";
import "./SpecialSection.css";
import { SpecialDishes } from "../utils/SpecialDishes";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
const SpecialSection = () => {
  const { item, addItem } = useCart();
  return (
    <div>
      <div class="specialTextRegion">
        <h3>Specials</h3>
        <Link to="/Menu" type="button" class="btn btn-dark">
          Online Menu
        </Link>
      </div>
      <div class="container">
        <div class="specialDishes row">
          {/* display dishes using manual database and the concept of data structure for code effiency */}
          {SpecialDishes.map((dish) => {
            return (
              <div
                class="card col-4"
                key={dish.id}
                style={{ width: "18rem", padding: 0 }}
              >
                <img
                  class="card-img-top"
                  src={dish.image}
                  alt="Card image cap"
                  height={200}
                />
                <div class="card-body">
                  <h5 class="card-title">{dish.title}</h5>
                  <p class="card-text">{dish.description}</p>
                  <a
                    href="#"
                    class="btn btn-dark"
                    onClick={() => {
                      addItem(dish);
                      alert(dish.name + " is added to the cart");
                    }}
                  >
                    Add to the cart
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
