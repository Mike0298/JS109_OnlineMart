import React from "react";

import "./CheckoutPopUp.component.css";

import CustomerForm from "../CustomerForm/CustomerForm.component";
import CustomerCart from "../CustomerCart/CustomerCart.component";

function CheckoutPopUp(props) {
  return props.triggerCheckout ? (
    <div className="popup">
      <div className="checkout-container">
        <div className="customer-info">
          <div className="back-to-shop">
            <button onClick={() => props.setTriggerCheckout(false)}>
              Back to Shop
            </button>
          </div>
          <CustomerForm
            setTriggerCheckout={props.setTriggerCheckout}
            setTriggerComplete={props.setTriggerComplete}
          />
        </div>
        <div className="customer-cart">
          <CustomerCart />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CheckoutPopUp;
