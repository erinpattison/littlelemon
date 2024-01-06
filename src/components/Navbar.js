import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`page-padding ${menuOpen ? 'menu-open' : ''}`}>
            <img src={Logo} alt="little lemon logo" />

            <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`${menuOpen ? 'show' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li>About</li>
                <li>Menu</li>
                <li><Link to="/booking">Reservations</Link></li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};
