import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarProblemasPage } from './reportar-problemas.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarProblemasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarProblemasPageRoutingModule {}
