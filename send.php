<?php
/*
$name = $_POST['name'];
$tel = $_POST['tel'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = trim($name);
$tel = trim($tel);

echo $name;
echo $tel;

if (mail("afeniks@bk.ru", "Запрос с сайта Молекула", "Имя:".$name.". Телефон: ".$tel ,"From: info@fornex.ru \r\n"))
 { 
    echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки"; 
}
*/
if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
$otvet_serv = json_encode(
array( 
'text' => 'Возникла ошибка при отправке данных'
));
die($otvet_serv);
};

if(!isset($_POST["user_name"]) || !isset($_POST["user_tel"]))
{
$otvet_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
die($otvet_serv);
}
$user_Name = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
$user_Phone = filter_var($_POST["user_tel"], FILTER_SANITIZE_STRING);

if(strlen($user_Name)<3)
{
$otvet_serv = json_encode(array('text' => 'Поле Имя слишком короткое или пустое'));
die($otvet_serv);
}
if(!is_numeric($user_Phone))
{
$otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр'));
die($otvet_serv);
}

$to_Email = "afeniks@bk.ru"; 
$subject = 'Запрос обратного звонка '.$_POST["user_name"]; 
$message = "Имя: ".$user_Name.". Телефон: ".$user_Phone;
if(!mail($to_Email, $subject, $message, "From: test@a40961.hostru03.fornex.org \r\n"))
{
$otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
die($otvet_serv);
}else{
$otvet_serv = json_encode(array('text' => 'Спасибо! '.$user_Name .', ваше сообщение отправлено.'));
die($otvet_serv);
}

?>