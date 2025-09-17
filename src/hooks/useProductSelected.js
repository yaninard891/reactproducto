import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { getProduct } from "../services/getProduct";
import { useState } from "react";


export const useProductSelected = () => {
 const {id} = useParams();
    const [ProductSelected, setproductSelected]= useState();
    

    useEffect(() => {
    const handleproducts = async() => {
        const result = await getProduct(id);
        setproductSelected(result);
    };

        handleproducts();
    },
    [id]);

    return {
        ProductSelected,
        setproductSelected
    }
}