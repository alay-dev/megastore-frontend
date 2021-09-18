import React from "react";
import shipping from "../img/shipping.png";
import quality from "../img/quality.png";
import fresh from "../img/fresh.png";
import support from "../img/support.png";

function Feature() {
  return (
    <div className="feature">
      <div className="feature__sec">
        <div style={{ backgroundColor: "#ffce67" }} className="icon__cont">
          <img src={shipping} />
        </div>
        <p className="lead">Free Shipping</p>
      </div>
      <div className="feature__sec">
        <div style={{ backgroundColor: "#78c2ad" }} className="icon__cont">
          <img src={fresh} />
        </div>
        <p className="lead">Always fresh</p>
      </div>
      <div className="feature__sec">
        <div style={{ backgroundColor: "#6cc3d5" }} className="icon__cont">
          <img src={quality} />
        </div>
        <p className="lead">Best quality</p>
      </div>
      <div className="feature__sec">
        <div style={{ backgroundColor: "#ff7851" }} className="icon__cont">
          <img src={support} />
        </div>
        <p className="lead">24/7 support</p>
      </div>
    </div>
  );
}

export default Feature;
