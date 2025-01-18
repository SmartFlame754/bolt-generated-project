import React, { useState } from 'react';
    import MainMenu from '../components/MainMenu';

    const Contact = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form Submitted:', formData);
        alert('Thank you for contacting us! We will get back to you shortly.');
      };

      return (
        <div>
          <MainMenu />
          <div className="container">
            <h1>Contact Us</h1>
            <div className="contact-info">
              <p>Phone: +1488174587</p>
              <p>Email: info@telecomplusmtl.com</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      );
    };

    export default Contact;
