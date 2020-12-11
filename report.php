<?php

function englishReport(){

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$category = $_POST['category'];
$other = $_POST ['other'];
$describe = $_POST['describe'];
$page = $_POST['page'];
$lang = $_POST['lang'];

if($visitor_email === ""){
  $visitor_email = "Anonymous";
}

$ID = rand(); "\n.";

$email_from = 'admin@saro.website';
$email_subject = "Report from $name ID: #repSaro-080-$ID";
$email_subjectVisitor = "$name Hello! Here SARO! We suddenly got your report.";

$email_body =
"Name: $name.\n".
"Category: $category.\n".
"Other: $other.\n".
"Describe: $describe.\n".
"E-mail: $visitor_email.\n".
"Language: $lang.\n".
"Page: $page.\n".
"ID of the report: #repSaro-080-$ID";

$to = "majointa@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);

$to = "$visitor_email";
$headers = "From: $email_from \r\n";
$headers .= "Hello $name!\nthank you for helping us to improve our website!\nThat issue will be fixed as soon as possible!\nThis email was automatically generated and is just previewing what you sent.\nPlease don't respond to this email. \r\n";
if (mail($to,$email_subjectVisitor,$email_body,$headers)){
  echo '<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo"  <meta http-equiv=\"refresh\" content=\"5;url=".$_SERVER['HTTP_REFERER']."\"/>";
 echo' <title>Sending report</title>
      <link rel="stylesheet" href="./assets/style/css/report.css">
        <link
      href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900|Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet">
  </head>
  <body>
  <section>
  <h1 class="header-brand">SARO</h1>
  <p id="state">Sending report...</p>
  <div class="container">
      <div class="yellow"></div>
      <div class="red"></div>
      <div class="blue"></div>
      <div class="violet"></div>
  </div>
  </div>
  </section>
        <script>
      window.setTimeout(state, 2500);
       function state() {
           var stateSent = document.getElementById("state");
           stateSent.innerHTML = `Your report has been sent. <br>
           Thank you to help us to imporve our website <br>
           You will back to previous page within few seconds`;
          }
</script>
  </body>
  </html>';
}
}

function japaneseReport(){
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$category = $_POST['category'];
$other = $_POST ['other'];
$describe = $_POST['describe'];
$page = $_POST['page'];
$lang = $_POST['lang'];

if($visitor_email === ""){
  $visitor_email = "Anonymous";
}

$ID = rand(); "\n.";

$email_from = 'admin@saro.website';
$email_subject = "Report from $name ID: #repSaro-080-$ID";
$email_subjectVisitor = "${name}様、こちらはSAROです。レポートを承りました。";


$email_body =
"Name: $name.\n".
"Category: $category.\n".
"Other: $other.\n".
"Describe: $describe.\n".
"E-mail: $visitor_email.\n".
"Language: $lang.\n".
"Page: $page.\n".
"ID of the report: #repSaro-080-$ID";

$email_bodyPrimary =
"名前: $name.\n".
"カテゴリー: $category.\n".
"その他: $other.\n".
"内容: $describe.\n".
"メールアドレス: $visitor_email.\n".
"言語: $lang.\n".
"ページ: $page.\n".
"レポートID: #repSaro-080-$ID";

$to = "majointa@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);

$to = "$visitor_email";
$headers = "From: $email_from \r\n";
$headers .= "${name}様、\nSAROをご覧いただき、誠にありがとうございます。\nまた、当サイトに不備等がありましたこと、お詫び申し上げます。\nお客様より承った内容をもとに、より良いサイトを作成できるよう努めてまいります。\n※ 本メールは自動送信です。返信いただいても届きませんので、ご了承下さい。 \r\n";
if (mail($to,$email_subjectVisitor,$email_bodyPrimary,$headers)){
echo'<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">';
  echo"  <meta http-equiv=\"refresh\" content=\"5;url=".$_SERVER['HTTP_REFERER']."\"/>";
   echo' <title>Sending report</title>
   <link
   href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900|Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i"
   rel="stylesheet">
<link rel="stylesheet" href="./assets/style/css/report.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
   rel="stylesheet">
</head>

<body>
<section>
   <h1 class="header-brand">SARO</h1>
   <p id="state">レポートを送信しています。</p>
   <div class="container">
       <div class="yellow"></div>
       <div class="red"></div>
       <div class="blue"></div>
       <div class="violet"></div>
   </div>
   </div>
   <script>
       window.setTimeout(state, 2500);
       function state() {
           var stateSent = document.getElementById("state");
           stateSent.innerHTML =
               `レポートが送信されました。<br>
   ご協力いただき、ありがとうございます。<br>
   数秒後にサイトに戻ります。`;
       }
   </script>
</section>
</body>
</html>';
}
}

