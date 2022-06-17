import * as React from "react";
import Box from "@mui/material/Box";

import logo from "../../assests/images/mobile/logomm.png";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
// import Stack from '@mui/material/Stack';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import "../../assests/css/style.css";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();

  const onclickHome = (e) => {
    navigate("/");
  };

  const cart = useSelector((state) => state.cart.Carts);
  const cartItems = cart.length;

  const cartwish = useSelector((state) => state.cart.Wishlist);

  const wishlist= cartwish.length


  return (
    <>
      <div className="contain">
        <nav class="navbar navbar-light bg-light d-flex justify-content-between">
          <div className="nav-logo" onClick={onclickHome}>
            {/* MOBILY */}
            <img src={logo} alt="" />
            <p className="logoname">
              MOBILY <span>Shopp</span>
            </p>
          </div>

          {/* <div class="row">
            <div class="col mx-auto">
              <div class="input-group">
                <input
                  class="form-control border-end-0 border rounded-pill"
                  type="search"
                  value=""
                  placeholder="Search"
                  id="example-search-input"
                />
                <span class="input-group-append">
                  <button
                    class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                    type="button"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </div>
          </div> */}
          <div className="nav-icon-menu d-flex justify-content-center">
            <Box>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <BottomNavigation
                  
                >
                  <BottomNavigationAction
                    // label="Home"
                    icon={<HomeIcon />}
                    onClick={onclickHome}
                  />
                
                  <Link to="/Wishlist">
                    <BottomNavigationAction
                      label="Cart"
                      icon={
                                                  // <FavoriteIcon />

                        <Badge badgeContent={wishlist} color="primary">
                          <FavoriteIcon />
                        </Badge>
                      }
                    />
                  </Link>
                  <BottomNavigationAction
                    // label="Location"
                    icon={<LocationOnIcon />}
                  />

                  <Link to="/Cart">
                    <BottomNavigationAction
                      label="Cart"
                      icon={
                        <Badge badgeContent={cartItems} color="primary">
                          <ShoppingCartIcon />
                        </Badge>
                      }
                    />
                  </Link>

                  <BottomNavigationAction label="Login" icon={<LoginIcon />} />
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  ></Box>
                </BottomNavigation>
              </Stack>
            </Box>
            <Avatar src="/broken-image.jpg" sx={{ m: 1 }} />
          </div>
        </nav>
      </div>
    </>
  );
}
