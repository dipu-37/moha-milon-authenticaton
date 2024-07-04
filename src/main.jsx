import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import Home from './component/Home/Home.jsx';
import Login from './component/Login.jsx/Login.jsx';
import Register from './component/Register.jsx/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Order from './order/Order.jsx';
import PrivateRouts from './component/routs/PrivateRouts.jsx';
import Profile from './component/profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/orders',
        element: <PrivateRouts><Order></Order></PrivateRouts>,
      },
      {
        path: '/profile',
        element: <PrivateRouts><Profile></Profile></PrivateRouts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
