import React, { Component } from "react";

import { connect } from "react-redux";
import { clearCart } from "../../redux/actions/cartAction";

import CartItems from "../CartItems/CartItems.component";

import "./CartView.component.css";

export class CartView extends Component {
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
    const { clearCart } = this.props;

    return (
      <div className="cart-container">
        <div className="cart-title">Your Cart</div>
        <CartItems />
        <div className="total-price">
          <p>Total:</p>
          <p>${this.totalPrice(cartItems)}</p>
        </div>
        <button onClick={() => clearCart()}>Clear Cart</button>
        <button>Process To Checkout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapActionToProps = {
  clearCart,
};

export default connect(mapStateToProps, mapActionToProps)(CartView);
