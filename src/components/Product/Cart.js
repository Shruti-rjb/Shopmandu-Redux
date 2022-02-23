import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {BsCartPlus} from "react-icons/bs";



const Cart = (props) => {


  const {cart} =props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// console.log(cart,"cartfromcart");
  return (
    <div className="cart">
      <button
        type="button"
        className="btn position-relative text-white"
        onClick={handleShow}
      >
        <BsCartPlus  />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary ">  
        </span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((item)=>{
            return (
              <div className="row">
              <div className="col-6">
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
                    <p className="text-success">{item.price}</p>
                  </div>
                </div>
              </div>
              
            </div>
            )
          })}
         
        </Modal.Body>

        <Modal.Footer>
          <div>
            <p> Total Amount: </p>

            <Button variant="success">Checkout</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;