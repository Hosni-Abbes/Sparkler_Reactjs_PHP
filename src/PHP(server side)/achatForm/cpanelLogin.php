<?php

  require_once './dbconnect.php';

  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type: application/json");

  $email    = mysqli_real_escape_string($conn, filter_var($_POST['email'], FILTER_SANITIZE_EMAIL));
  $password = mysqli_real_escape_string($conn, filter_var($_POST['password'], FILTER_SANITIZE_STRING));

  //check if fields are not empty
  if(!empty($email) && !empty($password)){
    //check if email is valid
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $sql = mysqli_query($conn, " SELECT * FROM `admin` ");
      if(mysqli_num_rows($sql)>0){  //if it exist admin data
        $row = mysqli_fetch_assoc($sql);
        if($row['admin_email'] === $email && password_verify($password, $row['admin_pass'])){
          echo 'successLogin';

        }else{echo 'Incorrect email or password!';}
      }else{echo 'Incorrect email or password!';}
    }else{echo "Please enter a valid email";}
  }else{echo "Please fill out all fields!";}


?>