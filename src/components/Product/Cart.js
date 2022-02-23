import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {BsCartPlus} from "react-icons/bs";
import {AiOutlineDelete} from "react-icons/ai"


  const Cart = (props) => {
  const {cart,setCart} = props;
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 
  const handleDelete = (id) => {
    let newProducts = cart.filter((item) => item.id !== id);
    setCart(newProducts);
  };



  return (
    <div>
      <button
        type = "button"
        className ="btn position-relative text-white"
        onClick={handleShow}
      >
        <BsCartPlus  />
        <span className="position-absolute badge rounded-pill bg-primary"> {cart.length} 
        </span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {cart.map((item)=>{
               let newPrice = item.price.slice(1,item.price.length);
                let rupees = Number(newPrice) * 119;

            
            return (
              <div className="row">
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
                    <span className="text">Rs.{rupees}</span>
                    <p className="text-success">{item.stock} items left</p>
                   
                  </div>
                </div>

              </div>
              <div className="col-2">
              <button className="btn-danger"
              onClick={()=>handleDelete(item.id)}
                        >
                <AiOutlineDelete/></button>
              </div>
              
            </div>
            )
          })}
         
        </Modal.Body>
        <Modal.Footer>
          <div>
            <p > Total Amount: </p>
            <Button variant="success">Checkout</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;