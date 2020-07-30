import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-olvide-password',
  templateUrl: './olvide-password.page.html',
  styleUrls: ['./olvide-password.page.scss'],
})
export class OlvidePasswordPage implements OnInit {

  contra:string;

  constructor(private alertCtrl: AlertController) { }

  async presentAlert(){
    const alert = this.alertCtrl.create({
      header: 'Enviado',
      subHeader: 'Se ha enviado el enlace a su correo.',
      buttons: [{
        text: 'Ok',
        handler: ()=>{
        location.href="/ingresar"
        }
      }]
     }).then(alert=> alert.present());

     console.log(this.contra);
  }

  ngOnInit() {
  }

}
