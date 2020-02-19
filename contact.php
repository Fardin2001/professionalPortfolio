<?php
if(isset($_POST['submit'])) {

$myemail = "service@fardin.dx.am";
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers = "From:Contact Form <$myemail>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
    if (empty($_POST['name'])| empty($_POST['email'])|empty($_POST['message'])){
    	echo "<h1>Failed to send\n\nPlease go back and fill the form properly!</h1>";
    }else{
        	echo "<h1>Your message has been sent successfully!</h1>";
            mail($myemail, $name, $message, $headers);
        }
        


} else {

echo "<h1>An error occurred during the submission of your message</h1>";

}
?>