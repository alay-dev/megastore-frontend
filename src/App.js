import React, { useEffect } from "react";
import HeaderCont from "./container/header/HeaderCont";

import Footer from "./components/Footer";

import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import HomeCont from "./container/home/HomeCont";
import Item from "./pages/Item";
import CartCont from "./container/cart/CartCont";
import Checkout from "./pages/Chckout";
import Wishlist from "./pages/Wishlist";
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

        <Route exact path="/item" component={Item} />
        <Route exact path="/cart" component={CartCont} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/wishlist" component={Wishlist} />

        <Route exact path="/signup" component={SignupCont} />
        <Route exact path="/dashboard" component={DashboardCont} />

        <Route sxact path="/:category" component={ProductByCategoryCont} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
