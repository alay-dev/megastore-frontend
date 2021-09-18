import React from "react";
import product1 from "../img/1.jpg";
import product2 from "../img/2.jpg";
import product3 from "../img/3.png";
import product4 from "../img/4.png";
import product5 from "../img/5.jpg";

function TopSeller() {
  return (
    <div className="topseller">
      <h5>STORE TOP SELLER </h5>
      <div className="topseller__cont">
        <div className="card border-info">
          <div className="card-body">
            <img src={product1} />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
            </p>
            <p className="text-info">&#8377; 152.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
        <div className="card border-info">
          <div className="card-body">
            <img src={product2} />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Vim DIshwash Bar 80 Gm</small>
            </p>
            <p className="text-info">&#8377; 5.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
        <div className="card border-info">
          <div className="card-body">
            <img src={product3} />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Maaza Mango Juice 1.2 lt Bottle</small>
            </p>
            <p className="text-info">&#8377; 52.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
        <div className="card border-info">
          <div className="card-body">
            <img src={product4} />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Thums Up 750 ml Bottle</small>
            </p>
            <p className="text-info">&#8377; 36.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
        <div className="card border-info">
          <div className="card-body">
            <img src={product5} />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Maggi 2 minute Noodle</small>
            </p>
            <p className="text-info">&#8377; 12.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
        <div className="card border-info">
          <div className="card-body">
            <img src={product3} />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Maaza Mango Juice 1.2 lt Bottle</small>
            </p>
            <p className="text-info">&#8377; 52.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
        <div className="card border-info">
          <div className="card-body">
            <img src={product5} />
            <p className="card-text" style={{ borderBottom: "1px solid #eee" }}>
              <small>Maggi 2 minute Noodle</small>
            </p>
            <p className="text-info">&#8377; 12.00 </p>
            <button className="btn-success btn mt-2">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSeller;
