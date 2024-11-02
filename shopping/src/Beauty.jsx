import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import './App.css'; // Ensure to import your CSS file

function Beauty() {
  const dispatch = useDispatch();

  const beautyProducts = useSelector((state) => state.product.beauty);
  const items = beautyProducts.map((product, index) => (
    <div className="product-item" key={index}>
      <div className="product-card">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <h2>Beauty Products</h2>
      <div className="product-list">
        {items}
      </div>
    </>
  );
}

export default Beauty;
