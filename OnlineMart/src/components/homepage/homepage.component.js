import React from "react";
import ProductList from "../ProductList/ProductList.component";
import "./homepage.component.css";

const HomePage = () => (
  <div className="homepage">
    <div className="left">
      <ProductList />
    </div>
    <div className="right">
      <div className="item-view">Item View</div>
      <div className="cart-view">Cart View</div>
    </div>
  </div>
);

export default HomePage;
