import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

export default function StaarkDev() {
	return (
	<div className="main-body">
		<Navigation />
		<header className="s-header">
			<p>
				Welcome to Staark Development ❤️
				<h1>You now browse to best site of resources.</h1>
			</p>
		</header>
	</div>
	);
}