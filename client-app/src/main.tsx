import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/layout/App.js'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import { store, StoreContext } from './app/stores/store.js'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
     <RouterProvider router={router}></RouterProvider>
      </StoreContext.Provider>
  </React.StrictMode>,
)