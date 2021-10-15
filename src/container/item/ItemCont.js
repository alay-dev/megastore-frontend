import React from "react";
import Item from "../../pages/Item";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import { add_to_wishlist } from "../../actions/wishlist/wishlistActions";
import { get_product_by_id } from "../../actions/product/productActions";

import { connect } from "react-redux";

function ItemCont(props) {
  return <Item {...props} />;
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    isCached: store.isCached,
    cart: store.cart.cart,
    wishlist: store.wishlist,
    product: store.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    add_to_wishlist: (id, login) => {
      dispatch(add_to_wishlist(id, login));
    },
    get_product_by_id: (id, login) => {
      dispatch(get_product_by_id(id, login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCont);
