import React from "react";
import { useCart } from "../CartContext";

const Cart = () => {
  const { items, removeItem } = useCart([]);
  return (
    <div>
      {items.length > 0 && (
        <div>
          <div
            class="row m-3"
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          >
            {items.map((item) => {
              return (
                <div
                  class="card col-3"
                  style={{
                    width: "10%",
                    alignItems: "center",
                    padding: 0,
                    margin: 20,
                  }}
                >
                  <img
                    class="card-img-top"
                    src={item.image}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h5 class="card-title">${item.price}</h5>
                    <button
                      class="btn btn-dark"
                      onClick={() => removeItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div style={{ textAlign: "center", margin: "50px", fontSize: "32px" }}>
            total price: {}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Cart;
