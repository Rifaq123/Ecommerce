import React from "react";
import Header from "../components/Header/Header";
import Cards from "../components/Body/Cards";
import Products from "../components/Body/Products";
import Category from "../components/Body/Category";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
    {/* <ToastContainer/> */}
      <Products />
    </>
  );
};

export default Home;
