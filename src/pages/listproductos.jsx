import { useEffect, useState } from 'react';
import { getProductos } from '../services/get';
import CircularProgress from '@mui/material/CircularProgress';
import './listproductos.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardProducto from '../components/cardproducto/cardproducto.jsx';



const ListProducto = () => {
  const [isloading, setIsLoading] = useState(false);
  const [listproductos, setlistproductos] = useState([]);
  

  const handleproductos = async() => {
    const response = await getProductos();
    console.log(response);
    setlistproductos(response);
    setIsLoading (false);
  };

useEffect(() => {
setIsLoading(true);
    handleproductos();
}, []);

if(isloading){
  return <CircularProgress color="secondary" />

}
  return (
    <div
      className="listproductos">
      
 
        {!isloading && 
        listproductos.length>0 && 
        listproductos?.map((cardproducto)=>(
          <CardProducto key={cardproducto._id} cardproducto={cardproducto}/>
        ))}
    </div>

);
};
export default ListProducto;