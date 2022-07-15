import React from "react";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import { place_order } from "../../actions/order/orderActions";
import { connect } from "react-redux";
import Checkout from "../../pages/Checkout";

const CheckoutCont = (props) => {
  return <Checkout {...props} />;
};

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
    place_order: (item, cartId, paymentMethod, login) => {
      dispatch(place_order(item, cartId, paymentMethod, login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCont);
