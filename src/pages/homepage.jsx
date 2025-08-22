import React from 'react';
import PageLayout from '../components/pagelayout';

const HomePage = () => {
  return (
    <PageLayout title="Welcome to Our Store">
      <div className="home-content">
        <p>Discover our amazing products and offers!</p>
        {/* Add your homepage content here */}
      </div>
    </PageLayout>
  );
};

export default HomePage;