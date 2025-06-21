// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Billing from './pages/Billing';
import OrderComplete from './pages/OrderComplete';
import Invoice from './pages/Invoice';
import ThankYou from './pages/ThankYou';
import { CartProvider } from './context/CartContext';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="d-flex">
          <div className="d-none d-md-block">
            <Sidebar />
          </div>
          <div className="flex-grow-1 p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/order-complete" element={<OrderComplete />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
