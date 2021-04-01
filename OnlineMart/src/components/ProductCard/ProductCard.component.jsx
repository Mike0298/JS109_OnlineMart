import React, { Component } from "react";

import { connect } from "react-redux";
import { setItem } from "../../redux/actions/itemAction";

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
      <div>
        From ProductCard: {product_name}
        <ul>
          <li>Price: ${unit_price}</li>
          <li>Quantity: {unit_quantity}</li>
        </ul>
        <button onClick={() => this.showItem(this.props)}>
          Show {product_name}
        </button>
      </div>
    );
  }
}

const mapActionToProps = {
  setItem,
};

export default connect(null, mapActionToProps)(ProductCard);
