import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase.utils.js";
import SHOP_DATA from '../shop-data.js';

// as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
});

// product provider is the functional component
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //use async function in useEffect()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// pseudo code to show what the functional component will do
// <UserProvider>
//     <App />
// </UserProvider>
