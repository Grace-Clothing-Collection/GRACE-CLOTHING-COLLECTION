import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            {/* Brand Info */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-text-primary">GRACE CLOTHING</div>
                <div className="logo-text-secondary">COLLECTION</div>
              </div>
            </div>
          </div>
          
          {/* About Section */}
          <div className="footer-info">
            <div className="about-section">
              <h3 className="section-title">About Us</h3>
              <div className="about-content">
                <p>
                  At Grace Clothing Collection, we believe shopping should be effortless, stylish, and trustworthy. 
                  Whether you're looking for timeless gentlemen's wear or ladies' fashion bags and other accessories, 
                  we bring you curated collections that blend quality, comfort, and the latest trends.
                </p>
                <p>
                  Our mission is to deliver an exceptional shopping experience — from browsing to fast, secure delivery 
                  right to your door. We're committed to offering premium products and outstanding customer service 
                  because you deserve nothing less.
                </p>
                <p>
                  Shop with confidence and discover fashion that fits your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            <p>Grace Clothing Collection. © 2025</p>
          </div>

          {/* Payment Methods */}
          <div className="payment-methods">
            <div className="payment-icon">
              <svg width="56" height="31" viewBox="0 0 56 31" fill="currentColor">
                <rect x="8" y="8" width="40" height="15" rx="3" fill="#1a365d"/>
                <text x="28" y="18" fontSize="8" fill="white" textAnchor="middle">VISA</text>
              </svg>
            </div>
            <div className="payment-icon">
              <svg width="56" height="31" viewBox="0 0 56 31" fill="currentColor">
                <circle cx="20" cy="15.5" r="12" fill="#eb001b"/>
                <circle cx="36" cy="15.5" r="12" fill="#f79e1b"/>
              </svg>
            </div>
            <div className="payment-icon">
              <svg width="56" height="31" viewBox="0 0 56 31" fill="currentColor">
                <rect x="8" y="8" width="40" height="15" rx="3" fill="#0066cc"/>
                <text x="28" y="18" fontSize="6" fill="white" textAnchor="middle">PayPal</text>
              </svg>
            </div>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM15.156 7.987c.46 0 .832.372.832.832 0 .459-.372.831-.832.831s-.831-.372-.831-.831c0-.46.372-.832.831-.832zM12.017 9.495c1.378 0 2.49 1.114 2.49 2.492 0 1.378-1.112 2.49-2.49 2.49-1.379 0-2.492-1.112-2.492-2.49 0-1.378 1.113-2.492 2.492-2.492zM12.017 4.008c.955 0 1.862.15 2.721.425.859.275 1.631.675 2.316 1.2.685.525 1.283 1.147 1.794 1.867.511.72.91 1.538 1.198 2.454.288.916.432 1.884.432 2.904 0 1.02-.144 1.988-.432 2.904-.288.916-.687 1.734-1.198 2.454-.511.72-1.109 1.342-1.794 1.867-.685.525-1.457.925-2.316 1.2-.859.275-1.766.425-2.721.425s-1.862-.15-2.721-.425c-.859-.275-1.631-.675-2.316-1.2-.685-.525-1.283-1.147-1.794-1.867-.511-.72-.91-1.538-1.198-2.454-.288-.916-.432-1.884-.432-2.904 0-1.02.144-1.988.432-2.904.288-.916.687-1.734 1.198-2.454.511-.72 1.109-1.342 1.794-1.867.685-.525 1.457-.925 2.316-1.2.859-.275 1.766-.425 2.721-.425z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
