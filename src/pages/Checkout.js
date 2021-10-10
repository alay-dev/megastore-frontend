import React, { Component } from "react";

export default class Chckout extends Component {
  render() {
    return (
      <div className="checkout">
        <h4>Billing details</h4>
        <div className="cont__">
          <div className="checkout__left card border-info">
            <div className="card-body">
              <p style={{ textAlign: "end" }}>
                <i className="fas fa-pen" />
              </p>
              <h6 className="text-dark lead">Alay Naru</h6>
              <p className="address">
                which roasted parts of sentences fly into your mouth. text
                should nd return to its own, safe country. But nothing the copy
                said could convince her and so
              </p>
              <div className="contact_cont">
                <p className="text-primary">
                  <em>+91 123456789</em>
                </p>
                <p>&bull;</p>
                <p className="text-primary">
                  <em>narualay030@gmail.com</em>
                </p>
              </div>
            </div>
          </div>
          <div className="checkout__right card border-info">
            <div className="card-body">
              <h5 className="text-dark">Cart total</h5>
              <div className="row__">
                <p>Subtotal</p>
                <p>&#8377; 52.00</p>
              </div>
              <div className="row__">
                <p>Delivery</p>
                <p>&#8377; 5.00</p>
              </div>
              <div className="row__">
                <p>Discount</p>
                <p>&#8377; 10.00</p>
              </div>
              <div className="row__ final">
                <p>Total</p>
                <p>&#8377; 52.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="payment">
          <h4>Payment method</h4>

          <fieldset class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="option1"
                />
                Direct Bank transfer
              </label>
            </div>

            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios2"
                  value="option2"
                />
                Paypal
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios3"
                  value="option3"
                />
                Cash on delivery
              </label>
            </div>
          </fieldset>

          {/* <fieldset style={{ marginTop: "1.5rem " }} class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked=""
              />
              <label class="form-check-label" for="flexCheckChecked">
                I have read and accept the terms and conditions
              </label>
            </div>
          </fieldset> */}
          <button className="btn btn-dark">PLACE ORDER</button>
        </div>
      </div>
    );
  }
}
