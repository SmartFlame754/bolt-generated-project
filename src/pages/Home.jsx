import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart } from 'chart.js/auto';
import axios from 'axios';
import MainMenu from '../components/MainMenu';
import { 
  FaNetworkWired, 
  FaTools, 
  FaWifi, 
  FaProjectDiagram, 
  FaShieldAlt, 
  FaPlug
} from 'react-icons/fa';

const services = [
  {
    name: "Network Cabling",
    description: "Expertly designed to meet your communication needs, our Network Cable Services ensure reliable, high-speed data transfer.",
    icon: <FaNetworkWired className="service-icon" />
  },
  {
    name: "Troubleshooting",
    description: "Navigate complex network issues with confidence through our expert diagnostics and resolutions.",
    icon: <FaTools className="service-icon" />
  },
  {
    name: "Wireless Installation",
    description: "Harness the freedom of seamless connectivity with our Wireless Installation Solutions.",
    icon: <FaWifi className="service-icon" />
  },
  {
    name: "Fibre Optics",
    description: "Optimize your network's speed and bandwidth with our cutting-edge Fiber Optics Services.",
    icon: <FaProjectDiagram className="service-icon" />
  },
  {
    name: "Security",
    description: "Enhance your business's protection with our state-of-the-art Security Installation Services.",
    icon: <FaShieldAlt className="service-icon" />
  },
  {
    name: "Cable Management",
    description: "Streamline your infrastructure with our Cable Management Solutions.",
    icon: <FaPlug className="service-icon" />
  }
];

const Home = () => {
  const [ipData, setIpData] = useState({
    ip: '',
    city: '',
    countryName: '',
    isp: ''
  });
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Install'
  });
  const navigate = useNavigate();
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const response = await axios.get(
          'https://apiip.net/api/check',
          {
            params: {
              accessKey: 'ac649d74-ad8d-4393-be92-9f859290fe82'
            }
          }
        );
        
        setIpData({
          ip: response.data.ip,
          city: response.data.city,
          countryName: response.data.countryName,
          isp: response.data.connection?.isp || 'Unknown ISP'
        });
      } catch (error) {
        console.error('Error fetching IP data:', error);
        setIpData({
          ip: 'Unknown',
          city: 'Unknown',
          countryName: 'Unknown',
          isp: 'Unknown'
        });
      }
    };

    fetchIpData();

    const ctx = document.getElementById('servicesChart');
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: services.map(service => service.name),
        datasets: [{
          label: 'Service Popularity',
          data: services.map(() => Math.floor(Math.random() * 100)),
          backgroundColor: '#007bff',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', quoteForm);
    alert('Thank you for your request! We will contact you shortly.');
  };

  return (
    <div>
      <MainMenu />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional Network Solutions</h1>
            <p className="hero-subtitle">Reliable, efficient, and tailored to your business needs</p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Get Started
              </button>
              <button className="btn-secondary" onClick={() => navigate('/about')}>
                Learn More
              </button>
            </div>
          </div>
          {ipData.ip && (
            <div className="hero-location">
              <h2>Your Location</h2>
              <div className="ip-info">
                <p>IP: {ipData.ip}</p>
                <p>City: {ipData.city}</p>
                <p>Country: {ipData.countryName}</p>
                <p>ISP: {ipData.isp}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      <section className="container quote-section">
        <h2>Get Your Free Quote</h2>
        <div className="quote-card">
          <form onSubmit={handleQuoteSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                value={quoteForm.name}
                onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input 
                type="email" 
                value={quoteForm.email}
                onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Your Phone Number</label>
              <input 
                type="tel" 
                value={quoteForm.phone}
                onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Service Type</label>
              <select
                value={quoteForm.serviceType}
                onChange={(e) => setQuoteForm({...quoteForm, serviceType: e.target.value})}
              >
                <option value="Install">Install</option>
                <option value="Repair">Repair</option>
              </select>
            </div>
            <button type="submit" className="btn-primary">Get Free Quote</button>
          </form>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions for all your networking needs</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button 
                  className="btn-primary"
                  onClick={() => navigate(`/services/${service.name.toLowerCase().replace(/ /g, '-')}`)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="container">
        <h2>Service Popularity</h2>
        <div className="chart-container">
          <canvas id="servicesChart"></canvas>
        </div>
      </section>
    </div>
  );
};

export default Home;
