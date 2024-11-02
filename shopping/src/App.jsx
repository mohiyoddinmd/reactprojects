import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { FaHome, FaMale, FaFemale, FaChild, FaStar, FaMobileAlt, FaShoppingCart, FaHeadphones, FaEnvelope, FaInfoCircle } from "react-icons/fa";

import Home from "./Home";
import Mens from "./Mens";
import Womens from "./Womens";
import Kids from "./Kids";
import Beauty from "./Beauty";
import Mobiles from "./Mobiles";
import Cart from "./Cart";
import Earbuds from "./Earbuds";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import { useSelector } from "react-redux";

import "./App.css";



function App()
{

  const cartItems = useSelector((state) => state.cart);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

return(

<>

<BrowserRouter>

<nav>
  <Link to="/home"><FaHome /> HOME</Link> 
  <Link to="/mens"><FaMale /> MENS</Link>
  <Link to="/womens"><FaFemale /> WOMENS</Link>
  <Link to="/kids"><FaChild /> KIDS</Link>
  <Link to="/beauty"><FaStar /> BEAUTY</Link>
  <Link to="/mobiles"><FaMobileAlt /> MOBILES</Link>
  <Link to="/cart"><FaShoppingCart /> CART [{totalItems}]</Link> 
  <Link to="/earbuds"><FaHeadphones /> EARBUDS</Link>
  <Link to="/contactus"><FaEnvelope /> CONTACT-US</Link>
  <Link to="/aboutus"><FaInfoCircle /> ABOUT-US</Link>  

</nav>

<Routes>

  <Route path="/home" element={<Home/>}/>
  <Route path="/mens" element={<Mens/>}/>
  <Route path="/womens" element={<Womens/>}/>
  <Route path="/kids" element={<Kids/>}/>
  <Route path="/beauty" element={<Beauty/>}/>
  <Route path="/mobiles" element={<Mobiles/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/earbuds" element={<Earbuds/>}/>
  <Route path="/contactus" element={<Contactus/>}/>
  <Route path="/aboutus" element={<Aboutus/>}/>

</Routes>

</BrowserRouter>

</>  
)

}
export default App;