import React from 'react';
    import { useParams } from 'react-router-dom';
    import MainMenu from '../components/MainMenu';

    const serviceDetails = {
      'network-cabling': {
        title: 'Network Cabling',
        description: 'Our expert network cabling services ensure reliable, high-speed data transfer for your business operations.',
        benefits: [
          'Improved network performance and reliability',
          'Scalable infrastructure for future growth',
          'Reduced downtime and maintenance costs',
          'Compliance with industry standards'
        ]
      },
      'troubleshooting': {
        title: 'Network Troubleshooting',
        description: 'Quick and efficient resolution of network issues to minimize downtime and maintain productivity.',
        benefits: [
          'Rapid identification and resolution of network problems',
          'Minimized business disruption',
          'Proactive network monitoring',
          'Expert diagnostics and solutions'
        ]
      },
      'wireless-installation': {
        title: 'Wireless Installation',
        description: 'Seamless wireless network solutions for uninterrupted connectivity across your premises.',
        benefits: [
          'Flexible and mobile connectivity',
          'High-performance wireless coverage',
          'Secure and reliable connections',
          'Customized solutions for your space'
        ]
      },
      'fibre-optics': {
        title: 'Fibre Optics Installation',
        description: 'Future-proof your network with our high-speed fibre optic solutions.',
        benefits: [
          'Blazing-fast data transfer speeds',
          'Greater bandwidth capacity',
          'Long-distance signal transmission',
          'Resistance to electromagnetic interference'
        ]
      },
      'security': {
        title: 'Security Systems',
        description: 'Comprehensive security solutions to protect your business assets and infrastructure.',
        benefits: [
          '24/7 monitoring and protection',
          'Integrated security systems',
          'High-quality surveillance equipment',
          'Customized security solutions'
        ]
      },
      'cable-management': {
        title: 'Cable Management',
        description: 'Professional cable organization for efficient and safe network infrastructure.',
        benefits: [
          'Improved airflow and cooling',
          'Easier maintenance and troubleshooting',
          'Enhanced safety and reduced fire risk',
          'Clean and professional appearance'
        ]
      }
    };

    const Services = () => {
      const { service } = useParams();
      const serviceInfo = serviceDetails[service] || {
        title: 'Service Not Found',
        description: 'The requested service does not exist.',
        benefits: []
      };

      return (
        <div>
          <MainMenu />
          <div className="container">
            <h1>{serviceInfo.title}</h1>
            <div className="service-details">
              <p className="service-description">{serviceInfo.description}</p>
              
              <h2>How This Service Helps Your Business</h2>
              <ul className="service-benefits">
                {serviceInfo.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
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
