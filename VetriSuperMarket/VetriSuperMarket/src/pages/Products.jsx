// File: src/pages/Products.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PlusCircle, DashCircle,CartFill } from 'react-bootstrap-icons';
import { useCart } from '../context/CartContext';


const productList = [
  { id: 1, name: 'Dairy Milk', rate: 100, tax: 20 },
  { id: 2, name: 'Millet Noodles', rate: 30, tax: 10 },
  { id: 3, name: 'Wheat Flour', rate: 100, tax: 20 },
  { id: 4, name: 'Maida', rate: 30, tax: 10 },
  { id: 5, name: 'Chili Powder', rate: 100, tax: 20 },
  { id: 6, name: 'Biryani Masala', rate: 30, tax: 10 },
];

const Products = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleQtyChange = (id, value) => {
    const qty = Math.max(1, parseInt(value) || 1);
    setQuantities((prev) => ({ ...prev, [id]: qty }));
  };

  const addToCart = (product) => {
    const qty = quantities[product.id] || 1;
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert(`${product.name} is already in cart!`);
      return;
    }

    const newItem = {
      ...product,
      qty,
    };
    setCart([...cart, newItem]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 text-center">Products</h4>
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>Item Details</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Tax</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => {
              const qty = quantities[product.id] || 1;
              const totalAmount = (product.rate + product.tax) * qty;

              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td style={{ maxWidth: '100px' }}>
                    <div className="d-flex justify-content-center align-items-center gap-3">
    <PlusCircle
      size={20}
      color="blue"
      style={{ cursor: 'pointer' }}
      onClick={() =>
        setQuantities((prev) => ({
          ...prev,
          [product.id]: (prev[product.id] || 1) + 1,
        }))
      }
    />

    <span>{qty}</span>

    <DashCircle
      size={20}
      color="blue"
      style={{ cursor: 'pointer' }}
      onClick={() =>
        setQuantities((prev) => ({
          ...prev,
          [product.id]: Math.max(1, (prev[product.id] || 1) - 1),
        }))
      }
    />
  </div>

                  </td>
                  <td>₹{product.rate}</td>
                  <td>₹{product.tax}</td>
                  <td>₹{totalAmount}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => addToCart(product)}
                    >
                      <CartFill />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-3">
        <Button variant="primary" onClick={() => navigate('/')}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Products;
