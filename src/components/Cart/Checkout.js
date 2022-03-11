import React from "react";
import "../styles/login.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "yup-phone";


export const Checkout = () => {

 const navigate = useNavigate();
 
  return (
    <div className="checkoutCart">
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            billingAddress: "",
            deliveryAddress: "",
            telephoneNumber: "",
            date: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            billingAddress: Yup.string().required("Required"),
            deliveryAddress: Yup.string().required("Required"),
            telephoneNumber: Yup.string()
            .phone()
            .required('Telephone Number must be valid number'),
         date: Yup.date().required("Required"),
          })}
          onSubmit={(values,) => {
           
        
              setTimeout(() => {
              alert("please wait ....");
            //   actions.setSubmitting(false);
            //   actions.resetForm({
            //     values:""
            //   }  
            // resetForm({ values: "" })
            navigate("/")
            //   )
            }, 2000);
          }}
        >
          {(formik) => (
            
            <form className="checkoutForm" onSubmit={formik.handleSubmit}>
              <div className=" text-center">
                <h4 className="header">Form </h4>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control mt-3"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger mt-2">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="billingAddress">Billing Address</label>
                <input
                  type="text"
                  id="billingAddress"
                  className="form-control mt-3"
                  onChange={formik.handleChange}
                  value={formik.values.billingAddress}
                />
                {formik.touched.billingAddress &&
                formik.errors.billingAddress ? (
                  <div className="text-danger mt-2">
                    {formik.errors.billingAddress}
                  </div>
                ) : null}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="text">Delivery Address</label>
                <input
                  type="text"
                  id="deliveryAddress"
                  className="form-control mt-3"
                  onChange={formik.handleChange}
                  value={formik.values.deliveryAddress}
                />
                {formik.touched.deliveryAddress &&
                formik.errors.deliveryAddress ? (
                  <div className="text-danger mt-2">
                    {formik.errors.deliveryAddress}
                  </div>
                ) : null}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="telephoneNumber">Telephone Number</label>
                <input
                  type="string"
                  id="telephoneNumber"
                  className="form-control mt-3"
                  onChange={formik.handleChange}
                  value={formik.values.telephoneNumber}
                />
                {formik.touched.telephoneNumber &&
                formik.errors.telephoneNumber ? (
                  <div className="text-danger mt-2">
                    {formik.errors.telephoneNumber}
                  </div>
                ) : null}
              </div>
              <div className="form-group mt-3 ">
                <label htmlFor="date">Created Date</label>
                <input
                  type="date"
                  id="date"
                  className="form-control mt-3"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="text-danger mt-2">{formik.errors.date}</div>
                ) : null}
              </div>

              <button
                type="submit"
               
                className="btn btn-primary mt-4 "
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
