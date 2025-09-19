import './App.css';

import Box from '@mui/material/Box';
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from './components/Navbar';
import { Routes, Route, NavLink} from 'react-router-dom';
import ListProducts from './pages/listproducts';
import {Product} from "./pages/products"
import { AvailableProducts } from './pages/AvailableProducts/AvailableProducts';
import { Searcher } from './pages/Searcher/Searcher';
import { LoadProduct } from './pages/LoadProduct/LoadProduct';



function App() {

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

 
  const navbar=[{
   path: "/",
    name:"Listado de producto"
},

{
  path:"/searcher",
  name:"Buscar producto"
},

{
  path: "/availableproducts",
  name: "Productos Disponibles"
},

{
  path: "/loadProduct",
  name: "Cargar Producto"
},
];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpenDrawer(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navbar.map(
          ({path, name}, index) => (
            <ListItem key={path} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <NavLink to={path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <ListItemText primary={name} />
              </NavLink>
              
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <>
      <Navbar setIsOpenDrawer={setIsOpenDrawer} />

      <Drawer anchor="left" open={isOpenDrawer} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>

      <Routes>
        <Route index path="/" element={<ListProducts />} />
        <Route path="/Productos/:id" element={<Product/>} />
        <Route path="/availableproducts" element={<AvailableProducts/>} />
       
        <Route path="/searcher" element={<Searcher/>} />
        <Route path="/loadProduct" element={<LoadProduct/>} />
       </Routes>
    </>
  );
}

export default App;