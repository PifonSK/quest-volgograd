<?php
require 'PHPMailer/PHPMailerAutoload.php';
// Сообщение
$message = '';
$message = $message."ТИП КАНАЛИЗАЦИИ: <br>".$_POST['qw1'];
$message = $message."<br>КОЛИЧЕСТВО ЧЕЛОВЕК: <br>".$_POST['qw2'];
$message = $message."<br>ГОРОД, УЛИЦА, ДОМ: <br>".$_POST['qw3-input'];
$message = $message."<br>ТИП ПРОЖИВАНИЯ: <br>".$_POST['qw4'];
$message = $message."<br>ВЫБРАЛ БОНУС: <br>".$_POST['qw5'];
$message = $message."<br>ТЕЛЕФОН: <br>".$_POST['phone'];
if ($_POST['whatsapp']) {
    $message = $message . "<br>Получил прайс в whatsapp";
} else {
    $message = $message . "<br>".$_POST['qw7'];
}
if ($_POST['qw7-check']) {
    $message = $message."<br>ХОЧЕТ РАССЧИТАТЬ СТОИМОСТЬ САМОСТОЯТЕЛЬНО";
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
