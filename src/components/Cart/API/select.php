
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

$userData = mysqli_query($conn,"SELECT * FROM `menulistoption`");
$response = array();

while($row = mysqli_fetch_assoc($userData)){

   $response[] = $row;
}

echo json_encode($response);

$conn->close();
?>