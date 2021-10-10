import UNIVERSAL from "../../config/config";
import { SET_USER_CART } from "../../constants/cart/cartConst";

export function get_user_cart(login) {
  console.log("login", login);
  return (dispatch) => {
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

export function add_to_cart(item, login) {
  console.log("login", item, login);
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/cart/add_to_cart`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
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

export function set_user_cart(payload) {
  return {
    type: SET_USER_CART,
    payload: payload,
  };
}
