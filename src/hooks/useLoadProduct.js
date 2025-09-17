import { useState } from "react";
import { postProducts } from "../services/postProducts";


export const useLoadProduct = (initialState) => {
const [valueProduct, setValueProduct] = useState(initialState);
    const[loading, setLoading] = useState(false);
    const ESTADOS=[ "Disponible", "Agotado"];

const handleChange = (e) => {
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
        // FechaDeIngreso: new Date().toISOString(),
        // FechaDeVenta: null,
    };
    setLoading(true);
    await postProducts(body);
    setLoading(false);
    setValueProduct(initialState);
    }   catch (error) {
        console.error(error);
        setLoading(false);
    }

} 

    return{handleSubmit, handleChange, valueProduct, loading};
}