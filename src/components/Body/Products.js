import React, { useState } from "react";
import Cardsimg from "../common/Cardsimg";
import productimage from "../../api/productimage.json";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import { ToastContainer } from "react-toastify";

// const data = [
//   {
//     id: 1,
//     name: "iphone",
//     "logo":
//       "https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png",
//   },
//   {
//     id: 2,
//     name: "Samsung",
//     "logo": "https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png",
//   },
//   {
//     id: 3,
//     name: "oneplus",
//     "logo":
//       "https://www.oneplus.com/content/dam/oasis/page/common/logo/OnePlus_Logo.png",
//   },
//   {
//     id: 4,
//     name: "redmi",
//     "logo":
//       "https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-meaning-oppo-logo-and-symbol-history-and-evolution-19.png",
//   },
//   {
//     id: 5,
//     name: "nokia",
//     "logo": "https://www.freepnglogos.com/uploads/nokia-logo-png-0.png",
//   },
//   {
//     id: 6,
//     name: "realme",
//     "logo":
//       "https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/16/Photos/Home%20Page/GO%20(77)-kjmB--621x414@LiveMint.png",
//   },
//   {
//     id: 7,
//     name: "vivo",
//     "logo":
//       "https://img.etimg.com/thumb/msid-75741298,width-650,imgsize-29606,,resizemode-4,quality-100/vivo-agencies.jpg",
//   },
//   {
//     id: 8,
//     name: "oppo",
//     "logo":
//       "https://www.freepnglogos.com/uploads/oppo-logo-png/oppo-green-logo-transparent-0.png",
//   },
//   {
//     id: 9,
//     name: "moto",
//     "logo":
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Motorola_new_logo.svg/2560px-Motorola_new_logo.svg.png",
//   },
// ];
const Products = () => {
  const cart = useSelector((state) => state.cart.Wishlist);
  const carts = useSelector((state) => state.cart.Carts);
  const [product, setProduct] = useState(productimage);

  const res = product.slice(0, 9);

  console.log(product);
  // console.log(res);

  const dispatch = useDispatch();

  const categories = [
    ...new Set(productimage.map((value) => value.brand && value.logo)),
  ];
  console.log(categories);

  const filterproducts = (brands) => {
    const newItem = productimage.filter((newVal) => {
      return newVal.brand && newVal.logo === brands;
    });
    setProduct(newItem);
  };

  return (
    <div className="container-body">
      <ToastContainer />
      {/* <Cards /> */}

      <div className="Cardspar">
        <div
          className="CardsMobilehead"
          onClick={() => setProduct(productimage)}
        >
          <p>Top Mobile Brands</p>
        </div>
      </div>

      <div className="CardsMobile">
        {categories.map((item) => {
          return (
            <>
              <div
                className="cardcircle mx-2 "
                // className={
                //   item === cardcircle
                //     ? "border  border-dark border-2 cart-image mt-2 "
                //     : "cart-image mt-2  opacity-50"
                // }
                onClick={() => filterproducts(item)}
              >
                <img src={item} className="mobilelogo" alt="" />
              </div>
            </>
          );
        })}
      </div>

      <div className="container-custom ">
        <div className="cardsproduct  px-5 d-flex pb-5">
          <div className="row w-100">
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
