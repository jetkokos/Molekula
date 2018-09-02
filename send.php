<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';
    
	// Переменные
	$name = $_POST['name'];
    $tel = $_POST['tel'];
    $e_mail = $_POST['e_mail'];
    $good_name = $_POST['good_name'];
    $good_quantity = $_POST['good_quantity'];
    $comment = $_POST['comment'];
	// Настройки
	$mail = new PHPMailer;
	try {
    //Server settings
    $mail->SMTPDebug = 1;
    $mail->CharSet = "utf-8";                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.ru';  					  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'arkonaallods';        // SMTP username
    $mail->Password = 'Irjkf491';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('arkonaallods@yandex.ru');		  //My e-mail
    $mail->addAddress('arkonaallods@yandex.ru');              // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Заявка с Молекулы';
    $mail->Body = "Имя: $name <br> Телефон: $tel <br> E-mail: $e_mail <br> Название товара: $good_name <br> Количество товара: $good_quantity <br> Комментарий: $comment";
    $mail->AltBody = "Имя: $name \r\n Телефон: $tel \r\n E-mail: $e_mail \r\n Название товара: $good_name \r\n Количество товара: $good_quantity \r\n Комментарий: $comment";
    

    $mail->send();
    echo 'Message has been sent';
    $answer = '1';
} catch (Exception $e) {
    $answer = '0';
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>	
