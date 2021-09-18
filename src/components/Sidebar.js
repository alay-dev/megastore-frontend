import React from "react";
import { Avatar } from "@material-ui/core";

function Sidebar({ setSection, section }) {
  return (
    <div className="sidebar">
      <div className="top__cont">
        <Avatar style={{ width: "4rem", height: "4rem" }} />
        <h5 className="mt-2">Admin</h5>
      </div>
      <ul>
        <li
          className={this.props.section === "product" ? "active" : ""}
          onClick={() => setSection("product")}
        >
          Product
        </li>
        <li
          className={section === "review" ? "active" : ""}
          onClick={() => setSection("review")}
        >
          Review
        </li>
        <li
          className={section === "user" ? "active" : ""}
          onClick={() => setSection("user")}
        >
          User
        </li>
        <li
          className={section === "admin" ? "active" : ""}
          onClick={() => setSection("admin")}
        >
          Admin
        </li>
        <li
          className={section === "order" ? "active" : ""}
          onClick={() => setSection("order")}
        >
          Order
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
