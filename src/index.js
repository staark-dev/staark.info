// Import React Library
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

// Importing Pages From Source
import Home       from "./pages/home/index";
import Contact    from "./pages/contact/index";
import Privacy    from "./pages/privacy/index";
import Terms      from "./pages/terms/index";
import ErrorPage  from "./pages/404/index";

// Create Routes Hook
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Map routes from pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/privacy",
    element: <Privacy />,
  },

  {
    path: "/terms",
    element: <Terms />,
  },
]);


// Create Application Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
