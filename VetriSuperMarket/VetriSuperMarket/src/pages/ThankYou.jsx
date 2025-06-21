// File: src/pages/ThankYou.jsx
import React from 'react';

const ThankYou = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="text-success">Thank You!</h2>
      <p className="lead">Your order and payment have been successfully processed.</p>
      <img src="/images/thank you.png" alt="Thank You" className="img-fluid my-4" style={{ maxWidth: '200px' }} />

      <p>We look forward to seeing you again at <strong>Vetri Market</strong>!</p>
    </div>
  );
};

export default ThankYou;
