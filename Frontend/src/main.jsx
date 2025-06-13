import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'; // This includes Header, Footer, and <Outlet />
import Home from './components/Home/Home.jsx'; // Your Home page component
import './index.css'; // TailwindCSS or global styles

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout wrapper (Header + Footer)
    children: [
      {
        index: true, // means path: '/'
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
