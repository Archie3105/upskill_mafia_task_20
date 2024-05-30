import React from 'react';
import ShoeItem from './ShoeItem';
import shoe1 from '../assets/images/shoe1.png';
import shoe2 from '../assets/images/shoe2.png';
import shoe3 from '../assets/images/shoe3.png';
import shoe4 from '../assets/images/shoe4.png';
import shoe5 from '../assets/images/shoe5.png';
import shoe6 from '../assets/images/shoe6.png';

const shoes = [
  { id: 1, name: 'Running Shoes', price: 100, image: shoe1 },
  { id: 2, name: 'Basketball Shoes', price: 150, image: shoe2 },
  { id: 3, name: 'Casual Shoes', price: 80, image: shoe3 },
  { id: 4, name: 'Nike Shoes', price: 80, image: shoe4 },
  { id: 5, name: 'Reebok Shoes', price: 80, image: shoe5 },
  { id: 6, name: 'Adidas Shoes', price: 80, image: shoe6 },
];

const ShoeList = ({ addToCart }) => {
  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} shoe={shoe} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ShoeList;
