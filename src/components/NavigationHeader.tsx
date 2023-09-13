import React from "react";
import { Link } from "react-router-dom";

export default function NavigationHeader() {
    return (
        <div className='s-nav'>
            <ul className='s-links'>
                <li><Link to="/" style={{color: 'green'}}>Home Page</Link></li>
                <li><Link to="/services" style={{color: 'green'}}>Services</Link></li>
                <li><Link to="/about-us" style={{color: 'green'}}>About Us</Link></li>
                <li><Link to="/contact" style={{color: 'red'}}>Contact</Link></li>
            </ul>
        </div>
    )
}