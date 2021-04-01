import React from "react";

const ProductCard = ({
  category,
  in_stock,
  product_id,
  product_name,
  sub_category,
  unit_price,
  unit_quantity,
}) => (
  <div>
    From ProductCard: {product_name}
    <ul>
      <li>Price: ${unit_price}</li>
      <li>Quantity: {unit_quantity}</li>
    </ul>
  </div>
);

export default ProductCard;
