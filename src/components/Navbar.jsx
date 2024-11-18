import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul style={{ display: 'flex', gap: '1rem', justifyContent: "space-around", listStyle: 'none', padding: '10px', backgroundColor: '#333' }}>
      <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
      <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
      <li><Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link></li>
      <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
    </ul>
  );
}

export default Navbar;