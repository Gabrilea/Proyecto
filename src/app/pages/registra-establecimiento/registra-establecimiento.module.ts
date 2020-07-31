import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistraEstablecimientoPageRoutingModule } from './registra-establecimiento-routing.module';

import { RegistraEstablecimientoPage } from './registra-establecimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistraEstablecimientoPageRoutingModule
  ],
  declarations: [RegistraEstablecimientoPage]
})
export class RegistraEstablecimientoPageModule {}
