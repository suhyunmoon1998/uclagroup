import React, { useState } from "react";

import "./product_card.styles.css";

const ProductCard = ({ name, condition, image_url, price, size }) => {
  const [btnClass, setBtnClass] = useState(false);

  return (
    <div className="product-card">
      <div className="image-product-container">
        <img className="image-product" src={image_url} alt="" />
      </div>
      <div className="description">
        <div className="name_price">
          <p className="product-name">{name}</p>
          <p className="price">${price}</p>
        </div>
        <p className="condition">Condition: {condition}</p>
        <p className="size">Size: {size}</p>
      </div>
      <div
        className="actions"
        style={{
          flexDirection: "row",
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 20,
        }}
      >
        <button className="add-to-cart">Add to cart</button>
        <button
          onClick={() => {
            btnClass ? setBtnClass(false) : setBtnClass(true);
          }}
          className="like-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={
              btnClass
                ? "like-button-icon clicked"
                : "like-button-icon not-clicked"
            }
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
