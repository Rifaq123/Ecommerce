import React, { useState } from "react";
import Header from "../components/Header/Header";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import { addToCart } from "../redux/actions/cart";
import { HOME } from "../config/constants";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DiscountIcon from "@mui/icons-material/Discount";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import PaymentIcon from "@mui/icons-material/Payment";
import ReactImageZoom from "react-image-zoom";

const Preview = () => {
  const cart = useSelector((state) => state.cart.preview);

  const dispatch = useDispatch();

  const [preview, setPreview] = useState(cart.image);

  console.log("setPreview", preview);

  const onclickHome = (e) => {
    navigate(HOME);
  };

  const props = {
    height: 300,
    img: preview,
    zoomPosition: "bottom",
    zoomWidth: 1200,
    scale: 1,
  };

  return (
    <div className="container-bodyy">
      <Header />
      {Object.values(cart).length != 0 ? (
        <div className="container-custom-preview mt-5">
          <>
            <>
              <div className="row mt-5  ">
                <div className="col">
                  <div className="preview-img ">
                    <div className="cart d-flex justify-content-center align-items-center">
                      <div className="slides d-flex flex-column mx-4">
                        {cart.previmg.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={
                                item.imagepreview === preview
                                  ? "border  border-dark border-2 cart-image mt-2 "
                                  : "cart-image mt-2  opacity-50"
                              }
                            >
                              <img
                                src={item.imagepreview}
                                onClick={() => setPreview(item.imagepreview)}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="card-prev-img">
                        <ReactImageZoom {...props} />

                        {/* <img src={preview} height={380} width={200} /> */}
                      </div>
                    </div>
                    {/* <div className="img-title mt-5">{cart.title}</div> */}
                    <div className="ulproduct mt-5">
                      <ul className="d-flex flex-column align-items-start mt-3">
                        <li>
                          <DiscountIcon
                            sx={{ color: green[500], marginRight: 1 }}
                          />
                          Special PriceGet extra 10% off (price inclusive of
                          discount) <span className="blue">T&C</span>
                        </li>
                        <li>
                          {" "}
                          <DiscountIcon
                            sx={{ color: green[500], marginRight: 1 }}
                          />
                          Combo Offer Buy 3 or more save 10%
                          <span className="blue">See all productsT&C</span>
                        </li>
                        <li>
                          <DiscountIcon
                            sx={{ color: green[500], marginRight: 1 }}
                          />
                          Combo Offer Buy 5+ save 10%{" "}
                          <span className="blue"> See all productsT&C</span>
                        </li>
                        <li>
                          <DiscountIcon
                            sx={{ color: green[500], marginRight: 1 }}
                          />
                          Bank Offer 5% Cashback on Flipkart Axis Bank Card{" "}
                          <span className="blue">T&C</span>
                        </li>
                        <li>
                          <DiscountIcon
                            sx={{ color: green[500], marginRight: 1 }}
                          />
                          Bank OfferFlat ₹100 Off* On 1st Transaction through
                          Flipkart <span className="blue">T&C</span>
                        </li>
                      </ul>
                      <ul className="d-flex flex-column align-items-start mt-3 productdiscount">
                        <li>
                          <LocalOfferIcon
                            sx={{ color: blue[500], marginRight: 1 }}
                          />
                          6 Months Warranty
                        </li>
                        <li>
                          {" "}
                          <KeyboardReturnIcon
                            sx={{ color: blue[500], marginRight: 1 }}
                          />
                          10 Days return Policy?
                        </li>
                        <li>
                          <PaymentIcon
                            sx={{ color: blue[500], marginRight: 1 }}
                          />
                          Cash on Delivery available
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col preview-body">
                  <div className="product-dtl">
                    <div className="product-info">
                      <div className="product-name">{cart.title}</div>
                      <div className="reviews-counter d-flex align-items-center mt-4">
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

                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <div className="d-flex justify-content-end">
                      <a
                        href="#"
                        className="round-black-btn"
                        onClick={() => dispatch(addToCart(cart))}
                      >
                        Add to Cart
                      </a>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-start tableproduct">
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
                    </div>
                  
                  </div>
                </div>
              </div>
            </>
          </>
        </div>
      ) : (
        <div className="emptycart-div">
           <h4 className="cart-add d-flex align-items-center justify-content-center">
            <Link to="/">
              <button className="btn btn-dark" onClick={onclickHome}>
                {" "}
                Keep Shopping
              </button>
            </Link>
          </h4>
          <h4 className="row justify-content-center cart-empty">
            No Products Previewed
          </h4>
         
        </div>
      )}
    </div>
  );
};

export default Preview;
