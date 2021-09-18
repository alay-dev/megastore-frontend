import React, { Component } from "react";
import HeroSlider from "../components/HeroSlider";
import ShopByCategory from "../components/ShopByCategory";
import Feature from "../components/Feature";
import TopSeller from "../components/TopSeller";
import DealOfTheDay from "../components/DealOfTheDay";
import SnackBar from "../components/Snackbar";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <main>
          <HeroSlider />
          <ShopByCategory />
          <Feature />
          <DealOfTheDay />
          <TopSeller />
          <SnackBar {...this.props} />
        </main>
      </div>
    );
  }
}
