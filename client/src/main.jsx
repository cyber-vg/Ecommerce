import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuuthProvider } from './context/auth.jsx'
import 'antd/dist/reset.css';
import { CartProvider } from './context/cart.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  
    <AuuthProvider>
      <CartProvider>

    <App />
      </CartProvider>

    </AuuthProvider>
  ,
  
)
