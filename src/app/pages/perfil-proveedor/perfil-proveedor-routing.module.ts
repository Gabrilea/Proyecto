import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilProveedorPage } from './perfil-proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilProveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilProveedorPageRoutingModule {}
