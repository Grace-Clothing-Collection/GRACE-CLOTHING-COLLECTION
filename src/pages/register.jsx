// src/pages/RegisterPage.jsx
import React from 'react';
import PageLayout from '../components/pagelayout';

const RegisterPage = () => {
  return (
    <PageLayout title="Register">
      <div className="register-content">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
        {/* Add your register content here */}
      </div>
    </PageLayout>
  );
};

export default RegisterPage;