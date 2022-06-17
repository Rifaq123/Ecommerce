import React from "react";
import Header from "../components/Header/Header";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  DecreaseQuantity,
  DeleteCart,
  IncreaseQuantity,
} from "../redux/actions/cart";
import { red } from "@mui/material/colors";

const Wishlist = () => {
  const cart = useSelector((state) => state.cart.Wishlist);
  const carts = useSelector((state) => state.cart.Wishlist.Carts);

  const wishlist = cart.length;

  console.log("d", cart);
  // const cartItems = cart.length;

  const dispatch = useDispatch();

  return (
    <div className="wishlist-body">
      <Header />

      <div className="container-body">
        <div className="container-custom-preview mt-5">
          <>
            <div className="row mt-5  ">
              <div className="col ">
                <div className="product-dtlw">
                  <div className="product-info">
                    <h1>My WishLists</h1>
                    {cart.map((item, key) => {
                      return (
                        <>
                          <div className="wishlist-par">
                            <div className="product-name mt-5">
                              {item.title}
                            </div>
                            <div className="reviews-counter d-flex justify-content-center mt-3">
                              <div id="slider" className="preview-img">
                                <div className="cart">
                                  <img src={item.image} />
                                </div>
                              </div>
                              <div className="rate pt-5">
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="div"
                                >
                                  <Rating
                                    name="half-rating-read"
                                    defaultValue={3.5}
                                    precision={0.5}
                                    readOnly
                                  />
                                </Typography>
                                <span>300M Reviews</span>
                                <div className="product-price-discount">
                                  <span>Price: ${item.price}</span>
                                  <span className="line-through">$299.00</span>
                                  <a
                                    href="#"
                                    className="round-black-btn"
                                    onClick={() => dispatch(addToCart(item))}
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                        
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
