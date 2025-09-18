import { useState } from "react";
//import { postProducts } from "../services/postProducts";
import {useNavigate} from "react-router";

import {useProductContext} from "../context/ProductContext";


export const useLoadProduct = (initialState) => {
    const navigate= useNavigate();
const [valueProduct, setValueProduct] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const {product, setProduct}= useProductContext();
   

const handleChange = (e) => {
    console.log(e.target);
    const {name, value} = e.target;
    setValueProduct((v) => ({...v, [name]: value}));
}

const handleSubmit = async(e) => {
    e.preventDefault();

 try {
    const body={
        nombre: valueProduct.nombre.trim(),
        precio: Number(valueProduct.precio.trim()),
        cantidad: Number(valueProduct.cantidad.trim()),
        categoria: valueProduct.categoria.trim(),
        estado: valueProduct.estado,
        //FechaDeIngreso: productToModify.FechaDeIngreso.toISOString(),
        //FechaDeVenta: productToModify.FechaDeVenta.toISOString(),
    };
    setLoading(true);
    //await postProducts(body);
    setLoading(false);
    setProduct ((prevProduct)=>[body, ...prevProduct])
    setValueProduct(initialState);
    }   catch (error) {
        console.error(error);
        setLoading(false);
    }

} ;
const handleRedirectToDetail=(cardProduct)=>{
    console.log(cardProduct);
    navigate(`/product/${cardProduct?._id}`);

}

    return{handleSubmit, handleChange, valueProduct, loading, products, handleRedirectToDetail};
};