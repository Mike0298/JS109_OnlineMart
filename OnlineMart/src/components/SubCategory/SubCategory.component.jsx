import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";

const SubCategory = ({ name, subcategory }) => (
  <div>
    From SubCategory: {name}
    {subcategory.map(({ product_id, ...otherProperties }) => (
      <ProductCard
        key={product_id}
        product_id={product_id}
        {...otherProperties}
      />
    ))}
  </div>
);

export default SubCategory;
