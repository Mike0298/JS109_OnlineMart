import React, { Component } from "react";

import { connect } from "react-redux";

import CartItems from "../CartItems/CartItems.component";

import "./CustomerCart.component.css";

export class CustomerCart extends Component {
  totalPrice(cartItems) {
    let total = 0;
    for (let x in cartItems) {
      let item = cartItems[x];
      let totalPerItem = item.price * item.quantity;
      total += totalPerItem;
    }
    return total.toFixed(2);
  }

  render() {
    const { cartItems } = this.props.cart;
    return (
      <div className="customer-cart-container">
        <div className="customer-cart-title">Your Cart</div>
        <CartItems />
        <div className="customer-total-price">
          <p>Total:</p>
          <p>${this.totalPrice(cartItems)}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CustomerCart);
