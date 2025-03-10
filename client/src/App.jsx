import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/AppLayout';
import { Home } from './components/Home';
import { Rooms } from './components/Rooms';
import { Register } from './components/Register';
import { Login } from './components/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : "/room",
        element: <Rooms />
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
