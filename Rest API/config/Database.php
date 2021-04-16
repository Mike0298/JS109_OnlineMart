<?php 
  class Database {
    // DB Params
    private $host = 'aa118ahl4qwnnbs.cxo3mdqsapgz.us-east-1.rds.amazonaws.com';
    private $db_name = 'assignment1';
    private $username = 'uts';
    private $password = 'internet';
    private $conn;

    // DB Connect
    public function connect() {
      $this->conn = null;

      try { 
        $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      } catch(PDOException $e) {
        echo 'Connection Error: ' . $e->getMessage();
      }
      
      return $this->conn;
    }
  }