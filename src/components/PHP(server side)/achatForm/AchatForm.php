<?php

  require_once './dbconnect.php';

  //use header to prevent CORS errors (to make cross-domain requests possible)
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Headers: Content-Type: multipart/form-data");


  $id            = mysqli_real_escape_string($conn, filter_var($_POST['id'], FILTER_SANITIZE_STRING));
  $confirmId     = mysqli_real_escape_string($conn, filter_var($_POST['confirmId'], FILTER_SANITIZE_STRING));
  $numbrDiamonds = mysqli_real_escape_string($conn, filter_var($_POST['numbrDiamonds'], FILTER_SANITIZE_NUMBER_INT));
  $game          = mysqli_real_escape_string($conn, filter_var($_POST['game'], FILTER_SANITIZE_STRING));
  $status        = 'En_attente';
  $isFinished    = 'Click toFinish';

  $file          = $_FILES['file'];

  $file_name     = $file['name'];
  $file_type     = $file['type'];
  $file_tmp_name = $file['tmp_name'];
  $file_error    = $file['error'];

  $allowed_extn = ['jpg','jpeg','png']; //array of allowed extensions
  
  //check if all fields not empty
  if(!empty($id) && !empty($confirmId) && !empty($numbrDiamonds) && !empty($game) && !empty($file)){
    //check if id and confirmId are simillar
    if($id === $confirmId){
      //check if image is allowed and field not empty
      $file_explod = (explode('.', $file_name)); //explode file with .
      $file_extn = strtolower(end($file_explod)); // get the end part of file name (contains the extension)
      $random_file_name =  time() . rand(1, 1000000000) . $file_name;
      if($file_error !== 4){  //if file field is not empty
        if(in_array($file_extn, $allowed_extn) === true){ //check the file uploaded extension is allowed or no
          //upload file to folder uploaded
          if(move_uploaded_file($file_tmp_name, './uploaded/'.$random_file_name)){
            $sql = mysqli_query($conn, "INSERT INTO clients(his_game_id, his_confirmed_id, proof_img, num_diamonds, game, status, isFinished)
                      VALUES('{$id}', '{$confirmId}', '{$random_file_name}', '{$numbrDiamonds}', '{$game}', '{$status}', '{$isFinished}') ");
            echo 'success';
          
          }
        }else{echo "Merci d'utiliser une image avec extension 'jpg, jpeg, png'";}
      }else{echo "Merci de vérifier votre image";}
    }else{echo "s.v.p Vérifier votre ID";}
  }else{ echo "Tous les champs sont requis";}

?>