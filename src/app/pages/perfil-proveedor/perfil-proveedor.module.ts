import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilProveedorPageRoutingModule } from './perfil-proveedor-routing.module';

import { PerfilProveedorPage } from './perfil-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilProveedorPageRoutingModule
  ],
  declarations: [PerfilProveedorPage]
})
export class PerfilProveedorPageModule {}
