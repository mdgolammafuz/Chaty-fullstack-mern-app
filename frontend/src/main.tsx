import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.tsx';
import {Toaster} from 'react-hot-toast'
import axios from 'axios';
// configure axios to commuinicate with backend
axios.defaults.baseURL = "http://localhost:4000/api/v1"
// to enable setting and exchanging cookies with backend
axios.defaults.withCredentials = true;

// to provide customized theme to the app with material ui
const theme = createTheme( {
  typography:
  {
    fontFamily: "Roboto Slab, serif",
    allVariants: { color: "white" },
  },
} );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position='top-right'/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
)
