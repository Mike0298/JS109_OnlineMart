import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { clearCart } from "../../redux/actions/cartAction";

import "./CustomerForm.component.css";

export class CustomerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
      suburb: "",
      state: "",
      country: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      clearCart,
      setTriggerCheckout,
      setTriggerComplete,
      cart,
    } = this.props;
    let data = {
      cart: [...cart.cartItems],
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        "http://uts-12441376-ipa1.us-east-1.elasticbeanstalk.com/api/shop/reduceStock.php",
        data,
        config
      )
      .then((res) => {
        console.log(res.data.message);
        clearCart();
        setTriggerComplete(true);
        setTriggerCheckout(false);
      })
      .catch((err) => {
        console.log(err.res.data);
        alert("Something Went Wrong");
      });
  };

  render() {
    return (
      <div className="customer-form">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-detail">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <label>Name</label>
            </div>
            <div className="form-detail">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                required
              />
              <label>Address</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="suburb"
                value={this.state.suburb}
                onChange={this.handleChange}
                required
              />
              <label>Suburb</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleChange}
                required
              />
              <label>State</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                required
              />
              <label>Country</label>
            </div>
            <div className="submit-btn">
              <button
                disabled={this.props.cart.cartItems.length === 0}
                type="submit"
              >
                Complete Order
              </button>
            </div>
          </form>
        </div>
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

export default connect(mapStateToProps, mapActionToProps)(CustomerForm);
