<?php

$lang = $_POST['language'];

function japaneseMail(){
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'contact@saro.website';
    $email_subject = "$name sent message to contact center";
    $email_subject2 = "こちらはSARO問い合わせセンターです。${name}様からのメールを承りました。";

    $email_body =
    "名前: $name.\n".
    "メールアドレス: $visitor_email.\n".
    "問い合わせ内容: $message.\n";

    $email_body_primary =
    "Name: $name.\n".
    "E-mail: $visitor_email.\n".
    "Message: $message.\n";

    $to = 'majointa@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body_primary,$headers);

    $to = "$visitor_email";
    $headers = "From: $email_from \r\n";
    $headers .= "${name}様、\nこの度はお問い合わせいただき、ありがとうございます。\n返信は24時間以内に、ご記入いただいたメールアドレス宛にお送り致します。\n尚、本メールは自動送信のため、返信いただいても届きませんのでご注意下さい。 \r\n";
    mail($to,$email_subject2,$email_body,$headers);
}

function englishMail(){
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'contact@saro.website';
    $email_subject = "$name sent message to contact center";
    $email_subject2 = "Hello! Here SARO contact center! $name, we suddenly got your email.";
    $email_body =
    "Name: $name.\n".
    "E-mail: $visitor_email.\n".
    "Message: $message.\n";

    $to = 'majointa@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

    $to = "$visitor_email";
    $headers = "From: $email_from \r\n";
    $headers .= "Hello $name, this email was automatically generated and is just previewing what you sent. Please don't respond to this email. We will contact you within 24 hours. \r\n";
    mail($to,$email_subject2,$email_body,$headers);
}

function chineseMail(){
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'contact@saro.website';
    $email_subject = "(ZH) $name sent message to contact center";
    $email_subject2 = "你好！ 这里是 SARO 联系 中心! $name, 我们  需要 你的 邮箱。";
    $email_body =
    "名字: $name.\n".
    "邮箱: $visitor_email.\n".
    "消息: $message.\n";

    $to = 'majointa@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

    $to = "$visitor_email";
    $headers = "From: $email_from \r\n";
    $headers .= "你好 $name, 这个 邮件 是 自动 生成的 ，我们 已经  看了你 发来 的 邮件。 请 不要 回复 这 个 邮件。 我们 会在 24小时 内 与 你 联系。 \r\n";
    mail($to,$email_subject2,$email_body,$headers);
}
function vietnameseMail(){
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'contact@saro.website';
    $email_subject = "$name gửi tin nhắn cho trung tâm liên lạc";
    $email_subject2 = "Xin chào! Đây là trung tâm liên lạc SARO! $name, chúng tôi đã nhận được mail của bạn";
    $email_body =
    "Tên: $name.\n".
    "E-mail: $visitor_email.\n".
    "Tin nhắn: $message.\n";

    $to = 'majointa@gmail.com';
    $headers = "Từ: $email_from \r\n";
    $headers .= "Trả lời: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

    $to = "$visitor_email";
    $headers = "Từ: $email_from \r\n";
    $headers .= "Xin chào $name, email này là thư tự động để xác nhận chúng tôi đã nhận được thư của bạn. Vui lòng không trả lời email này. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ. \r\n";
    mail($to,$email_subject2,$email_body,$headers);
}


if($lang === 'ja'){
    japaneseMail();
}elseif($lang === 'en'){
    englishMail();
}elseif($lang === 'zh'){
    chineseMail();
}elseif($lang === 'vi'){
    vietnameseMail();
}

?>

<!-- Made by Robert Michalski -->