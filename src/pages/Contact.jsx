import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="hero-wrapper">
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>
      </div>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-section">
                <h2 className="info-heading">GET IN TOUCH</h2>
                <p className="info-text">
                  Whether you're interested in our collections, want to collaborate, or have questions about sustainability practices, we're here to help.
                </p>
              </div>

              <div className="info-section">
                <h3 className="info-subheading">EMAIL</h3>
                <a href="mailto:info@khaddar.com" className="info-link">info@khaddar.com</a>
              </div>

              <div className="info-section">
                <h3 className="info-subheading">PHONE</h3>
                <a href="tel:+919876543210" className="info-link">+91 98765 43210</a>
              </div>

              <div className="info-section">
                <h3 className="info-subheading">ADDRESS</h3>
                <p className="info-address">
                  Khaddar Fashion House<br />
                  123 Fashion Street<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>

              <div className="info-section">
                <h3 className="info-subheading">FOLLOW US</h3>
                <div className="social-links-contact">
                  <a href="https://instagram.com" className="social-link-contact" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://facebook.com" className="social-link-contact" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href="https://youtube.com" className="social-link-contact" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2 className="form-heading">SEND US A MESSAGE</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-button">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-image-section">
        <div className="contact-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1743708825952-eb9211e1765c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHN1c3RhaW5hYmVsZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=2000" 
            alt="Contact us"
            className="contact-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;

