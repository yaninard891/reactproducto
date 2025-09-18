
import { createContext, useContext, useEffect, useState } from "react";


export const ProductContext= createContext();
export const useProductContext=()=> useContext(ProductContext);


export const ProductProvider=({children})=>{
const [products, setProducts]=useState([])
const [productSelected, setProductSelected] = useState();


useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    try {
      const parsed = JSON.parse(storedProducts);
      if (Array.isArray(parsed)) {
        setProducts(parsed);
      }
    }catch (error) {
        console.error(error)
    }
  }, []);

  
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        productSelected,
        setProductSelected,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
  };