import Signup from "../../pages/Signup";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import {
  signup,
  set_user_confirm_password,
  set_user_email,
  set_user_password,
  set_reload_login,
} from "../../actions/login/loginActions";
import { connect } from "react-redux";

function SignupCont(props) {
  return <Signup {...props} />;
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    user: store.user,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => {
      dispatch(signup(user));
    },
    set_user_email: (email) => {
      dispatch(set_user_email(email));
    },
    set_user_password: (password) => {
      dispatch(set_user_password(password));
    },
    set_user_confirm_password: (confirm_password) => {
      dispatch(set_user_confirm_password(confirm_password));
    },
    set_reload_login: (login) => {
      dispatch(set_reload_login(login));
    },
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupCont);
