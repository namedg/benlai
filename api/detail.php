<?php

$cont_id = $_GET["cont_id"];

include "./mysql.php";

$sql = "SELECT * FROM t_intro WHERE cont_id = {$cont_id}";

$result = $mysqli->query($sql);

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo (json_encode($data));
