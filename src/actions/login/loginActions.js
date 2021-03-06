import {
  SET_USER_CONFIRM_PASSWORD,
  SET_USER_PASSWORD,
  SET_USER_CONTACT_NUM,
  SET_USER_OLD_IMG,
  SET_USER_IMG,
  SET_USER_EMAIL,
  SET_USER_NAME,
  SET_USER_CURRENT_PASSWORD,
  RESET_USER,
} from "../../constants/user/userConst";
import { set_login_loader, unset_login_loader } from "../loader/loaderActions";
import { set_snackbar } from "../snackbar/snackbarActions";
import { RELOAD_LOGIN, LOGIN, LOGOUT } from "../../constants/login/loginConst";
import UNIVERSAL from "../../config/config";
import firebase from "firebase";
import history from "../../history";
import { googleProvider } from "../../config/firebaseConfig";
import { get_user_cart } from "../cart/cartActions";
import { reset_cart } from "../cart/cartActions";
import { reset_wishlist } from "../wishlist/wishlistActions";

export function signup(user) {
  return (dispatch) => {
    dispatch(set_login_loader());
    if (user.password !== user.confirm_password) {
      dispatch(
        set_snackbar("Confirm password doesn't match password", true, "warning")
      );
      dispatch(unset_login_loader());
      return;
    }
    if (user.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("users/" + user.name + ".png")
        .put(user.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log(downloadURL);
            dispatch(signup_api(user, downloadURL));
          });
        }
      );
    } else {
      dispatch(signup_api(user, ""));
    }
  };
}

export function signup_api(user, url) {
  return (dispatch) => {
    console.log(UNIVERSAL, "Baseurl...");
    return fetch(UNIVERSAL.BASEURL + "/api/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        contact_no: user.contact_num,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_login(responseJson.data));
          dispatch(reset_user());
          dispatch(set_snackbar(responseJson.message, true, "success"));
          dispatch(unset_login_loader());
          history.push("/");
        } else {
          dispatch(set_snackbar(responseJson.message, true, "error"));
          dispatch(unset_login_loader());
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function do_login(user) {
  return (dispatch) => {
    dispatch(set_login_loader());
    return fetch(UNIVERSAL.BASEURL + "/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_login(responseJson.data));
          dispatch(get_user_cart(responseJson.data.user));
          dispatch(reset_user());
          history.push("/");
          dispatch(set_snackbar(responseJson.message, true, "success"));
        } else {
          dispatch(set_snackbar(responseJson.message, true, "error"));
        }
        dispatch(unset_login_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function set_login(payload) {
  localStorage.setItem("megastore_token", payload.token);
  localStorage.setItem("megastore_login", JSON.stringify(payload.user));

  return {
    type: LOGIN,
    payload: { token: payload.token, ...payload.user },
  };
}

export function set_reload_login(payload) {
  console.log(payload);
  return {
    type: RELOAD_LOGIN,
    payload: payload,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("megastore_token");
    localStorage.removeItem("megastore_login");
    dispatch(set_snackbar("logout successfull", true, "success"));
    dispatch(reset_cart());
    dispatch(reset_wishlist());
    history.push("/");
    dispatch({
      type: LOGOUT,
    });
  };
}

export function googleLogin() {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        let payload = {
          token: res.credential.idToken,
          user: {
            _id: res.additionalUserInfo.profile.id,
            name: res.additionalUserInfo.profile.name,
            email: res.additionalUserInfo.profile.email,
            contact_no: "",
            url: res.additionalUserInfo.profile.picture,
          },
        };
        dispatch(set_login(payload));
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function set_user_name(payload) {
  return {
    type: SET_USER_NAME,
    payload: payload,
  };
}

export function set_user_email(payload) {
  return {
    type: SET_USER_EMAIL,
    payload: payload,
  };
}

export function set_user_img(payload) {
  return {
    type: SET_USER_IMG,
    payload: payload,
  };
}

export function set_user_old_img(payload) {
  return {
    type: SET_USER_OLD_IMG,
    payload: payload,
  };
}

export function set_user_contact_num(payload) {
  return {
    type: SET_USER_CONTACT_NUM,
    payload: payload,
  };
}
export function set_user_current_password(payload) {
  return {
    type: SET_USER_CURRENT_PASSWORD,
    payload: payload,
  };
}

export function set_user_password(payload) {
  return {
    type: SET_USER_PASSWORD,
    payload: payload,
  };
}

export function set_user_confirm_password(payload) {
  return {
    type: SET_USER_CONFIRM_PASSWORD,
    payload: payload,
  };
}

export function reset_user() {
  return {
    type: RESET_USER,
  };
}
