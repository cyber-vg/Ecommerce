import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuuthProvider } from './context/auth.jsx'
import 'antd/dist/reset.css';
ReactDOM.createRoot(document.getElementById('root')).render(

  
    <AuuthProvider>
    <App />

    </AuuthProvider>
  ,
  
)
