import React from 'react'
import { GlobalStyle } from './style/GlobalStyle.js'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <Home />
  <GlobalStyle />
 </React.StrictMode>,
)
