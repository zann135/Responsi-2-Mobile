<?php
// header untuk menangani cors policy
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, HEAD, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json, charset=utf-8');

// membuat koneksi ke database
$koneksi = mysqli_connect('localhost', 'root', '', 'responsi2') or die('koneksi gagal');
