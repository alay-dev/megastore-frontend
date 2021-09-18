import { combineReducers } from "redux";

import login from "./login/loginReducers";
import loader from "./loader/loaderReducers";
import snackbar from "./snackbar/snackbarReducers";
import user from "./user/userReducers";
import product from "./product/productReducers";

export default combineReducers({
  login,
  loader,
  snackbar,
  user,
  product  
});
