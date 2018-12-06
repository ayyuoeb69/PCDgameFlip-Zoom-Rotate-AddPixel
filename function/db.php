<?php  
$host = '127.0.0.1';
	$user = 'root';
	$pass = 'root';
	$db = 'rs';
	$link = new mysqli($host, $user, $pass, $db);

	if($link->connect_error){
		die("error");
	}

?>