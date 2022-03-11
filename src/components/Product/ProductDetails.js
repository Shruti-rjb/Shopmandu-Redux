import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();
  const productLists = useSelector((state) => state.product.productLists);
  // console.log(productLists,"productList")

  // let rupees = Number(productLists.price.slice(1, productLists.price.length)) * 120;
  // console.log(rupees,"rupees")

  return (
    <>
      
      <div className="container">

      <div className="row g-0 bg-light position-relative mt-5">
      <div className="col-md-6 mb-md-0 p-md-4">
       <img src={`https://electronic-ecommerce.herokuapp.com/${productLists[0].image}`} className="w-100" alt="product details"/>
      </div>
      <div className="col-md-6 p-4 ps-md-0  ">
    <h5 className="">Product Name : {productLists[0].name}</h5>
    <h5>Price : Rs. {productLists[0].price}</h5>
    <h5>Stocks left: {productLists[0].stock}</h5>
    <h5>Category: {productLists[0].category}</h5>
  </div>
</div> 

        {/* {productLists.filter((card)=>card.id === id).map((card)=> (
          <div  className="row mt-5">
          <div className="col-6">
            <div className=" image-box">
              <img className="card-img-top" src={card.image} />
            </div>
          </div>
          <div className="col-6">
            <p>Name: {card.name}</p>
            <p>Price: {card.price}</p>
            
            <p>category: {card.category}</p>
          </div>
        </div>

        ))} */}
      
      
      </div>
    </>
  );
};

export default ProductDetails;
