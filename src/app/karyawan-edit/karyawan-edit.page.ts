import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-karyawan-edit',
  templateUrl: './karyawan-edit.page.html',
  styleUrls: ['./karyawan-edit.page.scss'],
})
export class KaryawanEditPage implements OnInit {
  id_karyawan: any;
  nama: any;
  alamat: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id_karyawan = param.id_karyawan;
      console.log(this.id_karyawan);
    })
   }

  ngOnInit() {
  }

  ambilKaryawan(id_karyawan:any){
    this._apiService.ambilKaryawan(id_karyawan).subscribe((res:any)=>{
      console.log("Berhasil Mengambil Data Yang Dipilih", res);
      let karyawan = res;
      this.nama = karyawan.nama;
      this.alamat = karyawan.alamat;
    }, (error:any)=>{
      console.log("Gagal Mengambil Data Yang Dipilih", error);
      alert("Gagal Mengambil Data Yang Dipilih");
    }) 
  }

  editKaryawan(){
    let url = this._apiService.apiURL()+'/edit.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: {"Content-Type": "application/json"},
      data: {
        id_karyawan: this.id_karyawan,
        nama: this.nama,
        alamat: this.alamat
      },
    }).then((data)=>{
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Data Berhasil Diubah',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/karyawan');
    }, (error)=>{
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Data Gagal Diubah',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      });
    })
  }

}
