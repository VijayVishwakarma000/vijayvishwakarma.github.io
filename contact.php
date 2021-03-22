<?php
    $name = $_REQUEST['firstname'];
    $email = $_REQUEST['Email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];



    if(empty($name) || empty($email) || empty($subject) || empty($message)){
        echo "Fill all the fields";
    }
    else{
        mail("p.vishwa1976@gmail.com",$subject,$message,"From :$name<$email>");
        echo "<script type='text/javascript'> 
        alert('succesful')
            window.history.log(-1);
        </script>";
    }
?>