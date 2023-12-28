import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase.utils.js";
import SHOP_DATA from '../shop-data.js';

// as the actual value you want to access
export const ProductsContext = createContext({
    products: [],
});

// product provider is the functional component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  //use async function in useEffect()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    }
    getCategoriesMap();
  }, []);

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
