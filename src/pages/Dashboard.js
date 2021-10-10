import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProductSection from "../components/ProductSection";
import ReviewSection from "../components/ReviewSection";
import UserSection from "../components/UserSection";
import AdminSection from "../components/AdminSection";
import OrderSection from "../components/OrderSection";
import SnackBar from "../components/Snackbar";
import { useState } from "react";

function Dashboard(props) {
  const [section, setSection] = useState("product");

  useEffect(() => {
    props.get_all_users(props.login);
    props.get_all_products(props.login);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dashboard">
      <Sidebar
        setSection={(value) => {
          setSection(value);
        }}
        section={section}
      />
      <div className="main">
        {section === "product" ? <ProductSection {...props} /> : ""}
        {section === "review" ? <ReviewSection {...props} /> : ""}
        {section === "user" ? <UserSection {...props} /> : ""}
        {section === "admin" ? <AdminSection {...props} /> : ""}
        {section === "order" ? <OrderSection {...props} /> : ""}
      </div>
      <SnackBar {...props} />
    </div>
  );
}

export default Dashboard;
