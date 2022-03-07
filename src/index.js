import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import App from './App';
import { Checkout } from './components/Cart/Checkout';
import { Login } from './components/Cart/Login';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path ="/" element={<App/>} />
      <Route exact path ="/checkout" element={<Checkout/>} />
      <Route exact path ="/login" element={<Login/>} />

        
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


