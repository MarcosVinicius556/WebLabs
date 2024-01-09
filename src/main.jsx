import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/RoutesDefinition.jsx'
import { GlobalStyle } from './style/GlobalStyle.jsx'
import { applicationStore } from './redux/store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={applicationStore}>
      <RouterProvider router={Routes} />
    </Provider>
  </React.StrictMode>,
)
