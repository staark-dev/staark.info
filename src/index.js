// Import React Library
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'assets/Styles/custom.css';

// Create Routes Hook
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from 'routes/index';

const router = createBrowserRouter(AppRoutes);

// Create Application Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
