<?php 
require_once "core/init.php";

if(isset($_POST['login'])){
	$_SESSION['user'] = $_POST['username'];
	$_SESSION['pass'] = $_POST['password'];
	$sql = "SELECT username, password from username WHERE user = '$user'";

	if(kedb($sql)){
		header('Location: home.php');
	}else{
		die("Error");
	}
}
?>