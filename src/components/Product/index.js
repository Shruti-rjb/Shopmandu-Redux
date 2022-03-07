import React from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import Cards from "./Cards";
import "../styles/product.css";
import ScrollToTop from "react-scroll-to-top";
import { HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";
import { fetchProducts } from "../../redux/actions/product";
import { bindActionCreators } from "redux";


const Product = (props) => {
  
    const { cart, setCart } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const products = useSelector((state) => state.product.productLists);
  const isLoading = useSelector((state) => state.product.isLoading);
  //const cart = useSelector((state)=>state.addToCart.cart)

  const dispatch = useDispatch();
 // const {addToCart} = bindActionCreators(addToCart,dispatch)

  const addItem = (item) => {
    // console.log(item);
    setCart([...cart, item]);
    // , dispatch(addToCart())
  };

  // const fetchProducts = async () => {
  //   const response = await axios.get(
  //     "https://electronic-ecommerce.herokuapp.com/api/v1/product"
  //   );
  //   // console.log(response.data.data);

  //   setProducts(response.data.data.product || []);
  // };

  useEffect(() => {
    dispatch(fetchProducts());
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
        <ScrollToTop/>

        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton className="bg-secondary text-white">
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <HashLoader />
            </div>
          ) : (
            <>
              <Offcanvas.Body>
                <form>
                  <div>
                    <label htmlFor="Price">Price</label> <br />
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
                    <label htmlFor="exampleInputDate1" className="form-label">
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
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select id="category" className="form-select">
                      <option>Select Options</option>
                      <option>laptop</option>
                      <option>keyboard</option>
                      <option>watch</option>
                      <option>headseat</option>
                      <option>mobile</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-secondary mt-4 ">
                    Apply
                  </button>
                </form>
              </Offcanvas.Body>
            </>
          )}
        </Offcanvas>

        {/* <Offcanvas.Body>
            <form>
              <div>
                <label htmlFor="Price">Price</label> <br />
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
                <label htmlFor="exampleInputDate1" className="form-label">
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
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select id="category" className="form-select">
                  <option>Select Options</option>
                </select>
              </div>
            </form>
          </Offcanvas.Body>
        </Offcanvas> */}

        {isLoading ? (
          <div className="d-flex justify-content-center">
            <HashLoader />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Product;
