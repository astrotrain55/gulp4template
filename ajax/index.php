<?php

$_REQUEST["test"] = "Тест";

echo json_encode([
    '$_REQUEST' => $_REQUEST,
    '$_POST' => $_POST,
    '$_GET' => $_GET,
]);
