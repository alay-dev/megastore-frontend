import UNIVERSAL from "../../config/config";
import { set_snackbar } from "../snackbar/snackbarActions";

import {
  RESET_WISHLIST,
  SET_USER_WISHLIST,
} from "../../constants/wishlist/wishlistConst";

import {
  SET_WISHLIST_LOADER,
  UNSET_WISHLIST_LOADER,
} from "../../constants/loader/loaderConst";

export function get_user_wishlist(login) {
  return (dispatch) => {
    dispatch({ type: SET_WISHLIST_LOADER });
    return fetch(UNIVERSAL.BASEURL + `/api/wishlist/${login._id}`, {
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
          dispatch(set_user_wishlist(responseJson.data));
          dispatch({ type: UNSET_WISHLIST_LOADER });
        } else {
          if (responseJson.message.includes("User id is missing")) {
            // dispatch(set_snackbar("Login to add to cart", true, "error"));
          } else {
            dispatch(
              set_snackbar("Something went Wrong. Try again", true, "error")
            );
          }
        }
        dispatch({ type: UNSET_WISHLIST_LOADER });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function add_to_wishlist(id, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/wishlist/add_to_wishlist`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login && login.token,
      },
      body: JSON.stringify({
        user_id: login._id,
        product_id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_wishlist(responseJson.data));
          dispatch(set_snackbar("item added to wishlist", true, "success"));
        } else {
          if (responseJson.message === "You are not logged in!") {
            dispatch(set_snackbar("You are not logged in", true, "error"));
          } else {
            dispatch(
              set_snackbar("Something went Wrong. Try again", true, "error")
            );
          }
        }
        // dispatch(unset_all_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function remove_from_wishlist(id, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/wishlist/remove_from_wishlist`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        user_id: login._id,
        product_id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_wishlist(responseJson.data));
          dispatch(set_snackbar("item removed from wishlist", true, "success"));
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

export function set_user_wishlist(payload) {
  return {
    type: SET_USER_WISHLIST,
    payload: payload,
  };
}

export function reset_wishlist() {
  return {
    type: RESET_WISHLIST,
  };
}
