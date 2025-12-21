import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCollection.css';

// Using a specific image from your folder
import collectionBg from '../images/Summer Salt KHADDAR3495.png';

const FeaturedCollection = () => {
  return (
    <section className="featured-collection-section">
      <div className="featured-collection-wrapper">
        <div className="featured-collection-image">
          <img 
            src={collectionBg} 
            alt="Kolours of Kutch Collection" 
          />
          <div className="featured-overlay">
            <div className="featured-content">
              <h2 className="featured-title">KOLOURS OF KUTCH</h2>
              <p className="featured-description">
                Introducing exceptional fabric creations which showcase the rich 
                heritage and artistic prowess of Kutch. Experience the blend of 
                vibrant culture and woven mastery.
              </p>
              <Link to="/collections" className="featured-link">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
