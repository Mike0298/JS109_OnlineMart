import React, { Component } from "react";

import { connect } from "react-redux";
import { clearCart } from "../../redux/actions/cartAction";

import CartItems from "../CartItems/CartItems.component";
import CheckoutPopUp from "../CheckoutPopUp/CheckoutPopUp.component";
import CompletePopUp from "../CompletePopUp/CompletePopUp.component";

import "./CartView.component.css";

export class CartView extends Component {
  constructor() {
    super();
    this.setButtonPopUpCheckout = this.setButtonPopUpCheckout.bind(this);
    this.setButtonPopUpComplete = this.setButtonPopUpComplete.bind(this);
    this.state = {
      buttonPopUpCheckout: false,
      buttonPopUpComplete: false,
    };
  }

  totalPrice(cartItems) {
    let total = 0;
    for (let x in cartItems) {
      let item = cartItems[x];
      let totalPerItem = item.price * item.quantity;
      total += totalPerItem;
    }
    return total.toFixed(2);
  }

  setButtonPopUpCheckout(boolean) {
    this.setState({
      buttonPopUpCheckout: boolean,
    });
  }

  setButtonPopUpComplete(boolean) {
    this.setState({
      buttonPopUpComplete: boolean,
    });
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
        <div className="cart-button">
          <button className="cart-button-clear" onClick={() => clearCart()}>
            Clear Cart
          </button>
          <button
            disabled={cartItems.length === 0}
            className="cart-button-checkout"
            onClick={() => this.setButtonPopUpCheckout(true)}
          >
            Process To Checkout
          </button>
        </div>
        <CheckoutPopUp
          triggerCheckout={this.state.buttonPopUpCheckout}
          setTriggerCheckout={this.setButtonPopUpCheckout}
          setTriggerComplete={this.setButtonPopUpComplete}
        />
        <CompletePopUp
          triggerComplete={this.state.buttonPopUpComplete}
          setTriggerComplete={this.setButtonPopUpComplete}
        />
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
