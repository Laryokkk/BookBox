<?php
error_reporting(0);

require('./connectionDB.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$response = null; 

try {
    $stmt = $pdo->query("SELECT * FROM item_view");
    $responseDB= $stmt->fetchAll();

    if ($responseDB) {
        $response = array(
            'data' => json_encode($responseDB),
            'status' => 201,
        );
    } else {
        $response = array(
            'data' => null,
            'status' => 417,
        );
    }
    
} catch (PDOException $e) {
    $response = array(
        'data' => $e,
        'status' => 418,
    );
}

echo json_encode($response);
?>