import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector ,useDispatch} from "react-redux";
import { deleteCart } from "../../redux/actions/cart";
import {Link} from "react-router-dom";


const Cart = (props) => {
  
  let total = 0;
   const { id } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();


  // const handleDelete = (id) => {
  //   let newProducts = cart.filter((item) => item.id !== id);
  //   setCart(newProducts);
  // };
  const cart = useSelector((state)=>state.product.cart)

  return (
    <div>
      <button
        type="button"
        className="btn position-relative text-white mb-2"
        onClick={handleShow}
      >
        <BsCartPlus />
        <span className="position-absolute badge rounded-pill bg-primary">
          {" "}
          {cart.length}
        </span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items Added : {cart.length}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((item) => {
            let convertedPrice = item.price.slice(1, item.price.length);
            let rupees = Number(convertedPrice) * 120;
            
            return (
              <div className="row" key={item.id}>
                <div className="col-8">
                  <div className="row">
                    <div className="col-5">
                      <img
                        src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                        alt="Image on cart"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-7">
                      <h5>{item.name}</h5>
                      <span className="text">Rs.{rupees} </span>
                      <span style={{ display: "none" }}>
                        {(total += rupees)}
                      </span>
                      <p className="text-success">{item.stock} items left</p>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <button
                    className="btn-danger"
                  onClick={()=>dispatch(deleteCart(item.id))}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <p style={{ fontWeight: "bolder", fontFamily: " monospace" }}>
              Total Amount : Rs.{total}
            </p>

            <div className="col">
              <Link to = "/checkout">
              <button className="btn btn-success"> Checkout</button>
                </Link>
              
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
