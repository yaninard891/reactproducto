import {Button, Select, Card, CircularProgress ,Dialog,MenuItem,Stack,TextField,} from "@mui/material";
import { ESTADOS } from "../LoadProduct/LoadProduct";
import { DatePicker } from "@mui/x-date-pickers";
import { useChangeData } from "../../hooks/useChangeData";


export const ChangeProductData = ({open, productId, productSelected, setOpen}) => {
const {productToModify, handleChange, handleSubmit}= useChangeData(productSelected, productId);
const isFromDate= true;
     
    return (
        <Dialog open={open} onClose={() => setOpen(!open)} >
     <Card component={"form"} onSubmit={handleSubmit} sx={{ minWidth: 275 }}

>
        <Stack spacing={1} >
                    <TextField 
                    label="Nombre del producto"
                    name="nombre"
                    value={productToModify?.nombre}
                    onChange={(e)=>handleChange(e)}
                    required
                    error="Ingresa un nombre valido"
                    fullWidth
                    />
                    <TextField 
                    label="Precio del producto"
                    name="precio"
                    value={productToModify?.precio}
                    onChange={(e)=>handleChange(e)}
                    required
                    error="Ingresa un precio valido"
                    fullWidth
                    />
                    <TextField 
                     label="Cantidad del producto"
                    name="cantidad"
                    value={productToModify?.cantidad}
                    onChange={(e)=>handleChange(e)}
                    required
                    error="Ingresa una cantidad valida"
                    fullWidth
                    />
                    <TextField 
                     label="Categoria del producto"
                    name="categoria"
                    value={productToModify?.categoria}
                    onChange={(e)=>handleChange(e)}
                    required
                    error="Ingresa una categoria valida"
                    fullWidth
                    />
                    <DatePicker
            label="fechaIngreso"
            name="fechaIngreso"
            value={productToModify?.fechaIngreso}
            onChange={(newDate) => handleChange(newDate, isFromDate)}
          />
          <DatePicker
        
            label="fechaVenta"
            name="fechaVenta"
            value={productToModify?.fechaVenta}
            onChange={(newDate) => handleChange(newDate, isFromDate)}
          />
        
                    <TextField
                    select
                     label="Estado del producto"
                    name="estado"
                    value={productToModify?.estado}
                    onChange={handleChange}
                    required
                    
                    fullWidth
                    >
                        {ESTADOS.map((opt) => {
                            return(
                            <MenuItem key={opt} value={opt}>{opt}</MenuItem>);
                        })
                        }

                    </TextField>
                    <Button type="button" variant="text" disabled={false}>Limpiar</Button>
                    <Button type="submit" variant="text" disabled={false}>
                        {"Enviar"}
                    </Button>
                    </Stack>

                    </Card>

                </Dialog>
                );
                };
