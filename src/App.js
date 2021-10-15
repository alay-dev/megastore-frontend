import React, { useEffect } from "react";
import HeaderCont from "./container/header/HeaderCont";

import Footer from "./components/Footer";

import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import HomeCont from "./container/home/HomeCont";
import ItemCont from "./container/item/ItemCont";
import CartCont from "./container/cart/CartCont";
import CheckoutCont from "./container/checkout/CheckoutCont";
import WishlistCont from "./container/wishlist/WishlistCont";
import SignupCont from "./container/signup/SignupCont";
import DashboardCont from "./container/dashboard/DashbardCont";
import ProductByCategoryCont from "./container/ProductByCategory/ProductByCategoryCont";

import firebase from "firebase";
import firebaseConfig from "./config/firebaseConfig";

function App() {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <Router history={history}>
      <HeaderCont />
      <Switch>
        <Route exact path="/" component={HomeCont} />

        <Route exact path="/item/:product_id" component={ItemCont} />
        <Route exact path="/cart" component={CartCont} />
        <Route exact path="/checkout" component={CheckoutCont} />
        <Route exact path="/wishlist" component={WishlistCont} />

        <Route exact path="/signup" component={SignupCont} />
        <Route exact path="/dashboard" component={DashboardCont} />

        <Route sxact path="/:category" component={ProductByCategoryCont} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
