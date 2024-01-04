import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/RoutesDefinition.jsx'
import { GlobalStyle } from './style/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)
