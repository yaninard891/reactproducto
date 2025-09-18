import { useEffect, useState } from 'react';


import './listproducts.css';
import { Card, CardContent, CircularProgress, Typography} from "@mui/material";

import { useNavigate } from 'react-router';
import { getProductMockup } from '../mockup/getProductMockup';
import {useProductContext} from "../context/ProductContext";
import {STATE, useThemeContext} from "../context/ThemeContext";


export const ListProducts() {
  const {theme}= useThemeContext();
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const {products, setProducts}=useProductContext();

  


  /*const handleproducts = async () => {
    const response = await getProducts();
    console.log(response);
    setlistproducts(response);
    setIsLoading(false);
  };*/

  const handleRedirectToDetails = (cardproducts) => {
    navigate(`/productos/${cardproducts?._id}`);

  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
    setProducts(getProductMockup);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isloading) {
    return <CircularProgress color="secondary" />;

  }
  return (
    <div
      className="listproducts" style={{
        backgroundColor: theme === STATE.LIGHT ? "#eadadaff" : "#000000"
      }}
      >


      {!isloading &&
        products.length > 0 &&
        products.map((cardproduct) => (
          <CardProducts 
          cardproduct={cardproduct

          }
          handleRedirectToDetails={handleRedirectToDetails}
          />
        ))}
    </div>

  );
};
 export default ListProducts;