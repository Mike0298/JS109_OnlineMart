import React from "react";
import SubCategory from "../SubCategory/SubCategory.component";

const Category = ({ name, category }) => (
  <div>
    From Category: {name}
    {Object.keys(category).map((value, index) => (
      <SubCategory
        key={index}
        name={value}
        subcategory={category[Object.keys(category)[index]]}
      />
    ))}
  </div>
);

export default Category;
