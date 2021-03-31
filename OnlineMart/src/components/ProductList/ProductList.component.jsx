import React, { Component } from "react";

// redux
import { connect } from "react-redux";
import { getShop } from "../../redux/actions/shopAction";

class ProductList extends Component {
  componentDidMount() {
    this.props.getShop();
  }

  render() {
    const { shop, loading } = this.props.shop;

    let shopLoaded = !loading ? <div>Loaded</div> : <div>Loading</div>;

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
