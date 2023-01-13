
<?php
include('cors.php');
// header("Access-Control-Allow-Headers: Content-Type")
$servername = "remotemysql.com:3306";
$username = "BJ5XzrHA1b";
$password = "cVY0CVzlaV";
$dbname = "BJ5XzrHA1b";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else{
    $task = $_POST['firstName'];
    $sql = "INSERT INTO `menulist` (`menulistID`,`menutypeID`,`name`, `amount`,`description`,`status`) VALUES ('10','10','$task', '22'.'ไก่น้ำปลา','1');";
    if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}

?>