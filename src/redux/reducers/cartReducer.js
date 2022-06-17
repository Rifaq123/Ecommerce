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
      // console.log("hh", action.payload);
      // console.log("::", state);
      // return [...state.Carts.push(action.payload)];

      // console.log(state.Carts);

      if (state.Carts.find((e) => e.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          Carts: [...state.Carts, action.payload],
        };
      }

    //   return {
    //     ...state,
    //     Carts: state.Carts.push([action.payload])
    //  }

    // if (state.numberCart == 0) {
    //   state.Carts.push(action.payload);
    // } else {
    //   let check = false;
    //   state.Carts.map((item, key) => {
    //     if (item.id == action.payload.id) {
    //       state.Carts[key].quantity++;
    //       check = true;
    //     }
    //   });
    //   if (!check) {
    //     state.Carts.push(action.payload);
    //   }
    // }
    // return {
    //   ...state,
    //   numberCart: state.numberCart + 1,
    // };

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

    //   if(state.Carts.find((e)=> e.id === action.payload.id)){
    //     // console.log(state.Carts[0].quantity=state.Carts[0].quantity+1)
    //     return [...state.Carts[0].quantity=state.Carts[0].quantity+1]
    // }     else{
    //   // console.log(false)
    //   return [...state.Carts]
    // }

    // state.Carts[action.payload].quantity++;

    // return{
    //     ...state
    // }

    // let check = false;
    //   state.Carts.map((item) => {
    //     if (item.id == action.payload.id) {
    //       item.quantity++;
    //       check = true;
    //     }
    //   });

    //   if (!check) {
    //     state.Carts.push(action.payload);
    //   }
    //   return {
    //     ...state,
    //     numberCart: state.Carts + 1,
    //   };
    // return {
    //   ...state,
    //   numberCart: state.numberCart++,
    //   Carts: state.Carts.map((item, key) => {
    //   if (item.id == action.payload.id) {
    //     state.Carts[key].quantity++;
    //   }
    //   })
    // };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        Carts: state.Carts.filter((item) => {
          return item.id === action.payload.id
            ? (item.quantity = item.quantity - 1)
            : { ...state };
        }),
      };
    //   if(state.Carts.find((e)=> e.id === action.payload.id)){
    //     // console.log(state.Carts[0].quantity=state.Carts[0].quantity+1)
    //     return [...state.Carts[0].quantity=state.Carts[0].quantity-1]
    // }     else{
    //   // console.log(false)
    //   return [...state.Carts]
    // }

    // let quantity = state.Carts[action.payload].quantity;
    // if (quantity > 1) {
    //   state.numberCart--;
    //   state.Carts[action.payload].quantity--;
    // }

    // return {
    //   ...state,
    // };

    case "VIEW_CART":
      // console.log(...state.preview.push(action.payload));
      return { ...state, preview: action.payload };

    case "WISH_LIST":
      if (state.Wishlist.find((e) => e.id === action.payload.id)) {
        return {
          ...state,
          Wishlist: state.Wishlist.filter((item) => {
          return item.id !== action.payload.id;
        }),
        }
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
