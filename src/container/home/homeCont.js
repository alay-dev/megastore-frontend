import { Component } from "react";
import Home from "../../pages/Home";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import { connect } from "react-redux";

class HomeCont extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);
