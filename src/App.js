import React, { Component } from "react";
import HeaderCont from "./container/header/headerCont";

import Footer from "./components/Footer";

import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import HomeCont from "./container/home/homeCont";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import Checkout from "./pages/Chckout";
import Wishlist from "./pages/Wishlist";
import SignupCont from "./container/signup/signupCont";
import DashboardCont from "./container/dashboard/dashbardCont";
import FruitsAndVegetables from "./pages/FruitsAndVegetables";
import SeafoodAndMeat from "./pages/SeafoodAndMeat";
import Bakery from "./pages/Bakery";
import Beverage from "./pages/Beverage";
import FoodgrainsAndSpices from "./pages/FoodgrainsAndSpices";
import Snacks from "./pages/Snacks";
import Personalcare from "./pages/Personalcare";
import Household from "./pages/Household";
import firebase from "firebase";
import firebaseConfig from "./config/firebaseConfig";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Router history={history}>
        <HeaderCont />
        <Switch>
          <Route exact path="/" component={HomeCont} />

          <Route exact path="/item" component={Item} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/wishlist" component={Wishlist} />

          <Route exact path="/signup" component={SignupCont} />
          <Route exact path="/dashboard" component={DashboardCont} />
          <Route
            exact
            path="/fruits_and_vegetables"
            component={FruitsAndVegetables}
          />
          <Route exact path="/seafood_and_meat" component={SeafoodAndMeat} />
          <Route exact path="/bakery" component={Bakery} />
          <Route exact path="/beverage" component={Beverage} />
          <Route
            exact
            path="/foodgrains_and_spice"
            component={FoodgrainsAndSpices}
          />
          <Route exact path="/snack" component={Snacks} />
          <Route
            exact
            path="/personalcare_and_cosmetics"
            component={Personalcare}
          />
          <Route exact path="/household" component={Household} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
