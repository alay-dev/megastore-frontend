import UNIVERSAL from "../../config/config";

import { SET_USER_WISHLIST } from "../../constants/wishlist/wishlistConst";

export function get_user_wishlist(login) {
  return (dispatch) => {
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
          console.log("action");
          dispatch(set_user_wishlist(responseJson.data));
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

export function add_to_wishlist(id, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/wishlist/add_to_wishlist`, {
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
