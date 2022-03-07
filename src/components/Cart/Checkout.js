import React from "react";
import '../styles/login.css';
import { useFormik } from 'formik';


//  const loginSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//     billingAddress:Yup.string().required('Required'),
//     deliveryAddress:Yup.string().required('Required'),
//     telephoneNumber:Yup.string().required('Required'),
//     createdDate:Yup.date().required('Required')
// });


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }



  if (!values.billingAddress) {
    errors.billingAddress = 'Required';
  } 

  if (!values.deliveryAddress) {
    errors.deliveryAddress = 'Required';
  } 
  
  if (!values.telephoneNumber) {
    errors.telephoneNumber = 'Required';
  } 
  
  if (!values.createdDate) {
    errors.createdDate = 'Required';
  } 
  
  return errors;
};

export const Checkout = () => {
  const formik = useFormik({
    initialValues: {
      name:' ',
      billingAddress: ' ',
      deliveryAddress: ' ',
      telephoneNumber: ' ',
      createdDate:' ',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    
  });


  return (
    
    <div className="checkoutCart" style={{ padding: "10px" }}>
      <div className="container">
      
        <form className="checkoutForm" onSubmit={formik.handleSubmit}>
          <div className=" text-center">
            <h4 className="header">Form </h4>
          </div>

          <div className="mt-4">
            <label htmlFor="name" className="form-label fw-normal"  >
              Name
            </label>
            <input type="text" className="form-control" id="name"  onChange={formik.handleChange}
         value={formik.values.name}/>
         {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </div>
          <div className="mt-4">
            <label htmlFor="billing" className="form-label fw-normal">
              Billing Address
            </label>
            <input type="text" className="form-control" id="billing" onChange={formik.handleChange}  value={formik.values.billingAddress} />
         {formik.errors.billingAddress ? <div>{formik.errors.billingAddress}</div> : null}

          </div>
          <div className="mt-4">
            <label htmlFor="delivery" className="form-label fw-normal" >
              Delivery Address
            </label>
            <input type="text" className="form-control fw-normal" id="delivery" onChange={formik.handleChange}  value={formik.values.deliveryAddress} />
            {formik.errors.deliveryAddress ? <div>{formik.errors.deliveryAddress}</div> : null}
         
          </div>
          <div className="mt-4">
            <label htmlFor="telephone" className="form-label fw-normal">
              Telephone Number
            </label>
            <input type="number" className="form-control fw-normal" id="telephone" onChange={formik.handleChange}  value={formik.values.telephoneNumber} />
         {formik.errors.telephoneNumber ? <div>{formik.errors.telephoneNumber}</div> : null}
          
          </div>
          <div className="mt-4">
            <label htmlFor="date" className="form-label fw-normal ">
             Created Date
            </label>
            <input type="date" className="form-control fw-normal" id="date" onChange={formik.handleChange}  value={formik.values.createdDate} />
         {formik.errors.createdDate ? <div>{formik.errors.name}</div> : null}
          
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
     
      </div>
    </div>
  );
};

