import React from 'react';
import "./styles/navbar.css";

import {BiUserCircle} from  'react-icons/bi';
import Cart from './Cart/Cart';


const Navbar = () => {
  return (
    <nav className='sticky-top'>
    <div className="nav-box ">
      <span className="my-shop">
       
        Shopmandu
      </span>
      <a className='navbar-link'>Home</a>
      <div className="cart">
        <span>
       
          <Cart />
        </span>
        <span></span>
      </div>
      <div className='user-icon'>
        <BiUserCircle/>
      </div>
    </div>
  </nav>
);
};
 

export default Navbar