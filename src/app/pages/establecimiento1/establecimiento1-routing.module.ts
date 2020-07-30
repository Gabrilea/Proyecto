import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Establecimiento1Page } from './establecimiento1.page';

const routes: Routes = [
  {
    path: '',
    component: Establecimiento1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Establecimiento1PageRoutingModule {}
