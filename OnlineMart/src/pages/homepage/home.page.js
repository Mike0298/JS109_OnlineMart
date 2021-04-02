import React from "react";
import ProductList from "../../components/ProductList/ProductList.component";
import ItemView from "../../components/ItemVIew/ItemView.component";
import "./home.page.css";

const HomePage = () => (
  <div className="homepage">
    <div className="left container">
      <ProductList />
    </div>
    <div className="right">
      <div className="item-view">
        <ItemView />
      </div>
      <div className="cart-view">Cart View</div>
    </div>
  </div>
);

export default HomePage;
