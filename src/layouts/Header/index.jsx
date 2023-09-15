import { Link, Outlet } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Staark Dev</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/" className="nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/privacy" className="nav-link">Privacy</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/terms" className="nav-link">Terms</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}