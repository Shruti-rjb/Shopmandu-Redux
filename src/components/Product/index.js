import React from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import Cards from "./Cards";
import "../styles/product.css";
import ScrollToTop from "react-scroll-to-top";
import { HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import { fetchProducts } from "../../redux/actions/product";
import { useFormik } from "formik";
import * as Yup from "yup";
import { filterItems } from "../../redux/actions/filter";

const Product = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const products = useSelector((state) => state.product.productLists);
  const isLoading = useSelector((state) => state.product.isLoading);
  //console.log(products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  const validationSchema = Yup.object({
    minPrice: Yup.string().required("Minimum price is required"),
    maxPrice: Yup.string().required("Maximum price is required"),
    // date: Yup.date().required("Date is required"),
    category: Yup.string().required("Category is required"),
  });

  const { values, handleSubmit, handleChange} = useFormik({
    initialValues: {
      
      minPrice: "",
      maxPrice: "",
      date: "",
      category: "",
    },
    onSubmit : (values) => {
        dispatch(filterItems(values.minPrice , values.maxPrice, values.category));
      
      },
    validationSchema
  })

  return (
    <div className="container my-5">
      <div className="row">
        <p className="product-title">
          Products
          <button className="filter-button" onClick={handleShow}>
            <AiTwotoneFilter /> Filter
          </button>
        </p>
        <ScrollToTop smooth/>

        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton className="bg-secondary text-white">
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          
      
              <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="Price">Price</label> <br />
                <div className="row">
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      id="minPrice"
                      aria-describedby="Price"
                      placeholder="Min"
                      onChange ={handleChange}
                      value = {values.minPrice}
                    />
                  </div>

                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      id="maxPrice"
                      aria-describedby="Price"
                      placeholder="Max"
                      onChange={handleChange}
                      value = {values.maxPrice}
                    />
                  </div>
                </div>
              </div>
              <br />

              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  aria-describedby="Date"
                  placeholder="dd/mm/yyy"
                  value={values.date}
                  onChange={handleChange}
                />
              </div>

              <br />

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select id="category" className="form-select"  value={values.category} onChange={handleChange}>
                  <option>Select Options</option>
                  <option>laptop</option>
                  <option>keyboard</option>
                  <option>watch</option>
                  <option>headset</option>
                  <option>mobile</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary mt-4 " >
                Search
              </button>
            </form>

            
            
          </Offcanvas.Body>
        </Offcanvas>

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
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
