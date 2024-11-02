import { configureStore, createSlice } from '@reduxjs/toolkit';

// Product Slice
const productSlice = createSlice({
    name: 'product',
    initialState: {
        mobiles: [
            { name: 'iPhone', brand: 'Apple', price: 999 },
            { name: 'Galaxy', brand: 'Samsung', price: 899 },
            { name: 'OnePlus 8', brand: 'OnePlus', price: 699 },
        ],
        mens: [
            { name: 'Shirt', category: 'Clothing', price: 20 },
            { name: 'Pants', category: 'Clothing', price: 30 },
            { name: 'Jacket', category: 'Clothing', price: 50 },
        ],
        earbuds: [
            { name: 'AirPods', brand: 'Apple', price: 199 },
            { name: 'Galaxy Buds', brand: 'Samsung', price: 149 },
            { name: 'Boat Sport', brand: 'Boat', price: 179 },
        ],
        women: [
            { name: 'Dress', category: 'Clothing', price: 40 },
            { name: 'Blouse', category: 'Clothing', price: 25 },
            { name: 'Skirt', category: 'Clothing', price: 30 },
        ],
        beauty: [
            { name: 'Lipstick', category: 'Makeup', price: 15 },
            { name: 'Perfume', category: 'Fragrance', price: 50 },
            { name: 'Face Cream', category: 'Skincare', price: 25 },
        ],
        kids: [
            { name: 'Shirt', category: 'Clothing', price: 15 },
            { name: 'Pants', category: 'Clothing', price: 25 },
            { name: 'Shorts', category: 'Clothing', price: 20 },
            { name: 'Dress', category: 'Clothing', price: 30 },
            { name: 'Jacket', category: 'Clothing', price: 40 },
        ],
    },
    reducers: {},
});

// Cart Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find((item) => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementItem: (state, action) => {
            const item = state.find((item) => item.name === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementItem: (state, action) => {
            const item = state.find((item) => item.name === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.name !== action.payload);
        },
    },
});

// Create Store
const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer,
    },
});

// Export actions and store
export const { addToCart, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default store;
