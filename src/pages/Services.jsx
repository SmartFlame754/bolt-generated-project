import React from 'react';
    import { useParams } from 'react-router-dom';
    import MainMenu from '../components/MainMenu';

    const Services = () => {
      const { service } = useParams();
      const serviceName = service.replace(/-/g, ' ');

      return (
        <div>
          <MainMenu />
          <div className="container">
            <h1>{serviceName}</h1>
            <div className="service-details">
              <p>Our {serviceName.toLowerCase()} solutions are designed to meet the highest industry standards. We provide:</p>
              <ul>
                <li>Professional installation and setup</li>
                <li>Customized solutions for your specific needs</li>
                <li>High-quality materials and equipment</li>
                <li>Ongoing maintenance and support</li>
              </ul>
              <div className="cta-section">
                <h2>Get Your Free Quote Now</h2>
                <form>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" required />
                  </div>
                  <div className="form-group">
                    <label>Your Phone Number</label>
                    <input type="tel" required />
                  </div>
                  <div className="form-group">
                    <label>Service Type</label>
                    <select>
                      <option value="Install">Install</option>
                      <option value="Repair">Repair</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary">Get Free Quote</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Services;
