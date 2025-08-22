// src/pages/ProductPage.jsx
import React from 'react';
import PageLayout from '../components/pagelayout';

const ProductPage = () => {
  return (
    <PageLayout title="Product Details">
      <div className="product-content">
        <p>Product information goes here</p>
        {/* Add your product content here */}
      </div>
    </PageLayout>
  );
};

export default ProductPage;