<?php
if(isset($_POST['email'])) 
{

    // Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
    $email_to = "contact@danisanzdev.com";
    $email_subject = "Contacto desde web";

    // Aquí se deberían validar los datos ingresados por el usuario
    if(!isset($_POST['name']) ||
    !isset($_POST['email']) ||
    !isset($_POST['message'])) 
    {
        $sent = false;
        die();
    }

    $email_message = "Detalles del formulario de contacto:\n\n";
    $email_message .= "Nombre: " . $_POST['name'] . "\n";
    $email_message .= "E-mail: " . $_POST['email'] . "\n";
    $email_message .= "Mensaje: " . $_POST['message'] . "\n\n";

    // Ahora se envía el e-mail usando la función mail() de PHP
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);

    $sent = true;
} ?>
<script>
    const sent = <?php $sent ?>

    if(sent){
        window.location.replace("https://danisanzdev.com/#contact");
    }
</script>