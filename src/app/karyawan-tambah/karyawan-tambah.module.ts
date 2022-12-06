import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaryawanTambahPageRoutingModule } from './karyawan-tambah-routing.module';

import { KaryawanTambahPage } from './karyawan-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaryawanTambahPageRoutingModule
  ],
  declarations: [KaryawanTambahPage]
})
export class KaryawanTambahPageModule {}
