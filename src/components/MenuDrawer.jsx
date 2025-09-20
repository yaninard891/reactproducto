import {Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";

export const MenuDrawer=({isOpenDrawer, setIsOpenDrawer})=> {
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

return (
     <Drawer anchor="left" open={isOpenDrawer} onClose={()=>setIsOpenDrawer(false)}>
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
    </Drawer>
);
};
