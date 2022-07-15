import { logout, reset_user, set_login } from "../login/loginActions";
import {
  SET_ALL_USER,
  RESET_USER,
  SET_USER_CONFIRM_PASSWORD,
  SET_USER_CONTACT_NUM,
  SET_USER_CURRENT_PASSWORD,
  SET_USER_EMAIL,
  SET_USER_IMG,
  SET_USER_NAME,
  SET_USER_OLD_IMG,
  SET_USER_PASSWORD,
  SET_USER_HOMEADDRESS,
  SET_USER_OTHERADDRESS,
  SET_USER_WORKADDRESS,
} from "../../constants/user/userConst";
import { set_snackbar } from "../snackbar/snackbarActions";
import { LOGIN } from "../../constants/login/loginConst";
import UNIVERSAL from "../../config/config";
import firebase from "firebase";
import {
  set_update_profile_loader,
  set_delete_loader,
  set_like_loader,
  set_update_password_loader,
  unset_update_password_loader,
  unset_update_profile_loader,
  unset_delete_loader,
} from "../loader/loaderActions";
import history from "../../history";

export function get_all_users(login) {
  return (dispatch) => {
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "/api/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("mycreativeside_token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_all_user(responseJson.users));
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

export function update_user(id, user, login) {
  return (dispatch) => {
    dispatch(set_update_profile_loader());
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
            dispatch(update_user_api(id, user, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(update_user_api(id, user, login, user.old_img));
    }
  };
}

export function update_user_api(id, user, login, url) {
  return (dispatch) => {
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "/api/users", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("megastore_token"),
      },
      body: JSON.stringify({
        id: id,
        name: user.name,
        email: user.email,
        contact_no: user.contact_num,
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_snackbar(responseJson.message, true, "success"));
          dispatch(
            set_login({
              token: localStorage.getItem("megastore_token"),
              user: responseJson?.data,
            })
          );
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(login());
          }
        }
        dispatch(unset_update_profile_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function update_address(id, user, login) {
  console.log(user, "user from action");
  return (dispatch) => {
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "/api/users", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("megastore_token"),
      },
      body: JSON.stringify({
        id: id,
        workAddress: user.workAddress,
        homeAddress: user.homeAddress,
        otherAddress: user.otherAddress,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_snackbar(responseJson.message, true, "success"));
          dispatch(
            set_login({
              token: localStorage.getItem("megastore_token"),
              user: responseJson?.data,
            })
          );
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(login());
          }
        }
        dispatch(unset_update_profile_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function update_password(id, user, login) {
  return (dispatch) => {
    dispatch(set_update_password_loader());
    if (user.password !== user.confirm_password) {
      dispatch(
        set_snackbar("confirm password should match password", true, "warning")
      );
      dispatch(unset_update_password_loader());
      return;
    }
    return fetch(UNIVERSAL.BASEURL + "/api/users/update_password", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("mycreativeside_token"),
      },
      body: JSON.stringify({
        id: id,
        current_password: user.current_password,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(responseJson.message, true, "success");
          dispatch(reset_user());
          dispatch(unset_update_password_loader());
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            dispatch(set_snackbar(responseJson.message, true, "error"));
            dispatch(unset_update_password_loader());
          }
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function delete_user(id, login) {
  return (dispatch) => {
    dispatch(set_delete_loader());
    return fetch(UNIVERSAL.BASEURL + "/api/users", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("mycreativeside_token"),
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_users(login));
          dispatch(reset_user());
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

export function delete_self(id) {
  return (dispatch) => {
    dispatch(set_delete_loader());
    return fetch(UNIVERSAL.BASEURL + "/api/users/delete_self", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("mycreativeside_token"),
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(unset_delete_loader());
          dispatch(logout());
          history.push("/");
          dispatch(responseJson.message, true, "success");
          dispatch(reset_user());
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
            console.log(responseJson.data);
          }
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function contact_us(name, email, message) {
  return (dispatch) => {
    return fetch(
      "https://hooks.slack.com/services/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",
      {
        method: "POST",
        headers: {
          // Accept: "application/json",
          // "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `
          Name: ${name} \n Email: ${email} \nMessage: ${message}
          `,
        }),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function set_all_user(payload) {
  return {
    type: SET_ALL_USER,
    payload: payload,
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

export function set_user_contact_num(payload) {
  console.log(payload);
  return {
    type: SET_USER_CONTACT_NUM,
    payload: payload,
  };
}

export function set_user_confirm_password(payload) {
  return {
    type: SET_USER_CONFIRM_PASSWORD,
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

export function set_user_password(payload) {
  return {
    type: SET_USER_PASSWORD,
    payload: payload,
  };
}

export function set_user_current_password(payload) {
  return {
    type: SET_USER_CURRENT_PASSWORD,
    payload: payload,
  };
}

export function set_user_work_address(payload) {
  return {
    type: SET_USER_WORKADDRESS,
    payload: payload,
  };
}

export function set_user_home_address(payload) {
  return {
    type: SET_USER_HOMEADDRESS,
    payload: payload,
  };
}

export function set_user_other_address(payload) {
  return {
    type: SET_USER_OTHERADDRESS,
    payload: payload,
  };
}
