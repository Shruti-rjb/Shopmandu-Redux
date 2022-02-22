import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product/index";
import axios from "axios";



function App() {
  
  return (
    <>
      <Navbar />
      
      <Product />
    </>
  );
}

export default App;
