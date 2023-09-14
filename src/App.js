// Important Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Stylesheet
import './App.css';

// Loading all components
import Navbar from './components/Navigation';
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
	<div className="container">
		<header className="s-header">
		<p>
			Welcome to Staark Development ❤️
			<h1>You now browse to best site of resources.</h1>
		</p>
		</header>
		<RouterProvider router={guide} />
	</div>
	);
}