import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import { Error } from './Pages/Error';
import { Layout } from './layouts/Layout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
