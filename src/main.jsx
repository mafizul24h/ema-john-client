import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Shop from './components/Shop/Shop.jsx'
import Order from './components/Order/Order.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Login from './components/Register/Login.jsx'
import cardProductsLoader from './loaders/CardProductsLoader.js'
import Checkout from './components/Checkout/Checkout.jsx'
import Signup from './components/Register/Signup.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import PrivateRoute from './components/Routers/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Shop />,
        loader: () => fetch('http://localhost:5000/totalProducts')
      },
      {
        path: 'order',
        element: <Order />,
        loader: cardProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
