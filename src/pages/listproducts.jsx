import { useEffect, useState } from 'react';
import { getProducts } from '../services/getProducts.js';
import CircularProgress from '@mui/material/CircularProgress';
import './listproducts.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardProducts from '../components/cardproducts/cardproducts.jsx';
import { useNavigate } from 'react-router-dom';
//import { getProductMockup } from '../mockup/getProductMockup.js';


const ListProducts = () => {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [listproducts, setlistproducts] = useState([]);
  

 const handleproducts = async() => {
    const response = await getProducts();
    console.log(response);
    setlistproducts(response);
    setIsLoading (false);
  };

 const handleRedirectToDetails= (cardproducts)=>{ 
  navigate(`/productos/${cardproducts?._id}`);

  } 

useEffect(() => {
setIsLoading(true);
setTimeout(() => {
  //setProducts(getProductMockup);
  setIsLoading(false);
},500)
},[]);

if(isloading){
  return <CircularProgress color="secondary" />

}
  return (
    <div
      className="listproducts">
      
 
        {!isloading && 
       listproducts.length > 0 &&
      listproducts.map((cardproduct) => (
          <CardProducts  key={cardproduct._id} cardproducts={cardproducts} handleRedirectToDetails={handleRedirectToDetails}/>
      ))
    }
    </div>

);
};
 export default ListProducts;