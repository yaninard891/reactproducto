import {Chip, Button, Divider,Typography} from "@mui/material";
import { useProductSelected } from "../hooks/useProductSelected";
import "./products.css";
import { ChangeProductData } from "./ChangeProductData/ChangeProductData";


export const Product = () => {
    const {ProductSelected, id, open, setOpen} = useProductSelected();
   


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
    <Button tipe="Button" onClick={()=> setOpen(!open)}> 
      {""} Modificar </Button>
    </div>
  
    </div>
    <ChangeProductData open={open} ProductSelected={ProductSelected} productId={id} setOpen={setOpen}/>
    </div>
    );
};