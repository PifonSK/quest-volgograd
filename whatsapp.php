<?php
$phone = $_POST["phone"][1].$_POST["phone"][4].$_POST["phone"][5].$_POST["phone"][6].$_POST["phone"][9].$_POST["phone"][10].$_POST["phone"][11].$_POST["phone"][13].$_POST["phone"][14].$_POST["phone"][16].$_POST["phone"][17];

$myCurl = curl_init();
curl_setopt_array($myCurl, array(
    CURLOPT_URL => 'https://bot-kit.com/ajax/start/?token=1PCHBmVKE8qF976cb40629dd92fe370b06fa775de7e6c&p='.$phone,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query(array(/*здесь массив параметров запроса*/))
));
$response = curl_exec($myCurl);
curl_close($myCurl);
?>
