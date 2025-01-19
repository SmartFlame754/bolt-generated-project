import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';  // Ensure this path is correct
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // ... other routes
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
