
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


$id= $_POST['ID'];
// $sql = "UPDATE `orders` SET `imgpay`= '$imgpay' , `upload` = '1' WHERE '$OrderID'";
$sql = "DELETE FROM `orders` WHERE `ordersID`= $id";

if ($conn->query($sql) === TRUE) {
    echo "Delete successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>