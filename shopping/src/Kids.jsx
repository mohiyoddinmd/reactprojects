import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import './App.css'; // Make sure to import your CSS file

function Kids() {
  const dispatch = useDispatch();

  const kidsProducts = useSelector((state) => state.product.kids);
  const items = kidsProducts.map((product, index) => (
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
      <h2>Kids' Products</h2>
      <div className="product-list">
        {items}
      </div>
    </>
  );
}

export default Kids;
