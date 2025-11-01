import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="mission-row">
          <div className="mission-heading-box">
            <h2 className="section-heading mission-heading">MISSION</h2>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

