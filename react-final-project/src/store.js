import { configureStore, createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:'products',
    initialState:{
        veg:[
            { name:'Veg Biryani', price:220.0 },
            { name:'Butter Masala', price:180.8 },
            { name: 'Chole', price: 150.5 },
            { name: 'Aloo Gobi ', price: 199.3 },
            { name: 'Daal Tadka', price: 199.0 },
            { name: 'Matar Paneer', price: 220.0 },
            { name: 'Aloo Paratha', price: 180.7 },
            { name: 'Veg Korma', price: 120.5 },
            { name: 'Pav Bhaji', price: 99.2 }
        ],
        nonVeg:[
            { name:'Chicken Biryani', price:499.0 },
            { name:'Fish Curry', price:399.0 },
            { name: 'Mutton Biryani', price: 799.0 },
            { name: 'Egg Curry', price: 229.0 },
            { name: 'Chicken Shawarma', price: 249.0 },
            { name: 'Lamb Chops', price: 599.0 },
            { name: 'Beef Steak', price: 499.0 },
            { name: 'Grilled  Chops', price: 299.0 },
            { name: 'Crab Cakes', price: 249.0 }
        ],
    },
    reducers:{}
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(
                (item) => item.name === action.payload.name
            );
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementItem: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementItem: (state, action) => {
            const itemIndex = state.findIndex((item) => item.name === action.payload);
            if (itemIndex !== -1) {
                if (state[itemIndex].quantity > 1) {
                    state[itemIndex].quantity -= 1;
                } else {
                   
                    state.splice(itemIndex, 1);
                }
            }
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.name !== action.payload);
        }

    },
});

const store = configureStore({
    reducer: {
        products: ProductSlice.reducer,
        cart: cartSlice.reducer,
    }
});


export const { addToCart, incrementItem, decrementItem,removeItem } = cartSlice.actions;
export default store;

