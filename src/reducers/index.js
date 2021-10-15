import { combineReducers } from "redux";

import login from "./login/loginReducers";
import loader from "./loader/loaderReducers";
import snackbar from "./snackbar/snackbarReducers";
import user from "./user/userReducers";
import product from "./product/productReducers";
import isCached from "./cache/cacheReducers";
import cart from "./cart/cartReducers";
import wishlist from "./wishlist/wishlistReducers";
import order from "./order/orderReducers";

export default combineReducers({
  login,
  cart,
  wishlist,
  user,
  product,
  isCached,
  loader,
  snackbar,
  order,
});
