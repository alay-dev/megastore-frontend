import React from "react";

import product2 from "../img/2.jpg";
import product3 from "../img/3.png";
import product4 from "../img/4.png";

function DealOfTheDay() {
  return (
    <div className="dealoftheday">
      <div className="dealoftheday__heading">
        <h4 className="text-secondary">DEAL OF THE DAY</h4>
      </div>
      <div className="dealoftheday__cont">
        <div className="card border-info">
          <div className="card-body">
            <img src={product2} alt="Deal of the day" />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
            </p>
            <p className="text-info">&#8377; 152.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
        <div className="card border-info">
          <div className="card-body">
            <img src={product3} alt="Deal of the day" />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Maaza Mango Juice 1.2 lt Bottle</small>
            </p>
            <p className="text-info">&#8377; 52.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
        <div className="card border-info">
          <div className="card-body">
            <img src={product4} alt="Deal of the day" />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Thums Up 750 ml Bottle</small>
            </p>
            <p className="text-info">&#8377; 36.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealOfTheDay;
