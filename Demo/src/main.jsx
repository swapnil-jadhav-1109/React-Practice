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

import React , {lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Search from './components/Search.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import Menu from './components/Menu.jsx'
import Help from './components/Help.jsx';
import Offers from './components/Offers.jsx';
import SignIn from './components/SignIn.jsx';
// import Cart from './components/Cart.jsx';
import SwiggyCorporate from './components/SwiggyCorporate.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const Cart = lazy(()=> import ('./components/Cart.jsx'));
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
        path:"/swiggy-corporate",
        element: <SwiggyCorporate />
      },
      {
        path:"/offers",
        element: <Offers />
      },
      {
        path:"/help",
        element: <Help />
      },
      {
        path:"sign-in",
        element: <SignIn />
      },
      {
        path:"/cart",
        element: <Suspense fallback = "Loading..."><Cart /></Suspense>
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
