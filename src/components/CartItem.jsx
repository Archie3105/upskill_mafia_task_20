import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item, removeFromCart, incrementQuantity, decrementQuantity }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <div className="item-row">
      <p>${item.price*item.quantity}</p>
      <div className="quantity-controls">
        <button onClick={() => decrementQuantity(item.id)}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementQuantity(item.id)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
    </div>
  );
};

export default CartItem;
