import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import logo from 'assets/Images/logo.png';

export default function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className="header container-fluid navbar-dark bg-dark">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mx-5">
                <Link to="/" className="navbar-brand"><img src={logo} className="logo" alt="Logo" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto justify-content-end">
                        <li class="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/features" className="nav-link">Fautures</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/pricing" className="nav-link">Pricing</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/faq" className="nav-link">FAQs</Link>
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