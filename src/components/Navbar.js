import React from "react";
import "./styles/navbar.css";
import { BiUserCircle } from "react-icons/bi";
import Cart from "./Product/Cart";


const Navbar = (props) => {
const {cart} =props;
  console.log(cart,"cartfornav")
  return (
    <nav className="sticky-top">
      <div className="nav-box ">
        <span className="my-shop">Shopmandu</span>
        <a className="navbar-link me-3">Home</a>
        <Cart cart={cart}/>
        <div className="user-icon">
          <BiUserCircle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
