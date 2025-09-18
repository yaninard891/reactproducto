import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import './index.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ProductProvider } from './context/ProductContext.jsx';
import {StrictMode} from "react";
import {ThemeProvider} from "./context/ThemeContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ProductProvider>
        <App />
      </ProductProvider>
      
      
      </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
