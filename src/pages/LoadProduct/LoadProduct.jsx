import { Button, Card, CardHeader, CardContent, Stack, TextField, MenuItem, CircularProgress } from "@mui/material";
import { useLoadProduct } from "../../hooks/useLoadProduct";



const initialState = {
    nombre:"",
    precio:"",
    cantidad:"",
    categoria:"",
    estado:"disponible",
    FechaDeIngreso:"",
    FechaDeVenta:"",
};

const ESTADOS=[ "disponible", "agotado"];

export const LoadProduct = () => {
    const {handleChange, handleSubmit, valueProduct, loading} = useLoadProduct(initialState);


    return <Card component="form" onSubmit={handleSubmit} noValidate >
        <CardHeader title="Nuevo Producto" subhader="Cargar un nuevo producto" onSubmit={handleSubmit}/>
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
                onChange={handleChange}
                required
                error="Ingresa un precio valido"
                fullWidth
                />
                <TextField 
                 label="Cantidad del producto"
                name="cantidad"
                value={valueProduct.cantidad}
                onChange={handleChange}
                required
                error="Ingresa una cantidad valida"
                fullWidth
                />
                <TextField 
                 label="Categoria del producto"
                name="categoria"
                value={valueProduct.categoria}
                onChange={handleChange}
                required
                error="Ingresa una categoria valida"
                fullWidth
                />
                <TextField
                select
                 label="Estado del producto"
                name="Estado"
                value={valueProduct.estado}
                onChange={handleChange}
                required
                error="Ingresa un nombre valido"
                fullWidth
                >
                    {ESTADOS.map((opt) => {
                        return <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                    })}
                </TextField>
                <Button type="button" variant="text" disabled={loading}>Limpiar</Button>
                <Button type="submit" variant="text" disabled={loading}>
                    {loading ? <CircularProgress/> : "Enviar"}
                </Button>
                
            
            </Stack>
        </CardContent>
    </Card>;
};