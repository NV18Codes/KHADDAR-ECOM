import React from 'react';
import './Home.css';
import HeroVideo from '../components/HeroVideo';
import VisionSection from '../components/VisionSection';
import AboutSection from '../components/AboutSection';
import MissionSection from '../components/MissionSection';
import BrandStory from '../components/BrandStory';
import FeaturedCollection from '../components/FeaturedCollection';

const Home = () => {
  return (
    <div className="home">
      <HeroVideo />
      <VisionSection />
      <AboutSection />
      <MissionSection />
      <BrandStory />
      <FeaturedCollection />
    </div>
  );
};

export default Home;

