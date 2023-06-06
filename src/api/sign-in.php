<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: X-Requested-With");
error_reporting(0);

require('./connectionDB.php');

$json = file_get_contents('php://input');
$data = json_decode($json, true);
$response = array();

$email = $data["email"];
$psw = $data["psw"];

$stmt = $conn->prepare("CALL get_user_by_credentials(?, ?)");
$stmt->bind_param('ss', $email, $psw);

if ($stmt->execute()) {
    $result = $stmt->get_result()->fetch_assoc();
    $response = array(
        'data' => $result,
        'status' => 200,
    );
} else {
    $response = array(
        'data' => $conn->error,
        'status' => 404,
    );
}

header('Content-Type: application/json');
echo json_encode($response);

$stmt->close();
$conn->close();
exit();
?>