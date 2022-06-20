import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, ViewProduct, WishList } from "../../redux/actions/cart";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

function Cardsimg(props) {


  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Card className="title ">
          <CardActionArea>
            {props.cart.find(
              (selectedAddress) => selectedAddress.id == props.id
            ) ? 
            <p className="heart">
               <FavoriteIcon
              onClick={() => dispatch(WishList(props.wishlist))}
            />
         
          </p>
            : 
            <p className="heart">
            <FavoriteBorderIcon
              onClick={() => dispatch(WishList(props.wishlist))}
            />
          </p>
            }
           

            <CardMedia
              component="img"
              image={props.image}
              alt="green iguana"
              sx={{ px: 5 }}
              className="productimage"
            />

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

              <Link to="/Preview">
                <div>
                  <VisibilityIcon
                    sx={{ color: "black" }}
                    className="mx-1"
                    onClick={() => dispatch(ViewProduct(props.view))}
                  />
                </div>
              </Link>
              {/* <Link to="/Cart"> */}
              <button
                type="button"
                class="btn btn-dark whitepreview mx-1"
                id="checkout"
                onClick={() => dispatch(addToCart(props.main))}
              >
                Add to cart
              </button>

              {/* </Link> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default Cardsimg;
