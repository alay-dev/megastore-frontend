import {
  SET_SNACKBAR_SEVERITY,
  SET_SNACKBAR_STATUS,
  SET_SNACKBAR_MESSAGE,
} from "../../constants/snackbar/snackbarConst";

export function set_snackbar_status(payload) {
  return {
    type: SET_SNACKBAR_STATUS,
    payload: payload,
  };
}

export function set_snackbar_serverity(payload) {
  return {
    type: SET_SNACKBAR_SEVERITY,
    payload: payload,
  };
}

export function set_snackbar_message(payload) {
  return {
    type: SET_SNACKBAR_MESSAGE,
    payload: payload,
  };
}

export function set_snackbar(message, status, severity) {
  return (dispatch) => {
    dispatch(set_snackbar_status(status));
    dispatch(set_snackbar_serverity(severity));
    dispatch(set_snackbar_message(message));
  };
}
