<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Product.php';
  include_once '../../models/Category.php';
  include_once '../../models/SubCategory.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();


  //Product
  $product = new Product($db);
  $p_result = $product->getProduct();
  $p_num = $p_result->rowCount();

  //Category
  $category = new Category($db);
  $c_result = $category->getCategory();
  $c_num = $c_result->rowCount();

  //Sub Category
  $subCategory = new SubCategory($db);
  $s_result = $subCategory->getSubCategory();
  $s_num = $s_result->rowCount();

  if($p_num > 0){
      $shop_arr = array();

      //product data
      $shop_arr['products'] = array();

      while($row = $p_result->fetch(PDO::FETCH_ASSOC)) {
          extract($row);

          $products_item = array(
              'product_id' => $product_id,
              'product_name' => $product_name,
              'unit_price' => $unit_price,
              'unit_quantity' => $unit_quantity,
              'in_stock' => $in_stock,
              'category' => $category,
              'sub_category' => $sub_category
          );

          array_push($shop_arr['products'], $products_item);
      }

      //category data
      $shop_arr['categories'] = array();

      while($row = $c_result->fetch(PDO::FETCH_ASSOC)){
          extract($row);

          $categories_item = array(
            'category_id' => $category_id,
            'category_name' => $category_name
          );

          array_push($shop_arr['categories'], $categories_item);
      }

      // sub category data
      $shop_arr['sub categories'] = array();

      while($row = $s_result->fetch(PDO::FETCH_ASSOC)){
          extract($row);

          $subCategories_item = array(
            'sub_category_id' => $sub_category_id,
            'category_id' => $category_id,
            'category_name' => $sub_category_name
          );

          array_push($shop_arr['sub categories'], $subCategories_item);
      }


      echo json_encode($shop_arr);
  } else {
      echo json_encode (array('message' => 'No Item found'));
  }