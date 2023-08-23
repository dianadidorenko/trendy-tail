<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['orderName'];
$surname = $_POST['orderSurname'];
$telephone = $_POST['orderTel'];
$deliveryType = $_POST['delivery'];
$city = $_POST['chooseCity'];


// токен нашего бота из botFather
$token = "6243609387:AAFNe3dh6zzyqUhggZl9_GJh0AwUkzqCEto"; // змінюємо
// $chat_id = "https://api.telegram.org/bot6243609387:AAFNe3dh6zzyqUhggZl9_GJh0AwUkzqCEto/getUpdates";  // змінюємо тільки цифри після слову bot
$chat_id = "-874906697"; // змінюємо
$arr = array(
  'Імя клієнта: ' => $name,
  'Прізвище: ' => $surname,
  'Телефон ' => $telephone,
  'Спосіб доставки ' => $deliveryType,
  'Місто доставки ' => $city
);

// forEach не змінюємо
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you-order.html');
} else {
  echo "Error";
}
?>
