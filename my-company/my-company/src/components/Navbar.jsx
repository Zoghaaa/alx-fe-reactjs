import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div className="logo">Logo</div>
      <div className="menu">
        <Link to="/home" style={{ color: '#fff', margin: '0 10px' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', margin: '0 10px' }}>About</Link>
        <Link to="/services" style={{ color: '#fff', margin: '0 10px' }}>Services</Link>
        <Link to="/contact" style={{ color: '#fff', margin: '0 10px' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
