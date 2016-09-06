<?php
    // Basic Response DTO
    class Response
    {
        var $status_code, $message, $data;
        public function __construct(){
            $this -> status_code = 500;
            $this -> message = "Internal Server Error";
            $this -> data = null;
        }
    }
    //Functions
    function remove_email_injection($field = FALSE) {
        return (str_ireplace(array("\r", "\n", "%0a", "%0d", "Content-Type:", "bcc:","to:","cc:"), '', $field));
    }
    function validate_email($email = FALSE) {
        return (preg_match('/^[^@\s]+@([-a-z0-9]+\.)+[a-z]{2,}$/i', $email))? TRUE : FALSE;
    }
    $res = new Response();
    $email_to = 'max4carter@gmail.com';
    $email_subject = 'Portfolio Website Email';
    $valid_request = TRUE;
    //Set Required Fields
    $required_fields = array('name','email','message');
    if(!empty($_POST)) {
        // Remove Email Injection on each field
        foreach($_POST as $key => $value) {
            $_POST[$key] = addslashes(remove_email_injection(trim($value)));
        }
        foreach($required_fields as $field) {
            //Make sure fields are not empty
            if($_POST[$field] == ''){
                $valid_request = FALSE;
                $res -> status_code = 400;
                $res -> message = $field . " cannot be empty!";
                $res -> data = [];
            }
            // Validate Email
            if($field == 'email') {
                if(!validate_email($_POST[$field])) {
                    $valid_request = FALSE;
                    $res -> status_code = 400;
                    $res -> message = "You entered an Invalid Email!";
                    $res -> data = [];
                }
            }
        }
        if($valid_request) {
            try {
                // Prepare content string
                $email_content = 'New Website Message: ' . "\n\n";
                // simple email content
                foreach($_POST as $key => $value) {
                    if($key != 'submit'){
                        $email_content .= $key . ': ' . $value . "\n";
                    }
                }
                // Send email
                mail($email_to, $email_subject, $email_content);
                $res -> status_code = 200;
                $res -> message = "Thank You! Your message has been sent successfully";
                $res -> data = $email_content;
            } catch (Exception $e) {
                $res -> status_code = 500;
                $res -> message = "Sorry, there was a problem while processing your request.";
                $res -> data = [];
            }
        }
    } else {
        $res -> status_code = 400;
        $res -> message = "Please fill out the form before clicking send.";
        $res -> data = [];
    }
    http_response_code($res -> status_code);
    echo json_encode($res);
?>
