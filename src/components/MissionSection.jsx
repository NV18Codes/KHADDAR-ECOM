import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="mission-heading-box">
          <h2 className="section-heading mission-heading">MISSION</h2>
        </div>
        <div className="mission-row">
          <div className="mission-content-box">
            {/* Replaced ul/li with a single paragraph */}
            <p className="mission-paragraph">
              Our mission is multifaceted: to Honor the mastery of Indian artisans, ensuring their timeless craftsmanship earns global recognition; to Protect the planet by exclusively choosing organic fabrics, natural dyes, and earth-friendly, sustainable practices; to Stand against the tide of fast fashion, which erases traditions and disconnects us from mindful consumption; and ultimately, to Embrace and elevate the best of who we are — weaving India's rich stories, skills, and soul into fashion that is meant to be treasured, not consumed.
            </p>
          </div>
         
        </div>
      </div>
       <div className="mission-image-box">
            <img 
              src="/mision.jpg" 
              alt="Mission"
              className="mission-image"
            />
          </div>
    </section>
  );
};

export default MissionSection;