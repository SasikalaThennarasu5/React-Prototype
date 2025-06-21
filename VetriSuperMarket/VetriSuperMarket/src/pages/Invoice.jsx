// File: src/pages/Invoice.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf'; // optional for tables
import '../styles/Invoice.css';

const Invoice = () => {
  const navigate = useNavigate();
  const { cart, customer } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + (item.rate + item.tax) * item.qty,
    0
  );

  const handleDownload = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text('Vetri Market - Tax Invoice', 14, 20);

    // Customer Info
    doc.setFontSize(12);
    doc.text(`Invoice #: HY678953789`, 14, 30);
    doc.text(`Customer: ${customer.name}`, 14, 40);
    doc.text(`Address: ${customer.address}`, 14, 50);
    doc.text(`Contact: ${customer.contact}`, 14, 60);
    doc.text(`Date: ${customer.date}`, 14, 70);

    // Table Data
    const tableData = cart.map((item) => [
      item.name,
      item.qty,
      item.rate + item.tax,
      (item.rate + item.tax) * item.qty,
    ]);

   autoTable(doc, {
  startY: 80,
  head: [['Item', 'Qty', 'Price (incl. Tax)', 'Total']],
  body: tableData,
});

    // Total
    doc.text(`Total Amount: ₹${totalAmount.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

    console.log("Generating PDF...");

    // Save PDF
    doc.save('invoice.pdf');
    alert('Invoice downloaded successfully!');
    navigate('/thank-you');
  };

  return (
    <div className="container py-4 invoice-container shadow rounded bg-white">
      <h2 className="text-center mb-4 invoice-title">Tax Invoice</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <p><strong>Sold By:</strong> <span className="text-primary">Vetri Market</span></p>
          <p><strong>Ship-From Address:</strong><br />
            65, Old Market, Sivagurunathapuram, Surandai,<br />
            Tamil Nadu 627-859
          </p>
        </div>
        <div className="col-md-6 text-md-end mt-3 mt-md-0">
          <p className="invoice-number-box">Invoice Number: <strong>#HY678953789</strong></p>
          <p><strong>Order ID:</strong> 07896311890</p>
          <p><strong>Order Date:</strong> {customer.date}</p>
        </div>
      </div>

      <div className="table-responsive mb-4">
        <table className="table table-bordered text-center invoice-table">
          <thead className="table-light">
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price (incl. Tax)</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td><strong>{item.name}</strong></td>
                <td>{item.qty}</td>
                <td>₹{item.rate + item.tax}</td>
                <td>₹{(item.rate + item.tax) * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-end mb-4">
        <h5><strong>Total:</strong> ₹ {totalAmount.toFixed(2)}</h5>
      </div>

      <div className="text-center">
        <Button variant="success" onClick={handleDownload}>
          Download Invoice
        </Button>
      </div>
    </div>
  );
};

export default Invoice;
