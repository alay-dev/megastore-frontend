import React from "react";
import Profile from "../../pages/Profile";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import {
  set_user_contact_num,
  set_user_email,
  set_user_name,
  update_user,
  set_user_other_address,
  set_user_home_address,
  set_user_work_address,
  update_address,
} from "../../actions/user/userActions";
import { get_all_user_orders } from "../../actions/order/orderActions";
import { connect } from "react-redux";

const ProfileCont = (props) => {
  return <Profile {...props} />;
};

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    user: store.user,
    order: store.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    set_user_name: (name) => {
      dispatch(set_user_name(name));
    },
    set_user_contact_num: (contact_no) => {
      dispatch(set_user_contact_num(contact_no));
    },
    set_user_email: (email) => {
      dispatch(set_user_email(email));
    },
    update_user: (id, user, login) => {
      dispatch(update_user(id, user, login));
    },
    set_user_home_address: (add) => {
      dispatch(set_user_home_address(add));
    },
    set_user_work_address: (add) => {
      dispatch(set_user_work_address(add));
    },
    set_user_other_address: (add) => {
      dispatch(set_user_other_address(add));
    },
    update_address: (id, user, login) => {
      dispatch(update_address(id, user, login));
    },
    get_all_user_orders: (login) => {
      dispatch(get_all_user_orders(login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCont);
