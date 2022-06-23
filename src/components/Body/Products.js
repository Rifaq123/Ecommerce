import React, { useState } from "react";
import Cardsimg from "../common/Cardsimg";
import productimage from "../../api/productimage.json";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import { ToastContainer } from "react-toastify";

const Products = () => {
  const cart = useSelector((state) => state.cart.Wishlist);
  const carts = useSelector((state) => state.cart.Carts);

  const res = productimage.slice(0,9)


  const [ product, setProduct ] = useState(productimage);
  const [ brand, setBrand ] = useState();
  

  console.log(product);
// console.log(res);

  const dispatch = useDispatch();

  return (
    <div className="container-body">
      <ToastContainer/>
      <Cards />

      <div className="container-custom ">
        <div className="cardsproduct  px-5 d-flex pb-5">
          <div className="row">
            {res?.map((value, index) => {
              return (
                <>
                  <div className="col-md-4  col-lg-4 carddata pt-4">
                    <Cardsimg
                      carts={carts}
                      cart={cart}
                      id={value.id}
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
