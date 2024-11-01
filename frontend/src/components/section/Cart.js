import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import Colors from './Colors';

function Cart() {
  const { state } = useContext(DataContext);
  const { cart } = state;

  return (
    <>
      {cart.map(item => (
        <div className='details' key={item._id}>
          <img src={item.src} alt={item.title} />
          <div className='box'>
            <div className='row'>
              <h2>{item.title}</h2>
              <span>${item.Price}</span>
            </div>
            <Colors colors={item.colors} />
            <p>{item.Description}</p>
            <p>{item.Content}</p>
           <div className='amount'>
            <button className='count' >-</button>
             <span>{item.count}</span>
            <button className='count'>+</button>
           </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cart;
