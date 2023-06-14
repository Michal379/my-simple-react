import React from 'react';
import { Link, useLocation } from 'react-router-dom';
 
const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className='navbar-list'>
      <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Link to = "/" className="navbar-link">Games</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/Login' ? 'active' : ''}`}>
        <Link to="/Login" className="navbar-link">Login</Link>  
        </li> 
        <li className={`navbar-item ${location.pathname === '/About us' ? 'active' : ''}`}>
        <Link to="/About us" className="navbar-link">About us</Link>   
        </li>
      </ul>
    </nav>
  )
}

export default Navbar