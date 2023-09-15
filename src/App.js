// Important Functions
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Stylesheet
import './App.css';

// Loading all components
import Navbar from './components/Navbar';
import Home from './pages/home';
import Services from './pages/services';
import Projects from './pages/projects';
import Contact from './pages/contact';

const guide = createBrowserRouter([
	{
	  path: "/", 
	  element: <Home />,
	  basename: "/",
	  loader: <Navbar />,
	  children: [
		{ path: "/home", element: <Home /> },
		{ path: "/services", element: <Services /> },
		{ path: "/projects", element: <Projects /> },
		{ path: "/contact", element: <Contact /> },
	  ]
	}
  ]);


  // <RouterProvider router={guide} />
export default function App() {
	return (
		<div className="App">
			<RouterProvider router={guide} />
		</div>
	);
}