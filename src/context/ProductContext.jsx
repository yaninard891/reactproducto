
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider=({children})=>{
const [products, setProducts]=useState([])
const [productSelected, setProductSelected] = useState();

useEffect(()=>{
    if(products.length >0) {
        localStorage.setItem("products", JSON.stringify(products));

    }

}, [products]);

useEffect(()=>{
    const newProducts= localStorage.getItem("products");
    const parseProducts= JSON.parse(newProducts);
    setProducts(parseProducts);
},[])

    return ( 
    <ProductContext.Provider value= {{ products, productSelected, setProductSelected}}>
        {children}
        
    </ProductContext.Provider>
    );
};