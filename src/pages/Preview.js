import React, { useState } from "react";
import Header from "../components/Header/Header";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

import { Link, Navigate } from "react-router-dom";
import {
  addToCart,

} from "../redux/actions/cart";

const Preview = () => {
  const cart = useSelector((state) => state.cart.preview);
  console.log("cart", cart);
  const dispatch = useDispatch();
  const onclickHome = (e) => {
    Navigate("/");
  };

  return (
    <div className="container-body">
      <Header />
      <div className="container-custom-preview mt-5">
        <>
          {cart.lenght !== 0 ? (
            <div className="row mt-5  ">
              <div className="col">
                <div id="slider" className="preview-img">
                  <div className="cart">
                    <img src={cart.image} />
                  </div>
                </div>
              </div>

              <div className="col preview-body">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{cart.title}</div>
                    <div className="reviews-counter d-flex justify-content-center mt-3">
                      <div className="rate">
                        <Typography gutterBottom variant="h6" component="div">
                          <Rating
                            name="half-rating-read"
                            defaultValue={3.5}
                            precision={0.5}
                            readOnly
                          />
                        </Typography>
                      </div>
                      <span>300M Reviews</span>
                    </div>
                    <div className="product-price-discount">
                      <span>${cart.price}</span>
                      <span className="line-through">$299.00</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <div className="row d-flex justify-content-start">
                    <div className="col-md-12 p-0 d-flex justify-content-center">
                      <table className="table table-bordered ">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Model Name:</td>
                            <td className="dark-text">{cart.title}</td>
                          </tr>
                          <tr>
                            <td>Brand:</td>
                            <td className="dark-text">{cart.brand}</td>
                          </tr>
                          <tr>
                            <td>Form factor:</td>
                            <td className="dark-text">Smartphone</td>
                          </tr>
                          <tr>
                            <td>Memory Storage Capacity:</td>
                            <td className="dark-text">{cart.storage} GB</td>
                          </tr>
                          <tr>
                            <td>Ram:</td>
                            <td className="dark-text">{cart.ram} GB</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <a
                      href="#"
                      className="round-black-btn"
                      onClick={() => dispatch(addToCart(cart))}
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p>d</p>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Preview;
