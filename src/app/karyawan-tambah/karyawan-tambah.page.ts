import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-karyawan-tambah',
  templateUrl: './karyawan-tambah.page.html',
  styleUrls: ['./karyawan-tambah.page.scss'],
})
export class KaryawanTambahPage implements OnInit {
  id_karyawan : any;
  nama : any;
  alamat : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  addKaryawan(){
    let url = this._apiService.apiURL()+'/tambah.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id_karyawan: this.id_karyawan,
        nama: this.nama,
        alamat: this.alamat
      }
    }).then((data) => {
      this.id_karyawan = '';
      this.nama = '';
      this.alamat = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Data Berhasil Ditambahkan',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/karyawan');
    }, (error)=>{
      console.log(error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Data Gagal Ditambahkan',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      });
    })
  }

}
