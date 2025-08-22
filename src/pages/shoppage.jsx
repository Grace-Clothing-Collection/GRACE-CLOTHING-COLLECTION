import React, { useState } from 'react';
import './ShopPage.css';

const ShopPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedBrand, setBrand] = useState('All Brands');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('list'); // grid or list
  const [wishlistItems, setWishlistItems] = useState(new Set());

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlistItems);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlistItems(newWishlist);
  };

  const sampleProducts = [
    { 
      id: 1, 
      name: "Classic Gentlemen Blazer", 
      price: 250, 
      originalPrice: 350,
      discount: 29,
      category: "Men's Fashion",
      brand: "Grace Collection",
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center"
    },
    { 
      id: 2, 
      name: "Ladies Fashionable Bag", 
      price: 150, 
      originalPrice: 180,
      discount: 17,
      category: "Accessories",
      brand: "Grace Collection",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&crop=center"
    },
    { 
      id: 3, 
      name: "School & Travel Backpack", 
      price: 120, 
      originalPrice: 150,
      discount: 20,
      category: "Accessories",
      brand: "Grace Collection",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center"
    },
    { 
      id: 4, 
      name: "Ladies Elegant Dress", 
      price: 200, 
      originalPrice: 250,
      discount: 20,
      category: "Women's Fashion",
      brand: "Grace Collection",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center"
    },
    { 
      id: 5, 
      name: "Men's Casual T-Shirt", 
      price: 85, 
      originalPrice: 110,
      discount: 23,
      category: "Men's Fashion",
      brand: "Grace Collection",
      rating: 4.6,
      reviews: 73,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center"
    },
    { 
      id: 6, 
      name: "Women's Business Blazer", 
      price: 320, 
      originalPrice: 420,
      discount: 24,
      category: "Women's Fashion",
      brand: "Grace Collection",
      rating: 4.8,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1591369823096-65ad4d75a30d?w=400&h=500&fit=crop&crop=center"
    },
    { 
      id: 7, 
      name: "Comfort Cotton Hoodie", 
      price: 125, 
      originalPrice: 155,
      discount: 19,
      category: "Men's Fashion",
      brand: "Grace Collection",
      rating: 4.7,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center"
    },
    { 
      id: 8, 
      name: "Premium Leather Wallet", 
      price: 95, 
      originalPrice: 120,
      discount: 21,
      category: "Accessories",
      brand: "Grace Collection",
      rating: 4.9,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop&crop=center"
    }
  ];

  const categories = ["All Categories", "Men's Fashion", "Women's Fashion", "Accessories"];
  const brands = ["All Brands", "Grace Collection"];
  const priceRanges = [
    { value: "", label: "All Prices" },
    { value: "0-100", label: "GHC 0 - GHC 100" },
    { value: "100-200", label: "GHC 100 - GHC 200" },
    { value: "200-300", label: "GHC 200 - GHC 300" },
    { value: "300+", label: "GHC 300+" }
  ];

  const handleProductClick = (productId) => {
    onNavigate('product', productId);
  };

  // Filter and sort logic would go here
  const filteredProducts = sampleProducts;

  return (
    <div className="shop-page">
      <div className="shop-container">
        <div className="shop-content">
          {/* Filters Sidebar */}
          <div className="filters-sidebar">
            <div className="filters-card">
              <h3 className="filters-title">Filters</h3>
              
              {/* Category Filter */}
              <div className="filter-group">
                <h4 className="filter-label">Categories</h4>
                <div className="category-items">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className="category-dot">•</span>
                      <span className="category-text">{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="filter-group">
                <h4 className="filter-label">Price Range</h4>
                <select 
                  className="filter-select"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="filter-group">
                <h4 className="filter-label">Sort by</h4>
                <select 
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                  <option value="discount">Best Discounts</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content">
            {/* Header with View Controls */}
            <div className="content-header">
              <div className="view-controls">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="1" y="1" width="6" height="6" rx="1"/>
                    <rect x="9" y="1" width="6" height="6" rx="1"/>
                    <rect x="1" y="9" width="6" height="6" rx="1"/>
                    <rect x="9" y="9" width="6" height="6" rx="1"/>
                  </svg>
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="1" y="2" width="14" height="2" rx="1"/>
                    <rect x="1" y="6" width="14" height="2" rx="1"/>
                    <rect x="1" y="10" width="14" height="2" rx="1"/>
                    <rect x="1" y="14" width="14" height="2" rx="1"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                    />
                    {product.discount > 0 && (
                      <span className="discount-badge">
                        {product.discount}% OFF
                      </span>
                    )}
                    <button 
                      className={`wishlist-btn ${wishlistItems.has(product.id) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.99 17.5l-6.19-6.19C2.1 9.6 2.1 7.4 3.81 5.69s4.38-1.71 6.09 0L10 5.79l.1-.1c1.71-1.71 4.38-1.71 6.09 0s1.71 4.38 0 6.09L9.99 17.5z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="product-info">
                    <div className="product-details">
                      <div className="product-meta">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-category">{product.category}</p>
                      </div>
                      <div className="product-rating">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="rating-text">{product.rating} ({product.reviews})</span>
                      </div>
                    </div>
                    <div className="product-price">
                      <span className="current-price">GHC {product.price}</span>
                      {product.discount > 0 && (
                        <span className="original-price">GHC {product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination-container">
              <div className="pagination-numbers">
                <button className="page-btn prev-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </button>
                <button className="page-number active">1</button>
                <button className="page-number">2</button>
                <button className="page-number">3</button>
                <button className="page-number">4</button>
                <button className="page-number">5</button>
                <button className="page-btn next-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;