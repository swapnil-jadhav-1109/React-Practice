import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import Menu from './components/Menu.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './components/AboutUs.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children : [
      {
        path:"home",
        element: <Home />
      },
      {
        path:"menu",
        element: <Menu />
      },
      {
        path:"cart",
        element:<Cart />
      },
      {
        path:"about us",
        element:<AboutUs />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {appRouter} />
  </React.StrictMode>,
)
