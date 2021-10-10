import React from "react";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import Cart from "../../pages/Cart";
import { connect } from "react-redux";

function CartCont(props) {
  return <Cart {...props} />;
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    isCached: store.isCached,
    cart: store.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCont);
