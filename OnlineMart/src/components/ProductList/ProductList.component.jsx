import React, { Component } from "react";

import CategoryList from "../Category/Category.component";

// redux
import { connect } from "react-redux";
import { getShop } from "../../redux/actions/shopAction";

class ProductList extends Component {
  componentDidMount() {
    this.props.getShop();
  }

  render() {
    const { shop, loading } = this.props.shop;

    let shopLoaded = !loading ? (
      <div>
        {Object.keys(shop).map((value, index) => (
          <CategoryList
            key={index}
            name={value}
            category={shop[Object.keys(shop)[index]]}
          />
        ))}
      </div>
    ) : (
      <div>Loading</div>
    );

    return shopLoaded;
  }
}

const mapStateToProps = (state) => ({
  shop: state.shop,
});

const mapActionToProps = {
  getShop,
};

export default connect(mapStateToProps, mapActionToProps)(ProductList);
