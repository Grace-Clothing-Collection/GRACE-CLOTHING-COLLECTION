import React from 'react';

const PageLayout = ({ title, children }) => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>{title}</h1>
      </header>
      <main className="page-content">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;