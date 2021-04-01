import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import { deselectItem } from "../../redux/actions/itemAction";

export class ItemView extends Component {
  render() {
    const { itemSelected, item } = this.props.item;

    const {
      category,
      in_stock,
      product_id,
      product_name,
      sub_category,
      unit_price,
      unit_quantity,
    } = item;

    let itemSelect = itemSelected ? (
      <div>
        <h1>{product_name}</h1>
        <h3>{category}</h3>
        <h3>{sub_category}</h3>
        <h2>
          ${unit_price} for {unit_quantity}
        </h2>
        {in_stock <= 0 ? <p> Out of stock </p> : <p>In Stock</p>}
        <button disabled={in_stock <= 0 ? true : false}>Add to Cart</button>
      </div>
    ) : (
      <div>No Item selected</div>
    );

    return itemSelect;
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

const mapActionToProps = {
  deselectItem,
};
export default connect(mapStateToProps, mapActionToProps)(ItemView);
