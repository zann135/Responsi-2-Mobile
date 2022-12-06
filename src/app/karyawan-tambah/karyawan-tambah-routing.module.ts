import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaryawanTambahPage } from './karyawan-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: KaryawanTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaryawanTambahPageRoutingModule {}
