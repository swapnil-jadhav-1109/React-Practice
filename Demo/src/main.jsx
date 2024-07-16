// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import Search from './components/Search.jsx';
// import Error from './components/Error.jsx';
// import Body from './components/Body.jsx';
// import { createBrowserRouter ,  RouterProvider , } from 'react-router-dom';

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement : <Error />,

//   Children: [
//     {
//       path: "/",
//       element: <Body />
//     },
//     {

//       path: "/search",
//       element: <Search />
//     }
//   ]
// }

// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <RouterProvider router = {appRouter} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Search from './components/Search.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import Menu from './components/Menu.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Define the error element here
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/restaurant/:resId",
        element: <Menu />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
