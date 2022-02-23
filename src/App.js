import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product/index";




function App() {
  const [cart,setCart]= useState([]);
  // console.log(cart,"cart")
  return (
    <>
      <Navbar cart={cart}/>   
      <Product cart={cart} setCart={setCart}/>
    </>
  );
}

export default App;
