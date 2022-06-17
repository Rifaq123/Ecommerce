import React, { useState } from "react";
import Header from "../components/Header/Header";
import DangerousIcon from "@mui/icons-material/Dangerous";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  DecreaseQuantity,
  DeleteCart,
  IncreaseQuantity,
} from "../redux/actions/cart";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.Carts);

  console.log("d", cart);
  // const cartItems = cart.length;

  const empty = () => {
    cartItems == 0;
  };

  const dispatch = useDispatch();

  var grandtotal = 0;
  var cartitem = 0;
  const onclickHome = (e) => {
    navigate("/");
  };

  return (
    <div className="container-body">
      <Header />
      <div className="containerr">
        {cart.length > 0 ? (
          <div className="cart-container mt-5">
                    <h1>My Shopping Cart</h1>

            <div className="productcont">
              <div className="row">
                <div className="col-md-12 custom-cart-table">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, key) => {
                        grandtotal += item.price * item.quantity;
                        cartitem += item.quantity;
                        return (
                          <tr>
                            <td>
                              <p className="product-count">{item.title}</p>
                            </td>
                            <td className="cart-image">
                              <img
                                src={item.image}
                                style={{ width: "100px", height: "80px" }}
                              />
                            </td>
                            <td>
                              <p className="product-count">
                                <span id="total">${item.price}</span>
                              </p>
                            </td>
                            <td>
                              <div className="product-count d-flex  add-minus-quantity">
                                <div className="d-flex ">
                                  <button
                                    className="qtyminus d-flex align-items-center justify-content-center"
                                    onClick={() =>
                                      dispatch(DecreaseQuantity(item))
                                    }
                                    disabled={item.quantity <= 1 }
                                  >
                                    -
                                  </button>
                                  <span className="qty d-flex align-items-center justify-content-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    className="qtyplus d-flex align-items-center justify-content-center"
                                    onClick={() =>
                                      dispatch(IncreaseQuantity(item))
                                    }
                                    disabled= {item.quantity >= 5}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="product-count">
                                <span id="totalsub">
                                  ${item.price * item.quantity}
                                </span>
                              </p>
                            </td>
                            <td>
                              <p
                                className="product-count"
                                onClick={() => dispatch(DeleteCart(item))}
                              >
                                <DeleteForeverIcon sx={{ color: red[500] }} />
                              </p>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <table id="carttotals">
              <tr>
                <td>
                  <strong>Items</strong>
                </td>
                <td>
                  <strong>Grand Total</strong>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  x <span id="itemsquantity">{cartitem}</span>{" "}
                </td>

                <td className="d-flex align-items-center justify-content-center">
                  <span id="grandtotal">${grandtotal}</span>
                </td>
              </tr>
            </table>

            <div className="cart-buttons">
              <button id="emptycart" onClick={empty}>
                Empty Cart
              </button>
              <button id="checkout">Checkout</button>
            </div>
          </div>
        ) : (
          <>
          <div className="emptycart-div">
          <h1 className="mt-3">My Shopping Cart</h1>

            <h4
              className="row justify-content-center cart-empty"
              onClick={empty}
            >
              Oops! Your Cart is empty 🙁
            </h4>
            <h4 className="cart-add">
            <Link to="/">
                <span onClick={onclickHome}> Click here...</span>
              </Link>
              Add Your Products {""}
              
            </h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
