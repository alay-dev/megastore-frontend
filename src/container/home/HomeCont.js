import Home from "../../pages/Home";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import {
  get_deal_of_the_day,
  get_top_seller,
} from "../../actions/product/productActions";
import {
  set_deal_of_the_day_cache,
  set_top_seller_cache,
} from "../../actions/cache/cacheActions";
import { add_to_cart } from "../../actions/cart/cartActions";
import { connect } from "react-redux";

function HomeCont(props) {
  return <Home {...props} />;
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    isCached: store.isCached,
    product: store.product,
    cart: store.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    get_deal_of_the_day: (login) => {
      dispatch(get_deal_of_the_day(login));
    },
    set_deal_of_the_day_cache: (status) => {
      dispatch(set_deal_of_the_day_cache(status));
    },
    get_top_seller: (login) => {
      dispatch(get_top_seller(login));
    },
    set_top_seller_cache: (status) => {
      dispatch(set_top_seller_cache(status));
    },
    add_to_cart: (item, login) => {
      dispatch(add_to_cart(item, login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);
