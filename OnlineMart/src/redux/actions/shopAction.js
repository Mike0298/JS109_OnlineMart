import { SET_SHOP, LOADING_SHOP } from "../types";
import axios from "axios";

export const getShop = () => (dispatch) => {
  dispatch({ type: LOADING_SHOP });
  axios
    .get(
      "http://onlinemart-api-12441376.us-east-1.elasticbeanstalk.com/api/shop/getShop.php"
    )
    .then((res) => {
      let shop = mergeShop(res.data);
      let data = {};
      data.shop = shop;
      dispatch({
        type: SET_SHOP,
        payload: data,
      });
    })
    .catch((e) => console.log(e));
};

const mergeShop = (data) => {
  let shop = {};
  let categories = data.categories;
  for (let i of categories) {
    shop[i.category_name] = {};
  }
  let sub_categories = data["sub categories"];
  for (let x in sub_categories) {
    for (let y in categories) {
      if (sub_categories[x].category_id === categories[y].category_id) {
        shop[categories[y].category_name][sub_categories[x].category_name] = [];
      }
    }
  }
  let products = data.products;
  for (let x in products) {
    shop[products[x].category][products[x].sub_category].push(products[x]);
  }
  return shop;
};
