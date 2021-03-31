<?php
    class Category {
        private $conn;
        private $table = 'category';

        public $category_id;
        public $category_name;

        public function __construct($db){
            $this->conn = $db;
        }

        public function getCategory(){
            $query = 'SELECT * from ' . $this->table;

            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
    }