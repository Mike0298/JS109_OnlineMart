import React, { Component } from "react";

import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/actions/cartAction";

import "./CartItem.component.css";

export class CartItem extends Component {
  render() {
    const {
      id,
      name,
      price,
      unit_quantity,
      quantity,
      addItem,
      removeItem,
      clearItemFromCart,
    } = this.props;
    const item = {
      id: id,
      name: name,
      price: price,
      unit_quantity: unit_quantity,
      quantity: quantity,
    };
    return (
      <div className="cart-item">
        <div className="cart-item-name">
          <p>{name}</p>
          <p>{unit_quantity}</p>
        </div>
        <div className="cart-item-quantity">
          <button onClick={() => removeItem(item)} className="cart-item-icon">
            <i class="icon ion-md-arrow-dropleft"></i>
          </button>
          <p className="quantity">{quantity}</p>
          <button onClick={() => addItem(item)} className="cart-item-icon">
            <i class="icon ion-md-arrow-dropright"></i>
          </button>
        </div>
        <div className="cart-item-price">
          <p>${(price * quantity).toFixed(2)}</p>
        </div>
        <div className="cart-item-remove">
          <button
            onClick={() => clearItemFromCart(item)}
            className="cart-item-icon"
          >
            <i class="icon ion-md-close"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  addItem,
  removeItem,
  clearItemFromCart,
};

export default connect(null, mapActionToProps)(CartItem);
