import { createContext, useEffect, useState } from "react";
import api from "../../../Assets";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api
      .get("products")
      .then((resp) => setProduct(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};
