// src/pages/AboutPage.jsx
import React from 'react';
import PageLayout from '../components/pagelayout';

const AboutPage = () => {
  return (
    <PageLayout title="About Us">
      <div className="about-content">
        <p>Learn more about our company</p>
        {/* Add your about content here */}
      </div>
    </PageLayout>
  );
};

export default AboutPage;