import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px 20px' }}>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                <li style={{ marginRight: '20px' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                </li>
                <li style={{ marginRight: '20px' }}>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                </li>
                <li style={{ marginRight: '20px' }}>
                    <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;