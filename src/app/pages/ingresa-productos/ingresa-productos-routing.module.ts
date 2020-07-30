import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresaProductosPage } from './ingresa-productos.page';

const routes: Routes = [
  {
    path: '',
    component: IngresaProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresaProductosPageRoutingModule {}
