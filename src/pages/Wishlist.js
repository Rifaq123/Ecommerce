import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link, Navigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, DeleteCart, WishList } from "../redux/actions/cart";
import { HOME } from "../config/constants";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Wishlist = () => {
  const cart = useSelector((state) => state.cart.Wishlist);

  const onclickHome = (e) => {
    Navigate(HOME);
  };
  const dispatch = useDispatch();

  return (
    <div className="wishlist-body">
      <ToastContainer />

      <div className="container-body">
        <div className="container-custom-preview mt-5">
          <>
            <div className="row mt-5  ">
              <div className="col ">
                {cart.length > 0 ? (
                  <div className="product-dtlw">
                    <div className="product-info">
                      <h1>My WishLists</h1>
                      {cart.map((item, key) => {
                        return (
                          <>
                            <div className="wishlist-par">
                              <p className="heart">
                                <FavoriteIcon
                                  sx={{ color: red[500] }}
                                  onClick={() => {
                                    dispatch(WishList(item));
                                    toast.error("Removed from Wishlist", {
                                      autoClose: 1000,
                                    });
                                  }}
                                />
                              </p>
                              <div className="product-name mt-5">
                                {item.title}
                              </div>
                              <div className="reviews-counter d-flex justify-content-around mt-3">
                                <div
                                  id="slider"
                                  className="preview-img wishlist-img"
                                >
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
                                    <span className="line-through">
                                      $299.00
                                    </span>
                                  </div>
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
                          </>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="emptycart-div">
                      {/* <h1 className="mt-3">My Shopping Cart</h1> */}
                      <Link to="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgL9qUmriCAWE_5kuuUkL-UaGhGQiIyncMYg&usqp=CAU" />
                      </Link>

                      <h4 className="cart-add mt-5">
                        <Link to="/">
                          <button
                            className="btn btn-dark"
                            onClick={onclickHome}
                          >
                            {" "}
                            Keep Shopping
                          </button>
                        </Link>
                      </h4>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
