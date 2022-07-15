import UNIVERSAL from "../../config/config";
import { RESET_CART, SET_USER_CART } from "../../constants/cart/cartConst";
import { set_snackbar } from "../snackbar/snackbarActions";
import {
  SET_CART_LOADER,
  UNSET_CART_LOADER,
} from "../../constants/loader/loaderConst";

export function get_user_cart(login) {
  return (dispatch) => {
    dispatch({ type: SET_CART_LOADER });
    return fetch(UNIVERSAL.BASEURL + `/api/cart/${login._id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_cart(responseJson.data));
          dispatch({ type: UNSET_CART_LOADER });
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        dispatch({ type: UNSET_CART_LOADER });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function add_to_cart(item, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/cart/add_to_cart`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
      },
      body: JSON.stringify({
        userId: login._id,
        item: item,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_cart(responseJson.data));
          dispatch(set_snackbar("Item added to cart", true, "success"));
        } else {
          if (responseJson.message === "You are not logged in!") {
            dispatch(set_snackbar("You are not logged in", true, "error"));
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unset_all_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function increase_quantity(item, login) {
  console.log("login", item, login);
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/cart/increase_quantity`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
      },
      body: JSON.stringify({
        userId: login._id,
        item: item,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_cart(responseJson.data));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unset_all_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function decrease_quantity(item, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/cart/decrease_quantity`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
      },
      body: JSON.stringify({
        userId: login._id,
        item: item,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_cart(responseJson.data));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unset_all_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function remove_from_cart(item, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/cart/remove_from_cart`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
      },
      body: JSON.stringify({
        userId: login._id,
        item: item,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_cart(responseJson.data));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unset_all_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function delete_user_cart(cartId) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/cart/${cartId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_cart([]));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unset_all_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function set_user_cart(payload) {
  return {
    type: SET_USER_CART,
    payload: payload,
  };
}

export function reset_cart() {
  return {
    type: RESET_CART,
  };
}
