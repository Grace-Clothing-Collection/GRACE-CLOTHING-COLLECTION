import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

const CartPage = () => (
  <div className="container py-5">
    <div className="text-center">
      <i className="bi bi-cart3 display-1 text-muted mb-3"></i>
      <h1>Shopping Cart</h1>
      <p className="text-muted">Your cart is currently empty</p>
      <p>Cart functionality coming soon...</p>
    </div>
  </div>
);

const FavoritesPage = () => (
  <div className="container py-5">
    <div className="text-center">
      <i className="bi bi-heart display-1 text-muted mb-3"></i>
      <h1>Favorites</h1>
      <p className="text-muted">You haven't added any favorites yet</p>
      <p>Your favorite items will appear here...</p>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="container py-5">
    <div className="text-center">
      <i className="bi bi-person-circle display-1 text-muted mb-3"></i>
      <h1>Profile</h1>
      <p className="text-muted">Manage your account settings</p>
      <p>Profile management coming soon...</p>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleNavigate = (page, productId = null) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'shop':
        return <ShopPage onNavigate={handleNavigate} />;
      case 'product':
        return <ProductPage productId={selectedProductId} onNavigate={handleNavigate} />;
      case 'cart':
        return <CartPage />;
      case 'favorites':
        return <FavoritesPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow-1">
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;