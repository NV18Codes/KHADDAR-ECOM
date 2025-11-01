import React from 'react';
import './BrandStory.css';

const BrandStory = () => {
  return (
    <section className="brand-story-section">
      <div className="container">
        <div className="brand-story-content">
          <div className="brand-story-text-wrapper">
            <h2 className="section-heading">BRAND STORY</h2>
            <div className="brand-story-text">
              <p className="body-text">
                Khaddar began with a simple thought — to return to the soul of clothing. Inspired by the spirit of India's indigenous fabrics and the artisans who carry forward centuries-old traditions, Khaddar is a tribute to authenticity, sustainability, and elegance. Every piece is a journey — from the skilled hands of local weavers to your wardrobe, crafted with respect for the land and its people.
              </p>
            </div>
          </div>
          <div className="brand-story-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1695694477689-bef8ba8fc5c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1c3RhaW5hYmVsZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=1200" 
              alt="Traditional weaving"
              className="brand-story-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

