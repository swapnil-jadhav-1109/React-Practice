import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Search from './components/Search.jsx';
import { createBrowserRouter ,  RouterProvider  } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/search",
    element: <Search />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router = {appRouter} />
  

 
);
