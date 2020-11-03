<?php
// CORS
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers:x-requested-with,Content-Type,X-CSRF-Token');
$mysqli = new Mysqli("localhost", "root", "root", "db_benlai");
if ($mysqli->connect_errno) {
    die();
}