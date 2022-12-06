import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }

  // link API
  apiURL(){
    return 'http://localhost:8080/apiKaryawan';
  }

  getKaryawan(){
    return this.http.get(this.apiURL()+'/tampil.php');
  }

  deleteKaryawan(id_karyawan:any){
    return this.http.delete(this.apiURL()+'/hapus.php?id_karyawan='+id_karyawan);
  }

  ambilKaryawan(id_karyawan:any){
    return this.http.get(this.apiURL()+'/lihat.php?id_karyawan='+id_karyawan);
  }

}
