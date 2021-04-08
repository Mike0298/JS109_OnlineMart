import React, { Component } from "react";

import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem.component";

import "./CartItems.component.css";

export class CartItems extends Component {
  render() {
    const { cartItems } = this.props.cart;

    return (
      <div className="cart-items">
        <div className="cart-items-header">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        {cartItems.map(({ product_id, ...otherProperties }) => (
          <CartItem
            key={product_id}
            product_id={product_id}
            {...otherProperties}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartItems);
