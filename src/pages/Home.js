import React, { useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import ShopByCategory from "../components/ShopByCategory";
import Feature from "../components/Feature";
import TopSeller from "../components/TopSeller";
import DealOfTheDay from "../components/DealOfTheDay";
import SnackBar from "../components/Snackbar";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
