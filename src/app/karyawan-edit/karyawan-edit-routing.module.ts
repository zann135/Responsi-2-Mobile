import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaryawanEditPage } from './karyawan-edit.page';

const routes: Routes = [
  {
    path: '',
    component: KaryawanEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaryawanEditPageRoutingModule {}
