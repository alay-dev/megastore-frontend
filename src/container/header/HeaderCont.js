import Header from "../../components/Header";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import { get_user_cart } from "../../actions/cart/cartActions";
import {
  set_user_email,
  set_user_password,
  do_login,
  logout,
  set_reload_login,
} from "../../actions/login/loginActions";
import { connect } from "react-redux";

function HeaderCont(props) {
  return <Header {...props} />;
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    user: store.user,
    cart: store.cart,
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
    get_user_cart: (login) => {
      dispatch(get_user_cart(login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCont);
