import React, { useState, useEffect } from "react";
import axios from "axios";

import useUserContext from "../../context/user.context";

import { ReactComponent as LoadingIcon } from "../../assets/loading-animation.svg";

import "./product_card.styles.css";

const ProductCard = ({ name, condition, image_url, price, size }) => {
  const [btnClass, setBtnClass] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [likedLoading, setLikedLoading] = useState(false);

  const { username } = useUserContext();

  useEffect(() => {
    const productData = { name, condition, image_url, price, size };
    const likedObject = { username, product: productData };
    
    axios
    .post("http://localhost:4000/app/isliked", likedObject)
    .then((response) => {
      if (response.data.status === 2) {
        setBtnClass(true)
      }
    });
  }, [])

  function addToCart() {
    const productData = { name, condition, image_url, price, size };

    const cartObject = { username, product: productData };
    setCartLoading(true);

    axios
      .post("http://localhost:4000/app/addtocart", cartObject)
      .then((response) => {
        setCartLoading(false);
        console.log(response);
        const data = response.data;

        if (data.status === 0) {
          alert(data.message);
          return;
        }
      });
  }

  function addToLiked() {
    const productData = { name, condition, image_url, price, size };
    const likedObject = { username, product: productData };
    setLikedLoading(true);
    let itemLiked = false;

    axios
      .post("http://localhost:4000/app/isliked", likedObject)
      .then((response) => {
        if (response.data.status === 2) {
          itemLiked = true;
        }

        if (itemLiked) {
          axios
            .post("http://localhost:4000/app/removefromliked", likedObject)
            .then((response) => {
              setLikedLoading(false);
              console.log(response);
              const data = response.data;

              if (data.status === 0) {
                alert(data.message);
                return;
              } else {
                setBtnClass(false);
              }
            });
        } else {
          axios
            .post("http://localhost:4000/app/addtoliked", likedObject)
            .then((response) => {
              setLikedLoading(false);
              console.log(response);
              const data = response.data;

              if (data.status === 0) {
                alert(data.message);
                return;
              } else {
                setBtnClass(true);
              }
            });
        }
      });
  }

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
        <button className="add-to-cart" onClick={addToCart}>
          Add to cart
          {cartLoading && <LoadingIcon className="loading-icon" />}
        </button>
        <button
          onClick={() => {
            addToLiked();
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
