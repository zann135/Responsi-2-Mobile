<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];
$id_karyawan = $_GET['id_karyawan'];
$query = mysqli_query($koneksi, "delete from karyawan where id_karyawan='$id_karyawan'");

if ($query) {
    http_response_code(201);
    $pesan['status'] = 'berhasil';
} else {
    http_response_code(422);
    $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
