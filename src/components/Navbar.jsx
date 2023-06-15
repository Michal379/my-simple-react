import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <Link to="/" className="navbar-brand">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Games</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/Login' ? 'active' : ''}`}>
              <Link to="/Login" className="nav-link">Login</Link>  
            </li> 
            <li className={`nav-item ${location.pathname === '/About us' ? 'active' : ''}`}>
              <Link to="/About us" className="nav-link">About us</Link>   
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 