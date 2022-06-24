import "./App.css";

import Preview from "./pages/Preview";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Body/Products";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/Header/Signup";
import Login from "./components/Header/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/Login" element={<Login/>}  /> 
          <Route path="/Preview" element={<Preview />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
        <Footer/>

      </BrowserRouter>

    </>
  );
}

export default App;
