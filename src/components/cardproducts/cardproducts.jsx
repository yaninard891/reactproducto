import {Card, CardContent, Chip, Typography} from '@mui/material';


import "./cardproducts.css";




export const CardProduct = ({handleRedirectToDetails, cardproduct}) => {
  return (
    <Card className="cardstyle" key={cardproduct._id} onClick={() => handleRedirectToDetails(cardproduct)}>

        <CardContent
          sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "center",
         alignItems: "flex-start"
         }}
>

  <div className="productContent">
          <Typography>{cardproduct?.nombre}</Typography>
          <Typography>{cardproduct?.descripcion}</Typography>
          <Typography>{cardproduct?.precio}</Typography>
               
            </div>
         <Chip label={cardproduct?.estado} color="success" />

        </CardContent>
    </Card>
  );
};

