import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="up__arrow">
          <i class="fas fa-chevron-up" />
        </p>
        <div className="footer__sec">
          <h6>Quick Link</h6>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Cart</p>
            </li>
            <li>
              <p>Contact us</p>
            </li>
          </ul>
        </div>
        <div className="footer__sec">
          <h6>Reach us</h6>
          <ul>
            <li>
              <i class="fas fa-map-marker-alt" />{" "}
              <p>lorem ipsum lorem ipsum ss</p>
            </li>

            <li>
              <i class="fas fa-phone-alt" /> <p>+91 123456789</p>
            </li>
            <li>
              <i class="fas fa-envelope" />
              <p>info@megastore.com</p>
            </li>
          </ul>
        </div>
        <div className="footer__sec joinus">
          <h6>Join us on</h6>
          <ul>
            <li>
              <i class="fab fa-facebook" />{" "}
            </li>

            <li>
              <i class="fab fa-twitter" />
            </li>
            <li>
              <i class="fab fa-instagram" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
