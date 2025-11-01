import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="vision-mission-grid">
          {/* First Row: VISION on left, Content on right */}
          <div className="vision-row">
            <div className="vision-heading-box">
              <h2 className="section-heading vision-heading">VISION</h2>
            </div>
            <div className="vision-content-box">
              <div className="vision-content">
                <p className="vision-text">
                  To reshape the fashion landscape by showcasing India's unparalleled craftsmanship, empowering artisans, and creating a lasting impact that prioritizes people, planet, and artistry over trends.
                </p>
              </div>
            </div>
          </div>
          
          {/* Second Row: Content on left, MISSION on right */}
          <div className="mission-row">
            <div className="mission-content-box">
              <ul className="mission-list">
                <li className="mission-item">
                  Honor the mastery of Indian artisans, whose timeless craftsmanship deserves global recognition and celebration.
                </li>
                <li className="mission-item">
                  Protect the planet by choosing organic fabrics, natural dyes, and earth-friendly practices that respect nature's rhythms.
                </li>
                <li className="mission-item">
                  Stand against the tide of fast fashion, which erases traditions and disconnects us from mindful living.
                </li>
                <li className="mission-item">
                  Embrace and elevate the best of who we are — weaving India's rich stories, skills, and soul into fashion that is meant to be treasured, not consumed.
                </li>
              </ul>
            </div>
            <div className="mission-heading-box">
              <h2 className="section-heading mission-heading">MISSION</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

