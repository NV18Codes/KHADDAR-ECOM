import React from 'react';
import './Community.css';

const Community = () => {
  const collaborations = [
    {
      id: 1,
      title: 'Artisan Partnerships',
      description: 'Working closely with local artisan communities to preserve traditional craftsmanship and create sustainable livelihoods.',
      image: 'https://plus.unsplash.com/premium_photo-1726704085688-81adb9f4e10e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxzdXN0YWluYWJlbGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 2,
      title: 'Craft Preservation',
      description: 'Supporting initiatives that document and preserve age-old techniques for future generations.',
      image: 'https://images.unsplash.com/photo-1695694477689-bef8ba8fc5c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1c3RhaW5hYmVsZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 3,
      title: 'Community Workshops',
      description: 'Organizing workshops and training programs to empower artisans and strengthen their skills.',
      image: 'https://images.unsplash.com/photo-1743708825952-eb9211e1765c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHN1c3RhaW5hYmVsZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 4,
      title: 'Cultural Exchange',
      description: 'Fostering cultural exchange and understanding through collaborative projects with artists and designers.',
      image: 'https://plus.unsplash.com/premium_photo-1671467857784-73e69ed7a02e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxzdXN0YWluYWJlbGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="community-page">
      <div className="community-hero">
        <div className="hero-content-container">
          <h1 className="community-title">COMMUNITY / COLLABORATION</h1>
          <p className="community-subtitle">
            Building bridges between tradition and innovation, one collaboration at a time.
          </p>
        </div>
      </div>

      <section className="community-intro">
        <div className="container">
          <div className="intro-content">
            <p className="body-text intro-text">
              At Khaddar, we believe that fashion is a collaborative art. Our community initiatives and collaborations bring together artisans, designers, and cultural enthusiasts to create something meaningful. Through these partnerships, we aim to preserve traditional crafts, support local communities, and inspire new generations to appreciate the beauty of handcrafted excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="collaborations-section">
        <div className="container">
          <h2 className="section-heading">OUR COLLABORATIONS</h2>
          <div className="collaborations-grid">
            {collaborations.map((collab) => (
              <div key={collab.id} className="collaboration-card">
                <div className="collaboration-image-wrapper">
                  <img src={collab.image} alt={collab.title} className="collaboration-image" />
                  <div className="collaboration-overlay">
                    <h3 className="collaboration-title">{collab.title}</h3>
                  </div>
                  <div className="collaboration-description-overlay">
                    <p className="collaboration-description-text">{collab.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-video">
        <div className="video-section-wrapper">
          <video
            className="community-video-element"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1718128306989-a5bd41566cde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2000"
          >
            <source src="https://cdn.pixabay.com/video/2024/03/29/206029_tiny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay-content">
            <p className="video-quote-community">
              "Together, we weave stories of tradition, innovation, and community."
            </p>
          </div>
        </div>
      </section>

      <section className="community-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">JOIN OUR COMMUNITY</h2>
            <p className="cta-text">
              Interested in collaborating with us? We'd love to hear from artisans, designers, and organizations passionate about sustainable fashion and traditional crafts.
            </p>
            <a href="/contact" className="cta-button">GET IN TOUCH</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

