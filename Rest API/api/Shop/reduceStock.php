<?php 
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Product.php';

  $database = new Database();
  $db = $database->connect();

  $data = json_decode(file_get_contents("php://input"));

  $change_success = array();

  $cart = $data->cart;

  foreach($cart as $cartItem) {
    $product = new Product($db);
    $product->product_id = $cartItem->product_id;
    if($product->reduceStock($cartItem->quantity)){
        array_push($change_success, $cartItem);
    };
  };

  if (sizeof($cart)==sizeof($change_success)){
      echo json_encode(
        array('message' => 'Stock Updated')
      );
  } else {
    echo json_encode(
      array('message' => 'An error has occured')
    );
  }


