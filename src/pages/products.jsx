import {Chip, Divider,Typography} from "@mui/material";
import { useProductSelected } from "../hooks/useProductSelected";
import "./products.css";


export const Products = () => {
    const {ProductSelected} = useProductSelected();
   

console.log(ProductSelected);

    return (
    <div className="conteiner">
      <div className="cardProductSelected">
       <div className="conteinerTitle">

      <Typography> {ProductSelected?.nombre} - {ProductSelected?.precio} </Typography>  
      <Typography> {ProductSelected?.categoria} </Typography>
    </div>
    
    <Divider/>
    <div className="conteinerTitle">
    <Chip label={ProductSelected?.estado} color="success" />
    </div>
    </div>
    </div>
    )
};