import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import ProductSection from "../components/ProductSection";
import ReviewSection from "../components/ReviewSection";
import UserSection from "../components/UserSection";
import AdminSection from "../components/AdminSection";
import OrderSection from "../components/OrderSection";
import SnackBar from "../components/Snackbar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { section: "product" };
  }
  componentDidMount() {
    console.log(this.props);
    this.props.get_all_users(this.props.login);
    this.props.get_all_products(this.props.login);
  }

  render() {
    return (
      <div className="dashboard">
        <Sidebar
          setSection={(value) => {
            this.setState({ section: value });
          }}
          section={this.state.section}
        />
        <div className="main">
          {this.state.section === "product" ? (
            <ProductSection {...this.props} />
          ) : (
            ""
          )}
          {this.state.section === "review" ? (
            <ReviewSection {...this.props} />
          ) : (
            ""
          )}
          {this.state.section === "user" ? <UserSection {...this.props} /> : ""}
          {this.state.section === "admin" ? (
            <AdminSection {...this.props} />
          ) : (
            ""
          )}
          {this.state.section === "order" ? (
            <OrderSection {...this.props} />
          ) : (
            ""
          )}
        </div>
        <SnackBar {...this.props} />
      </div>
    );
  }
}
