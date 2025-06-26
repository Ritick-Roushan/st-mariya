import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'; // This includes Header, Footer, and <Outlet />
import Home from './components/Home/Home.jsx'; // Your Home page component
import './index.css'; // TailwindCSS or global styles
import About from './pages/About.jsx';
import Principal from './pages/Principal.jsx';
import Mission from './pages/Mission.jsx';
import Infrastructure from './pages/Infrastructure.jsx';
import Curriculum from './pages/Curriculum.jsx';
import Promotion from './pages/Promotion.jsx';
import Examination from './pages/Examination.jsx';
import Counsellor from './pages/Counsellor.jsx';
import Behavioural from './pages/Behavioural.jsx';
import Admission from './pages/Admission.jsx';
import Contact from './pages/contact.jsx';
import Gallery from './pages/Gallery.jsx'; // Importing Gallery component
import Mandatory_disclosure from './pages/Mandatory_disclosure.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout wrapper (Header + Footer)
    children: [
      {
        path: "/", // means path: '/'
        element: <Home />,
      },
      {
        path: "/about-school", // means path: '/'
        element: <About />,
      },
      {
        path: "/principal-message", // means path: '/'
        element: <Principal />,
      },
      {
        path: "/mission-statement", // means path: '/'
        element: <Mission />,
      },
      {
        path: "/infrastructure", // means path: '/'
        element: <Infrastructure />,
      },
       {
        path: "/curriculum", // means path: '/'
        element: <Curriculum />,
      },
      {
        path: "/promotion-policy", // means path: '/'
        element: <Promotion />,
      },
      {
        path: "/examination-policy", // means path: '/'
        element: <Examination />,
      },
      {
        path: "/counsellor-column", // means path: '/'
        element: <Counsellor />,
      },
       {
        path: "/behavioural-policy", // means path: '/'
        element: <Behavioural />,
      },
      {
        path: "/admissions", // means path: '/'
        element: <Admission />,
      },
      {
        path: "/contact", // means path: '/'
        element: <Contact />,
      },
      {
        path: "/gallery", // means path: '/'
        element: <Gallery />,
      },
      {
        path: "/mandatory-disclosure", // means path: '/'
        element: <Mandatory_disclosure />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
