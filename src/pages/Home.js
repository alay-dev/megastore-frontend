import React from "react";
import HeroSlider from "../components/HeroSlider";
import ShopByCategory from "../components/ShopByCategory";
import Feature from "../components/Feature";
import TopSeller from "../components/TopSeller";
import DealOfTheDay from "../components/DealOfTheDay";
import SnackBar from "../components/Snackbar";

function Home(props) {
  return (
    <div>
      <main>
        <HeroSlider />
        <ShopByCategory />
        <Feature />
        <DealOfTheDay {...props} />
        <TopSeller {...props} />
        <SnackBar {...props} />
      </main>
    </div>
  );
}

export default Home;
