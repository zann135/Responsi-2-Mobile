import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren:() => import('./karyawan/karyawan.module').then( m => m.KaryawanPageModule),
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'karyawan',
    loadChildren: () => import('./karyawan/karyawan.module').then( m => m.KaryawanPageModule)
  },
  {
    path: 'karyawan-tambah',
    loadChildren: () => import('./karyawan-tambah/karyawan-tambah.module').then( m => m.KaryawanTambahPageModule)
  },
  {
    path: 'karyawan-edit/:id_karyawan',
    loadChildren: () => import('./karyawan-edit/karyawan-edit.module').then( m => m.KaryawanEditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
