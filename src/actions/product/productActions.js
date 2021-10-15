import { set_snackbar } from "../snackbar/snackbarActions";
import UNIVERSAL from "../../config/config";
import firebase from "firebase";
import { set_post_loader } from "../loader/loaderActions";
import {
  SET_ALL_PRODUCTS,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_DESCRIPTION,
  SET_PRODUCT_DISCOUNT,
  SET_PRODUCT_IMAGE,
  SET_PRODUCT_NAME,
  SET_PRODUCT_ONOFFER,
  SET_PRODUCT_RATINGSAVERAGE,
  SET_PRODUCT_PRICE,
  RESET_PRODUCT,
  SET_CURRENT_PRODUCT,
  SET_PRODUCT_OLD_IMAGE,
  SET_DEAL_OF_THE_DAY,
  SET_TOP_SELLER,
} from "../../constants/product/productConst";

export function get_all_products(login) {
  return (dispatch) => {
    // dispatch(set_all_post_loader());

    return fetch(UNIVERSAL.BASEURL + "/api/products", {
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
          dispatch(set_all_products(responseJson.data));
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

export function get_products_by_category(category, login) {
  return (dispatch) => {
    // dispatch(set_all_post_loader());

    return fetch(UNIVERSAL.BASEURL + `/api/products/category/${category}`, {
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
          dispatch(set_all_products(responseJson.data));
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

export function get_deal_of_the_day(login) {
  return (dispatch) => {
    // dispatch(set_all_post_loader());

    return fetch(UNIVERSAL.BASEURL + "/api/products/deal_of_the_day", {
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
          dispatch(set_deal_of_the_day(responseJson.data));
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

export function get_top_seller(login) {
  return (dispatch) => {
    // dispatch(set_all_post_loader());

    return fetch(UNIVERSAL.BASEURL + "/api/products/top_seller", {
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
          dispatch(set_top_seller(responseJson.data));
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

export function get_product_by_id(id, login) {
  return (dispatch) => {
    // dispatch(set_post_loader())

    return fetch(UNIVERSAL.BASEURL + `/api/products/${id}`, {
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
          dispatch(set_current_product(responseJson.data));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }

        // dispatch(unset_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// export function add_product(product, login) {
//   return (dispatch) => {
//     dispatch(set_post_loader());
//     if (product.image !== "") {
//       var storageRef = firebase.storage().ref();
//       var uploadTask = storageRef
//         .child("products/" + product.name + ".png")
//         .put(product.image);
//       uploadTask.on(
//         "state_changed",
//         function (snapshot) {},
//         function (error) {
//           // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
//         },
//         function () {
//           uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
//             dispatch(add_product_api(product, login, downloadURL));
//           });
//         }
//       );
//     } else {
//       dispatch(add_product_api(product, login, ""));
//     }
//   };
// }

export function add_product(product, login) {
  return (dispatch) => {
    console.log(UNIVERSAL, "Baseurl...");
    // const formData = new FormData();
    // formData.append("name", product.name);
    // formData.append("price", product.price);
    // formData.append("category", product.category);
    // formData.append("image", product.image);
    return fetch(UNIVERSAL.BASEURL + "/api/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: product.name,
        price: product.price,
        category: product.category,
        onOffer: product.onOffer,
        discount: product.discount,
        description: product.description,
        ratingsAverage: product.ratingsAverage,
      }),
      // body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(reset_product());

          dispatch(set_snackbar("Product add successful", true, "success"));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(unset_post_loader());
          } else {
            dispatch(set_snackbar(responseJson.message, true, "error"));
            dispatch(reset_product());
            // dispatch(unset_post_loader());
          }
        }
        dispatch(get_all_products());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function update_product(id, product, login) {
  return (dispatch) => {
    // dispatch(setLoader());
    if (product.image !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("products/" + product.name + ".png")
        .put(product.image);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            dispatch(update_product_api(id, product, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(update_product_api(id, product, login, product.old_img));
    }
  };
}

export function update_product_api(id, product, login, url) {
  return (dispatch) => {
    // dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + `/api/products/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        image: url,
        name: product.name,
        price: product.price,
        category: product.category,
        onOffer: product.on_offer,
        discount: product.discount,
        description: product.description,
        ratingsAverage: product.ratings_average,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_products());
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function delete_product(id, login) {
  return (dispatch) => {
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + `/api/products/${id}`, {
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
          dispatch(get_all_products(login));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function set_product_name(payload) {
  return {
    type: SET_PRODUCT_NAME,
    payload: payload,
  };
}

export function set_product_category(payload) {
  return {
    type: SET_PRODUCT_CATEGORY,
    payload: payload,
  };
}

export function set_product_img(payload) {
  console.log("1hh", payload);
  return {
    type: SET_PRODUCT_IMAGE,
    payload: payload,
  };
}

export function set_all_products(payload) {
  return {
    type: SET_ALL_PRODUCTS,
    payload: payload,
  };
}

export function set_product_onoffer(payload) {
  return {
    type: SET_PRODUCT_ONOFFER,
    payload: payload,
  };
}

export function set_product_price(payload) {
  return {
    type: SET_PRODUCT_PRICE,
    payload: payload,
  };
}

export function set_current_product(payload) {
  return {
    type: SET_CURRENT_PRODUCT,
    payload: payload,
  };
}

export function set_product_old_image(payload) {
  return {
    type: SET_PRODUCT_OLD_IMAGE,
    payload: payload,
  };
}

export function set_product_discount(payload) {
  return {
    type: SET_PRODUCT_DISCOUNT,
    payload: payload,
  };
}

export function set_product_desciption(payload) {
  return {
    type: SET_PRODUCT_DESCRIPTION,
    payload: payload,
  };
}

export function set_product_ratings_average(payload) {
  return {
    type: SET_PRODUCT_RATINGSAVERAGE,
    payload: payload,
  };
}

export function set_deal_of_the_day(payload) {
  return {
    type: SET_DEAL_OF_THE_DAY,
    payload: payload,
  };
}

export function set_top_seller(payload) {
  return {
    type: SET_TOP_SELLER,
    payload: payload,
  };
}

export function reset_product() {
  return {
    type: RESET_PRODUCT,
  };
}
