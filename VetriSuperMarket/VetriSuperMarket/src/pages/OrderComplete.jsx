import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const OrderComplete = () => {
  const navigate = useNavigate();

  const cellStyle = { backgroundColor: '#CEF0D2' };

  return (
    <div className="container py-4 text-center">
      <h4 className="text-success mb-3">Your Order Completed Successfully!</h4>
      <p>Thank you <strong>Your order has been received</strong>.</p>

      <div className="my-4">
        <img
          src="/images/completed.png"
          alt="Thank You"
          className="img-fluid my-4"
          style={{ maxWidth: '200px' }}
        />
      </div>

      {/* 2x5 Summary Table */}
      <div className="table-responsive mb-4">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th style={cellStyle}>Order ID</th>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Phone</th>
              <th style={cellStyle}>Email</th>
              <th style={cellStyle}>Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>145</td>
              <td style={cellStyle}>Keerthi</td>
              <td style={cellStyle}>9710345678</td>
              <td style={cellStyle}>keerthi1234@gmail.com</td>
              <td style={cellStyle}>Cash</td>
            </tr>
            <tr>
              <td colSpan={5} style={cellStyle}>
                <Button
                  style={{
                    backgroundColor: '#FF9800',
                    borderColor: '#FF9800',
                    color: 'white',
                  }}
                  onClick={() => navigate('/invoice')}
                >
                  Download Invoice
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderComplete;
