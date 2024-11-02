import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from './store';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [discount, setDiscount] = useState(0);
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [couponCode, setCouponCode] = useState('');

    const handleIncrement = (name) => {
        dispatch(incrementItem(name));
    };

    const handleDecrement = (name) => {
        dispatch(decrementItem(name));
    };

    const handleRemove = (name) => {
        dispatch(removeItem(name));
    };

    // Calculate totals
    const calculateTotals = () => {
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        const discountAmount = totalPrice * (discount / 100);
        const couponDiscountAmount = totalPrice * (couponDiscount / 100);
        const netTotal = totalPrice - discountAmount - couponDiscountAmount;
        return [totalPrice, discountAmount, couponDiscountAmount, netTotal];
    };

    // Total calculation
    const [totalPrice, discountAmount, couponDiscountAmount, netTotal] = calculateTotals();

    // Discount percentage
    const applyDiscount = (percentage) => {
        setDiscount(percentage);
    };

    // Applying coupon code
    const handleApplyCoupon = () => {
        switch (couponCode.toUpperCase()) {
            case 'RATAN10':
                setCouponDiscount(10);
                break;
            case 'RATAN20':
                setCouponDiscount(12);
                break;
            case 'RATAN30':
                setCouponDiscount(15);
                break;
            default:
                alert('Invalid coupon code');
                setCouponDiscount(0);
        }
    };

    return (
        <>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}> {/* Assuming item.id is a unique identifier */}
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => handleIncrement(item.name)}>+</button>
                        <button onClick={() => handleDecrement(item.name)}>-</button>
                        <button onClick={() => handleRemove(item.name)}>Remove</button>
                    </li>
                ))}
            </ul>

            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

            <button onClick={() => applyDiscount(10)}>10% Discount</button>
            <button onClick={() => applyDiscount(20)}>20% Discount</button>
            <button onClick={() => applyDiscount(30)}>30% Discount</button>

            <div style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter Coupon Code"
                />
                <br />
                <button onClick={handleApplyCoupon}>Apply Coupon</button>

                <h4>Discount Percentage Applied: {discount}%</h4>
                <h4>Discount Amount: ${discountAmount.toFixed(2)}</h4>
                <h4>Coupon Discount Applied: {couponDiscount}%</h4>
                <h4>Coupon Discount Amount: ${couponDiscountAmount.toFixed(2)}</h4>
                <h2>Final Amount after Discounts: ${netTotal.toFixed(2)}</h2>
            </div>
        </>
    );
};

export default Cart;
