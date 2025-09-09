import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./cardproducto.css";
import Chip from '@mui/material/Chip';




const CardProducto = ({cardproducto}) => {
  return (
    <Card className="cardstyle" key={cardproducto.id} >

        <CardContent
          sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
         alignItems: "center"
         }}
>

  <div className="productocontent">
          <Typography>{cardproducto?.nombre}</Typography>
          <Typography>{cardproducto?.descripcion}</Typography>
          <Typography>{cardproducto?.precio}</Typography>
               
            </div>
         <Chip label={cardproducto?.estado} color="success" />

        </CardContent>
    </Card>
  );
}
export default CardProducto;
