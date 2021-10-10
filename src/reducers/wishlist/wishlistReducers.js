import {
  SET_USER_WISHLIST,
  RESET_WISHLIST,
} from "../../constants/wishlist/wishlistConst";

const initial_state = {
  wishlist: [],
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_USER_WISHLIST:
      return (state = { ...state, wishlist: action.payload });
    case RESET_WISHLIST:
      return (state = { ...state, wishlist: action.payload });
    default:
      return state;
  }
}
