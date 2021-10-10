import React from "react";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import {
  add_to_cart,
  increase_quantity,
  decrease_quantity,
} from "../../actions/cart/cartActions";
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
    add_to_cart: (item, login) => {
      dispatch(add_to_cart(item, login));
    },
    increase_quantity: (item, login) => {
      dispatch(increase_quantity(item, login));
    },
    decrease_quantity: (item, login) => {
      dispatch(decrease_quantity(item, login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCont);
