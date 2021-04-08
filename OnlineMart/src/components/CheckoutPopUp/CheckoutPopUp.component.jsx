import React from "react";

import "./CheckoutPopUp.component.css";

import CustomerForm from "../CustomerForm/CustomerForm.component";
import CustomerCart from "../CustomerCart/CustomerCart.component";

function CheckoutPopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="checkout-container">
        <div className="customer-info">
          <div className="back-to-shop">
            <button onClick={() => props.setTrigger(false)}>
              Back to Shop
            </button>
          </div>
          <CustomerForm setTrigger={props.setTrigger} />
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
