import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPagosPageRoutingModule } from './perfil-pagos-routing.module';

import { PerfilPagosPage } from './perfil-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPagosPageRoutingModule
  ],
  declarations: [PerfilPagosPage]
})
export class PerfilPagosPageModule {}
