import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const culturalThoughts = [
  {
    quote: "Every thread woven by hand carries the soul of an artisan.",
    context: "— The Spirit of Kutch"
  },
  {
    quote: "In the desert of Kutch, colors bloom through the hands of its people.",
    context: "— Bhujodi Weaving Tradition"
  },
  {
    quote: "Ajrakh is not just a fabric, it is a philosophy of harmony with nature.",
    context: "— Ancient Block Printing Art"
  },
  {
    quote: "Where the land meets the sky, artisans weave stories of generations.",
    context: "— Rann of Kutch"
  },
  {
    quote: "Handloom is the heartbeat of India's cultural heritage.",
    context: "— Indian Textile Legacy"
  },
  {
    quote: "Each mirror sewn is a reflection of centuries-old craftsmanship.",
    context: "— Kutchi Mirror Work"
  },
  {
    quote: "Sustainable fashion was born in India, long before it had a name.",
    context: "— Khaddar Philosophy"
  },
  {
    quote: "The rhythm of the loom echoes the heartbeat of tradition.",
    context: "— Handwoven Heritage"
  },
  {
    quote: "In every fold of fabric lies the patience of an artisan's journey.",
    context: "— Bandhani Tie-Dye Art"
  },
  {
    quote: "Colors of Kutch tell tales that words cannot express.",
    context: "— Vibrant Gujarat"
  }
];

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentThought, setCurrentThought] = useState(culturalThoughts[0]);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      // Pick a random thought
      const randomIndex = Math.floor(Math.random() * culturalThoughts.length);
      setCurrentThought(culturalThoughts[randomIndex]);
      
      // Start transition
      setIsTransitioning(true);
      
      // After 2 seconds, complete transition
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* Transition Overlay */}
      <div className={`page-transition-overlay ${isTransitioning ? 'active' : ''}`}>
        <div className="transition-content">
          {/* Decorative element */}
          <div className="transition-motif">◆</div>
          
          {/* Quote */}
          <blockquote className="transition-quote">
            "{currentThought.quote}"
          </blockquote>
          
          {/* Context */}
          <p className="transition-context">{currentThought.context}</p>
          
          {/* Loading indicator */}
          <div className="transition-loader">
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className={`page-content ${isTransitioning ? 'transitioning' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;

