import { Button, Card, CardHeader, CardContent, Stack, TextField, MenuItem, CircularProgress } from "@mui/material";
import { useLoadProduct } from "../../hooks/useLoadProduct";

import {CardProduct } from "../../components/cardproducts/cardproducts";




const initialState = {
    nombre:"",
    precio:"",
    cantidad:"",
    categoria:"",
    estado:"disponible",
    FechaDeIngreso:"",
    FechaDeVenta:"",
};

export const ESTADOS= ["disponible", "agotado"];


export const LoadProduct = () => {
    const {handleChange, handleSubmit, valueProduct, loading, products, handleRedirectToDetail} = useLoadProduct(initialState);

    return (
    <div>
        {products?.length>0 && products?.map((cardProduct)=>(
          <CardProduct
          cardProduct={cardProduct} 
          handleRedirectToDetail={handleRedirectToDetail}/>
        ))}
        <Card component="form" onSubmit={handleSubmit} noValidate >
        <CardHeader title="Nuevo Producto" subhader="Cargar un nuevo producto" />
        <CardContent>

            <Stack spacing={2}>
                <TextField 
                label="Nombre del producto"
                name="nombre"
                value={valueProduct.nombre}
                onChange={handleChange}
                required
                error="Ingresa un nombre valido"
                fullWidth
                />
                <TextField 
                label="Precio del producto"
                name="precio"
                value={valueProduct.precio}
                onChange={(e)=>handleChange(e)}
                required
                error="Ingresa un precio valido"
                fullWidth
                />
                <TextField 
                 label="Cantidad del producto"
                name="cantidad"
                value={valueProduct.cantidad}
                onChange={(e)=>handleChange(e)}
                required
                error="Ingresa una cantidad valida"
                fullWidth
                />
                <TextField 
                 label="Categoria del producto"
                name="categoria"
                value={valueProduct.categoria}
                onChange={(e)=>handleChange(e)}
                required
                error="Ingresa una categoria valida"
                fullWidth
                />
                <TextField
                select
                 label="Estado del producto"
                name="estado"
                value={valueProduct.estado}
                onChange={handleChange}
                required
                error="Ingresa un nombre valido"
                fullWidth
                >
                    {ESTADOS.map((opt) => {
                        return (<MenuItem key={opt} value={opt}>{opt}</MenuItem>);
                    })}
                </TextField>
                <Button type="button" variant="text" disabled={loading}>Limpiar</Button>
                <Button type="submit" variant="text" disabled={loading}>
                    {loading ? <CircularProgress/> : "Enviar"}
                </Button>
                
            
            </Stack>
        </CardContent>
    </Card>;
    </div>
   );
};