import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";

import "./SubCategory.component.css";

const SubCategory = ({ id, name, subcategory }) => (
  <div className="sub-category" id={"sub-category" + id}>
    <div className="sub-category-name">{name}</div>
    <div className="sub-category-items">
      <div className="card-list">
        {subcategory.map(({ product_id, ...otherProperties }) => (
          <ProductCard
            key={product_id}
            product_id={product_id}
            {...otherProperties}
          />
        ))}
      </div>
    </div>
  </div>
);

export default SubCategory;
