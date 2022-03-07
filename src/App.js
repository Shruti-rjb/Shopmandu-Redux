import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Product from "./components/Product/index";
import store from './redux/store';  



function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
    
    <Provider store={store}>
  
        <Navbar cart={cart} setCart={setCart} />
        
        <Product cart={cart} setCart={setCart} />

       
   
    </Provider>
     
    </>
  );
}

export default App;
