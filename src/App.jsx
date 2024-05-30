import React, { useState } from 'react';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingShoe = prevCart.find((item) => item.id === shoe.id);
      if (existingShoe) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (shoeId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== shoeId));
  };

  const incrementQuantity = (shoeId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === shoeId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (shoeId) => {
    setCart((prevCart) => {
      const existingShoe = prevCart.find((item) => item.id ===
shoeId);
if (existingShoe.quantity === 1) {
return prevCart.filter((item) => item.id !== shoeId);
} else {
return prevCart.map((item) =>
item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
);
}
});
};

return (
<div className="main">
  <Navbar />
<div className="app">
<ShoeList addToCart={addToCart} />
<Cart
     cart={cart}
     removeFromCart={removeFromCart}
     incrementQuantity={incrementQuantity}
     decrementQuantity={decrementQuantity}
   />
</div>
</div>
);
};

export default App;