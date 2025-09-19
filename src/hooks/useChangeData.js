import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {useProductContext} from "../context/ProductContext";



const initialState = {
    nombre:"",
    precio:"",
    cantidad:"",
    categoria:"",
    estado:"disponible",
    FechaIngreso: dayjs(new Date()),
    FechaVenta: dayjs(new Date()),
};
export const useChangeData = (productSelected, productId) => {
    const [productToModify, setproductToModify]= useState(initialState);
    const { setProduct, setProductSelected, product}= useProductContext();
    const handleChange=(e, isFromDate)=>{
        if(isFromDate){
            setproductToModify((v)=>({...v,
                FechaIngreso: dayjs(e),
                FechaVenta: dayjs(e),
            }));
            return;
        }
        const {name, value}= e.target;
        setproductToModify((v)=>({ ...v, [name]: value}));

        };

        const handleSubmit=async(e)=>{
            e.preventDefault();
            try{
                const body={
        nombre: productToModify.nombre.trim(),
        precio: Number(productToModify.precio.trim()),
        cantidad: Number(productToModify.cantidad.trim()),
        categoria: productToModify.categoria.trim(),
        estado: productToModify.estado,
        FechaIngreso: productToModify.FechaIngreso.toISOString(),
        FechaVenta: productToModify.FechaVenta.toISOString(),
                };

                const updatedProducts= product.map((p)=>
                p._id === productId ? {...p, ...body}:p);

                //await putProduct (productId, body);
                setProduct(updatedProducts)
                setProductSelected((product)=>({
                    ...product,
                    ...body,
                }));
                console.log("Producto actualizado:", product);

                setproductToModify(initialState);
            } catch (error) {
                console.error(error);
            
            }
            };

    useEffect(()=>{
        const newFechaIngreso= dayjs(productSelected?.FechaIngreso);
        const newFechaVenta= dayjs(productSelected?.FechaDeVenta);

        setproductToModify((prev)=>({
            ...prev,
            ...productSelected,
            FechaIngreso: newFechaIngreso ?? null,
            FechaVenta: newFechaVenta ?? null,
        }));
    }, 
    [productSelected]);

    return{
productToModify,
handleChange, handleSubmit, setproductToModify};
};