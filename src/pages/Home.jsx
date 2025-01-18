import React, { useState, useEffect, useRef } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { Chart } from 'chart.js/auto';
    import axios from 'axios';
    import MainMenu from '../components/MainMenu';

    const services = [
      {
        name: "Network Cabling",
        description: "Expertly designed to meet your communication needs, our Network Cable Services ensure reliable, high-speed data transfer for your business's critical operations."
      },
      {
        name: "Troubleshooting",
        description: "Navigate complex network issues with confidence through our Troubleshooting Services, offering expert diagnostics and resolutions to ensure your business maintains optimal operational efficiency."
      },
      {
        name: "Wireless Installation",
        description: "Harness the freedom of seamless connectivity with our Wireless Installation Solutions, designed to deliver uninterrupted, high-capacity wireless coverage for your enterprise's dynamic communication needs."
      },
      {
        name: "Fibre Optics",
        description: "Optimize your network's speed and bandwidth with our Fiber Optics Services, delivering cutting-edge fiber optic solutions to ensure fast, reliable connections for your technological infrastructure."
      },
      {
        name: "Security",
        description: "Enhance your business's protection with our Security Installation Services, providing state-of-the-art security systems tailored to safeguard your premises and assets effectively."
      },
      {
        name: "Cable Management",
        description: "Streamline your infrastructure with our Cable Management Solutions, designed to reduce clutter, optimize maintenance, and improve the performance and aesthetics of your network environment."
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
              backgroundColor: '#2563eb',
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
            chartRef.current = null;
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
          <section className="hero">
            <div className="container">
              <h1>Professional Network Cabling Services</h1>
              <p>Reliable solutions for businesses and homes in Montreal</p>
              <a href="#services" className="btn-primary">Explore Services</a>
            </div>
          </section>

          <section className="container" id="services">
            <h2>Our Services</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
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
          </section>

          <section className="container">
            <h2>Service Popularity</h2>
            <div className="chart-container">
              <canvas id="servicesChart"></canvas>
            </div>
          </section>

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

          {ipData.ip && (
            <section className="container">
              <h2>Your Location Data</h2>
              <div className="ip-info">
                <p>IP: {ipData.ip}</p>
                <p>City: {ipData.city}</p>
                <p>Country: {ipData.countryName}</p>
                <p>ISP: {ipData.isp}</p>
              </div>
            </section>
          )}

          <footer className="container">
            <h2>Find Us Here</h2>
            <iframe 
              src="https://www.google.com/maps/embed?ll=45.558437,-73.709992&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=Montreal+Quebec" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </footer>
        </div>
      );
    };

    export default Home;
