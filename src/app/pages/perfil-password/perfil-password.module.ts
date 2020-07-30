import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPasswordPageRoutingModule } from './perfil-password-routing.module';

import { PerfilPasswordPage } from './perfil-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPasswordPageRoutingModule
  ],
  declarations: [PerfilPasswordPage]
})
export class PerfilPasswordPageModule {}
