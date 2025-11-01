import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  // Logo is in public folder - using the actual filename
  const logo = '/logo_file_page-0001.png';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo-link">
              <img src={logo} alt="Khaddar Logo" className="footer-logo" />
            </Link>
            <p className="footer-text">
              A conscious fashion brand celebrating Indian craftsmanship and sustainable living.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">EXPLORE</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/shop/mens-wear">Men's Wear</Link></li>
              <li><Link to="/shop/womens-wear">Women's Wear</Link></li>
              <li><Link to="/community">Community / Collaboration</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">CUSTOMER CARE</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#shipping">Shipping Information</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">CONNECT</h4>
            <div className="social-links">
              <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://youtube.com" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Khaddar. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

