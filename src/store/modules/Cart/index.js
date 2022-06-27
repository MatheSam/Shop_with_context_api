import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const cartAdd = (product) => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, cartAdd, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