function chineseReport(){

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $category = $_POST['category'];
  $other = $_POST ['other'];
  $describe = $_POST['describe'];
  $page = $_POST['page'];
  $lang = $_POST['lang'];

  if($visitor_email === ""){
    $visitor_email = "Anonymous";
  }

  $ID = rand(); "\n.";

  $email_from = 'admin@saro.website';
  $email_subject = "Report from $name ID: #repSaro-080-$ID";
  $email_subjectVisitor = "$name 你好，我们是SARO!我们刚收到你的邮件。";

  $email_body =
  "名字: $name.\n".
  "类别: $category.\n".
  "其他问题: $other.\n".
  "描述: $describe.\n".
  "邮件: $visitor_email.\n".
  "语言: $lang.\n".
  "页: $page.\n".
  "查询编码: #repSaro-080-$ID";

  $to = "majointa@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);

  $to = "$visitor_email";
  $headers = "From: $email_from \r\n";
  $headers .= "谢谢 $name!\n感谢你的帮助!\n这个问题我们会尽快解决!\n这个邮件是自动生成的，我们经看了你的邮件。\n请不要回复这个邮件。\r\n";
  if (mail($to,$email_subjectVisitor,$email_body,$headers)){
    echo '<!DOCTYPE html>
    <html lang="zh">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">';
  echo"  <meta http-equiv=\"refresh\" content=\"5;url=".$_SERVER['HTTP_REFERER']."\"/>";
   echo' <title>Sending report</title>
        <link rel="stylesheet" href="./assets/style/css/report.css">
          <link
        href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900|Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">
    </head>
    <body>
    <section>
    <h1 class="header-brand">SARO</h1>
    <p id="state">报告发送中..</p>
    <div class="container">
        <div class="yellow"></div>
        <div class="red"></div>
        <div class="blue"></div>
        <div class="violet"></div>
    </div>
    </div>
    </section>
          <script>
                     window.setTimeout(state, 2500);
         function state() {
             var stateSent = document.getElementById("state");
             stateSent.innerHTML = `您的报告已发送 <br>
             感谢你的帮助 <br>
             几秒钟后将会返回上一页`;
  }
  </script>
    </body>
    </html>';
  }
  }
  function vietnameseReport(){

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $category = $_POST['category'];
    $other = $_POST ['other'];
    $describe = $_POST['describe'];
    $page = $_POST['page'];
    $lang = $_POST['lang'];

    if($visitor_email === ""){
      $visitor_email = "Anonymous";
    }

    $ID = rand(); "\n.";

    $email_from = 'admin@saro.website';
    $email_subject = "Báo cáo từ $name ID: #repSaro-080-$ID";
    $email_subjectVisitor = "$name Xin chào! SARO đây! Chúng tôi đã nhận được báo cáo của bạn";

    $email_body =
    "Tên: $name.\n".
    "Loại: $category.\n".
    "Khác: $other.\n".
    "Mô tả: $describe.\n".
    "E-mail: $visitor_email.\n".
    "Ngôn ngữ: $lang.\n".
    "Trang: $page.\n".
    "ID báo cáo: #repSaro-080-$ID";

    $to = "majointa@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

    $to = "$visitor_email";
    $headers = "From: $email_from \r\n";
    $headers .= "Xin chào $name!\n cảm ơn bạn đã giúp chúng tôi cải thiện SARO!\nVấn đề này sẽ được khắc phục sớm nhất có thể!\nEmail này là thư tự động để xác nhận chúng tôi đã nhận được thư của bạn.\nVui lòng không trả lời email này \r\n";
    if (mail($to,$email_subjectVisitor,$email_body,$headers)){
      echo '<!DOCTYPE html>
      <html lang="vi">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo"  <meta http-equiv=\"refresh\" content=\"5;url=".$_SERVER['HTTP_REFERER']."\"/>";
     echo' <title>Đang gửi báo cáo...</title>
          <link rel="stylesheet" href="./assets/style/css/report.css">
            <link
          href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900|Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet">
      </head>
      <body>
      <section>
      <h1 class="header-brand">SARO</h1>
      <p id="state">Đang gửi báo cáo...</p>
      <div class="container">
          <div class="yellow"></div>
          <div class="red"></div>
          <div class="blue"></div>
          <div class="violet"></div>
      </div>
      </div>
      </section>
            <script>
          window.setTimeout(state, 2500);
           function state() {
               var stateSent = document.getElementById("state");
               stateSent.innerHTML = `Báo cáo của bạn đã được gửi. <br>
               Cảm ơn bạn đã giúp chúng tôi cải thiện SARO <br>
                Bạn sẽ trở lại trang trước đó trong vài giây`;
              }
    </script>
      </body>
      </html>';
    }
    }

$langauge = $_POST['language'];

if($langauge === 'en'){
  englishReport();
}elseif ($langauge === 'ja'){
  japaneseReport();
}elseif ($langauge === 'zh'){
  chineseReport();
}elseif ($langauge === "vi"){
  vietnameseReport();
}

?>


<!-- Made by Robert Michalski -->