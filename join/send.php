<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$gender = $_POST['gender'];
$language = $_POST['anotherLanguage'];
$option = $_POST['nativeLanguage'];
$option2 = $_POST['offerLanguage'];
$accepted = $_POST['accepted'];
$phone = $_POST['phone'];
$age = $_POST['age'];


$email_from = 'contact@saro.website';
$email_subject = "$name $age $gender recrutiment";
$email_subject2 = "Hello $name, we suddenly got your applying.";
$email_body = 
"Name: $name.\n".
"Surname: $surname.\n".
"E-mail: $visitor_email.\n".
"Phone number: $phone.\n".
"Gender: $gender.\n".
"Age: $age.\n".
"Introducing: $message.\n".
"Native Language: $option.\n".
"Offered Language: $option2.\n".
"Other languages: $language.\n".
"Terms of the contract: $accepted.\n";

$to = "contact@saro.website";
$headers = "From: $email_from \r\n";
$headers .= "Reply To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);

$to = "$visitor_email";
$headers = "From: $email_from \r\n";
$headers .= "Hello $name, this email was automatically generated and is just previewing what you sent. Please don't respond to this email. We will contact you within 24 hours. \r\n";
mail($to,$email_subject2,$email_body,$headers);
?>