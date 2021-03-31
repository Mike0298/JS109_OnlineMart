<?php
    class SubCategory {
        private $conn;
        private $table = 'sub_category';

        public $sub_category_id;
        public $category_id;
        public $sub_category_name;

        public function __construct($db){
            $this->conn = $db;
        }

        public function getSubCategory(){
            $query = 'SELECT * from ' . $this->table;

            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
    }