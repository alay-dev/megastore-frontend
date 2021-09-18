import React, { Component } from "react";
import { connect } from "react-redux";
import { set_reload_login } from "../../actions/login/loginActions";

class controllerCont extends Component {
  componentDidMount() {
    if (localStorage.getItem("megastore_token")) {
      this.props.set_reload_login(
        JSON.parse(localStorage.getItem("megastore_login"))
      );
    }
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_reload_login: (payload) => {
      dispatch(set_reload_login(payload));
    },
  };
};

export default connect("", mapDispatchToProps)(controllerCont);
