import * as React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="nav-links">
            <li><Link to='/' className='nav-link'>Home</Link></li>
            <li><Link to='/services' className='nav-link'>Services</Link></li>
            <li><Link to='/projects' className='nav-link'>Projects</Link></li>
            <li><Link to='/contact' className='nav-link'>Contact</Link></li>
        </ul>
    )
}