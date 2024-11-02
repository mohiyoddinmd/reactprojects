import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import './App.css';

function Mens() {
  const dispatch = useDispatch();
  const mensProducts = useSelector((state) => state.product.mens);

  const items = mensProducts.map((product, index) => (
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
      <h2>Mens Products</h2>
      <div className="product-list">
        {items}
      </div>
    </>
  );
}

export default Mens;
