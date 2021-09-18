import React, { Component } from "react";
import product2 from "../img/2.jpg";

export default class FruitsAndVegetables extends Component {
  render() {
    return (
      <div className="snack">
        <h5>Snacks & packaged food</h5>

        <div class="form-group searchbar">
          <div style={{ width: "30rem" }} class="input-group mb-4">
            <input
              type="text"
              class="form-control"
              placeholder="Search for products"
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              Search
            </button>
          </div>
        </div>

        <div className="snack__cont">
          <div className="card border-info">
            <div className="card-body">
              <img src={product2} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
              </p>
              <p className="text-info">&#8377; 152.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product2} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
              </p>
              <p className="text-info">&#8377; 152.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product2} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
              </p>
              <p className="text-info">&#8377; 152.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product2} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
              </p>
              <p className="text-info">&#8377; 152.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product2} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
              </p>
              <p className="text-info">&#8377; 152.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product2} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
              </p>
              <p className="text-info">&#8377; 152.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product2} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
              </p>
              <p className="text-info">&#8377; 152.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
