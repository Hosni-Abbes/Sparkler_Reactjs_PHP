<?php

  require_once './dbconnect.php';

  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type: application/json");

  $data = [] ;
  $sql = mysqli_query($conn, "SELECT * FROM clients ORDER BY isFinished;");
      if(mysqli_num_rows($sql) > 0) {
        while($row = mysqli_fetch_assoc($sql)){
          array_push($data, $row);
        }
      }
      $dataEncoded = json_encode($data);
      print_r($dataEncoded);
?>