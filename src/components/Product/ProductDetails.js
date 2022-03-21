import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.product.productLists);
  console.log(data, "productList");

  const productDisplay = data.filter((card) => card.id == id);

  return (
    <>
      <div className="container">
        {productDisplay.map((card) => (
          <div className="row g-0 bg-light position-relative mt-5">
            <div className="col-md-6 mb-md-0 p-md-4">
              <img
                src={`https://electronic-ecommerce.herokuapp.com/${card.image}`}
                className="w-100"
                alt="product details"
              />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <p>Product Name : {card.name}</p>
              <p>
                Price: Rs.{Number(card.price.slice(1, card.price.length)) * 120}
              </p>
              <p>Stocks left: {card.stock}</p>
              <p>Category: {card.category}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
