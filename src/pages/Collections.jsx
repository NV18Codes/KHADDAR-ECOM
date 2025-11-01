import React from 'react';
import './Collections.css';

const Collections = () => {
  const collectionImages = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0263/0559/3392/files/KutchHandicraftsLandingCollage_1b56a072-c813-406b-9fa5-46cdce40d697_1024x1024.jpg?v=1714723798',
      alt: 'Kutch Handicrafts'
    },
    {
      id: 2,
      src: 'https://i.ytimg.com/vi/0pf2Gi2f0Cw/sddefault.jpg?v=683ab96c',
      alt: 'Kutch Heritage'
    },
    {
      id: 3,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7amPhgCITKCQjzUbagBPkdtPY97AsRcObFA&s',
      alt: 'Kutch Artisan Craft'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1695694477689-bef8ba8fc5c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1c3RhaW5hYmVsZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=1200',
      alt: 'Sustainable Fashion'
    }
  ];

  return (
    <div className="collections-page">
      <div className="collections-hero">
        <div className="hero-content-wrapper">
          <h1 className="collections-title">KOLOURS OF KUTCH</h1>
          <div className="collections-intro">
            <p className="body-text intro-text">
              Introducing exceptional fabric creations, which showcase the rich heritage and artistic prowess of Kutch. The artisans specialize in various techniques, such as handloom weaving, bandhani tie-dyeing, and intricate embroidery like mirror work and thread work. Fabrics from Kutch often feature vibrant colors, geometric patterns, and intricate detailing.
            </p>
            <p className="body-text intro-text">
              Kolours of Kutch is a blend of the fabrics from bhujodi, Kutch & Ajrakhpur and designs tailor made in such a way that each piece tells a story of skill, tradition, and cultural identity, reflecting the deep connection between the artisans and their craft that makes you feel unique and a sense of belonging at the same time with modern fashion elements.
            </p>
          </div>
        </div>
      </div>

      <section className="collections-gallery">
        <div className="container">
          <div className="gallery-grid">
            {collectionImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <span className="gallery-label">{image.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="collections-video">
        <div className="video-container">
          <video
            className="collections-video-element"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1718128306989-a5bd41566cde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2000"
          >
            <source src="https://cdn.pixabay.com/video/2024/03/29/206029_tiny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-text-overlay">
            <p className="video-quote">
              "Each piece tells a story of skill, tradition, and cultural identity."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;

