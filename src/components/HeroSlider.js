import React, { Component } from "react";
import slider1 from "../img/slider1.jpg";
import slider2 from "../img/slider2.jpg";
import slider3 from "../img/slider3.jpeg";

export default class HeroSlider extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="heroslider">
        <div className="heroslider__track">
          <img src={slider1} />
          <img src={slider2} />
          <img src={slider3} />
          <img src={slider2} />
        </div>
      </div>
    );
  }
}
