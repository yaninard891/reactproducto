import { useEffect } from "react";
import {useParams} from "react-router-dom"
//import { getProduct } from "../services/getProduct";
import { useState } from "react";
import {productSelectedMockup} from "../mockup/productSelectedMockup";
import {useProductContext} from "../context/ProductContext"

export const useProductSelected = () => {
 const {id} = useParams();
   const [ProductSelected, setProductSelected]= useProductContext();
    const [open, setOpen]=useState(false);


    
    const handleproducts = async() => {
       // const result = await getProduct(id);
        //setProductSelected(result);
        setProductSelected(productSelectedMockup)
    };
useEffect(()=> {
        handleproducts();
        //setProductSelected(productSelectedMockup)
        

    },
    [id]);

    return {
        ProductSelected,
        id,
        open, setOpen};
    };
