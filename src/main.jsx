import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AdminProvider } from './context/AdminContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Incluye Popper


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <CartProvider>
      <AdminProvider>
        <App />
        <ToastContainer/>
      </AdminProvider>
    </CartProvider>
  </StrictMode>,
)
