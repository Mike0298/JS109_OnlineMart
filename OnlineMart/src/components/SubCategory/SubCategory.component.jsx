import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";

const SubCategory = ({ id, name, subcategory }) => (
  <div className="sub-category" id={"sub-category" + id}>
    <p>{name}</p>
    {/* {subcategory.map(({ product_id, ...otherProperties }) => (
      <ProductCard
        key={product_id}
        product_id={product_id}
        {...otherProperties}
      />
    ))} */}
  </div>
);

export default SubCategory;
