import { createContext, useState, useEffect } from "react";
import PRODUCTS from '../shop-data.json';

// as the actual value you want to access
export const ProductsContext = createContext({
    products: [],
});

// product provider is the functional component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// pseudo code to show what the functional component will do
// <UserProvider>
//     <App />
// </UserProvider>
