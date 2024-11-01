import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import "../css/Product.css";

function Products() {
  const { state, addCart } = useContext(DataContext);  // Ensure correct naming
  const { products } = state;

  return (
    <div id="product">
      {products.map(product => (
        <div className='card' key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.src} alt={product.title} />
          </Link>
          <div className='content'>
            <h3>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h3>
            <span>${product.Price}</span>
            <p>{product.Description}</p>
            <button onClick={() => addCart(product._id)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
