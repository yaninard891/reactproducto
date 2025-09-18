import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {useProductContext} from "../context/ProductContext";



const initialState = {
    nombre:"",
    precio:"",
    cantidad:"",
    categoria:"",
    estado:"disponible",
    FechaDeIngreso: dayjs(new Date()),
    FechaDeVenta: dayjs(new Date()),
};
export const useChangeData = (productSelected, productId) => {
    const [productToModify, setproductToModify]= useState(initialState);
    const {setProductSelected}= useProductContext();
    const handleChange=(e, isFromDate)=>{
        if(isFromDate){
            setproductToModify((v)=>({...v,
                FechaDeIngreso: dayjs(e),
                FechaDeVenta: dayjs(e),
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
        FechaDeIngreso: productToModify.FechaDeIngreso.toISOString(),
        FechaDeVenta: productToModify.FechaDeVenta.toISOString(),
                };
                //await putProduct (productId, body);
                setProductSelected((product)=>({
                    ...product,
                    ...body,
                }));
                setproductToModify(initialState);
            } catch (error) {
                console.error(error);
            
            }
            };

    useEffect(()=>{
        const newFechaIngreso= dayjs(productSelected?.newFechaIngreso);
        const newFechaVenta= dayjs(productSelected?.FechaDeVenta);

        setproductToModify((prev)=>({
            ...prev,
            ...productSelected,
            FechaDeIngreso: newFechaIngreso ?? null,
            FechaDeVenta: newFechaVenta ?? null,
        }));
    }, 
    [productSelected]);

    return{
productToModify,
handleChange, handleSubmit, setproductToModify};
};