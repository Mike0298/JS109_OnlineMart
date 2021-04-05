import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./CustomerForm.component.css";

export class CustomerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      address: "",
      postcode: "",
      city: "",
      state: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="customer-form">
        <Link className="back-to-shop" to="/">
          <button>Back to Shop</button>
        </Link>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}></form>
        </div>

        <div>Purchase</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CustomerForm);
