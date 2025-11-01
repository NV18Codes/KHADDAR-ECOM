import React from 'react';
import './VisionSection.css';

const VisionSection = () => {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="vision-heading-box">
          <h2 className="section-heading vision-heading">VISION</h2>
        </div>
        <div className="vision-row">
          <div className="vision-content-box">
            <div className="vision-content">
              <p className="vision-text">
                To reshape the fashion landscape by showcasing India's unparalleled craftsmanship, empowering artisans, and creating a lasting impact that prioritizes people, planet, and artistry over trends.
              </p>
            </div>
          </div>
          <div className="vision-image-box">
            <img 
              src="/visio.jpg" 
              alt="Vision"
              className="vision-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

