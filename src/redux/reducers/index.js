import { combineReducers } from "redux";
import { cartReducer } from "../reducers/cartReducer";

const allReducers = combineReducers({
  cart: cartReducer
});

export default allReducers;
