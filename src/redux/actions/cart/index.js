export const WishList = (value) => {
    return {
      type: "WISH_LIST",
      payload: value
    };
  };
export const ViewProduct = (value) => {
    return {
      type: "VIEW_CART",
      payload: value
    };
  };
export const addToCart = (value) => {
    return {
      type: "ADD_TO_CART",
      payload: value
    };
  };
export const DeleteCart = (payload) => {
    return {
      type: "DELETE_TO_CART",
      payload
    };
  };
export function IncreaseQuantity(item){
    return{
        type:'INCREASE_QUANTITY',
        payload : item
    }
}
export function DecreaseQuantity(item){
    return{
        type:'DECREASE_QUANTITY',
        payload : item
    }
}
export const emptyCart = () => {
  return {
    type: 'EMPTY_CART',
  };
};

