import React from "react";
import ProductList from "../../components/ProductList/ProductList.component";
import "./home.page.css";

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
