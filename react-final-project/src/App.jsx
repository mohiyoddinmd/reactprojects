
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLeaf, faDrumstickBite, faShoppingCart, faHistory, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import './App.css'; 
import { useSelector } from 'react-redux';
import GoogleLoginComponent from './GoogleLoginComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';
import FacebookLoginComponent from './FacebookLoginComponent';

function App(){  
    const cartItems = useSelector((state) => state.cart);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
 
    return (
        <>
        <GoogleOAuthProvider clientId="716566590308-qjt3llliu6tbdr3j1u8l6tmd1010at75.apps.googleusercontent.com">
        <GoogleLoginComponent/>
        </GoogleOAuthProvider>
        <FacebookLoginComponent/>

        <BrowserRouter>
            <nav>
                <Link to="/home"><FontAwesomeIcon icon={faHome}/> Home</Link>
                <Link to="/veg"><FontAwesomeIcon icon={faLeaf}/> Veg-Items</Link>
                <Link to="/nonveg"><FontAwesomeIcon icon={faDrumstickBite}/> NonVeg-Items</Link>
                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/>Cart-[{totalItems}]</Link>  
                <Link to="/purchasehistory"><FontAwesomeIcon icon={faHistory}/> Purchase History</Link>
                <Link to="/aboutus"><FontAwesomeIcon icon={faInfoCircle}/> About Us</Link>
                <Link to="/contactus"><FontAwesomeIcon icon={faPhone}/> Contact Us</Link> 
            </nav>


            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/veg" element={<Veg />} />
                <Route path="/nonveg" element={<NonVeg />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/purchasehistory" element={<PurchaseHistory />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
       </>
        
    );
};

export default App;

