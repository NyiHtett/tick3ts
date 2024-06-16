import React, { useState } from "react";
import { Catalog } from "../utils/Catalog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MenuSection.css";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
const MenuSection = () => {
  const [catalog, pickCatalog] = useState(1);
  const { items, addItem } = useCart([]);
  return (
    <div class="container d-flex flex-row" style={{ margin: 0, padding: 0 }}>
      <div class="panel1 col-4" style={{ backgroundColor: "#edefee" }}>
        <div class="d-flex flex-column">
          {Catalog.map((item) => {
            return (
              <div
                class={`MenuSectionCatalog ${
                  catalog == item.id ? "ClickedMenuCatalog" : ""
                }`}
                key={item.id}
                onClick={() => {
                  pickCatalog(item.id);
                }}
              >
                <img src={item.icon} /> {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div class="panel2 col-8">
        {/* checking if one catagory with specific number is picked */}
        <div class="row" style={{ padding: 0, margin: 0 }}>
          {Catalog.map(
            (item) =>
              item.id === catalog && (
                <>
                  <img src={item.image} style={{width:"400px"}}/> 
                  <h3> Description </h3>
                  <p> {item.description} </p>

                  <h3> Time </h3>
                  <p> {item.time} </p>

                  <h3> Place </h3>
                  <p> {item.place} </p>

                  <h3> Cost </h3>
                  <p> {item.cost} </p>

                  
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
