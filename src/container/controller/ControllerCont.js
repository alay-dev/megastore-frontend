import { useEffect } from "react";
import { connect } from "react-redux";
import { set_reload_login } from "../../actions/login/loginActions";

function ControllerCont({ set_reload_login }) {
  useEffect(() => {
    if (localStorage.getItem("megastore_token")) {
      set_reload_login(JSON.parse(localStorage.getItem("megastore_login")));
    }
  }, []);

  return null;
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_reload_login: (payload) => {
      dispatch(set_reload_login(payload));
    },
  };
};

export default connect("", mapDispatchToProps)(ControllerCont);
