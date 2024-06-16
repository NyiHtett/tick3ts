import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  }

  const removeItem = (deleteItem) => {
    const updatedItem = items.filter((item) => item.name !== deleteItem.name);
    setItems(updatedItem);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)