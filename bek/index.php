
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, origin");
header('Content-Type: application/json, charset=UTF-8');



// подключаем функции
require 'functions.php';
//получаем строку
$input = json_decode(file_get_contents('php://input'),true);
$text=strip_data($input['text']);


$text=palindrom($text);
    if($text){
        $e=0;
        foreach ($text as &$value)
        {
            $response[$e]['palindrom'] = $text[$e];
            $e++ ;
        }
        
        echo json_encode(['data'=>$response]);
    }
    



?>


