import React from "react";

import "./checkout.page.css";

import CustomerForm from "../../components/CustomerForm/CustomerForm.compoenent";
import CustomerCart from "../../components/CustomerCart/CustomerCart.component";

const Checkout = () => (
  <div className="checkout">
    <div className="checkout-container">
      <div className="customer-info">
        <CustomerForm />
      </div>
      <div className="customer-cart">
        <CustomerCart />
      </div>
    </div>
  </div>
);

export default Checkout;
