import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = ({ productId, onNavigate }) => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('White');
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const productData = {
    1: {
      name: "Men's Shirt Short Sleeve",
      price: 120.99,
      originalPrice: 150.99,
      rating: 4.9,
      reviews: 142,
      description: "Experience the difference with our Men's Summer Beach Dress Shirt. Crafted from a breathable, lightweight fabric, it offers unmatched comfort for those hot days. The sleek design ensures you're always effortlessly well-dressed, whether you're relaxing or out on the town.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=center",
      fabric: {
        material: "Cotton Blend",
        care: "Machine wash cold, tumble dry low"
      },
      colors: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Black", hex: "#000000" },
        { name: "Navy", hex: "#1F2937" },
        { name: "Gray", hex: "#6B7280" }
      ],
      keywords: ["men's fashion", "plain t-shirt", "colorful accessory", "women's fashion"],
      sizes: ["S", "M", "L", "XL", "2XL"]
    }
  };

  const product = productData[productId] || productData[1];

  const recommendedProducts = [
    {
      id: 2,
      name: "3 Pieces of T-Shirt",
      category: "Men's Fashion",
      price: 150.99,
      originalPrice: 300,
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Crop Top",
      category: "Women's Fashion",
      price: 80.99,
      originalPrice: 100.99,
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Black School Bag",
      category: "Accessories",
      price: 100,
      originalPrice: 150,
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "3 Pieces of Boxers",
      category: "Underwear",
      price: 85,
      originalPrice: 120,
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center"
    }
  ];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const subtotal = product.price * quantity;

  return (
    <div className="product-page">
      <div className="main">
        <div className="main-content">
          <div className="product-content">
            <div className="product-info">
              {/* Product Images */}
              <div className="product-images">
                <div className="image-showing">
                  <img className="product-image" src={product.image} alt={product.name} />
                  <div className="tag">
                    <svg className="tag-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1l2.5 5.5L16 7l-4 4 1 5.5L8 14l-5 2.5L4 11 0 7l5.5-.5L8 1z"/>
                    </svg>
                    <span className="tag-text">New in</span>
                  </div>
                  <button className="cart-btn-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="separator"></div>

              {/* Right Side Content */}
              <div className="right-content">
                {/* Product Header with Title, Rating, and Price */}
                <div className="product-header">
                  <h1 className="product-title">{product.name}</h1>
                  <div className="reviews">
                    <svg className="star-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 .5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.1l-4.2 2.4.8-4.7L1.2 5.5l4.7-.7L8 .5z"/>
                    </svg>
                    <span className="rating-text">{product.rating}</span>
                    <span className="rating-separator">·</span>
                    <span className="reviews-text">{product.reviews} reviews</span>
                  </div>
                  <div className="price-lg">
                    <span className="current-price">GHC{product.price}</span>
                    <span className="original-price">GHC{product.originalPrice}</span>
                  </div>
                </div>

                {/* Product Options */}
                <div className="product-options">
                  {/* Color Selection */}
                  <div className="color-container">
                    <h3 className="color-title">Color: {selectedColor}</h3>
                    <div className="colors">
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          className={`color-item ${selectedColor === color.name ? 'selected' : ''}`}
                          onClick={() => setSelectedColor(color.name)}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        >
                          {selectedColor === color.name && (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="check-icon">
                              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div className="size-container">
                    <h3 className="size-title">Size: {selectedSize}</h3>
                    <div className="sizes">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          className={`size-item ${selectedSize === size ? 'selected' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity and Cart */}
                  <div className="quantity">
                    <div className="quantity-input">
                      <button 
                        className="decrease-btn"
                        onClick={() => handleQuantityChange(-1)}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                      </button>
                      <div className="current-quantity">
                        <span>{quantity}</span>
                      </div>
                      <button 
                        className="increase-btn"
                        onClick={() => handleQuantityChange(1)}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                      </button>
                    </div>
                    <button className="cart-button">
                      <svg className="cart-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 10H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 4l.5 2H13L13.5 4H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                      </svg>
                      <span>Add to cart</span>
                    </button>
                  </div>

                  {/* Total Price Info */}
                  <div className="total-price-info">
                    <div className="subtotal">
                      <div className="subtotal-row">
                        <span>GHC{product.price} x {quantity}</span>
                        <span>GHC{subtotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="separator-line"></div>
                    <div className="total">
                      <span className="total-label">Total</span>
                      <span className="total-price">GHC{subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Product Description and Details */}
                <div className="product-description-section">
                  <p className="product-description">{product.description}</p>

                  {/* Fabric + Care */}
                  <div className="fabric">
                    <h3 className="section-title">Fabric + Care</h3>
                    <div className="fabric-details">
                      <p>Material: {product.fabric.material}</p>
                      <p>Care: {product.fabric.care}</p>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="keywords">
                    <h3 className="section-title">Keywords</h3>
                    <div className="keywords-items">
                      {product.keywords.map((keyword, index) => (
                        <div key={index} className="keyword-item">
                          <svg className="keyword-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                          <span>{keyword}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="recommendation-section">
              <div className="recommendations">
                <h3 className="recommendations-title">Recommended products</h3>
                <div className="recommended-products-grid">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => onNavigate('product', product.id)}>
                      <img className="product-image" src={product.image} alt={product.name} />
                      <div className="product-info">
                        <div className="info">
                          <div className="product-name">
                            <h5>{product.name}</h5>
                            <p className="category">{product.category}</p>
                          </div>
                          <div className="rating">
                            <svg className="star-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M8 .5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.1l-4.2 2.4.8-4.7L1.2 5.5l4.7-.7L8 .5z"/>
                            </svg>
                            <span>{product.rating} ({product.reviews})</span>
                          </div>
                        </div>
                        <div className="price">
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
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

