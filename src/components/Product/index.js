import React from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import Cards from "./Cards";
import "../styles/product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";

const Product = (props) => {
  const { cart, setCart } = props;

  const [products, setProducts] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addItem = (item) => {
    
    setCart([...cart, item]);
  };

  const fetchProducts = async () => {
    const response = await axios.get(
      "https://electronic-ecommerce.herokuapp.com/api/v1/product"
    );
    // console.log(response.data.data);

    setProducts(response.data.data.product || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);

  return (
    <div className="container my-5">
      <div className="row">
        <p className="product-title">
          Products
          <button className="filter-button" onClick={handleShow}>
            <AiTwotoneFilter /> Filter
          </button>
        </p>
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
          <Offcanvas.Header closeButton className="bg-secondary text-white">
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form>
              <div>
                <label for="Price">Price</label> <br />
                <div className="row">
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      id="Price"
                      aria-describedby="Price"
                      placeholder="Min"
                    />
                  </div>

                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      id="Price"
                      aria-describedby="Price"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
              <br />

              <div className="mb-3">
                <label for="exampleInputDate1" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputDate1"
                  aria-describedby="Date"
                  placeholder="dd/mm/yyy"
                />
              </div>

              <br />

              <div className="mb-3">
                <label for="category" className="form-label">
                  Category
                </label>
                <select id="category" className="form-select">
                  <option>Select Options</option>
                </select>
              </div>
            </form>
          </Offcanvas.Body>
        </Offcanvas>

        <div className="products-card">
          {products.map((item) => (
            
            <Cards
             key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              stock={item.stock}
              image={item.image}
              release={item.createDate}
              addItem={addItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
