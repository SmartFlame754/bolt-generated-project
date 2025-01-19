import React from 'react';
import { useParams } from 'react-router-dom';
import MainMenu from '../components/MainMenu';

const ServicePage = () => {
  const { service } = useParams();
  const serviceName = service.replace(/-/g, ' ');

  return (
    <div>
      <MainMenu />
      <div className="container">
        <h1>{serviceName}</h1>
        <div className="service-details">
          <p>This is the page for {serviceName}.</p>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
