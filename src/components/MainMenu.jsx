import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeServices = () => {
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        closeServices();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { name: "Network Cabling", path: "/services/network-cabling", subcategories: [
      { name: "Data Cabling", path: "/services/data-cabling", subcategories: [
        { name: "Cat5e Cabling", path: "/services/cat5e-cabling" },
        { name: "Cat6 Cabling", path: "/services/cat6-cabling" },
        { name: "Cat6a Cabling", path: "/services/cat6a-cabling" },
        { name: "Cat7 Cabling", path: "/services/cat7-cabling" },
      ]},
      { name: "Fiber Optic Cabling", path: "/services/fiber-optic-cabling", subcategories: [
        { name: "Fiber Optic Installation", path: "/services/fiber-optic-installation" },
        { name: "Fiber Optic Termination", path: "/services/fiber-optic-termination" },
        { name: "Fusion Splicing", path: "/services/fusion-splicing" },
        { name: "OTDR Testing", path: "/services/otdr-testing" },
      ]},
      { name: "Voice Cabling", path: "/services/voice-cabling", subcategories: [
        { name: "VoIP Cabling", path: "/services/voip-cabling" },
        { name: "Phone Cabling", path: "/services/phone-cabling" },
      ]},
      { name: "Structured Cabling", path: "/services/structured-cabling", subcategories: [
        { name: "Patch Panel Installation", path: "/services/patch-panel-installation" },
        { name: "Cable Management", path: "/services/cable-management" },
      ]},
      { name: "Low Voltage Cabling", path: "/services/low-voltage-cabling" },
      { name: "Cable Removal", path: "/services/cable-removal" },
      { name: "Network Cable Testing", path: "/services/network-cable-testing" },
      { name: "Server Room Data Cabling", path: "/services/server-room-data-cabling" },
    ]},
    { name: "IT Services", path: "/services/it-services", subcategories: [
      { name: "IT Support", path: "/services/it-support" },
      { name: "IT Consulting", path: "/services/it-consulting" },
      { name: "Managed IT Services", path: "/services/managed-it-services" },
      { name: "IT Solutions", path: "/services/it-solutions" },
      { name: "Cybersecurity", path: "/services/cybersecurity" },
      { name: "Microsoft Office 365 migration", path: "/services/microsoft-office-365-migration" },
      { name: "Cloud Services", path: "/services/cloud-services" },
    ]},
    { name: "Telecommunications Services", path: "/services/telecommunications-services", subcategories: [
      { name: "Phone Systems", path: "/services/phone-systems" },
      { name: "Business Phone Service", path: "/services/business-phone-service" },
      { name: "Unified Communication Solutions", path: "/services/unified-communication-solutions" },
      { name: "IP Telephony", path: "/services/ip-telephony" },
    ]},
    { name: "Audio/Video Cabling", path: "/services/audio-video-cabling", subcategories: [
      { name: "Audio/Video Installations", path: "/services/audio-video-installations" },
      { name: "HDMI Cabling", path: "/services/hdmi-cabling" },
      { name: "RG6 Cabling", path: "/services/rg6-cabling" },
      { name: "Digital Signage Systems", path: "/services/digital-signage-systems" },
      { name: "Speaker System Installation", path: "/services/speaker-system-installation" },
      { name: "Intercom System Installation", path: "/services/intercom-system-installation" },
    ]},
    { name: "Wireless Networking", path: "/services/wireless-networking", subcategories: [
      { name: "Commercial Wi-Fi Networks", path: "/services/commercial-wi-fi-networks" },
      { name: "Wi-Fi Surveys", path: "/services/wi-fi-surveys" },
    ]},
    { name: "Security", path: "/services/security", subcategories: [
      { name: "Security Camera Installation", path: "/services/security-camera-installation" },
      { name: "CCTV Installation", path: "/services/cctv-installation" },
      { name: "Access Control Systems", path: "/services/access-control-systems" },
      { name: "Security System Installation", path: "/services/security-system-installation" },
    ]},
  ];

  return (
    <>
      <div className="social-bar">
        <div className="email-info">
          <img src="/email-icon.svg" alt="Email" />
          <span>info@telcomplusmontreal.com</span>
        </div>
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
      <nav className="main-menu">
        <div className="container">
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
          <ul className="menu-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li ref={servicesRef} className="services-menu-item">
              <button onClick={toggleServices} className="services-menu-button">
                Services
              </button>
              {isServicesOpen && (
                <ul className="services-dropdown">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link to={service.path} onClick={closeServices}>
                        {service.name}
                      </Link>
                      {service.subcategories && (
                        <ul className="sub-services-dropdown">
                          {service.subcategories.map((subcategory, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subcategory.path} onClick={closeServices}>
                                {subcategory.name}
                              </Link>
                              {subcategory.subcategories && (
                                <ul className="sub-sub-services-dropdown">
                                  {subcategory.subcategories.map((subSubcategory, subSubIndex) => (
                                    <li key={subSubIndex}>
                                      <Link to={subSubcategory.path} onClick={closeServices}>
                                        {subSubcategory.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li style={{marginLeft: 'auto'}}><Link to="/contact">Contact Us</Link></li>
          </ul>
          <a href="tel:+1488174587" className="call-button">Call Us</a>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
