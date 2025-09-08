import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./cardproducto.css";


const CardProducto = ({cardproducto}) => {
  return (
    <card classname="cardstyle" key={cardproducto.id} >

        <CardContent
          sx={{displey: "flex", flexdirection: "column", gap: "10px", justifycontent: "center", alignitems: "center"}}>

            <div classname="productocontent">
            <Typography>{cardproducto?.nombre}</Typography>
          <Typography>{cardproducto?.descripcion}</Typography>
          <Typography>{cardproducto?.precio}</Typography>
               
            </div>
         <Chip label={cardproducto?.estado} color="success" />

        </CardContent>
    </card>
  );
}
export default CardProducto;
