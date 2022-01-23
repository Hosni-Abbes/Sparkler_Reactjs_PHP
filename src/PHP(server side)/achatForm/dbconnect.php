<?php
  define('HOST', 'localhost');
  define('USERNAME', 'root');
  define('PASSWORD', '');
  define('DB', 'achatApp');

  $conn = mysqli_connect(HOST, USERNAME, PASSWORD, DB);
  if(!$conn){
    throw new Exception("Failed to connect to database");
    exit();
  }


?>