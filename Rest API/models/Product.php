<?php
    class Product {
        private $conn;
        private $table = 'products';

        public $product_id;
        public $product_name;
        public $unit_price;
        public $unit_quantity;
        public $in_stock;
        public $category;
        public $sub_category;

        public function __construct($db){
            $this->conn = $db;
        }

        public function getProduct() {
            $query = 'SELECT p.product_id, p.product_name, p.unit_quantity, p.unit_price, 
                             p.in_stock, c.category_name as category, s.sub_category_name as sub_category 
                        from ' . $this->table . ' p
                        LEFT JOIN
                            category c on c.category_id = p.category_id
                        LEFT JOIN
                            sub_category s on s.sub_category_id = p.sub_category_id
                        ORDER BY p.product_id';

            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
    }