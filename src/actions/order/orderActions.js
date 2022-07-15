import UNIVERSAL from "../../config/config";
import {
  SET_ALL_ORDERS,
  SET_CURRENT_ORDER,
  SET_USER_ORDERS,
} from "../../constants/order/orderConst";
import { set_snackbar } from "../snackbar/snackbarActions";

import { delete_user_cart } from "../cart/cartActions";

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

export function place_order(item, cartId, paymentMethod, login) {
  console.log("login", paymentMethod, item);
  return (dispatch) => {
    if (!paymentMethod) {
      return dispatch(
        set_snackbar("Please select payment method", true, "info")
      );
    }
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
          dispatch(delete_user_cart(cartId));
          set_snackbar("Order placed", true, "success");
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

export function get_one_order(order_id, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/order/${order_id}`, {
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
          dispatch(set_current_order(responseJson.data));
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

export function get_all_user_orders(login) {
  console.log("get_all_user_orders");
  return (dispatch) => {
    return fetch(
      UNIVERSAL.BASEURL + `/api/order/get_all_user_orders/${login._id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // token: login.token,
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_user_orders(responseJson.data));
        } else {
          if (responseJson.message.includes("User id is missing")) {
          } else {
            // dispatch(
            //   set_snackbar("Something went Wrong. Try again", true, "error")
            // );
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

export function set_current_order(payload) {
  return {
    type: SET_CURRENT_ORDER,
    payload: payload,
  };
}

export function set_user_orders(payload) {
  return {
    type: SET_USER_ORDERS,
    payload: payload,
  };
}
