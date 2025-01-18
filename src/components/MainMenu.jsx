import React from 'react';
    import { Link } from 'react-router-dom';

    const MainMenu = () => {
      return (
        <nav className="main-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services/network-cabling-services">Services</Link></li>
            <li><Link to="/glossary">Glossary</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      );
    };

    export default MainMenu;
