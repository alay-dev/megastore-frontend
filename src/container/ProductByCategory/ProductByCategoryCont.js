import ProductByCategory from "../../pages/ProductByCategory";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import {
  set_bakery_cache,
  set_beverage_cache,
  set_cosmetic_cache,
  set_egg_seafood_cache,
  set_household_cache,
  set_snack_cache,
  set_foodgrain_cache,
  set_fruit_cache,
} from "../../actions/cache/cacheActions";
import { get_products_by_category } from "../../actions/product/productActions";
import { add_to_cart } from "../../actions/cart/cartActions";
import { connect } from "react-redux";

function ProductByCategoryCont(props) {
  return <ProductByCategory {...props} />;
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    user: store.user,
    product: store.product,
    isCached: store.isCached,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    get_products_by_category: (category, login) => {
      dispatch(get_products_by_category(category, login));
    },
    set_bakery_cache: (payload) => {
      dispatch(set_bakery_cache(payload));
    },
    set_beverage_cache: (payload) => {
      dispatch(set_beverage_cache(payload));
    },
    set_cosmetic_cache: (payload) => {
      dispatch(set_cosmetic_cache(payload));
    },
    set_egg_seafood_cache: (payload) => {
      dispatch(set_egg_seafood_cache(payload));
    },
    set_household_cache: (payload) => {
      dispatch(set_household_cache(payload));
    },
    set_snack_cache: (payload) => {
      dispatch(set_snack_cache(payload));
    },
    set_foodgrain_cache: (payload) => {
      dispatch(set_foodgrain_cache(payload));
    },
    set_fruit_cache: (payload) => {
      dispatch(set_fruit_cache(payload));
    },
    add_to_cart: (item, login) => {
      dispatch(add_to_cart(item, login));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductByCategoryCont);
