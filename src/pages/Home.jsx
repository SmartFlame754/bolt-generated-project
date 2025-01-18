import { useState } from 'react';
    import IPGeolocation from '../components/IPGeolocation';
    import ServiceHighlights from '../components/ServiceHighlights';
    import CallToAction from '../components/CallToAction';
    import './Home.css';

    function Home() {
      return (
        <div className="home-page">
          <section className="hero">
            <h1>Professional Network Cabling Services in Montreal</h1>
            <IPGeolocation />
          </section>
          <ServiceHighlights />
          <CallToAction />
        </div>
      );
    }

    export default Home;
