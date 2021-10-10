import {
  SET_USER_CART,
  ADD_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  RESET_CART,
} from "../../constants/cart/cartConst";

const initial_state = {
  cart: [],
  cart_item: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_USER_CART:
      return (state = { ...state, cart: action.payload });
    // case ADD_CART_PRODUCT:
    //   return (state= {...state, })
    case RESET_CART:
      return (state = {
        ...action.payload,
        cart: [],
      });
    default:
      return state;
  }
}
