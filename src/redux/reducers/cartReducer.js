import productimage from "../../api/productimage.json";
import Wishlist from "../../pages/Wishlist";

const initialState = {
  preview: {},
  Carts: [],
  Wishlist: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.Carts.find((e) => e.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          Carts: [...state.Carts, action.payload],
        };
      }

    case "DELETE_TO_CART":
      return {
        ...state,
        Carts: state.Carts.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };

    case "INCREASE_QUANTITY":
      console.log(state.Carts);

      return {
        ...state,
        Carts: state.Carts.filter((item) => {
          return item.id === action.payload.id
            ? (item.quantity = item.quantity + 1)
            : { ...state };
        }),
      };
    case "DECREASE_QUANTITY":
      console.log(state.Carts);

      return {
        ...state,
        Carts: state.Carts.filter((item) => {
          return item.id === action.payload.id
            ? (item.quantity = item.quantity - 1)
            : { ...state };
        }),
      };

    case "VIEW_CART":
      return { ...state, preview: action.payload };

    case "WISH_LIST":
      if (state.Wishlist.find((e) => e.id === action.payload.id)) {
        return {
          ...state,
          Wishlist: state.Wishlist.filter((item) => {
            return item.id !== action.payload.id;
          }),
        };
      } else {
        return {
          ...state,
          Wishlist: [...state.Wishlist, action.payload],
        };
      }

    default:
      return state;
  }
};
