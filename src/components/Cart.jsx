import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      ))}
      <h3>Total: ${totalCost.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
