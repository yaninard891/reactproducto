import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { getProduct } from "../services/getProduct";
import { useState } from "react";


export const useProductSelected = () => {
 const {id} = useParams();
   //const [ProductSelected, setproductSelected]= useProductContext();
    const [open, setOpen]=useState(false);


    
    const handleproducts = async() => {
        const result = await getProduct(id);
        setproductSelected(result);
    };
useEffect(()=> {
        handleproducts();

    },
    [id]);

    return {
        ProductSelected,
        id,
        open, setOpen};
    };
