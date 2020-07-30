import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPagosPage } from './perfil-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPagosPageRoutingModule {}
