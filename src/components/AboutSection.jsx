import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              src="https://plus.unsplash.com/premium_photo-1726704085688-81adb9f4e10e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxzdXN0YWluYWJlbGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=1200" 
              alt="Artisan craftsmanship"
              className="about-image"
            />
          </div>
          <div className="about-text-wrapper">
            <h2 className="section-heading">ABOUT US</h2>
            <div className="about-text">
              <p className="body-text">
                At Khaddar, we believe that true fashion honors its roots while inspiring the future. We are a conscious fashion brand born from a love for Indian craftsmanship, authentic storytelling, and sustainable living. Our collections showcase the artistry of local artisans through timeless, minimalist designs, woven carefully with nature and culture at heart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

