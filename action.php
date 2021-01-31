<?php
require 'PHPMailer/PHPMailerAutoload.php';
// Сообщение
$message = '';
if ($_POST['name']) {
    $message = $message."ИМЯ: ".$_POST['name']."<br><br>";
}
$message = $message."ТЕЛЕФОН<br>".$_POST['phone'];
if ($_POST['whatsapp']) {
    $message = $message . "<br>Получил прайс в whatsapp";
}
if ($_POST['form-name']) {
    $message = $message . "<br><br>".$_POST['form-name']."";
}
$message = wordwrap($message, 70, "<br>");
echo $message;
$title = 'Новая заявка от '.$_POST['phone'];

$mail = new PHPMailer;
$mail->isSMTP();                              // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                       // Enable SMTP authentication
$mail->Username = 'reservesmtp@caaat.pro';                // SMTP username
$mail->Password = 'HU3Vf2GgonQ7Du9si';             // SMTP password
$mail->SMTPSecure = 'ssl';                    // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;

$mail->CharSet = "utf-8";

$mail->setFrom('reservesmtp@caaat.pro', 'septik.specstroyservice-tomsk.ru');
$mail->isHTML(true);

$mail->addAddress('quizseptiktomsk@gmail.com', 'My Friend');

$mail->Subject = $title;
$mail->Body = $message;

if (!$mail->send()) {
    echo 'Ошибка при отправке. Ошибка: ' . $mail->ErrorInfo;
} else {
    echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в
      ближайшее время<Br> $back";
}
?>
