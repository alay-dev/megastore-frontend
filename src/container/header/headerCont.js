import { Component } from "react";
import Header from "../../components/Header";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import {
  set_user_email,
  set_user_password,
  do_login,
  logout,
  set_reload_login,
} from "../../actions/login/loginActions";
import { connect } from "react-redux";

class HeaderCont extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_user_email: (email) => {
      dispatch(set_user_email(email));
    },
    logout: () => {
      dispatch(logout());
    },
    set_user_password: (password) => {
      dispatch(set_user_password(password));
    },
    do_login: (user) => {
      dispatch(do_login(user));
    },
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    set_reload_login: (login) => {
      dispatch(set_reload_login(login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCont);
