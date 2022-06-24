import React from "react";
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
import { HOME } from "../config/constants";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const cart = useSelector((state) => state.cart.Carts);

  console.log("d", cart);

  const dispatch = useDispatch();

  var grandtotal = 0;
  var cartitem = 0;
  const onclickHome = (e) => {
    navigate(HOME);
  };

  return (
    <div className="container-body">
      <ToastContainer />
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
                        <th className="col-2">Product Name</th>
                        <th className="col-2">  Product Image</th>
                        <th className="col-2">Price</th>
                        <th className="col-2">Quantity</th>
                        <th className="col-2">Total Price</th>
                        <th className="col-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart?.map((item, index) => {
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
                                      dispatch(DecreaseQuantity(item)) &&
                                      toast.warning("Decreased Quantity", {
                                        autoClose: 1000,
                                      })
                                    }
                                    disabled={item.quantity <= 1}
                                  >
                                    -
                                  </button>
                                  <span className="qty d-flex align-items-center justify-content-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    className="qtyplus d-flex align-items-center justify-content-center"
                                    onClick={() => {
                                      dispatch(IncreaseQuantity(item)) &&
                                        toast.info("Increased Quantity", {
                                          autoClose: 1000,
                                        });
                                    }}
                                    disabled={item.quantity >= 5}
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
                              <button
                                className="product-count remove"
                                onClick={() => {
                                  dispatch(DeleteCart(item)) &&
                                    toast.error("deleted", {
                                      autoClose: 1000,
                                    });
                                }}
                              >
                                Remove
                                {/* <DeleteForeverIcon sx={{ color: red[500] }} /> */}
                              </button>
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
                   <span id="itemsquantity">{cartitem}</span>
                </td>

                <td className="d-flex align-items-center justify-content-center">
                  <span id="grandtotal">${grandtotal}</span>
                </td>
              </tr>
            </table>

            <div className="cart-buttons">
              {/* <button id="emptycart" onClick={empty}>
                Empty Cart
              </button> */}
              {/* <button id="checkout">Checkout</button> */}
            </div>
          </div>
        ) : (
          <>
            <div className="emptycart-div"style={{minHeight: "100vh"}}>
              {/* <h1 className="mt-3">My Shopping Cart</h1> */}
              <Link to="/">

              <img src="https://shop.millenniumbooksource.com/static/images/cart1.png"/>
              </Link>

        
              <h4 className="cart-add">
                <Link to="/">
                  <button className="btn btn-dark"onClick={onclickHome}> Keep Shopping.</button>
                </Link>
              </h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
