import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarProblemasPageRoutingModule } from './reportar-problemas-routing.module';

import { ReportarProblemasPage } from './reportar-problemas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarProblemasPageRoutingModule
  ],
  declarations: [ReportarProblemasPage]
})
export class ReportarProblemasPageModule {}
