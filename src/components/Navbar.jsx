import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartCount] = useState(3); // Mock cart count

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => onNavigate('home')}>
          <div className="logo-text-primary">GRACE CLOTHING</div>
          <div className="logo-text-secondary">COLLECTION</div>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className={`search-input-container ${isSearchFocused ? 'focused' : ''}`}>
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
              <input
                type="text"
                placeholder="Search in products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="search-input"
              />
            </div>
          </form>

          {/* Search Dropdown - Show when focused and has content */}
          {isSearchFocused && searchQuery && (
            <div className="search-dropdown">
              <div className="search-results">
                <div className="search-item">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=72&h=72&fit=crop&crop=center" alt="Product" className="search-item-image" />
                  <div className="search-item-details">
                    <div className="search-item-info">
                      <h4 className="search-item-name">Classic Gentlemen Blazer</h4>
                    </div>
                    <div className="search-item-price">
                      <span className="current-price">GHC 250</span>
                      <span className="original-price">GHC 350</span>
                    </div>
                  </div>
                </div>
                <div className="search-item">
                  <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=72&h=72&fit=crop&crop=center" alt="Product" className="search-item-image" />
                  <div className="search-item-details">
                    <div className="search-item-info">
                      <h4 className="search-item-name">Ladies Fashionable Bag</h4>
                    </div>
                    <div className="search-item-price">
                      <span className="current-price">GHC 150</span>
                      <span className="original-price">GHC 180</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search-categories">
                <h4 className="categories-title">Categories</h4>
                <div className="category-tags">
                  <button className="category-tag">
                    <span className="category-dot">•</span>
                    <span>Men's Fashion</span>
                  </button>
                  <button className="category-tag">
                    <span className="category-dot">•</span>
                    <span>Women's Fashion</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="navbar-actions">
          {/* User Account */}
          <button className="action-btn user-btn" onClick={() => onNavigate('profile')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </button>

          {/* Shopping Cart */}
          <div className="cart-container" onClick={() => onNavigate('cart')}>
            <div className="cart-btn">
              <svg className="cart-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              {cartCount > 0 && (
                <div className="cart-badge">
                  <span className="cart-count">{cartCount}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
