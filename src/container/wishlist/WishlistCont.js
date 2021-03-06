import React from "react";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import {
  get_user_wishlist,
  remove_from_wishlist,
} from "../../actions/wishlist/wishlistActions";

import Wishlist from "../../pages/Wishlist";
import { connect } from "react-redux";

function WishlistCont(props) {
  return <Wishlist {...props} />;
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    isCached: store.isCached,
    cart: store.cart.cart,
    wishlist: store.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    get_user_wishlist: (login) => {
      dispatch(get_user_wishlist(login));
    },
    remove_from_wishlist: (id, login) => {
      dispatch(remove_from_wishlist(id, login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistCont);
