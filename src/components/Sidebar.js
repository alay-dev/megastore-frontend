import React, { Component } from "react";
import { Avatar, Divider } from "@material-ui/core";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.section);
  }
  render() {
    return (
      <div className="sidebar">
        <div className="top__cont">
          <Avatar style={{ width: "4rem", height: "4rem" }} />
          <h5 className="mt-2">Admin</h5>
        </div>
        <ul>
          <li
            className={this.props.section === "product" ? "active" : ""}
            onClick={() => this.props.setSection("product")}
          >
            Product
          </li>
          <li
            className={this.props.section === "review" ? "active" : ""}
            onClick={() => this.props.setSection("review")}
          >
            Review
          </li>
          <li
            className={this.props.section === "user" ? "active" : ""}
            onClick={() => this.props.setSection("user")}
          >
            User
          </li>
          <li
            className={this.props.section === "admin" ? "active" : ""}
            onClick={() => this.props.setSection("admin")}
          >
            Admin
          </li>
          <li
            className={this.props.section === "order" ? "active" : ""}
            onClick={() => this.props.setSection("order")}
          >
            Order
          </li>
        </ul>
      </div>
    );
  }
}
