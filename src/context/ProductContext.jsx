
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext= createContext();
export const useProductContext=()=> useContext(ProductContext);


export const ProductProvider=({children})=>{
const [product, setProduct]=useState([])
const [productSelected, setProductSelected] = useState();


useEffect(() => {
    const storedProducts = localStorage.getItem("product");

    try {
      const parsed = JSON.parse(storedProducts);
      if (Array.isArray(parsed)) {
        setProduct(parsed);
      }
    }catch (error) {
        console.error(error)
    }
  }, []);

  
  useEffect(() => {
    if (product.length > 0) {
      localStorage.setItem("product", JSON.stringify(product));
    }
  }, [product]);

return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        productSelected,
        setProductSelected,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
  };