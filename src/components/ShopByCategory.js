import React from "react";
import { Link } from "react-router-dom";
import category1 from "../img/category1.png";
import category2 from "../img/category2.png";
import category3 from "../img/category3.png";
import category4 from "../img/category4.png";
import category5 from "../img/category5.png";
import category6 from "../img/category6.png";
import category7 from "../img/category7.png";
import category8 from "../img/category8.png";

function ShopByCategory() {
  return (
    <div className="shopbycategory">
      <h5>SHOP BY CATEROGY</h5>
      <div className="shopbycategory__cont">
        <Link to="/fruits_and_vegetables">
          <div className="card ">
            <img src={category1} />
          </div>
        </Link>
        <Link to="/seafood_and_meat">
          <div className="card ">
            <img src={category2} />
          </div>
        </Link>
        <Link to="/beverage">
          <div className="card ">
            <img src={category3} />
          </div>
        </Link>
        <Link to="/bakery">
          <div className="card ">
            <img src={category4} />
          </div>
        </Link>
        <Link to="/foodgrains_and_spice">
          <div className="card ">
            <img src={category5} />
          </div>
        </Link>
        <Link to="/snack">
          <div className="card ">
            <img src={category6} />
          </div>
        </Link>
        <Link to="/personalcare_and_cosmetics">
          <div className="card ">
            <img src={category7} />
          </div>
        </Link>
        <Link to="/household">
          <div className="card ">
            <img src={category8} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShopByCategory;
