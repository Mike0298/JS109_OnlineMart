import React from "react";
import SubCategory from "../SubCategory/SubCategory.component";
import "./Category.component.css";

const Category = ({ id, name, category }) => (
  <div className="category-item" id={"category" + id}>
    <a href={"#category" + id} className="category-link">
      {name}
      <i className="icon ion-md-add"></i>
      <i className="icon ion-md-remove"></i>
    </a>
    {Object.keys(category).map((value, index) => (
      <SubCategory
        key={index}
        id={index}
        name={value}
        subcategory={category[Object.keys(category)[index]]}
      />
    ))}
  </div>
);

export default Category;
