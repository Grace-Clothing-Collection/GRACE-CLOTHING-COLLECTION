// src/pages/LoginPage.jsx
import React from 'react';
import PageLayout from '../components/pagelayout';

const LoginPage = () => {
  return (
    <PageLayout title="Login">
      <div className="login-content">
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        {/* Add your login content here */}
      </div>
    </PageLayout>
  );
};

export default LoginPage;