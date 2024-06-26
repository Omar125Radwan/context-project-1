import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CartContextProvider from './CartContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
)
