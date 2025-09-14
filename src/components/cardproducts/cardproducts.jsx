import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./cardproducts.css";
import Chip from '@mui/material/Chip';




const CardProducts = ({handleRedirectToDetails, cardproducts}) => {
  return (
    <Card className="cardstyle" onClick={() => handleRedirectToDetails(cardproducts)}>

        <CardContent
          sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
         alignItems: "center"
         }}
>

  <div className="productscontent">
          <Typography>{cardproducts?.nombre}</Typography>
          <Typography>{cardproducts?.descripcion}</Typography>
          <Typography>{cardproducts?.precio}</Typography>
               
            </div>
         <Chip label={cardproducts?.estado} color="success" />

        </CardContent>
    </Card>
  );
}
export default CardProducts;
