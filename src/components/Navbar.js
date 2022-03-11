import React from "react";
import "./styles/navbar.css";
import Cart from "./Cart/Cart";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { cart, setCart} = props;

  return (
    <nav className="sticky-top">
      <div className="nav-box ">
        <span className="my-shop">Shopmandu</span>
        <a className="navbar-link me-3">Home</a>
        <Cart cart={cart} setCart={setCart} />
        {/* <Link to = "/login"></Link> */}
        <img src={user} alt="user image" className="user-image mb-2" />
      </div>
    </nav>
  );
};

export default Navbar;
