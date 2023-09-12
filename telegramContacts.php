<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['clientName'];
$city = $_POST['city'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$text = $_POST['text'];
$html = 'Прийшов запит з contacts.html';


// токен нашего бота из botFather
$token = "6243609387:AAFNe3dh6zzyqUhggZl9_GJh0AwUkzqCEto"; // змінюємо
// $chat_id = "https://api.telegram.org/bot6243609387:AAFNe3dh6zzyqUhggZl9_GJh0AwUkzqCEto/getUpdates";  // змінюємо тільки цифри після слову bot
$chat_id = "-874906697"; // змінюємо
$arr = array(
  "Запит" => $html,
  "Ім'я пользователя: " => $name,
  'Місто: ' => $city,
  'Телефон: ' => $telephone,
  'Email: ' => $email,
  'Текст повідомлення: ' => $text,
);

// forEach не змінюємо
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you-request.html');
} else {
  echo "Error";
}
?>
