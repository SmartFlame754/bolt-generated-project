import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <Link to="/" className="company-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logo-icon">
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
              <path d="M4 12h16"></path>
              <path d="M4 7v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
              <path d="M4 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
            </svg>
            Telecom Plus Montreal
          </Link>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/x-icon.svg" alt="X (Twitter)" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src="/pinterest-icon.svg" alt="Pinterest" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/youtube-icon.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
