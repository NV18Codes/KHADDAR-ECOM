import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCollection.css';

const FeaturedCollection = () => {
  return (
    <section className="featured-collection-section">
      <div className="featured-collection-wrapper">
        <div className="featured-collection-image">
          <img 
            src="https://cdn.shopify.com/s/files/1/0263/0559/3392/files/KutchHandicraftsLandingCollage_1b56a072-c813-406b-9fa5-46cdce40d697_1024x1024.jpg?v=1714723798" 
            alt="Kolours of Kutch Collection"
          />
          <div className="featured-overlay">
            <div className="featured-content">
              <h2 className="featured-title">KOLOURS OF KUTCH</h2>
              <p className="featured-description">
                Introducing exceptional fabric creations, which showcase the rich heritage and artistic prowess of Kutch.
              </p>
              <Link to="/collections" className="featured-link">EXPLORE COLLECTION</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

