import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistraEstablecimientoPage } from './registra-establecimiento.page';

const routes: Routes = [
  {
    path: '',
    component: RegistraEstablecimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistraEstablecimientoPageRoutingModule {}
