import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../../redux/actions/cart";
import { useNavigate} from "react-router-dom";

const Cart = (props) => {
  let total = 0;
  const navigate = useNavigate();
  // const { id } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  // const handleDelete = (id) => {
  //   let newProducts = cart.filter((item) => item.id !== id);
  //   setCart(newProducts);
  // };

  const cart = useSelector((state) => state.product.cart);
  //console.log(cart[0].qty)

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
                        {(total += rupees * item.qty)}
                      </span>
                      <p className="text-success">
                        {item.stock - item.qty} items left
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  {/* <div
                    className="btn-group float-end mt-4"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setCount(count - 1);
                      }}
                      disabled={count <= 0 ? true : false}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      {item.qty}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      // onClick={increment}
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      disabled={count >= item.stock ? true : false}
                    >
                      +
                    </button>
                  </div> */}

                  <button
                    className="btn-danger mt-4"
                    onClick={() => dispatch(deleteCart(item.id))}
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
              <button
                className="btn btn-success"
                disabled={cart?.length === 0 ? true : false}

                onClick={()=>{navigate("/checkout")}}
              >
                Checkout
              </button>
              
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
