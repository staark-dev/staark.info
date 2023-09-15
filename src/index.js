// Import React Library
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

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
