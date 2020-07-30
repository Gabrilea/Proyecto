import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Establecimiento1PageRoutingModule } from './establecimiento1-routing.module';

import { Establecimiento1Page } from './establecimiento1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Establecimiento1PageRoutingModule
  ],
  declarations: [Establecimiento1Page]
})
export class Establecimiento1PageModule {}
