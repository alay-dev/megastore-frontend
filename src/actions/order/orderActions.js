import UNIVERSAL from "../../config/config";
import { SET_ALL_ORDERS } from "../../constants/order/orderConst";

export function get_all_order(login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/order/`, {
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
          dispatch(set_all_orders(responseJson.data));
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

export function place_order(item, paymentMethod, login) {
  console.log("login", item, login);
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/order/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        userId: login._id,
        orderItem: item,
        shippingAddress: "test address",
        paymentMethod: paymentMethod,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          // dispatch(set_user_cart(responseJson.data));
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

export function set_all_orders(payload) {
  return {
    type: SET_ALL_ORDERS,
    payload: payload,
  };
}
