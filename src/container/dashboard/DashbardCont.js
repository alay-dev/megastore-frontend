import Dashboard from "../../pages/Dashboard";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import { get_all_users } from "../../actions/user/userActions";
import { get_all_order, get_one_order } from "../../actions/order/orderActions";
import {
  get_all_products,
  set_product_category,
  set_product_desciption,
  set_product_discount,
  set_product_img,
  set_product_name,
  set_product_onoffer,
  set_product_price,
  set_product_ratings_average,
  add_product,
  update_product,
  delete_product,
} from "../../actions/product/productActions";
import { connect } from "react-redux";

function DashboardCont(props) {
  return <Dashboard {...props} />;
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    user: store.user,
    product: store.product,
    order: store.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    get_all_users: (login) => {
      dispatch(get_all_users(login));
    },
    get_all_products: (login) => {
      dispatch(get_all_products(login));
    },
    set_product_category: (category) => {
      dispatch(set_product_category(category));
    },
    set_product_name: (name) => {
      dispatch(set_product_name(name));
    },
    set_product_price: (price) => {
      dispatch(set_product_price(price));
    },
    set_product_desciption: (description) => {
      dispatch(set_product_desciption(description));
    },
    set_product_img: (img) => {
      dispatch(set_product_img(img));
    },
    set_product_discount: (discount) => {
      dispatch(set_product_discount(discount));
    },
    set_product_onoffer: (val) => {
      dispatch(set_product_onoffer(val));
    },
    set_product_ratings_average: (average) => {
      dispatch(set_product_ratings_average(average));
    },
    add_product: (product) => {
      dispatch(add_product(product));
    },
    update_product: (id, product, login) => {
      dispatch(update_product(id, product, login));
    },
    delete_product: (id, login) => {
      dispatch(delete_product(id, login));
    },
    get_all_order: (login) => {
      dispatch(get_all_order(login));
    },
    get_one_order: (id) => {
      dispatch(get_one_order(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCont);
