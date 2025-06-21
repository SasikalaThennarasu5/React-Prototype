// File: src/pages/Billing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from 'react-bootstrap/Button';

const Billing = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.rate * item.qty, 0);
  const tax = cart.reduce((sum, item) => sum + item.tax * item.qty, 0);
  const roundOff = 0;
  const total = subtotal + tax + roundOff;

  const [mode, setMode] = useState('CASH');
  const [receivedAmount, setReceivedAmount] = useState(total);
  const balance = receivedAmount - total;

  return (
    <div className="container py-4">
      <div className="row mb-3">
        <div className="col-md-6 col-12 mb-3 mb-md-0">
          <p><strong>DATE:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>TIME:</strong> {new Date().toLocaleTimeString()}</p>
          <p><strong>BILL NO:</strong> 78123</p>
        </div>
        <div className="col-md-6 col-12 text-md-end text-start">
          <Button variant="primary">Draft</Button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-6 col-12 mb-2 mb-sm-0">
          <Button className="w-100" variant="warning">
            Collected Amount ₹{total.toFixed(2)}
          </Button>
        </div>
        <div className="col-sm-6 col-12">
          <Button className="w-100" variant="light" style={{ backgroundColor: '#d4a1ef' }}>
            Balance ₹{balance.toFixed(2)}
          </Button>
        </div>
      </div>

      <div className="mb-3">
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            id="cash"
            name="paymentMode"
            checked={mode === 'CASH'}
            onChange={() => setMode('CASH')}
          />
          <label className="form-check-label" htmlFor="cash">CASH</label>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            id="card"
            name="paymentMode"
            checked={mode === 'CARD'}
            onChange={() => setMode('CARD')}
          />
          <label className="form-check-label" htmlFor="card">CARD</label>
        </div>
        <input
          className="form-control"
          type="number"
          value={receivedAmount}
          onChange={(e) => setReceivedAmount(+e.target.value)}
          placeholder="Received Amount"
        />
      </div>

      <hr />

      <div className="row mb-3">
        <div className="col-12 col-md-4">
          <p><strong>Sub Total:</strong> ₹{subtotal.toFixed(2)}</p>
        </div>
        <div className="col-12 col-md-4">
          <p><strong>Tax:</strong> ₹{tax.toFixed(2)}</p>
        </div>
        <div className="col-12 col-md-4">
          <p><strong>Round Off:</strong> ₹{roundOff.toFixed(2)}</p>
        </div>
      </div>

      <div className="text-end mb-4">
        <h5><strong>Total:</strong> ₹{total.toFixed(2)}</h5>
      </div>

      <div className="d-grid d-md-flex gap-3">
        <Button variant="warning" className="w-100 w-md-auto">Save</Button>
        <Button variant="primary" className="w-100 w-md-auto" onClick={() => navigate('/order-complete')}>
          Payment
        </Button>
      </div>
    </div>
  );
};

export default Billing;
