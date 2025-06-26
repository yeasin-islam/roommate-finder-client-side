import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import AuthProvider from './context/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
// import CartProvider from './providers/CartProvider.jsx'
import { Toaster } from 'react-hot-toast'
import Router from './routes/Router.jsx'
import 'aos/dist/aos.css';
import Aos from 'aos';

Aos.init();

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      {/* <CartProvider> */}
        <AuthProvider>
          <RouterProvider router={Router} />
          <Toaster position="top-right" />
        </AuthProvider>
      {/* </CartProvider> */}
    </StrictMode>
  </HelmetProvider>
)