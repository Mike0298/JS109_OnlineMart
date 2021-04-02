import React, { Component } from "react";

import { connect } from "react-redux";
import { setItem } from "../../redux/actions/itemAction";

import "./ProductCard.component.css";

export class ProductCard extends Component {
  showItem(props) {
    let { setItem, ...item } = props;
    setItem(item);
  }

  render() {
    const {
      category,
      in_stock,
      product_id,
      product_name,
      sub_category,
      unit_price,
      unit_quantity,
    } = this.props;

    return (
      <div className="product-card">
        <div className="desc">
          <div className="name">{product_name}</div>
          <div className="detail">
            <p>${unit_price}</p>
            <p>{unit_quantity}</p>
          </div>
        </div>
        <div className="view">
          <button onClick={() => this.showItem(this.props)}>View</button>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  setItem,
};

export default connect(null, mapActionToProps)(ProductCard);
