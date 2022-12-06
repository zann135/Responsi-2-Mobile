import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from "../api.service";
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-karyawan',
  templateUrl: './karyawan.page.html',
  styleUrls: ['./karyawan.page.scss'],
})
export class KaryawanPage implements OnInit {
  id_karyawan : any;
  nama : any;
  alamat : any;
  karyawan : any[] = [];

  constructor(
    public _apiService : ApiService,
    private alertContoller : AlertController,
    public loadingController : LoadingController,
    private authService : AuthenticationService,
    private router : Router
  ) { 
    this.getKaryawan();
  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter(){
    console.log('jika sudah selesai loading');
    this.getKaryawan();
  }

  getKaryawan(){
    this._apiService.getKaryawan().subscribe((res:any)=>{
      console.log("sukses ambil data karyawan", res);
      this.karyawan = res;
    }, (error:any)=>{
      console.log("gagal ambil data karyawan", error);
      this.alertContoller.create({
        header:'Notifikasi',
        message: 'Gagal mengambil data karyawan',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      })
    })
  }

  deleteKaryawan(id_karyawan:any){
    this.alertContoller.create({
      header:'Perhatian!',
      message: 'Apakah Anda yakin akan menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data:any) => {
            console.log("Penghapusan Data Dibatalkan", data);
          }
        },
        {
          text: 'Yakin',
          handler: (data:any) => {
            // jika tekan yakin
            this._apiService.deleteKaryawan(id_karyawan).subscribe((res:any)=>{
              console.log("Data Berhasil Dihapus", res);
              this.getKaryawan();
            }, (error:any)=>{
              console.log("error", error);
              this.alertContoller.create({
                header:'Notifikasi',
                message: 'Gagal Menghapus Data Karyawan Yang Dipilih',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res=>{
      res.present();
    })
  }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }

}
