<?php
header('Content-Type: application/json');
// $inputJSON = file_get_contents('php://input');
$inputArray = $_POST;
// print_r($_POST);
if ($inputArray) {
  # code...
  if ($inputArray['response'] && $inputArray['name'] && $inputArray['email'] && $inputArray['message']) {
    verifyHuman($inputArray);
  }else{
    // verifyHuman($_POST['response']);
    // print_r($input);
    echo '{"status":250}';
  }
}else{
  echo '{"status":350}';
}


function verifyHuman($inputArray) {
  $recaptchacurl = curl_init();
  $recaptchaSecret = '6LcTvUUUAAAAAJoIV78vMg5cO6Th7E1ZEZfKjFSo';

  curl_setopt_array($recaptchacurl, array(
    CURLOPT_URL => "https://www.google.com/recaptcha/api/siteverify?secret=".$recaptchaSecret."&response=".$inputArray['response'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "",
    CURLOPT_HTTPHEADER => array(
      "cache-control: no-cache",
      "content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      "postman-token: b8b9417d-db61-3ec9-3cad-6f1631ee76cd"
    )
  ));

  $recaptcharesponse = curl_exec($recaptchacurl);
  $recaptchaerr = curl_error($recaptchacurl);

  curl_close($recaptchacurl);

  if ($recaptchaerr) {
    echo '{"status":300}';
  } else {
    $recaptchaOP = json_decode($recaptcharesponse, true);
    if ($recaptchaOP['success']) {
      pushmessage($inputArray['name'],$inputArray['email'],$inputArray['message'],$inputArray['phone']);
    }else{
      echo '{"status":501}';
    }
  }
}

function pushmessage($name,$email,$message,$phone='000') {
  $curl = curl_init();
  $pushbulletAccessToken = 'o.rstVetu3DZE7HF7zVa05fmjdOlFJJ4jE';
  if ($_POST['type']=='contact') {
    $message = '{"title":"Contact Form (Website) - '.$name.'","body":"Name: '.$name.' \nMessage: '.$message.' \nEmail: '.$email.' \nPhone: '.$phone.'","type":"note"}';
  }elseif ($_POST['type']=='career') {
    $message = '{"title":"Careers Form (Website) - '.$name.'","body":"Name: '.$name.' \nApplying for: '.$message.' \nEmail: '.$email.' \nPhone: '.$phone.'","type":"note"}';
  }
  
  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.pushbullet.com/v2/pushes",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $message,
    CURLOPT_HTTPHEADER => array(
      "access-token: ".$pushbulletAccessToken,
      "cache-control: no-cache",
      "content-type: application/json"
    ),
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);
  curl_close($curl);

  if ($err) {
    echo '{"status":500}';
  } else {
    echo '{"status":200}';
  }
}

?>
