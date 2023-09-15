import { Link, Outlet } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <ul className="nav">
                <li><Link to="/" /></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/contact" className="btn btn-sm btn-secoundary">Contact</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}