<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');

require('./connectionDB.php');

$connMySQL = new ConnectionMySQL();
$conn = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json, true);
$response = array(
    'message' => 'Failed to create user account',
    'status' => 405,
);

$name = $data["name"];
$lastname = $data["lastname"];
$login = $data["login"];
$password = $data["password"];
$codice = $data["codice"];

$stmt = $conn->prepare("INSERT INTO user_account(`login`, `password`, `name`, `lastname`, `codice_fiscale`) VALUES (:login, :password, :name, :lastname, :codice)");
$stmt->bindParam(':login', $login);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':lastname', $lastname);
$stmt->bindParam(':codice', $codice);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    $response = array(
        'message' => 'User account created successfully',
        'status' => 200,
    );
} else {
    $response = array(
        'message' => 'Failed to create user account',
        'status' => 404,
    );
}

echo json_encode($response);

$stmt->closeCursor();
$conn = null;
exit();
?>
