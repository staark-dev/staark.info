import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    const user = false;

    return (
        <ul className="nav-links">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/services' className='nav-link'>Services</Link>
            <Link to='/projects' className='nav-link'>Projects</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
            <Outlet />
        </ul>
    )
}