import React, { useEffect } from 'react';
import HeroVideo from '../components/HeroVideo';
import VisionSection from '../components/VisionSection';
import AboutSection from '../components/AboutSection';
import MissionSection from '../components/MissionSection';
import BrandStory from '../components/BrandStory';
import FeaturedCollection from '../components/FeaturedCollection';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => sectionObserver.observe(section));
    
    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="home-page-container page-loaded">
      {/* Hero with Image */}
      <HeroVideo />
      
      {/* Plain sections with patterns - no spacing */}
      <div className="scroll-section">
        <VisionSection />
      </div>
      
      <div className="scroll-section">
        <AboutSection />
      </div>
      
      <div className="scroll-section">
        <MissionSection />
      </div>
      
      <div className="scroll-section">
        <BrandStory />
      </div>
      
      {/* Featured with Image */}
      <div className="scroll-section">
        <FeaturedCollection />
      </div>
    </div>
  );
};

export default Home;
