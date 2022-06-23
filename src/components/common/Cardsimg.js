import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, ViewProduct, WishList } from "../../redux/actions/cart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import { purple } from "@mui/material/colors";
import { white } from "@mui/material/colors";
import { toast } from "react-toastify";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cardsimg(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Card className="title ">
          <CardActionArea>
            {props.cart.find((e) => e.id == props.id) ? (
              <p className="heart">
                <FavoriteIcon
                  sx={{ color: red[500] }}
                  onClick={() => {
                    dispatch(WishList(props.wishlist));
                    toast.error("Removed from Wishlist", { autoClose: 1000 });
                  }}
                />
              </p>
            ) : (
              <p className="heart">
                <FavoriteBorderIcon
                  onClick={() => {
                    dispatch(WishList(props.wishlist));
                    toast.success("Added to Wishlist", { autoClose: 1000 });
                  }}
                />
              </p>
            )}

            <Link to="/Preview">
              <CardMedia
                component="img"
                image={props.image}
                alt="green iguana"
                sx={{ px: 5 }}
                className="productimage"
                onClick={() => dispatch(ViewProduct(props.view))}
              />
            </Link>
            <CardContent sx={{ pb: 4, px: 0 }} className="textcard">
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="mt-2"
              >
                {props.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                <Rating
                  name="half-rating-read"
                  defaultValue={props.ratings}
                  // precision={0.5}
                  // readOnly
                />
                <span className="views">{props.span}</span>
              </Typography>

              <Typography variant="h4" component="div" className="price">
                ${props.price}
                <span className="discount">{props.pricespan}</span>
                <span className="discounted">{props.discount}</span>
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="freedelivery"
              >
                {props.freedelivery}
              </Typography>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/Preview">
                  <div>
                    <button
                      type="button"
                      class="btn btn-dark whitepreview mx-1"
                      id="checkout"
                      onClick={() => dispatch(ViewProduct(props.view))}
                    >
                      <VisibilityIcon
                        className="mx-1"
                      />
                    </button>
                  </div>
                </Link>

                {props.carts.find((e) => e.id == props.id) ? (
                  <Link to="/Cart">
                    <button
                      type="button"
                      class="btn btn-dark whitepreview mx-1"
                      id="checkout"
                      onClick={() => dispatch(addToCart(props.main))}
                    >
                      <ShoppingCartIcon sx={{ color: red[500] }} />
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    class="btn btn-dark whitepreview mx-1"
                    id="checkout"
                    onClick={() => {
                      dispatch(addToCart(props.main));
                      toast.success("Added to cart", { autoClose: 1000 });
                    }}
                  >
                    <ShoppingCartIcon />
                  </button>
                )}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default Cardsimg;
