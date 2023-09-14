import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation';
import { Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from './pages/home';
import Services from './pages/services';
import Projects from './pages/projects';
import Contact from './pages/contact';

const guide = createBrowserRouter([
	{
	  path: "/",
	  element: <Navbar />,
	  children: [
		{ path: "/home", element: <Home /> },
		{ path: "/services", element: <Services /> },
		{ path: "/projects", element: <Projects /> },
		{ path: "/contact", element: <Contact /> },
	  ]
	}
  ]);

export default function App() {
	return (
	<div className="App">
		<RouterProvider router={guide} />
		
		<header className="s-header">
			<p>
				Welcome to Staark Development ❤️
				<h1>You now browse to best site of resources.</h1>
			</p>
		</header>
	</div>
	);
}