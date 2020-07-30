import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-perfil-password',
  templateUrl: './perfil-password.page.html',
  styleUrls: ['./perfil-password.page.scss'],
})
export class PerfilPasswordPage implements OnInit {

  showPassword= false;
  passwordToggleIcon="eye";

  mostarValidacion=false;
  validacionToggleIcon="eye";

  contra:string;
  validacon:string;

  constructor(private alertCtrl:AlertController) { }

  togglePassword():void{
    this.showPassword=!this.showPassword;
  
    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon= 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }
  toggleValidacion():void{
    this.mostarValidacion=!this.mostarValidacion;
  
    if(this.validacionToggleIcon=='eye'){
      this.validacionToggleIcon='eye-off';
    }
    else{
      this.validacionToggleIcon='eye';
    }
  }
  
    ngOnInit() {
    }
  
    async presentAlert() {
      const alert = this.alertCtrl.create({
      header: 'Guardado',
      subHeader: 'Su nueva contraseña se ha guardado con exito.',
      buttons: ['Ok']
     }).then(alert=> alert.present());
     console.log(this.contra, this.validacon);
     
  }

}
