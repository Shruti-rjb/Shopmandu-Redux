import React from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import Cards from "./Cards";
import "../styles/product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = () =>
  Yup.object().shape({
    Price: Yup.string().required(),
    date: Yup.string().required(),
    category: Yup.string().required(),
  });

const Product = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      Price: "",
      date: "",
      category: "",
    },
    onSubmit: (values, { resetForm }) => {
      setProducts([...products, values]);
      resetForm({ values: "" });
    },

    validationSchema,
  });

  const fetchProducts = async () => {
    const response = await axios.get(
      "https://electronic-ecommerce.herokuapp.com/api/v1/product"
    );
    console.log(response.data.data);

    setProducts(response.data.data.product || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="container my-5">
      <div className="row">
        <p className="product-title">
          Products
          <button className="filter-btn" variant="primary" onClick={handleShow}>
            <AiTwotoneFilter /> Filter
          </button>
        </p>
        <Offcanvas show={show} onHide={handleClose} className="me-3 ">
          <Offcanvas.Header closeButton className="bg-primary text-white">
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <div className="Form">
              <form onSubmit={handleSubmit}>
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
                        onChange={handleChange}
                        value={values.Price}
                      />
                      {errors?.Price && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>

                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control"
                        id="Price1"
                        aria-describedby="Price"
                        placeholder="Max"
                        onChange={handleChange}
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
                    onChange={handleChange}
                    value={values.date}
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

                <section className="footer">
                  <hr />
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-3"
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn btn-success">
                      Apply
                    </button>
                  </div>
                </section>
              </form>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <div className="products-card">
          {products.map((item) => (
            <Cards
              name={item.name}
              price={item.price}
              stock={item.stock}
              image={item.image}
              release={item.createDate}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
