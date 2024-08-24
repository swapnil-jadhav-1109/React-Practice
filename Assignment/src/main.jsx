// import React, { Children } from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Mounting from './components/Mounting.jsx'
// import Updating from './components/Updating.jsx'
// import Unmountaing from './components/Unmountaing.jsx'

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
  
//   Children:[
//     {
//       path:"/mounting",
//       element:<Mounting />
//     },
//     {
//       path:"/updating",
//       element:<Updating />
//     },
//     {
//       path:"/unmounting",
//       element:<Unmountaing />
//     }
//   ]
// } 
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//    <RouterProvider router = {appRouter} />
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mounting from './components/Mounting.jsx'
import Updating from './components/Updating.jsx'
import Unmountaing from './components/Unmountaing.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/mounting",
        element:<Mounting />
      },
      {
        path:"/updating",
        element:<Updating />
      },
      {
        path:"/unmounting",
        element:<Unmountaing />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
