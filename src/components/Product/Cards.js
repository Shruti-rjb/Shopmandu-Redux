import React from "react";
import { useState } from "react";

const Cards = (props) => {

  const { image, name, price, stock, createDate, category, id } = props;
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  let dateObj = new Date(createDate);
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let day = dateObj.getDate();
  const result = ` ${day}-${month}-${year}`;




  const incrementCount = () => {
    if(count >= stock ? setDisable(true) : setCount(count + 1));
  };

  const decrementCount = () => {
    if(count > 0 ? setCount(count - 1) : 0);
  };

  return (
    <div className="card cards my-3">
      <div className=" image-box img-fluid ">
        <img
          src={`https://electronic-ecommerce.herokuapp.com/${image}`}
          alt="Product image"
        />
      </div>

      <div className="details my-2">
        <div
          className="btn-group buttonStyling float-end"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={decrementCount}
          >
            -
          </button>
          <button type="button" className="btn btn-outline-primary">
            {count}
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={incrementCount}
          >
            +
          </button>
        </div>
      
        <p>{name}</p>
        <p>
          
          {price} <span className="stock">Stocks left :{stock}</span>
        </p>

        <p>Released On -{}</p>

        <p>{category}</p>
      </div>
      <button>Add to card</button>
    </div>
  );
};

export default Cards;
