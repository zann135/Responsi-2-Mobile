<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];
$id_karyawan = trim($data['id_karyawan']);
$nama = trim($data['nama']);
$alamat = trim($data['alamat']);

//jika nama matakuliah dan keterangan tidak kosong
if ($id_karyawan != '' and $nama != '' and $alamat != '') {
    $query = mysqli_query($koneksi, "update karyawan set 
nama='$nama',alamat='$alamat' where id_karyawan='$id_karyawan'");
    $pesan['status'] = 'berhasil';
} else {
    $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
