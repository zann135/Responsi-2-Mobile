<?php
require 'koneksi.php';

$data = [];
$id_karyawan = $_GET['id_karyawan'];
$query = mysqli_query($koneksi, "select * from karyawan where id_karyawan ='$id_karyawan'");

$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
    $row = mysqli_fetch_object($query);
    $data = $row;
}
echo json_encode($data);
echo mysqli_error($koneksi);
