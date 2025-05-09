<?php
$ip = isset($_GET['data']) ? $_GET['data'] : '';
$clientIp = $_SERVER['REMOTE_ADDR'];
$secretKey = '123';
$secret = isset($_GET['secret']) ? $_GET['secret'] : '';
if ($secret !== $secretKey) {
    http_response_code(403); 
    exit;
}
$filename = 'cards.txt';
$ips = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
if ($secret === $secretKey) {
if (in_array($ip, $ips)) {
    http_response_code(200);
    echo 'success';
} else {
    file_put_contents($filename, $ip . PHP_EOL, FILE_APPEND);
    http_response_code(200); 
    echo 'success';
}
}
?>
