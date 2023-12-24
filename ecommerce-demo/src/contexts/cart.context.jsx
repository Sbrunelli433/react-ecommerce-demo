import { createContext, useState, useEffect } from "react";

// as the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
});

// cart provider is the functional component
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const value = { isCartOpen, setIsCartOpen};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
