import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductDetails from './components/Product/ProductDetails';
import Product from "./components/Product/index";
import {Route, Routes} from "react-router-dom"
import { Checkout } from './components/Cart/Checkout';


function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
  
      <Navbar cart={cart} setCart={setCart} />
      
      <Routes>
      <Route exact path ="/" element={<Product cart={cart} setCart={setCart} />}/>
      <Route exact path ="/checkout" element={<Checkout/>} /> 
      <Route exact path ="/product/:id" element={<ProductDetails/>}/>
     </Routes>
   
    
     
    </>
  );
}

export default App;
