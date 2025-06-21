import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Trash } from 'react-bootstrap-icons';
import { useCart } from '../context/CartContext';
import { MicFill, UpcScan } from 'react-bootstrap-icons';

const Home = () => {
  const navigate = useNavigate();
  const { customer, cart, setCart } = useCart();

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container py-4">
      <h5 className="mb-3">Customer Details</h5>
      <div className="row mb-3">
        <div className="col-md-6 col-12">
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Address:</strong> {customer.address}</p>
        </div>
        <div className="col-md-6 col-12">
          <p><strong>Contact:</strong> {customer.contact}</p>
          <p><strong>Date:</strong> {customer.date}</p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
  <div className="input-group" style={{ maxWidth: '350px' }}>
    <span className="input-group-text bg-warning-subtle">
      <UpcScan />
    </span>
    <input className="form-control" placeholder="Search or scan..." />
    <span className="input-group-text bg-warning-subtle">
      <MicFill />
    </span>
  </div>
  <Button variant="warning" onClick={() => navigate('/products')}>
    + Add Item
  </Button>
</div>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Tax</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.rate}</td>
                <td>{item.tax}</td>
                <td>{(item.rate + item.tax) * item.qty}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleRemove(item.id)}>
                    <Trash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-3">
        <Button variant="primary" onClick={() => navigate('/billing')}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;
