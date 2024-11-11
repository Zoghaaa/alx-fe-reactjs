import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div className="logo">Logo</div>
      <div className="menu">
        <a href="#home" style={{ color: '#fff', margin: '0 10px' }}>Home</a>
        <a href="#about" style={{ color: '#fff', margin: '0 10px' }}>About</a>
        <a href="#services" style={{ color: '#fff', margin: '0 10px' }}>Services</a>
        <a href="#contact" style={{ color: '#fff', margin: '0 10px' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
