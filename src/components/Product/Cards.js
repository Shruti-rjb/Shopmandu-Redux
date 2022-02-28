import React from "react";
import { useState } from "react";

const Cards = (props) => {
  const { image, name, price, stock, release, category, addItem } = props;
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  let dateObj = new Date(release);
  let month = dateObj.getMonth();
  let year = dateObj.getFullYear();
  let day = dateObj.getDate();
  const result = `${day}/${month}/${year}`;

  
  let newPrice = price.slice(1,price.length);
  let rupees = Number(newPrice) * 119;

  const increment = () => {
    if (count >= stock ? setDisable(true) : setCount(count + 1));
  };

  const decrement = () => {
    if (count > 0 ? setCount(count - 1) : 0);
  };

  
  
  return (
    <div className="card cards my-3 ">
      <div className=" image-box ">
        <img className="card-img-top"
          src={`https://electronic-ecommerce.herokuapp.com/${image}`}
          alt="Product image"
        />
      </div>

        <div className="card-body">
          <div
          className="btn-group float-end"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={decrement}
          >
            -
          </button>
          <button type="button" className="btn btn-outline-secondary">
            {count}
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={increment}
          >
            +
          </button>
        </div>
        </div>
       
        
        <div className="card-title">
        <p>{name}</p>
        </div>
        <div className="card-text">
        <p className="fw-bold">Rs.
          {rupees} <span className="stock"> Stocks left : {stock}</span>
        </p>
        
        <p>Released On : {result}</p>

        <p>{category}</p>
        
      </div>
      <button 
      
        onClick={() => {
          addItem(props);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Cards;
