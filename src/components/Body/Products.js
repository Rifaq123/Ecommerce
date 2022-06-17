import React from "react";
import Cardsimg from "../common/Cardsimg";
import productimage from "../../api/productimage.json";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart, DeleteCart, WishList } from "../../redux/actions/cart";
import Header from "../Header/Header";
import Cards from "./Cards";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Products = () => {
  const cart = useSelector((state) => state.cart.Wishlist);

  const dispatch = useDispatch();

  return (
    <div className="container-body">
      <Header />
      <Cards />

      <div className="container-custom ">
        <div className="cardsproduct  px-5 d-flex pb-5">
          <div className="row">
            {productimage.map((value, dummy) => {
              return (
                <>
                  <div className="col-md-4  col-lg-4 carddata">
                    <div className="wishlists d-flex justify-content-end pt-3 px-3 ">
                      <div className="wishlist d-flex justify-content-center px-2 py-2  ">
                        
                      </div>
                    </div>

                    <Cardsimg
                      image={value.image}
                      title={value.title}
                      ratings="3.5"
                      price={value.price}
                      freedelivery={value.freedelivery}
                      span={"(300K)"}
                      pricespan={"$800"}
                      discount={"50% off"}
                      main={value}
                      quantity={value.quantity}
                      view={value}
                      wishlist={value}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
