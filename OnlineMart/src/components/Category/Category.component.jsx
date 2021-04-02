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
    <div className="sub-category">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
        voluptatem?
      </p>
    </div>

    {/* {Object.keys(category).map((value, index) => (
      <SubCategory
        key={index}
        name={value}
        subcategory={category[Object.keys(category)[index]]}
      />
    ))} */}
  </div>
);

export default Category;
