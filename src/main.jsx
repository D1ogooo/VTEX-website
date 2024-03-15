import React from 'react'
import { GlobalStyle } from './style/GlobalStyle.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <App />
  <GlobalStyle />
 </React.StrictMode>,
)
