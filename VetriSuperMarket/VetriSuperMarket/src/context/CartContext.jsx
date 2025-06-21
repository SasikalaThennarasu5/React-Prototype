import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [customer, setCustomer] = useState({
    name: 'Priya',
    contact: '8910866713',
    address: '12, Cross Cut Road, Chennai.',
    date: '12/7/24',
  });

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ customer, setCustomer, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};