import React from 'react';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  const featuredProducts = [
    {
      id: 1,
      name: "Classic Gentlemen Blazer",
      category: "Men's Fashion",
      price: 250,
      originalPrice: 350,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center",
      rating: 4.9,
      reviews: 98
    },
    {
      id: 2,
      name: "Ladies Fashionable Bag",
      category: "Accessories",
      price: 150,
      originalPrice: 180,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 3,
      name: "School & Travel Backpack",
      category: "Accessories",
      price: 120,
      originalPrice: 150,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: "Ladies Elegant Dress",
      category: "Women's Fashion",
      price: 200,
      originalPrice: 250,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center",
      rating: 4.9,
      reviews: 156
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=800&fit=crop&crop=center" 
            alt="Fashion Collection"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-text">
              <p className="hero-tagline">100% Original Products</p>
              <h1 className="hero-title">
                <span>Exclusive collection</span>
                <span>for everyone</span>
              </h1>
              <button 
                className="hero-button"
                onClick={() => onNavigate('shop')}
              >
                <span>Explore now</span>
                <svg width="30" height="20" viewBox="0 0 30 20" fill="currentColor">
                  <path d="M20 2L28 10L20 18M28 10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="hero-slider">
              <div className="slider-indicator">
                <span className="slide-count">1 / 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Info Section */}
      <div className="brand-info-section">
        <div className="brand-info-container">
          <div className="brand-info-card">
            <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            </svg>
            <div className="info-content">
              <h3>Nationwide delivery</h3>
              <p>Fast delivery nationwide</p>
            </div>
          </div>
          
          <div className="separator"></div>
          
          <div className="brand-info-card">
            <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div className="info-content">
              <h3>Very easy to return</h3>
              <p>Just phone number</p>
            </div>
          </div>
          
          <div className="separator"></div>
          
          <div className="brand-info-card">
            <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div className="info-content">
              <h3>Trusted by thousands</h3>
              <p>Excellent customer ratings</p>
            </div>
          </div>
          
          <div className="separator"></div>
          
          <div className="brand-info-card">
            <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div className="info-content">
              <h3>Refunds policy</h3>
              <p>60 days return for any reason</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="reviews-section">
        <div className="reviews-container">
          <h2 className="section-title">
            <span>Customer Reviews. </span>
            <span className="subtitle">What our customers say about us</span>
          </h2>
          
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-header">
                <div className="stars">
                  <span>⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="review-rating">5.0</div>
              </div>
              <p className="review-text">
                "Amazing quality and fast delivery! I love the selection for both men and women. 
                The customer service was exceptional and helped me find exactly what I was looking for."
              </p>
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b002?w=60&h=60&fit=crop&crop=face" alt="Sarah L." />
                </div>
                <div className="reviewer-details">
                  <span className="reviewer-name">Sarah L.</span>
                  <span className="reviewer-location">Accra, Ghana</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="stars">
                  <span>⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="review-rating">5.0</div>
              </div>
              <p className="review-text">
                "Great shopping experience! The site is easy to use and the customer support was very helpful. 
                My order arrived quickly and everything was perfectly packaged."
              </p>
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Mark D." />
                </div>
                <div className="reviewer-details">
                  <span className="reviewer-name">Mark D.</span>
                  <span className="reviewer-location">Kumasi, Ghana</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="stars">
                  <span>⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="review-rating">5.0</div>
              </div>
              <p className="review-text">
                "Stylish clothes that fit perfectly. I'll definitely shop here again! 
                The quality exceeded my expectations and the prices are very reasonable."
              </p>
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" alt="Emily R." />
                </div>
                <div className="reviewer-details">
                  <span className="reviewer-name">Emily R.</span>
                  <span className="reviewer-location">Takoradi, Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <div className="collections-section">
        <div className="collections-container">
          <h2 className="section-title">
            <span>Start exploring. </span>
            <span className="subtitle">Good things are waiting for you</span>
          </h2>
          
          <div className="collections-grid">
            <div className="collection-card mens">
              <div className="collection-content">
                <div className="collection-info">
                  <h3>For Men's</h3>
                  <p>Starting at GHC15</p>
                </div>
                <div className="shop-link" onClick={() => onNavigate('shop')}>
                  <span>Shop Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="collection-card womens">
              <div className="collection-content">
                <div className="collection-info">
                  <h3>For Women's</h3>
                  <p>Starting at GHC15</p>
                </div>
                <div className="shop-link" onClick={() => onNavigate('shop')}>
                  <span>Shop Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="collection-card accessories">
              <div className="collection-content">
                <div className="collection-info">
                  <h3>Accessories</h3>
                  <p>Explore accessories</p>
                </div>
                <div className="shop-link" onClick={() => onNavigate('shop')}>
                  <span>Shop Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="recommendations-section">
        <div className="recommendations-container">
          <h2 className="section-title">
            <span>Recommendations. </span>
            <span className="subtitle">Best matching products for you</span>
          </h2>
          
          <div className="recommended-products">
            <div className="products-grid">
              {featuredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="product-card"
                  onClick={() => onNavigate('product', product.id)}
                >
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <div className="product-details">
                      <div className="product-meta">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-category">{product.category}</p>
                      </div>
                      <div className="product-rating">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span>{product.rating} ({product.reviews})</span>
                      </div>
                    </div>
                    <div className="product-price">
                      <span className="current-price">GHC{product.price}</span>
                      <span className="original-price">GHC{product.originalPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-background">
            <img 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=600&fit=crop&crop=center" 
              alt="Fashion Banner"
              className="cta-bg-image"
            />
          </div>
          <div className="cta-content">
            <div className="cta-text">
              <p className="cta-tagline">100% Original Products</p>
              <h2 className="cta-title">
                <span>The All New Fashion</span>
                <span>Collection Items</span>
              </h2>
              <p className="cta-subtitle">Your Fashion plug</p>
              <button 
                className="cta-button"
                onClick={() => onNavigate('shop')}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
