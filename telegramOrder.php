<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['orderName'];
$surname = $_POST['orderSurname'];
$telephone = $_POST['orderTel'];
$deliveryType = $_POST['deliveryType']; // cпосіб доставки і місто
$orderGoodsTitle = $_POST['orderGoodsTitle'];
$orderSize = $_POST['orderSize'];
$orderQuantity = $_POST['orderQuantity'];


// токен нашего бота из botFather
$token = "6243609387:AAFNe3dh6zzyqUhggZl9_GJh0AwUkzqCEto"; // змінюємо
// $chat_id = "https://api.telegram.org/bot6243609387:AAFNe3dh6zzyqUhggZl9_GJh0AwUkzqCEto/getUpdates";  // змінюємо тільки цифри після слову bot
$chat_id = "-874906697"; // змінюємо
$arr = array(
  'Імя клієнта: ' => $name,
  'Прізвище: ' => $surname,
  'Телефон ' => $telephone,
  'Інфо о доставці ' => $deliveryType,
  'Назва товару ' => $orderGoodsTitle,
  'Розмір ' => $orderSize,
  'Кількість ' => $orderQuantity
);

// forEach не змінюємо
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
