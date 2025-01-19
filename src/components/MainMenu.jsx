import React from 'react';
    import { Link } from 'react-router-dom';

    const MainMenu = () => {
      return (
        <nav className="main-menu">
          <div className="menu-container">
            <div className="logo">
              <Link to="/">TelecomPlus Montreal</Link>
            </div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li className="services-dropdown">
                <span>Services</span>
                <div className="dropdown-content">
                  <Link to="/services/network-cabling">Network Cabling</Link>
                  <Link to="/services/troubleshooting">Troubleshooting</Link>
                  <Link to="/services/wireless-installation">Wireless Installation</Link>
                  <Link to="/services/fibre-optics">Fibre Optics</Link>
                  <Link to="/services/security">Security</Link>
                  <Link to="/services/cable-management">Cable Management</Link>
                </div>
              </li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <a href="tel:+1488174587" className="call-now-btn">
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    };

    export default MainMenu;
