<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['username'];
$surname = $_POST['surname'];
$telephone = $_POST['tel'];
$email = $_POST['email'];
$oblast = $_POST['areaDescription'];
$city = $_POST['cityDescription'];
$warehouse = $_POST['warehouseDescription'];
$inputOrder = $_POST['inputOfOrderName'];
$totalQun = $_POST['quantityInput'];
$sumInput = $_POST['sumInput'];
$phoneBack = $_POST['callBackInput'];
$html = 'Прийшов запит з order.html';

// токен нашего бота из botFather
$token = "6243609387:AAFNe3dh6zzyqUhggZl9_GJh0AwUkzqCEto"; // змінюємо
// $chat_id = "https://api.telegram.org/bot6243609387:AAFNe3dh6zzyqUhggZl9_GJh0AwUkzqCEto/getUpdates";  // змінюємо тільки цифри після слову bot
$chat_id = "-874906697"; // змінюємо
$arr = array(
  "Запит" => $html,
  'Імя клієнта: ' => $name,
  'Прізвище: ' => $surname,
  'Телефон: ' => $telephone,
  'E-mail: ' => $email,
  'Область: ' => $oblast,
  'Місто: ' => $city,
  'Відділення: ' => $warehouse,
  'Cписок: ' => $inputOrder,
  'Кількість: ' => $totalQun,
  'Загальна ціна: ' => $sumInput, 
  "Обратний зв'язок " => $phoneBack,
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
