import React from "react";
import ProductContext from "./ProductContext";
import { useState } from "react";
const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider
