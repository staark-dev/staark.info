import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="s-header">
            <ul className="nav-links">
                <li><a href='/' className='nav-link'>Home</a></li>
                <li><a href='/services' className='nav-link'>Services</a></li>
                <li><a href='/projects' className='nav-link'>Projects</a></li>
                <li><a href='/contact' className='nav-link'>Contact</a></li>
            </ul>
            <Outlet />
        </div>
    )
}