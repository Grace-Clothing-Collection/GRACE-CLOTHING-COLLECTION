// src/pages/DashboardPage.jsx
import React from 'react';
import PageLayout from '../components/pagelayout';

const DashboardPage = () => {
  return (
    <PageLayout title="Dashboard">
      <div className="dashboard-content">
        <p>Your account dashboard</p>
        {/* Add your dashboard content here */}
      </div>
    </PageLayout>
  );
};

export default DashboardPage;