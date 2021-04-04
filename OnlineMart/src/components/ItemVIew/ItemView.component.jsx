import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import { deselectItem } from "../../redux/actions/itemAction";
import { addItem } from "../../redux/actions/cartAction";

import "./ItemView.component.css";

export class ItemView extends Component {
  addItemToCart(itemToAdd, props) {
    let { addItem } = props;
    addItem(itemToAdd);
  }

  render() {
    const { itemSelected, item } = this.props.item;

    const {
      in_stock,
      product_id,
      product_name,
      unit_price,
      unit_quantity,
    } = item;

    const itemToAdd = {
      id: product_id,
      name: product_name,
      price: unit_price,
      unit_quantity: unit_quantity,
    };

    let itemSelect = itemSelected ? (
      <div className="view-container">
        <div className="view-header">{product_name}</div>
        <div className="view-content">
          <div className="product-image">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fstyles%2Fstory_large%2Fpublic%2Fthumbnails%2Fimage%2F2015%2F09%2F12%2F21%2F29-fish-fingers-rex.jpg&f=1&nofb=1"
              alt={product_name}
            />
          </div>
          <div className="product-desc">
            <div className="product-id desc-layout">
              <p>Product ID</p>
              <p>#{product_id}</p>
            </div>
            <div className="price desc-layout">
              <p>Price</p>
              <p>${unit_price}</p>
            </div>
            <div className="quantity desc-layout">
              <p>Quantity</p>
              <p>{unit_quantity}</p>
            </div>
          </div>
        </div>
        <div className="view-stock">
          {in_stock <= 0 ? <p> Out of stock </p> : <p>In Stock</p>}
        </div>
        <button
          onClick={() => this.addItemToCart(itemToAdd, this.props)}
          disabled={in_stock <= 0 ? true : false}
        >
          Add to Cart
        </button>
      </div>
    ) : (
      <div className="view-empty">
        <div className="empty-content">
          <p>No Product Selected</p>
          <p className="empty-subtitle">
            Please Select A Product From The Category To View
          </p>
        </div>
      </div>
    );

    return itemSelect;
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

const mapActionToProps = {
  deselectItem,
  addItem,
};
export default connect(mapStateToProps, mapActionToProps)(ItemView);
