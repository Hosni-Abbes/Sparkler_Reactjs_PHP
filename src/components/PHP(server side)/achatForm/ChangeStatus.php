<?php

  require_once './dbconnect.php';

  //use header to prevent CORS errors (to make cross-domain requests possible)
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type: multipart/form-data");

  $user_id    = mysqli_real_escape_string($conn, filter_var($_POST['user_id'], FILTER_SANITIZE_STRING));
  $status     = mysqli_real_escape_string($conn, filter_var($_POST['status'], FILTER_SANITIZE_STRING));
  $isFinished = mysqli_real_escape_string($conn, filter_var($_POST['isFinished'], FILTER_SANITIZE_STRING));

  if(isset($user_id)){
    $sql = mysqli_query($conn, "UPDATE clients SET 
                                              status = '{$status}',
                                              isFinished = '{$isFinished}'
                                              WHERE user_id = '{$user_id}'");

  }

?>