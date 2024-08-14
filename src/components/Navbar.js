import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; 
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">EVERYTHING CUISINE.</div>
      <button className="burger-menu" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/Login">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
