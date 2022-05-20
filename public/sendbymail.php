<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Content-Type: application/json; charset=UTF-8');

    function sendEmail() {
        $sent = false;

        if(isset($_POST['email'])) {

            $email_to = "contact@danisanzdev.com";
            $email_subject = "Contacto desde web";
            $email_from = $_POST['email'];

            // Validate
            if(empty($_POST['name']) ||
            empty($_POST['email']) ||
            empty($_POST['message'])) 
            {
                $sent = false;
                $message = 'Ha habido un error al enviar el mensaje';
            }
            else
            {
                $email_message = "Detalles del formulario de contacto:\n\n";
                $email_message .= "Nombre: " . $_POST['name'] . "\n";
                $email_message .= "E-mail: " . $_POST['email'] . "\n\n";
                $email_message .= "Mensaje: " . $_POST['message'] . "\n\n";
                
                // Ahora se envía el e-mail usando la función mail() de PHP
                $headers = 'From: '.$email_from."\r\n".
                'Reply-To: '.$email_from."\r\n" .
                'X-Mailer: PHP/' . phpversion();
                @mail($email_to, $email_subject, $email_message, $headers);
                
                $sent = true;
                $message = 'Mensaje enviado';
            }
            
        }

        return json_encode([
            'sent' => $sent,
            'message' => $message,
            'email' => $email_from
        ]);
    }

    echo sendEmail();
    die();
?> 