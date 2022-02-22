import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { BsCartPlus } from "react-icons/bs";

const Cart = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        class="btn position-relative text-white"
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
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-5">
                  <img
                    src={ `https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg`}
                    alt="ItemsAdded"
                    className="img-fluid"
                    style={{}}
                  />
                </div>
                <div className="col-7">
                  <h5></h5>
                  <p className="text-success"></p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <b className="text-success ms-5"></b>
              <br />
              {/* <div
                className="btn-group buttonStyling"
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-outline-success">
                  -
                </button>
                <button type="button" className="btn btn-outline-success">
                  1
                </button>
                <button type="button" className="btn btn-outline-success">
                  +
                </button>
              </div> */}
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div>
            <p> Total Amount: </p>

            <Button variant="success">Checkout</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;