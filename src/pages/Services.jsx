import { useParams } from 'react-router-dom';
    import ServiceMap from '../components/ServiceMap';
    import CallToAction from '../components/CallToAction';
    import './Services.css';

    const serviceDetails = {
      'network-cabling-services': {
        title: 'Network Cabling Services',
        description: 'Professional network cabling installation and maintenance...',
        image: '/images/cabling.jpg'
      },
      // Add all other services with similar structure
    };

    function Services() {
      const { service } = useParams();
      const details = serviceDetails[service];

      return (
        <div className="service-page">
          <h1>{details.title}</h1>
          <div className="content">
            <img src={details.image} alt={details.title} />
            <p>{details.description}</p>
            <ServiceMap />
            <CallToAction />
          </div>
        </div>
      );
    }

    export default Services;
